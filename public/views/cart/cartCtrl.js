angular.module('ecommerce').controller('cartCtrl', function($scope, cartService, usersService) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.products = []; //{product: xxx, quantity:3}

  $scope.init = function() {
    $scope.getCart();
  }

  $scope.getCart = function () {
    $scope.products = cartService.getCart();
    $scope.total = cartService.getCartTotal();
  }

  $scope.changeQuantity = function (product, quantity) {
    cartService.changeQuantity(product, parseInt(quantity));
    $scope.getCart();
  }

  $scope.removeFromCart = function (product) {
    cartService.removeFromCart(product);
    $scope.getCart();
  }

  $scope.format = function (num) {
    var number = numeral(num);
    numeral.defaultFormat('$0,0.00');
    return number.format();    // '$1,000.00'
  }

  $scope.init();
})
