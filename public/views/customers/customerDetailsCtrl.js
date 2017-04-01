angular.module('ecommerce').controller('customerDetailsCtrl', function($scope, customerService, usersService) {
  usersService.authenticate().then(function(response) {
      $scope.user = response;
  });

})
