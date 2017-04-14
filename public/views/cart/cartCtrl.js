angular.module('ecommerce').controller('cartCtrl', function($scope, cartService, customerService, usersService) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.products = []; //{product: xxx, quantity:3}

  $scope.init = function() {
      $scope.products = cartService.getCart();
  }

  $scope.changeQuantity = function (product, quantity) {
    cartService.reduceQuantity(product, quantity);
    $scope.products = cartService.getCart();
  }

  $scope.removeFromCart = function (product) {
    cartService.removeFromCart(product);
    $scope.products = cartService.getCart();
  }

  $scope.init();
})
