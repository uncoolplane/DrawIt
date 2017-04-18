angular.module('ecommerce').controller('productsCtrl', function($scope, productsService, usersService, $uibModal, $log, cartService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  $scope.init = function() {
    $scope.getProducts();
    $scope.page = usersService.page;
    console.log('productsCtrl', $scope.user);
  };

  var $ctrl = this;

  $ctrl.open = function (size, selectedProduct, editMode) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/products/producctDetails.html',
      controller: function ($scope, $uibModalInstance, productsService, cartService) {
        $scope.product = selectedProduct || {};
        $scope.editMode = editMode;

        $scope.ok = function () {
          $uibModalInstance.close($scope.product);
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      },
      // controllerAs: '$ctrl',
      size: size,
      resolve: {
        product: function () {
          return selectedProduct;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }

  $scope.getProducts = function() {
    productsService.getProducts().then(function(response) {
      $scope.products = response;
    })
  }

  $scope.init();
})
