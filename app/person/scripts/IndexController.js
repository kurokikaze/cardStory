angular
  .module('cardstory')
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
		$scope.watchful = 10; //statsService.getWatchful();
		$scope.watchful = 10; //statsService.getWatchful();
		$scope.watchful = 10; //statsService.getWatchful();
	}
  });