var app = angular.module('webviewApp', ['ui.router', 'templates', 'ui.bootstrap']);

app.controller('indexCtrl', function($scope, $http, $timeout) {
  $timeout(function() { $scope.loaded = true; }, 1000);

  $scope.doTheBack = function() {
    window.history.back();
  };

  $scope.sabores = [];

  $scope.msg = function(msg){
    $scope.sabores.push(msg);
    console.log($scope.sabores);
  }

});
