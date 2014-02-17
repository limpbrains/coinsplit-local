'use strict';


// Declare app level module which depends on filters, and services
angular.module('Split', [
  'ngRoute',
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
