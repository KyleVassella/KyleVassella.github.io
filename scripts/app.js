var app = angular.module('singlePage', ['ngRoute']);

/* ng-view is an ANgular directive that will include the template of the current route (for example, /blog or /about) in the main layout file

/* ----------- $routeProvider AKA Routes----------- */


app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'views/home.html',		/* this is the route to your desired view */
		controller : 'routeController'
	})

	.when('/jcRealty', {
		templateUrl : 'views/jcRealty.html',
		controller : 'routeController'
	})

	.when('/cubicles', {
	templateUrl : 'views/cubicles.html',
	controller : 'routeController'
	})

	.when('/portfolio', {
	templateUrl : 'views/portfolio.html',
	controller : 'routeController'
	})

	.when('/randomQuoteGenerator', {
		templateUrl : 'views/randomQuoteGenerator.html',
		controller : 'routeController'
	})

	.when('/dynamicPaginatedSearch', {
		templateUrl : 'views/dynamicPaginatedSearch.html',
		controller : 'routeController'
	})

	.when('/interactiveShoppingForm', {
		templateUrl : 'views/interactiveShoppingForm.html',
		controller : 'routeController'
	})

	.when('/tictactoe', {
		templateUrl : 'views/tictactoe.html',
		controller : 'routeController'
	})

	.otherwise({redirectTo: '/'});
});



/* ----------- CONTROLLERS ----------- */

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});


app.controller('routeController', function($scope, $rootScope, $location, $anchorScroll, $routeParams) {
	$rootScope.showPortfolioHeader = $location.path() !== '/';
		$scope.load = $(function(){   // eventually remove this and place it in the app.run() function - this way adds unnecessary logic into the scope. https://www.w3schools.com/angular/ng_ng-init.asp http://stackoverflow.com/questions/13059284/window-onload-does-not-work-in-angularjs
		    var $portfolioContent = $('.portfolio-content');
		    var itemOffset = $portfolioContent.offset().top;

		    $(window).scroll(function(){
		        var scrollTop = $(window).scrollTop();
		        if(scrollTop >= itemOffset){
		            console.log("item has reached the top");
		            $('.portfolio-content').css('overflow-y','scroll');
		            } else {
		              $('.portfolio-content').css('overflow-y', 'auto');
		            }
		    });
		});
});

// app.controller('myController', function($scope){
//     $scope.load = function () {
//         alert("load event detected!");
//     }
// });

// app.controller('scrollController', function($scope, $rootScope, $location, $anchorScroll, $routeParams) {
// 	$scope.scrollTo = function (id) {
//   $anchorScroll(id);  
// }
// });

// app.controller('routeController', ['$rootScope', '$location', function($rootScope, $location) {
// 	$rootScope.showPortfolioHeader = $location.path() === '/randomQuoteGenerator';
// }]);

// app.controller('jcRealtyController', ['$scope', '$location', function($scope, $location) {
// 	$scope.hideHomeHeader = $location.path() === '/jcRealty';
// }]);

// app.controller('routeController', function($scope) {
// 	$scope.message='';
// });

// app.controller('routeController', function($scope) {
// 	$scope.message='';
// });

// app.controller('routeController', function($scope) {
// 	$scope.message='';
// });

