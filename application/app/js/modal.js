var Modal = {};

Modal.ModalInstanceCtrl = function ($scope, $modalInstance) {
  $scope.account = {
    name: '',
    threshold: ''
  };

  $scope.ok = function () {
    $modalInstance.close($scope.account);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

Modal.okCancel = function ($scope, $modalInstance, question, title, item) {
  $scope.question = question;
  $scope.title = title;

  $scope.ok = function () {
    $modalInstance.close(item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
