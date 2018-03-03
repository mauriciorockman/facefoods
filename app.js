var app = angular.module('myApp', ['ui.router']);

app.controller('customersCtrl', function($scope, $http, $timeout) {
  $timeout(function() { $scope.loaded = true; }, 1000);
  
  $http.get("menuData.html").then(function (response) {
      $scope.combos = response.data.combos;
      $scope.pizzas = response.data.pizzas[0].tamanhos;
      $scope.saboresSalgados = response.data.pizzas[2].saboresSalgados;
      $scope.bebidas = response.data.bebidas;
  });

  $scope.bordas = [{"borda":"Catupiry", "preco": "R$ 5"}, {"borda":"Cheddar", "preco": "R$ 5"},{"borda":"Sem Borda", "preco": ""}];
  $scope.massas = [{"massa":"Fina", "preco": ""}, {"massa":"Normal", "preco": ""},{"massa":"Grossa", "preco": "R$ 2"}];

});
