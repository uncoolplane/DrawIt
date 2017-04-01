angular.module('ecommerce').controller('homeCtrl', function($scope, $location, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  $scope.page = usersService.page;
  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }
})
