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

  }

  this.updateProduct = function(product) {

  }

  this.deleteProduct = function(id) {

  }
})
