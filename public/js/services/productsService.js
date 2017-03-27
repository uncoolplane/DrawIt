/*Module to manage http connections for products*/
angular.module('ecommerce').service('productsService', function($http) {
  this.getProducts = function() {
    return $http({
        method: 'GET',
        url: '/api/products'
      }).then(function(response) {
        console.log('productsService', response.data);
        return response.data;
      })
  }

  this.getProduct = function(id) {
    return $http({
        method: 'GET',
        url: '/api/products/' + id
      }).then(function(response) {
        console.log('productsService', response.data);
        return response.data;
      })
  }

  this.createProduct = function(product) {
    return $http({
        method: 'PUT',
        url: '/api/product',
        data: product
      }).then(function(response) {
        console.log('productsService', response.data);
        return response.data;
      })
  }

  this.updateProduct = function(product) {
    return $http({
        method: 'POST',
        url: '/api/product',
        data: product
      }).then(function(response) {
        console.log('productsService', response.data);
        return response.data;
      })
  }

  this.deleteProduct = function(id) {
    return $http({
        method: 'DELETE',
        url: '/api/product/' + id
      }).then(function(response) {
        console.log('productsService', response.data);
        return response.data;
      })
  }
})
