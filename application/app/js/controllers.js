'use strict';
/* jshint undef:false */

angular.module('Split.controllers', []).
  controller('Accounts', ['$scope', '$modal', 'API', function($scope, $modal, API) {
    $scope.accounts = [];

    API.db.accounts.find({}, function(err, accounts){
      $scope.accounts = accounts;
      $scope.$digest();
    });

    $scope.add = function () {
      var modalInstance = $modal.open({
        templateUrl: 'partials/add.html',
        controller: Modal.ModalInstanceCtrl
      });

      modalInstance.result.then(function (account) {
        API.db.accounts.insert(account, function(err, newAcc) {
          if (err) alert(err);
          $scope.accounts.push(newAcc);
        });
      });
    };

    $scope.remove = function(account) {
      var modalInstance = $modal.open({
        templateUrl: 'partials/okCancel.html',
        controller: Modal.okCancel,
        resolve: {
          item: function() {return account;},
          title: function() {return 'Remove';},
          question: function() {return 'Are you sure you want to remove this account?';}
        }
      });

      modalInstance.result.then(function (acc) {
        API.db.accounts.remove({_id: acc._id}, {}, function(err, number) {
          if (err) alert(err);
          $scope.accounts.splice(number, 1);
        });
      });
    };

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
