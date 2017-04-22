angular.module('ecommerce').controller('cartCtrl', function($scope, cartService, usersService, customerService, ordersService, orderItemService, $location) {
  usersService.authenticate().then(function(response) {
    $scope.user = response;
  });

  $scope.products = []; //{product: {xxx}, quantity:3}

  $scope.init = function() {
    $scope.getCart();
    $scope.getCustomerByUser();
  }

  $scope.getCustomerByUser = function() {
    if(!$scope.user) return;
    var id = $scope.user[0].id;
    customerService.getCustomerByUser(id).then(function(response) {
      $scope.customer = response[0];
    })
  }

  $scope.getCart = function () {
    $scope.products = cartService.getCart();
    $scope.total = cartService.getCartTotal();
  }

  $scope.changeQuantity = function (product, quantity) {
    cartService.changeQuantity(product, parseInt(quantity));
    $scope.getCart();
  }

  $scope.removeFromCart = function (product) {
    cartService.removeFromCart(product);
    $scope.getCart();
  }

  $scope.placeOrder =  function () {
    $scope.getCustomerByUser(); //set customer
    var order = {
      customerid: $scope.customer.id,
      ordernumber: $scope.getOrderNumber(),
      orderdate: new Date()
    }

    ordersService.createOrder(order).then(function (response) {
      var orderid = response.id;
      if(!orderid) {
        console.log('Error creating order items, missing id');
        return;
      }
      $scope.products.forEach(function(elem) {
        var orderitem = {
          orderid : orderid,
          productid: elem.product.id,
          quantity: elem.quantity
        }
        orderItemService.createOrderItem(orderitem);
      });

      $location.path('/');//TODO: redirect to my orders
    })
  }

  $scope.format = function (num) {
    var number = numeral(num);
    numeral.defaultFormat('$0,0.00');
    return number.format();    // '$1,000.00'
  }

  $scope.getOrderNumber = function() {
      // var d = new Date().getTime();
      // var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      //     var r = (d + Math.random()*16)%16 | 0;
      //     d = Math.floor(d/16);
      //     return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      // });
      // return uuid;
      return Math.floor(Math.random() * 50000);
  };

  $scope.init();
})
