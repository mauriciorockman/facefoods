var app = angular.module('webviewApp', ['ui.router', 'ngAnimate','templates', 'ui.bootstrap', 'toaster']);

app.controller('indexCtrl', ['$scope', '$http', '$timeout', 'toaster', function($scope, $http, $timeout, toaster) {
  $timeout(function() { $scope.loaded = true; }, 1000);

  $scope.doTheBack = function() {
    window.history.back();
  };

  $scope.sabores = [];

  $scope.msg = function(msg){
    $scope.sabores.push(msg);
    console.log($scope.sabores);
  }

}]);
