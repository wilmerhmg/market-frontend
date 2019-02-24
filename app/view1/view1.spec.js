'use strict';

describe('AppMarket.view1 module', function () {
   beforeEach(function () {
      module('AppMarket.view1');
      module('AppMarket.Search');
      module('AppMarket.Categories');
   });

   describe('AppMarket controller', function () {
      //
      it('should AppMarketView1Ctrl is defined', inject(function ($controller) {
         var view1Ctrl = $controller('AppMarketView1Ctrl', {$scope: {}});
         expect(view1Ctrl).toBeDefined();
      }));
   });

});