angular.module('moneyFlow', ['ngRoute', 'session', 'navigation', 'home', 'login'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/home/partials/home.html'
		})
		.when('/login', {
			controller: 'LoginController',
			templateUrl: '/login/partials/login.html',
			data: {data:true}
		})
		.otherwise({
			redirectTo: '/'
		})

}]);