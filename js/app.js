// Controller for App
var myApp = angular.module('myApp', [
	// Fetures of app
	'ngRoute',
	'artistsControllers'
]);

// Service
myApp.config(['$routeProvider', function($routeProvider){
	// What to do with this service
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);