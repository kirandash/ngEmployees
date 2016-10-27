// Controller for Lists/Routing

var artistsControllers = angular.module('artistsControllers', []);
// Namespaces are used to protect variables
// While myApp are used as module, they are different but mostly given same name

// Note that controllers have a class based naming with first letters as capital
artistsControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
	// MODEL is the data from database
	$http.get("js/data.json").success(function(data){
		$scope.artists = data;
		// Initialize some data if necessary
		$scope.artistOrder = 'name';
	});
	// Note httprequest will not work on chrome until run on a server. because chrome's policy says that you must have both the requesting and requested file on same server

}]);