angular.module('ecommerce').controller('customerOrdersCtrl', function($scope, $stateParams, customerService, ordersService) {
  $scope.init = function() {
    $scope.getCustomer();
    $scope.getOrders();
  }

  $scope.getCustomer = function() {
    var id = $stateParams.id;
    customerService.getCustomer(id).then(function(response) {
      $scope.customer = response;
    })
  }

  $scope.getOrders = function() {
    ordersService.getOrdersByCustomer($scope.customer.id).then(function(response) {
      $scope.orders = response;
    })
  }

  $scope.init();
})
