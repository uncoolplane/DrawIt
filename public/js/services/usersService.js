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
    $http.get('/auth/facebook', user).success(function(response) {
      console.log('ng-signin', response);
      _this.user = response.data;
      return response.data;
    })
  }

//TOOD: not working yet, no route
  _this.signup = function(user) {
    $http.post('/auth/signup', user).success(function(response) {
      console.log('ng-signup', response);
      return response.data;
    })
  }

  _this.setPage = function(page) {
    _this.page = page;
  }
})
