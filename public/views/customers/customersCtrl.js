angular.module('ecommerce').controller('customersCtrl', function($scope, customerService, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

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

  $scope.deleteCustomer = function(id) {
    customersService.deleteCustomer().then(function(response) {
      $scope.getCustomers();
    })
  }

  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }

  $scope.init();
})
