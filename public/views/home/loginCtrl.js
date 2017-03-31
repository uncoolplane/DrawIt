angular.module('ecommerce').controller('loginCtrl', function($scope, $location, usersService) {
  $scope.authentication = usersService;

  if($scope.authentication.user) $location.path('/');

  // $scope.signin = function() {
  //   $scope.authentication.signin($scope.user).then(function(response) {
  //     console.log('signin', response);
  //     $scope.authentication.user = response;
  //     $location.path('/');
  //   }).error(function(response) {
  //     console.log('signin', response.message);
  //     $scope.error = response.message;
  //   });
  // }
  //
  // $scope.signup = function() {
  //   $scope.authentication.signup($scope.user).then(function(response) {
  //     $scope.authentication.user = response;
  //     $location.path('/');
  //   }).error(function(response) {
  //     $scope.error = response.message;
  //   });
  // }
})
