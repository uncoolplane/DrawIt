angular.module('ecommerce').service('ordersService', function($http) {
  this.getOrdersByCustomer = function(customerid) {
    return $http({
      method: 'GET',
      url: '/api/customer/orders/' + customerid
    }).then(function(response) {
      console.log('ordersService', response.data);
      return response.data;
    })
  }

  this.getOrder = function(id) {
    return $http({
      method: 'GET',
      url: '/api/orders/' + id
    }).then(function(response) {
      console.log('orderService', response.data);
      return response.data;
    })
  }

  this.createOrder = function(order) {
    return $http({
      method: 'PUT',
      url: '/api/order',
      data: order
    }).then(function(response) {
      console.log('ordersService', response.data);
      return response.data;
    })
  }

  this.updateOrder = function(order) {
    return $http({
      method: 'POST',
      url: 'api/order',
      data: order
    }).then(function(response) {
      console.log('ordersService', response.data);
      return response.data;
    })
  }
})

this.deleteOrder = function(id) {
  return $http({
    method: 'DELETE',
    url: '/api/order/' + id
  }).then(function(response) {
    console.log('ordersService', response.data);
    return response.data;
  })
}
