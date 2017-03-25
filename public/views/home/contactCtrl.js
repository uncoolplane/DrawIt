angular.module('ecommerce').controller('contactCtrl', function($scope, usersService) {
  $scope.user = usersService.loadUser();
})
