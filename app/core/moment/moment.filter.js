'use strict';

angular.module('AppMarket.MomentFilter', [])
       .filter('moment', [function () {
          return function (input, momentFn) {
             var args      = Array.prototype.slice.call(arguments, 2),
                 momentObj = moment(input);
             return momentObj[momentFn].apply(momentObj, args);
          };
       }]);


/**
 * In base: https://gist.github.com/cmmartin/341b017194bac09ffa1a
 * */