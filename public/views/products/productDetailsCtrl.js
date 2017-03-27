angular.module('ecommerce').controller('productDetailsCtrl', function($scope, productsService) {
    // this.getProduct = function(id) {
    //   productsService.getProduct(id).then(function(response) {
    //     $scope.product = response;
    //     $ctrl.items = $scope.product;
    //   })
    // }
    //
    // this.createProduct = function(createdProduct) {
    //   productsService.createProduct(createdProduct).then(function(response) {
    //     $scope.product = response;
    //   })
    // }

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
