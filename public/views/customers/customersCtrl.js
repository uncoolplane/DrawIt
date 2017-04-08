angular.module('ecommerce').controller('customersCtrl', function($scope, $location, customerService, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  $scope.init = function() {
    $scope.getCustomers();
    $scope.page = usersService.page;
    console.log('customerCtrl', $scope.user);

  function rowTemplate() {
    return '<div ng-dblclick="grid.appScope.rowDoubleClick(row)" >' +
                '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell>'+
                 ' </div> ' +
               '</div>';
    }

    $scope.rowDoubleClick = function (row) {
        // alert(console.log(row.entity));
       $location.path('/customerOrder/' + row.entity.id);
    };

    $scope.gridOptions =
    {
      data: 'customers',
      enablePaging: true,
      enableFiltering: true,
      enableCellEditOnFocus: true,
      enableRowSelection: true,
      rowTemplate: rowTemplate(),
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
