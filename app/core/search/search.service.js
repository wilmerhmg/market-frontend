'use strict';

angular.module('AppMarket.Search', []).service('Search', ['$http', '$location', function ($http, $location) {
   let search     = null;
   let category   = null;
   let price_min  = null;
   let price_max  = null;
   let limit      = 20;
   let offset     = 0;
   let backendAPI = `http://${location.hostname}:14002/marketplace/api/v1/articles/find`;

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

   this.SetLimit = (l) => {
      limit = l;
   };

   this.GetLimit = () => {
      return limit;
   };

   this.SetOffset = (o) => {
      offset = o;
   };

   this.GetOffset = () => {
      return offset;
   };

   this.SetPriceMin = (p) => {
      price_min = p;
   };

   this.GetPriceMin = () => {
      return price_min;
   };

   this.SetPriceMax = (p) => {
      price_max = p;
   };

   this.GetPriceMax = () => {
      return price_max;
   };

   this.Serialize = (obj) => {
      var query = [];
      for(var p in obj)
         if(obj.hasOwnProperty(p)) {
            query.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
         }
      return query.join("&");
   };

   /* *
    * Load from query String params
    * */
   this.LoadFromQuery = () => {
      let Q = $location.search();
      this.SetSearch(Q.search || '');
      this.SetCategory((Q.category || '').replace(/[a-z:]/g, ''));
      this.SetPriceMin(Q.price_min);
      this.SetPriceMax(Q.price_max);
      this.SetLimit(Q.limit || 20);
      this.SetOffset(Q.offset || 0);
   };

   this.FindArticles = (fn, ct) => {
      let Query = this.Serialize({
         category: this.GetCategory(),
         limit: this.GetLimit(),
         price_min: this.GetPriceMin(),
         price_max: this.GetPriceMax(),
         search: this.GetSearch(),
         offset: this.GetOffset()
      });

      $http.get(`${backendAPI}?${Query}`).then(fn).catch(ct);
   };

   this.LoadFromQuery();

   return this;
}]);