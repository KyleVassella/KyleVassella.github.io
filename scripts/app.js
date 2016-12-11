var app = angular.module('singlePage', ['ngRoute']);

/* ng-view is an ANgular directive that will include the template of the current route (for example, /blog or /about) in the main layout file

/* ----------- $routeProvider AKA Routes----------- */


app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : '/views/home.html',		/* this is the route to your desired view */
		controller : 'homeController'
	})

	.when('/portfolio', {
		templateUrl : '/views/home.html',
		controller : 'portfolioController'
	})

	.when('/contact', {
		templateUrl : '/views/contact.html',
		controller : 'contactController'
	})

	.when('/jcRealty', {
		templateUrl : '/views/jcRealty.html',
		controller : 'jcRealtyController'
	})

	.when('/randomQuoteGenerator', {
		templateUrl : '/views/randomQuoteGenerator.html',
		controller : 'rpgController'
	})

	.when('/dynamicPaginatedSearch', {
		templateUrl : '/views/dynamicPaginatedSearch.html',
		controller : 'dpsController'
	})

	.when('/interactiveShoppingForm', {
		templateUrl : '/views/interactiveShoppingForm.html',
		controller : 'isfController'
	})

	.otherwise({redirectTo: '/'});
});



/* ----------- CONTROLLERS ----------- */

app.controller('homeController', function($scope) {
	$scope.message='';
});

app.controller('portfolioController', function($scope) {
});

app.controller('contactController', function($scope) {
	$scope.message='';
});

app.controller('jcRealtyController', function($scope) {
	$scope.message='';
});

app.controller('rqgController', function($scope) {
	$scope.message='';
});

app.controller('dpsController', function($scope) {
	$scope.message='';
});

app.controller('isfController', function($scope) {
	$scope.message='';
});

