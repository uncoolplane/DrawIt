angular.module('ecommerce').directive('drawitNav', function() {
    return {
        restrict: 'E',
        controller: function($scope, $location, usersService) {
            usersService.authenticate().then(function(response) {
                $scope.user = response;
            });
        }
    }
})
