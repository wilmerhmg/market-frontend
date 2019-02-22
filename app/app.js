'use strict';

// Declare app level module which depends on views, and core components
angular.module('AppMarket', [
  'ngRoute',
  'AppMarket.view1',
  'AppMarket.view2',
  'AppMarket.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
