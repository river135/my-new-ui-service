'use strict';

var print_r = function(o){
  var str='';

  for(var p in o){
    if(typeof o[p] == 'string'){
      str+= p + ': ' + o[p]+'; \n';
    }else{
      str+= p + ': { \n' + print(o[p]) + '}';
    }
  }

  return str;
};

String.prototype.format = function() {
  var arg = arguments;
  var i = 0;
  return this.replace(/%((%)|s)/g, function (m) { return m[2] || arg[i++] })
};


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
      redirectTo: '/view/404'
    });
}]);
