angular.module('ecommerce').service('customerService', function($http) {
  this.getStates = function() {
    return $http({
      method: 'GET',
      url: '/api/states'
    }).then(function(response) {
      console.log('customerService/states', response.data);
      return response.data;
    })
  }

  this.getCustomers = function() {
    return $http({
      method: 'GET',
      url: '/api/customers'
    }).then(function(response) {
      console.log('customerService', response.data);
      return response.data;
    })
  }

  this.getCustomerByUser = function(userid) {
    return $http({
      method: 'GET',
      url: '/api/customeruser/' + userid
    }).then(function(response) {
      console.log('customerService', response.data);
      return response.data;
    })
  }

  this.getCustomer = function(id) {
    return $http({
      method: 'GET',
      url: '/api/customers/' + id
    }).then(function(response) {
      console.log('customerService', response.data);
      return response.data;
    })
  }

  this.createCustomer = function(customer) {
    return $http({
      method: 'PUT',
      url: '/api/customer',
      data: customer
    }).then(function(response) {
      console.log('customerService', response.data);
      return response.data;
    })
  }

  this.updateCustomer = function(customer) {
    return $http({
      method: 'POST',
      url: '/api/customer',
      data: customer
    }).then(function(response) {
      console.log('customerService', response.data);
    })
  }

  this.deleteCustomer = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/customer/' + id
    }).then(function(response) {
      console.log('customerService', response.data);
      return response.data;
    })
  }
})
