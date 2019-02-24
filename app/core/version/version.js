'use strict';

angular.module('AppMarket.version', [
  'AppMarket.version.interpolate-filter',
  'AppMarket.version.version-directive'
])

.value('version', '0.1');
