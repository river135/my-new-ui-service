'use strict';


// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/notfound'
    });
}]);
