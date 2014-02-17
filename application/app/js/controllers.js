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
  .controller('Details', [function() {
    $scope.account = {
      _id: '1',
      name: 'Mining',
      balance: 300.01634,
      threshold: 0.01,
      created: 1231412341234,
      updated: 2345234524352
    };

    $scope.shares = [{

    }];

  }]);
