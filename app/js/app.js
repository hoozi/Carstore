

var carApp = angular.module("carApp", [
	"ngRoute",

	"carControllers"
]);

carApp.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider) {
	var routeBase = "partials/"
	$locationProvider.html5Mode(true)
	$routeProvider
		.when("/", {
			templateUrl:routeBase+"car_list.html",
			controller: "carListController"
		})
}])