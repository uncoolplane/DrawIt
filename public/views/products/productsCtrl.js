angular.module('ecommerce').controller('productsCtrl', function($scope, productsService, usersService/*, Files*/, $uibModal, $log, $document) {

  var $ctrl = this;

  $scope.init = function() {
    $scope.getProducts();
    $scope.isModal = false;
    $scope.page = usersService.page;
    $ctrl.items = $scope.products;
    console.log('productsCtrl', $scope.user);
  };

  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }
  //
  // $scope.showModal = function(product) {
  //   $scope.product = product;
  //   $scope.isModal = true;
  // }

  /*modal actions*/
  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector, id) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '../views/products/productmodal.html',
      controller: 'productModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.getProducts = function() {
    productsService.getProducts().then(function(response) {
      $scope.products = response;
    })
  }
  $scope.getProduct = function(id) {
    productsService.getProduct(id).then(function(response) {
      $scope.product = response;
      $ctrl.product = response;
    })
  }

  $scope.deleteProduct = function(id) {
    productsService.deleteProduct(id).then(function(response) {
      $scope.getProducts();
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
