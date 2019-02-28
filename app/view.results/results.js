'use strict';

angular.module('AppMarket.ResultsView', ['ngRoute'])
       .config(['$routeProvider', function ($routeProvider) {
          $routeProvider.when('/', {
             templateUrl: 'view.results/results.html',
             controller: 'ResultsController'
          });
       }])
       .controller('ResultsController', [
          'Search',
          'Cart',
          '$scope',
          '$location',
          ResultsController
       ]);

function ResultsController(Search, Cart, $scope, $location) {
   $scope.Articles  = [];
   $scope.search    = Search.GetSearch();
   $scope.price_min = Search.GetPriceMin();
   $scope.price_max = Search.GetPriceMax();

   $scope.SubmitPriceFilter = function SubmitPriceFilter(e) {
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

   $scope.InCar = function InCar(item){
      let CartArticles = Cart.GetArticles();
      return CartArticles.filter(i => i.id_post === item.id_post).length;
   };

   $scope.$watch('price_max', function PriceMaxMutation(newVal, oldVal) {
      Search.SetPriceMax(newVal);
   });

   $scope.$watch('price_min', function PriceMinMutation(newVal, oldVal) {
      Search.SetPriceMin(newVal);
   });

   $scope.FindArticles = function FindArticles(response) {
      $scope.Articles = response.data;
   };

   $scope.AddCart = Cart.AddArticle;

   Search.FindArticles($scope.FindArticles);
}