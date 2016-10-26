var myNameSpace = angular.module('myApp', []);
// Namespaces are used to protect variables
// While myApp are used as module, they are different but mostly given same name

myNameSpace.controller('MyController', function MyController($scope){
	// MODEL is the data from database
	$scope.author = {
		'name': 'Kiran Dash',
		'title': 'Web Developer',
		'company': 'Infasta Soft Solutions Pvt. Ltd.'
	}
});