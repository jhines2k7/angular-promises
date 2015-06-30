'use strict';

/**
 * @ngdoc overview
 * @name angularPromisesApp
 * @description
 * # angularPromisesApp
 *
 * Main module of the application.
 */
angular
  .module('angularPromisesApp', [])

  .run(function(User, TravelService, WeatherService){
    /*
    TravelService
      .getDeparture(User.email)
      .then(function(departure){
        console.log(departure);
      });
    */
    var departureDate;

    var loadDeparture = function(user) {
      return TravelService
        .getDeparture(user.email)
        .then(function(departure){
          departureDate = departure.date;

          console.log(departure);

          return departure.flightID;
        });
    };

    var loadFlight = function(flightID) {
      return TravelService
        .getFlight(flightID)
        .then(function(flight){
          console.log(flight);
          return flight;
        });
    };

    var loadForecast = function() {
      return WeatherService
        .getForecast(departureDate)
        .then(function(weather){
          console.log(weather);
          return weather;
        });
    };

    loadDeparture(User)
      .then(loadFlight)
      .then(loadForecast);
  })

  .factory('User', function(){
    return {
      name: 'James Hines',
      email: 'jameshines10@gmail.com'
    };
  })

  .factory('TravelService', function($q, User){
    return {
      getDeparture: function(){
        var deferred = $q.defer();

        deferred.resolve({
          userID: User.email,
          flightID: 'US_343223',
          date: '06/29/2015 8:00AM'
        });

        return deferred.promise;
      },

      getFlight: function(flightID) {
        return $q.resolve({
          id: flightID,
          pilot: 'Captain Morgan',
          plane: {
            make: 'Boeing 747 RC',
            model: 'TA-889'
          },
          status: 'onTime'
        });
      }
    };
  })

  .factory('WeatherService', function($q) {
    return {
      getForecast: function(date) {
        return $q.resolve({
          date: date,
          forecast: 'rain'
        });
      }
    };
  });
