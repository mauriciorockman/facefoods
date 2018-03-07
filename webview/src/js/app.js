var app = angular.module('webviewApp', ['ui.router', 'templates', 'ui.bootstrap']);

app.controller('indexCtrl', function($scope, $http, $timeout) {
  $timeout(function() { $scope.loaded = true; }, 1000);
});
