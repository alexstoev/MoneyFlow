angular.module('moneyFlow', ['ui.router', 'session', 'navigation', 'home', 'login'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/',
		template: 'Home template <div ui-view></div> end',
		controller: function ($scope, $state, session) {
			if(session.isLoggedIn()){
				$state.go('home.authenticated')
			}else{
				$state.go('home.guest')
			}
		}
	})
	.state('home.authenticated', {
		url: '',
		controller: function(){},
		templateUrl: '/home/partials/home.html',
		data: {
			loginRequired: true
		}
	})
	.state('home.guest', {
		url: '',
		controller: 'HomeGuestController',
		templateUrl: '/home/partials/home.guest.html'
	})

	.state('login', {
		url: '/login',
		controller: 'LoginController',
		templateUrl: '/login/partials/login.html'
	});

	$urlRouterProvider.otherwise('/');

}])
.run(['$rootScope', 'session', function ($rootScope, session) {
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		if (toState.data && toState.data.loginRequired && !session.isLoggedIn()) {
			event.preventDefault();
			return;
		}
	});
}]);