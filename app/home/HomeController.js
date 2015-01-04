angular.module('home', [])
.controller('HomeAuthenticatedController', ['$scope', function ($scope) {
	$scope.test = 'test';
}])
.controller('HomeGuestController', ['$scope', function ($scope) {
	$scope.test = 'test';
}]);