angular.module('ecommerce').controller('ordersCtrl', function($scope, customerService, usersService, ordersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  $scope.init = function() {
    var customerid = req.params.id;
    $scope.getCustomer(customerid);
    $scope.getOrders(customerid);
  }

  $scope.getCustomer = function(id) {
    customerService.getCustomer(id).then(function(response) {
      $scope.customer = response;
    })
  }

  $scope.getOrders = function(customerid) {
    ordersService.getOrdersByCustomer(customerid).then(function(response) {
      $scope.orders = response;
    })
  }

  $scope.init();
})
