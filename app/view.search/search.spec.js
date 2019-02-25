'use strict';

describe('AppMarket.view1 module', function () {
   beforeEach(function () {
      module('AppMarket.SearchView');
      module('AppMarket.Search');
      module('AppMarket.Categories');
   });

   describe('AppMarket controller', function () {
      it('should SearchController is defined', inject(function ($controller,_$rootScope_) {
         var view1Ctrl = $controller('SearchController', {$scope: _$rootScope_});
         expect(view1Ctrl).toBeDefined();
      }));
   });

});