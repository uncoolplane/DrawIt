/*Module to authenticate users*/
angular.module('ecommerce').service('usersService', function($http) {
  _this = this;
  _this.page = 'home';

  _this.loadUser = function() {
    return {
      id: 0,
      name: 'Admin User',
      isAdmin: true
    }
  };

  _this.setPage = function(page) {
    _this.page = page;
  }
})
