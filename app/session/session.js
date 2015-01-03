angular.module('session', []).factory('session', function () {
	var _session = {
		loggedIn: false
	};
	
	var isLoggedIn = function () {
		return _session.loggedIn;
	}
	
	var login = function () {
		 _session.loggedIn = true;
	}
	
	var logout = function () {
		 _session.loggedIn = false;
	}
	
	return {
		isLoggedIn: isLoggedIn,
		login: login,
		logout: logout
	}
});