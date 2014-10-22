'use strict';

angular.module('ngDuoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'eee-c.angularBindPolymer'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
