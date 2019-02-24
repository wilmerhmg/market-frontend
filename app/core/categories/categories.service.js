'use strict';

angular.module('AppMarket.Categories', []).service('Categories', ['$http', function ($http) {
   let Collection = [];
   let backendAPI = `http://${location.hostname}:14002/marketplace/api/v1/categories`;

   this.GetCategories = function () {
      return Collection;
   };

   this.SetCategories = function (res) {
      Collection = res.data;
      this.OnLoad();
   };

   this.GetInto = function (into) {
      $http.get(backendAPI).then(this.SetCategories.bind(this));
   };

   this.OnLoad  = () => null;

   this.GetInto(Collection);

   return this;
}]);