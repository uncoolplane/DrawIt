angular.module('ecommerce').controller('productEditCtrl', function($scope, productsService, usersService, $stateParams, $timeout, uploadFile, $location) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.init =  function () {
    $scope.file = {};
    $scope.message = false;
    $scope.alert = '';
    $scope.defaultUrl = 'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg';

    $scope.id = $stateParams.id;
      productsService.getProduct($scope.id).then(
        function(data) {
          $scope.product = data[0];

          if(!$scope.product.imageurl) {
            $scope.product.imageurl = $scope.defaultUrl;
          }
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

    $location.path('/products');
  }

  $scope.Submit = function() {
      $scope.uploading = true;
      uploadFile.upload($scope.file).then(function(data) {
          if (data.data.success) {
              $scope.uploading = false;
              $scope.alert = 'alert alert-success';
              // $scope.product.imageurl = $scope.thumbnail.dataUrl || default;
              $scope.message = data.data.message;
              $scope.file = {};
          } else {
              $scope.uploading = false;
              $scope.alert = 'alert alert-danger';
              $scope.message = data.data.message;
              $scope.file = {};
          }
      });
  };

  $scope.photoChanged = function(files) {
      if (files.length > 0 && files[0].name.match(/\.(png|jpeg|jpg)$/)) {
          $scope.uploading = true;
          var file = files[0];
          var fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = function(e) {
              $timeout(function() {
                  $scope.thumbnail = {};
                  $scope.thumbnail.dataUrl = e.target.result;
                  $scope.uploading = false;
                  $scope.message = false;
              });
          };
      } else {
          $scope.thumbnail = {};
          $scope.message = false;
      }
  };

  $scope.init();
})
