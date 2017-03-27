angular.module('ecommerce').controller('productsCtrl', function($scope, productsService, usersService/*, Files*/, $uibModal, $log) {

  $scope.init = function() {
    $scope.getProducts();
    $scope.page = usersService.page;
    console.log('productsCtrl', $scope.user);
  };

  var $ctrl = this;

  $ctrl.open = function (size, selectedProduct, editMode) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/products/productdetailsmodal.html',
      controller: function ($scope, $uibModalInstance, productsService) {
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

  // $scope.upload = function (files) {
  //     if (files && files.length) {
  //         Files.upload(files).then(function (data) {
  //             console.log('Uploaded successfully');
  //         }).catch(function(){
  //             console.log('Upload failed');
  //         });
  //     }
  // };

  $scope.init();
})
