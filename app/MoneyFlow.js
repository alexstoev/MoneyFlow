angular.module('moneyFlow', ['ui.router', 'session', 'navigation', 'home', 'login'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$stateProvider
	// parent home state which hold the two child states for authenticated visitors and guests 
	.state('home', {
		url: '/',
		template: '<div ui-view></div>', // provide an ui-view for the sub views
		controller: function ($scope, $state, session) {
			// redirect to the proper state if the visitor is authenticated or not
			if (session.isLoggedIn()) {
				$state.go('home.authenticated')
			} else {
				$state.go('home.guest')
			}
		}
	})
	.state('home.authenticated', {
		url: '',
		controller: function(){},
		templateUrl: '/home/partials/home.html',
		data: {
			loginRequired: true // used to "require" an authenticated user for this state
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
.run(['$rootScope', 'session', '$state', function ($rootScope, session, $state) {
	
	// check the setup of the state and redirect to login if a restricted state is requested
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		if (toState.data && toState.data.loginRequired && !session.isLoggedIn()) {
			$state.go('login');
			event.preventDefault();
			return;
		}
		// do nothing if user is authenticated or no authentication is needed for the requested state
	});
}]);