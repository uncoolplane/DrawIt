angular.module('ecommerce').controller('customersCtrl', function($scope, $location, customerService, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  $scope.init = function() {
    $scope.getCustomers();
    $scope.page = usersService.page;
    console.log('customerCtrl', $scope.user);

    $scope.gridOptions =
    {
      data: 'customers',
      enablePaging: true,
      enableRowSelection: true,
      columnDefs:
      [
      { field: 'firstname', displayName: 'First Name'},
      { field: 'lastname', displayName: 'Last Name' },
      { field: 'address', displayName: 'Address' },
      { field: 'city', displayName: 'City'},
      { field: 'state', displayName: 'State'},
      { field: 'zipcode', displayName: 'Zip Code'}
    ]
    };

    // $scope.selectGridRow = function() {
    //   if($scope.selectedItem[0]) {
    //     $location.path('customerOrder/' + $scope.selectedItem[0].id);
    //   }
    // }
  }

  var $ctrl = this;

  $scope.getCustomers = function() {
    customerService.getCustomers().then(function(response) {
      $scope.customers = response;
    });
  }

  $scope.deleteCustomer = function(id) {
    customersService.deleteCustomer().then(function(response) {
      $scope.getCustomers();
    })
  }

  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }

  $scope.init();

})
