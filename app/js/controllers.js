var carControllers = angular.module("carControllers", []);

carControllers.controller("carListController", ["$scope", function($scope){
	$scope.sort = 1;
	$scope.sortBy = "id"
	$scope.cars = [
		{
			name:"北京现代",
			id:1,
			pic:"images/thumbnails/1.jpg",
			price:29564612
		},
		{
			name:"jeep",
			id:2,
			pic:"images/thumbnails/2.jpg",
			price:2956461
		},
		{
			name:"BMW",
			id:3,
			pic:"images/thumbnails/3.jpg",
			price:2956461
		}
	];
}])