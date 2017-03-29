angular.module('ecommerce').controller('profileCtrl', function($scope, usersService, customerService) {
  $scope.init = function() {
    $scope.getStates();
  }

  $scope.getStates = function() {
    customerService.getStates().then(function(response) {
      $scope.states = response;
    })
  }

  $scope.init();
})
