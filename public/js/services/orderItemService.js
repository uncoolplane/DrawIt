angular.module('ecommerce').service('orderItemService', function($http) {
  this.getOrderItems = function (orderid) {
    return $http({
      method: 'GET',
      url: '/api/orderitems/' + orderid
    }).then(function(response) {
      console.log('orderItemsService', response.data);
      return response.data;
    })
  }

  this.createOrderItem = function (orderItem) {
    return $http({
      method: 'PUT',
      url: '/api/orderitems',
      data: orderItem
    }).then(function(response) {
      console.log('orderItemsService', response.data);
      return response.data;
    })
  }

  this.updateOrderItem = function(orderItem) {
    return $http({
      method: 'POST',
      url: 'api/orderitems',
      data: orderItem
    }).then(function(response) {
      console.log('orderItemsService', response.data);
      return response.data;
    })
  }

  this.deleteOrderItem = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/orderitems/' + id
    }).then(function(response) {
      console.log('ordersService', response.data);
      return response.data;
    })
  }
})
