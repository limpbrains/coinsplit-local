'use strict';
/* jshint undef:false */

angular.module('Split.controllers', []).
  controller('Accounts', ['$scope', function($scope) {
    $scope.accounts = [{
      _id: '1',
      name: 'Mining',
      balance: 300.01634,
      threshold: 0.01,
      created: 1231412341234,
      updated: 2345234524352
    }, {
      _id: '2',
      name: 'Rock band',
      balance: 1,
      threshold: 0.01,
      created: 1231412341234,
      updated: 2345234524352
    }];

  }])
  .controller('Details', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.account = {
      _id: '1',
      name: 'Mining',
      wallet: '1BHrhrVQuxkVTcLRxxxXZjUSox4KzsVKre',
      balance: 300.01634,
      threshold: 0.01,
      created: 1231412341234,
      updated: 2345234524352
    };

    $scope.shares = [{
      label: 'Me',
      address: '1BHrhrVQuxkVTcLRxxxXZjUSox4KzsVKre',
      size: 30,
      paid: 1
    }, {
      label: 'Me',
      address: '1BHrhrVQuxkVTcLRxxxXZjUSox4KzsVKre',
      size: 10,
      paid: 2
    }, {
      label: 'Me',
      address: '1BHrhrVQuxkVTcLRxxxXZjUSox4KzsVKre',
      size: 3,
      paid: 3
    }];

  }]);
