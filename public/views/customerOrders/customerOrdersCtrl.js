angular.module('ecommerce').controller('customerOrdersCtrl', function($scope, $stateParams, customerService, ordersService, usersService) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.getCustomerByUser = function() {
    if(!$scope.user) return;
    var id = $scope.user[0].id;
    customerService.getCustomerByUser(id).then(function(response) {
      $scope.customer = response[0];
    })
  }

  $scope.init = function() {
    $scope.getCustomerByUser();
    $scope.getOrders();
  }

  $scope.getCustomer = function() {
    var id = $stateParams.id;
    customerService.getCustomerByUser(id).then(function(response) {
      $scope.customer = response[0];
    })
  }

  $scope.getOrders = function() {
    if(!$scope.customer) return;
    ordersService.getOrdersByCustomer($scope.customer.id).then(function(response) {
      $scope.orders = response;
    })
  }

  $scope.init();
})
