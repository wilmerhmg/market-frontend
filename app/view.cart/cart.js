'use strict';

angular.module('AppMarket.CartView', ['ngRoute'])
       .config(['$routeProvider', function ($routeProvider) {
          $routeProvider.when('/cart', {
             templateUrl: 'view.cart/cart.html',
             controller: 'CartController'
          });
       }])
       .controller('CartController', [
          'Cart',
          '$scope',
          '$location',
          CartController
       ]);

function CartController(Cart, $scope, $location) {
   $scope.Articles  = Cart.LoadFromStore();
   $scope.Remove    = Cart.RemoveArticle;
   $scope.TotalCart = function () {
      let SubTotal = (i) => i.price * i.Quantity;
      let Sum      = (i, c) => i + c;

      return $scope.Articles.map(SubTotal).reduce(Sum, 0);
   };

}