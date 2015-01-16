var app = angular.module('example', []);
app.factory('statsService', function() {
  var starsService;
  var stats = {
	  watchful: 10,
	  dangerous: 10,
	  shadowy: 10,
	  persuasive: 10
  }

  statsService.getWatchful = function() { return stats.watchful; }
  statsService.getDangerous = function() { return stats.dangerous; }
  statsService.getShadowy = function() { return stats.shadowy; }
  statsService.getPersuasive = function() { return stats.persuasive; }
  
  statsService.gainWatchful = function(amount) { stats.watchful += amount; }
  statsService.gainDangerous = function(amount) { stats.dangerous += amount; }
  statsService.gainShadowy = function(amount) { stats.shadowy += amount; }
  statsService.gainPersuasive = function() { stats.persuasive += amount; }
  
  // factory function body that constructs shinyNewServiceInstance
  return starsService;
});