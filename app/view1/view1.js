'use strict';

angular.module('AppMarket.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'AppMarketView1Ctrl'
  });
}])

.controller('AppMarketView1Ctrl', [function() {

}]);