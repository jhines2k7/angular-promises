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

  .run(function(SimpleService){
    SimpleService.saySomething();
  })

  .service('SimpleService', function(){
    this.saySomething = function(){
      console.log('Hello World!');
    }
  });
