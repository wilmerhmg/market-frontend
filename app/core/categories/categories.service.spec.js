'use strict';

describe('AppMarket.Categories Service', function () {
   var CategoriesService;
   beforeEach(module('AppMarket.Categories'));
   beforeEach(inject(function (Categories) {
      CategoriesService = Categories;
   }));

   it("should return empty Array", function() {
      expect(CategoriesService.GetCategories()).toEqual([]);
   });

});