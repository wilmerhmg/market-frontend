'use strict';

angular.module('AppMarket.view1', ['ngRoute'])

       .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
          $routeProvider.when('/', {
             templateUrl: 'view1/view1.html',
             controller: 'AppMarketView1Ctrl',
             reloadOnSearch: false
          });
       }])

       .controller('AppMarketView1Ctrl', ['Search', 'Categories', '$scope', function (Search, Categories, $scope) {
          $scope.Categories = Categories.GetCategories();
          Search.SetSearch('Computadores Cuanticos');
       }]);