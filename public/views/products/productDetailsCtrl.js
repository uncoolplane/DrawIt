angular.module('ecommerce').controller('productDetailsCtrl', function($scope, productsService, usersService, cartService) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.cartCount = 0;

  this.addToCart = function (updatedProduct) {
    cartService.addToCart(updatedProduct);
    $scope.cartCount += 1;
  }

  this.updateProduct = function(updatedProduct) {
    if(updatedProduct && updatedProduct.id) {
      productsService.updateProduct(updatedProduct).then(function(response) {
        $scope.product = response;
      })
    } else {
      productsService.createProduct(updatedProduct).then(function(response) {
        $scope.product = response;
      })
    }
  }

})
