/*Module to authenticate users*/
angular.module('ecommerce').service('usersService', function($http) {
  _this = this;
  _this.page = 'home';

  _this.authenticate = function() {
    return $http({
        method: 'GET',
        url: '/whoami'
      }).then(function(response) {
        console.log('usersService', response.data);
        return response.data;
      })
  };

  _this.setPage = function(page) {
    _this.page = page;
  }
})
