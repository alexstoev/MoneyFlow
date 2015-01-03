angular.module('navigation', []).
	controller('NavigationController', ['$scope','session', function ($scope, session) {
		$scope.session = session;
	}])
	