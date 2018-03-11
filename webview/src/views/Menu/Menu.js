app.controller('MenuCtrl', function($scope, $rootScope) {
    $scope.combos = $rootScope.pizzaData.combos;
    $scope.pizzas = $rootScope.pizzaData.pizzas[0].tamanhos;
    $scope.saboresSalgados = $rootScope.pizzaData.pizzas[2].saboresSalgados;
    $scope.bebidas = $rootScope.pizzaData.bebidas;

    $scope.bordas = [{"borda":"Catupiry", "preco": "R$ 5", "id": "1"}, {"borda":"Cheddar", "preco": "R$ 5", "id": "2"},{"borda":"Sem Borda", "preco": "", "id": "3"}];
    $scope.massas = [{"massa":"Fina", "preco": "", "id": "1"}, {"massa":"Normal", "preco": "", "id": "2"},{"massa":"Grossa", "preco": "R$ 2", "id": "3"}];  
    $scope.nsabores = [{"n":"1", "id":"1"},{"n":"2", "id":"2"},{"n":"3", "id":"3"},{"n":"4", "id":"4"}];
});