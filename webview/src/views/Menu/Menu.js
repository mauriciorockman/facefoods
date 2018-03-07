app.controller('MenuCtrl', function($scope, $rootScope) {
    $scope.combos = $rootScope.pizzaData.combos;
    $scope.pizzas = $rootScope.pizzaData.pizzas[0].tamanhos;
    $scope.saboresSalgados = $rootScope.pizzaData.pizzas[2].saboresSalgados;
    $scope.bebidas = $rootScope.pizzaData.bebidas;

    $scope.bordas = [{"borda":"Catupiry", "preco": "R$ 5"}, {"borda":"Cheddar", "preco": "R$ 5"},{"borda":"Sem Borda", "preco": ""}];
    $scope.massas = [{"massa":"Fina", "preco": ""}, {"massa":"Normal", "preco": ""},{"massa":"Grossa", "preco": "R$ 2"}];  
});