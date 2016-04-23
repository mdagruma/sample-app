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

helloWorldControllers.controller('ComicCtrl', ['$scope',
  function ComicCtrl($scope) {
    $scope.comics = {
      {
        title: 'Spiderman'
        issue: {
          number: 300,
          date: '05/1988'
        },
        publisher: 'Marvel'
      },
      {
        title: 'Wonder Woman'
        issue: {
          number: 210,
          date: '03/1974'
        },
        publisher: 'DC'
      },
      {
        title: 'Danger Girl'
        issue: {
          number: 1,
          date: '03/1998'
        },
        publisher: 'Cliffhanger'
      },
    };
  }
]);
