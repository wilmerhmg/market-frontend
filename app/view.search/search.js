'use strict';

angular.module('AppMarket.SearchView', [])
       .controller('SearchController', [
          'Search',
          'Categories',
          '$scope',
          '$timeout',
          function (Search, Categories, $scope, $timeout) {
             $scope.Categories = [];
             Categories.OnLoad = function () {
                $scope.Categories = Categories.GetCategories();
             };
          }
       ]);