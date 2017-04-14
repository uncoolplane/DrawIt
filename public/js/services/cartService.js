angular.module('ecommerce').service('cartService', function($http) {
  var _this = this;
  _this.cart = [];  //{product:{xxx}, quantity: 3}

  this.getCart = function () {
    return _this.cart;
  }

  this.addToCart = function(product) { //increase quantity
    var index = -1;
    for(var i = 0; i < _this.cart.length; i++) {
      var tmpProduct = _this.cart[i].product;
        if(tmpProduct.id == product.id) {
          index = i;
          break;
        }
      }

      if(index < 0) {
        _this.cart.push({product: product, quantity: 1});
      } else {
      _this.cart[index].quantity += 1;
      }

      console.log('cartService', _this.cart);
  }

  this.removeFromCart = function(product) {
    for(var i = 0; i < _this.cart.length; i++) {
      var tmpProduct = _this.cart[i].product;
      if(tmpProduct.id == product.id) {
        _this.cart.splice(i, 1);
      }
    }

    console.log('cartService', _this.cart);
  }

  this.changeQuantity = function(product, quantity) {
    for(var i = 0; i < _this.cart.length; i++) {
      var tmpProduct = _this.cart[i].product;
      if(tmpProduct.id == product.id) {
        if(quantity == 1) {
          _this.cart.splice(i, 1);
        } else {
          _this.cart[i].quantity = quantity;
        }
      }
    }
    console.log('cartService', _this.cart);
  }

})
