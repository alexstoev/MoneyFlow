angular.module('moneyFlow', ['ngRoute', 'session', 'navigation', 'home'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/home/partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);