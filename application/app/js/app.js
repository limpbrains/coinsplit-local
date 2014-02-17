'use strict';
/* jshint undef:false */

angular.module('Split', [
  'ngRoute',
  'monospaced.qrcode',
  'ui.bootstrap',
  'Split.filters',
  'Split.services',
  'Split.directives',
  'Split.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accounts', {templateUrl: 'partials/accounts.html', controller: 'Accounts'});
  $routeProvider.when('/details/:id', {templateUrl: 'partials/details.html', controller: 'Details'});
  $routeProvider.otherwise({redirectTo: '/accounts'});
}]);
