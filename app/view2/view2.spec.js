'use strict';

describe('AppMarket.view2 module', function () {
   beforeEach(function () {
      module('AppMarket.view2');
      module('AppMarket.Search');
   });
   describe('AppMarket controller', function () {
      //
      it('should AppMarketView2Ctrl is defined', inject(function ($controller) {
         var view1Ctrl = $controller('AppMarketView2Ctrl', {$scope: {}});
         expect(view1Ctrl).toBeDefined();
      }));
   });
});