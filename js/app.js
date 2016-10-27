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
	// First partial
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	// Second partial
	when('/details/:itemId', {
		// Template for the partial
		templateUrl: 'partials/details.html',
		// Controller to control this template
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);