faceFoods.controller('LoginController', ['$scope', 'loginFactory', 'toaster', '$state', function($scope, loginFactory, toaster, $state){
    $scope.signUp = function(){
        loginFactory.signUp.save({email: $scope.email, password: $scope.password}).$promise.then(
            function(result){
                localStorage.setItem("id_token", result.token);
                $state.go('Dashboard.Home');
                toaster.pop('success', "Logado", "Logou com sucesso");
            }, function(result){
                toaster.pop('error', "Falha", "Falha na autenticação");                
            });
    }
}]) 