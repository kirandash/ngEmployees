// Controller for Lists/Routing

var artistsControllers = angular.module('artistsControllers', ['ngAnimate']);
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

// Detailed controller for route after click on an element in list
artistsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	// MODEL is the data from database
	$http.get("js/data.json").success(function(data){
		$scope.artists = data;
		// get data of which item is clicked from $routeParams url's itemId
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0) {
			// $routeParams.itemId will return string and thus must be converted to number
			$scope.prevItem = Number($routeParams.itemId) - 1;
		}else{
			// If first item then the prev item should be the last one
			$scope.prevItem =  $scope.artists.length - 1;
		}

		if($routeParams.itemId < $scope.artists.length - 1) {
			// $routeParams.itemId will return string and thus must be converted to number
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}else{
			// If first item then the prev item should be the last one
			$scope.nextItem = 0;
		}

	});
	// Note httprequest will not work on chrome until run on a server. because chrome's policy says that you must have both the requesting and requested file on same server

}]);