angular.module('ecommerce').controller('customersCtrl', function($scope, customerService, usersService) {
  $scope.init = function() {
    $scope.getCustomers();
    $scope.page = usersService.page;
    console.log('customerCtrl', $scope.user);
  }

  var $ctrl = this;

  $scope.getCustomers = function() {
    customerService.getCustomers().then(function(response) {
      $scope.customers = response;
    });
  }

  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }

  $scope.init();
})
