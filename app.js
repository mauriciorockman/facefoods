var app = angular.module('myApp', ['ui.router']);

app.controller('customersCtrl', function($scope, $http) {
  $http.get("menuData.html").then(function (response) {
      $scope.combos = response.data.combos;
      $scope.pizzas = response.data.pizzas;
      $scope.bebidas = response.data.bebidas;
  });
});
