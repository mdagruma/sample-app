'use strict'
var helloWorldApp = angular.module('helloWorldApp', [
		'ngRoute',
		'helloWorldControllers'	
	]);

helloWorldApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl' }).
			when('/show', {
				templateUrl: 'partials/show.html',
				controller: 'ShowCtrl' }).
			when('/comics', {
				templateUrl: 'partials/comics.html',
				controller: 'ComicCtrl'	 
			});
		$locationProvider.html5Mode(false);
	} 
]);
