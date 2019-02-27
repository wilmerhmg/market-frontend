'use strict';

angular.module('AppMarket.ArticleView', ['ngRoute'])
       .config(['$routeProvider', function ($routeProvider) {
          $routeProvider.when('/article/:id', {
             templateUrl: 'view.article/view.article.html',
             controller: 'ArticleController'
          });
       }])
       .controller('ArticleController', [
          '$scope',
          '$routeParams',
          'Article',
          'Cart',
          ArticleController
       ]);

function ArticleController($scope, $routeParams, Article, Cart) {
   $scope.Article = {};

   Article.GetInto($routeParams.id);

   Article.OnLoad = function OnLoad() {
      $scope.Article = Article.GetArticle();
   };

   $scope.Add = Cart.AddArticle;


}