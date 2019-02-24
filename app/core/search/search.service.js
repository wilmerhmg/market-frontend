'use strict';

angular.module('AppMarket.Search', []).service('Search', ['$http', function ($http) {
   let search    = null;
   let category  = null;
   let price_min = null;
   let price_max = null;
   let limit     = 20;
   let offset    = 0;

   this.SetSearch = (q) => {
      search = q;
   };

   this.GetSearch = () => {
      return search;
   };

   this.SetCategory = (c) => {
      category = c;
   };

   this.GetCategory = () => {
      return category;
   };

   this.GetLimit = () => {
      return limit;
   };

   this.GetOffset = () => {
      return offset;
   };


   return this;
}]);