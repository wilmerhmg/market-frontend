'use strict';

angular.module('AppMarket.Article', []).service('Article', ['$http', function ($http) {
   let Article = [];
   let backendAPI = `http://${location.hostname}:14002/marketplace/api/v1/articles/`;

   this.GetArticle = function () {
      return Article;
   };

   this.SetArticle = function (res) {
      Article = res.data;
      this.OnLoad();
   };

   this.GetInto = function (id) {
      $http.get(backendAPI+id).then(this.SetArticle.bind(this));
   };

   this.OnLoad  = () => null;

   return this;
}]);