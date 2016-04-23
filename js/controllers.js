'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',
	function MainCtrl($scope) {
		$scope.message = "Hello Matt!";
	}
]);

helloWorldControllers.controller('ShowCtrl', ['$scope',
	function ShowCtrl($scope) {
		$scope.message = "Show Matt my wife, Jenn Sterger!";
	}
]);

/* Comic Controller */

helloWorldControllers.controller('ComicCtrl', ['$scope',
	function ShowCtrl($scope) {
		$scope.message = "Show Matt my wife, Jenn Sterger!";
	}
]);