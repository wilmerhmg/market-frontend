'use strict';

angular.module('AppMarket.ShoppingCart', []).service('Cart', ['$http', function ($http) {
   let cart = {total: 0, articles: []};

   this.GetArticles = function () {
      return cart.articles;
   };

   this.AddArticle = (art) => {
      cart.articles.push(art);
      this.OnAdd();
      this.Save(cart);
   };

   this.OnAdd = () => null;

   this.Save = (c) => {
      console.log(`saving items`);
      localStorage.setItem('shopping-cart', JSON.stringify(c));
   };

   this.LoadFromStore = () => {
      cart = JSON.parse(localStorage.getItem('shopping-cart')) || cart;
      return this.GetArticles();
   };

   this.RemoveArticle = (item) => {
      let Index = cart.articles.map(i => i.id_post).indexOf(item.id_post);
      cart.articles.splice(Index, 1);
   };

   this.LoadFromStore();

   return this;
}]);