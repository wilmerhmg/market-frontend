'use strict';

describe('AppMarket.Search Service', function () {
   var SearchService;
   beforeEach(module('AppMarket.Search'));
   beforeEach(inject(function (Search) {
      SearchService = Search;
   }));

   it("should return 20 default limit", function() {
      expect(SearchService.GetLimit()).toEqual(20);
   });

   it("should return 0 default offset", function() {
      expect(SearchService.GetOffset()).toEqual(0);
   });

});