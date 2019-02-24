'use strict';

angular
.module('AppMarket.view2', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
   $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'AppMarketView2Ctrl'
   });
}])

.controller('AppMarketView2Ctrl', ['$scope', 'Search', '$http', function ($scope, Search, $http) {
   $scope.search = Search.GetSearch();
}]);