angular.module('ecommerce').controller('homeCtrl', function($scope, $location, usersService) {
  $scope.authentication = usersService;

  // $scope.user = usersService.loadUser();
  $scope.authentication.signin();//.then(function(response) {
    $scope.user = $scope.authentication.user;
  //})

  $scope.page = usersService.page;
  $scope.setPage = function(page) {
    usersService.setPage(page);
    $scope.page = usersService.page;
  }
})
