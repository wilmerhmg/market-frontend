'use strict';

angular.module('AppMarket.SearchView', [])
       .controller('SearchController', [
          'Search',
          'Categories',
          '$scope',
          '$timeout',
          '$location',
          SearchController
       ]);

function SearchController(Search, Categories, $scope, $timeout, $location) {
   $scope.Categories = [];
   $scope.Query      = Search.GetSearch();
   $scope.Category   = Search.GetCategory();

   $scope.$watch('Category', function MutationCategory(newVal, oldVal) {
      Search.SetCategory(newVal);
   });

   $scope.$watch('Query', function MutationQuery(newVal, oldVal) {
      Search.SetSearch(newVal);
   });

   $scope.SubmitSearch = function SubmitSearch(e) {
      e.preventDefault();
      let Query = {
         category: Search.GetCategory(),
         limit: Search.GetLimit(),
         price_min: Search.GetPriceMin(),
         price_max: Search.GetPriceMax(),
         search: Search.GetSearch(),
         offset: Search.GetOffset()
      };
      $location.search(Query);
      $location.path('/');
   };

   Categories.OnLoad = function OnLoad() {
      $scope.Categories = Categories.GetCategories();
   };
}