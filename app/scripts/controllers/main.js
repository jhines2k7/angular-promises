'use strict';

/**
 * @ngdoc function
 * @name angularPromisesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPromisesApp
 */
angular.module('angularPromisesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
