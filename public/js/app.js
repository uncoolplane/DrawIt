/*https://angular-ui.github.io/bootstrap/*/

angular.module('ecommerce', ['ui.router', 'ui.bootstrap', 'ui.grid','uploadFileService', 'fileModelDirective'])
//, 'ngMessages'
.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home/home.html',
		controller: 'homeCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: './views/home/contact.html'
	})
	.state('products', {
		url: '/products',
		templateUrl: './views/products/products.html',
		controller: 'productsCtrl'
	})
	.state('productDetail', {
		url: '/productDetail/:id',
		templateUrl: './views/products/productEdit.html',
		controller: 'productEditCtrl'
	})
	.state('customers', {
		url: '/customers',
		templateUrl: '/views/customers/customers.html',
		controller: 'customersCtrl'
	})
	.state('customerOrder', {
		url: '/customerOrder/:id',
		templateUrl: '/views/customerOrders/customerOrders.html',
		controller: 'customerOrdersCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: '/views/login/login.html',
		controller: 'loginCtrl'
	})
	.state('profile', {
		url: '/profile',
		templateUrl: '/views/profile/profile.html',
		controller: 'profileCtrl'
	})
	.state('orders', {
		url: '/orders/:id',
		templateUrl: '/views/orders/orders.html',
		controller: 'ordersCtrl'
	})
	.state('cart', {
		url: '/cart',
		templateUrl: '/views/cart/cart.html',
		controller: 'cartCtrl'
	})

	$urlRouterProvider.otherwise('/');

});
