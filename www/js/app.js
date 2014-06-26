// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "home.html"
    })
    .state("play", {
      url: "/play",
      templateUrl: "play.html"
    })
    .state("quiz", {
      url: "/quiz",
      templateUrl: "quiz.html"
    });
  $urlRouterProvider.otherwise("/");
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('AppController', ['$scope', '$state', function($scope, $state) {

	$scope.won;
	$scope.drink = true;
	$scope.item;
	$scope.quizCliked = false; 
	
   $scope.win = function(right, itemSelected){
		$scope.quizCliked = true;
        console.info("You selected " + itemSelected);
		$scope.won = right;
		$scope.item = itemSelected;
    };
		
	
			
	$scope.scan = function(){
		console.log("Scanning");
		cordova.plugins.barcodeScanner.scan (
		
			function (result) {
				/*var s = "Result: " + result.text + "<br/>" +
				"Format: " + result.format + "<br/>" +
				"Cancelled: " + result.cancelled;
				resultDiv.innerHTML = s;*/
				console.log("Result");
				$scope.quizCliked = false;

					
				if (result.text == "8076809542517") {
					
					$scope.drink = true;	
					$state.go("quiz");	
				}
					
				if (result.text == "9004319003012") {
					
					$scope.drink = false;					
					$state.go("quiz");				
				}
					
			}, 
			function (error) {
				alert("Scanning failed: " + error);
			}
		);
		
	};
	
}]);