angular.module('ecommerce').service('customerService', function($http) {
  this.getCustomers = function() {
    return $http({
      method: 'GET',
      url: '/api/customers'
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
