angular.module('ecommerce').controller('productDetailsCtrl', function($scope, productsService) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

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
