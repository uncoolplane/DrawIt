/*https://angular-ui.github.io/bootstrap/*/

angular.module('ecommerce', ['ui.router', 'ui.bootstrap', 'ngGrid'])
//, 'ui-bootstrap'
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
	.state('customers', {
		url: '/customers',
		templateUrl: '/views/customers/customers.html',
		controller: 'customersCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: '/views/home/login.html',
		controller: 'loginCtrl'
	})
	.state('profile', {
		url: '/profile',
		templateUrl: '/views/home/profile.html',
		controller: 'profileCtrl'
	})
	.state('orders', {
		url: '/orders/:id',
		templateUrl: '/views/orders/orders.html',
		controller: 'ordersCtrl'
	})

	$urlRouterProvider.otherwise('/');

});
