angular
  .module('person')
  .controller('IndexController', function($scope) {
	
	initiate();
	
	// Functions
	
	function initiate() {
		$scope.name = 'kurokikaze';
		
		loadStats();
		
		steroids.logger.log('Name: ' + $scope.name);
	}
	
	function loadStats() {
		$scope.watchful = 10; //statsService.getWatchful();
		$scope.dangerous = 10; //statsService.getWatchful();
		$scope.persuasive = 10; //statsService.getWatchful();
		$scope.shadowy = 10; //statsService.getWatchful();
	}
  });