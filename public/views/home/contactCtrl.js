angular.module('ecommerce').controller('contactCtrl', function($scope, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

})
