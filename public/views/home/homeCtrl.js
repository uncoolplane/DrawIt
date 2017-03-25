angular.module('ecommerce').controller('homeCtrl', function($scope, usersService) {
  $scope.user = usersService.loadUser();
  $scope.page = usersService.page;
  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }
})
