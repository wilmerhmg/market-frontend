'use strict';

// Declare app level module which depends on views, and core components
angular.module('AppMarket', [
   'ngRoute',
   'AppMarket.Categories',
   'AppMarket.Search',
   'AppMarket.SearchView',
   'AppMarket.view1',
   'AppMarket.view2',
   'AppMarket.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });

   $routeProvider.otherwise({redirectTo: '/'});
}]);
