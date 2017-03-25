angular.module('ecommerce').controller('productDetailsCtrl', function($scope, productsService) {

    $scope.init = function() {
      $scope.getProduct($scope.$id);
    }

    $scope.getProduct = function(id) {
      productsService.getProduct(id).then(function(response) {
        $scope.product = response;
        $ctrl.items = $scope.product;
      })
    }

    $scope.createProduct = function(product) {
      productsService.createProduct(product).then(function(response) {
        $scope.product = response;
      })
    }

    $scope.updateProduct = function(product) {
      productsService.updateProduct(product).then(function(response) {
        $scope.product = response;
      })
    }



    $scope.init();
})
