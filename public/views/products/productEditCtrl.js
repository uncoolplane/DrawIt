angular.module('ecommerce').controller('productEditCtrl', function($scope, productsService, usersService, $stateParams) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.init =  function () {
    $scope.id = $stateParams.id;
      productsService.getProduct($scope.id).then(
        function(data) {
          $scope.product = data[0];
        }
      );
  }

  $scope.updateProduct = function(updatedProduct) {
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

  $scope.init();
})
