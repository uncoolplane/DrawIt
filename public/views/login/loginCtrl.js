angular.module('ecommerce').controller('loginCtrl', function($scope, $location, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

  if($scope.user) $location.path('/');

})
