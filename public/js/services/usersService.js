/*Module to authenticate users*/
angular.module('ecommerce').service('usersService', function($http) {
  _this = this;
  _this.page = 'home';

  //  _this.user = {
  //     name: '',
  //     password: ''
  // };

  _this.loadUser = function() {
    return {
      id: 0,
      name: 'Admin User',
      isAdmin: true
    }
  };

  _this.signin = function(user) {
    $http.post('/auth/signin', user).success(function(response) {
      return response;
    })
  }

  _this.signup = function(user) {
    $http.post('/auth/signup', user).success(function(response) {
      return response;
    })
  }

  _this.setPage = function(page) {
    _this.page = page;
  }
})
