angular.module('ecommerce').controller('profileCtrl', function($scope, $location, usersService, customerService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  if(!$scope.user) $location.path('/login');

  $scope.init = function() {
    $scope.getStates();
    $scope.getCustomerByUser();
  }

  $scope.getStates = function() {
    customerService.getStates().then(function(response) {
      console.log('profileCtrl', response);
      $scope.states = response;
    })
  }

  $scope.getCustomerByUser = function() {
    if(!$scope.user) return;
    var id = $scope.user[0].id;
    customerService.getCustomerByUser(id).then(function(response) {
      $scope.customer = response[0];
    })
  }

  $scope.signup = function(customer, user) {
    if(!user) return;

    customer.userid = user[0].id;
    if(!customer.id) {
      customerService.createCustomer(customer).then(function(response) {
        $scope.customer = response;
      });
    } else {
      customerService.updateCustomer(customer).then(function(response) {
        $scope.customer = response;
      });
    }
  }

  $scope.init();
})
