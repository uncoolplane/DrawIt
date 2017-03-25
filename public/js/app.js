/*https://angular-ui.github.io/bootstrap/*/

angular.module('ecommerce', ['ui.router', 'ui.bootstrap'])
//, 'ui-bootstrap'
.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home/home.html',
    // template: '<h2>hello</h2>',
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
	.state('productdetails', {
		url: '/products/:id',
		templateUrl: '/views/products/productdetails.html',
		controller: 'productDetailsCtrl'
	})

	$urlRouterProvider.otherwise('/');

});
