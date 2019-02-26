'use strict';

// Declare app level module which depends on views, and core components
angular.module('AppMarket', [
   'ngRoute',
   'AppMarket.Article',
   'AppMarket.Categories',
   'AppMarket.Search',
   'AppMarket.SearchView',
   'AppMarket.ResultsView',
   'AppMarket.ArticleView',
   'AppMarket.view2',
   'AppMarket.version',
   'AppMarket.MomentFilter'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
   /*$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });*/

   $routeProvider.otherwise({redirectTo: '/'});
}]);
