faceFoods.controller('LoginController', ['$scope', 'loginFactory', 'userFactory', 'toaster', '$state', '$timeout', function($scope, loginFactory, userFactory, toaster, $state, $timeout){
    userFactory.isAuthed.get().$promise.then(
        function(result){
            $state.go('Dashboard.Home');
            // console.log(result);
            // if(result.status==200){}
        }, function(result){
            $scope.loaded = true;
            // if(result.status==401){
            // }
        }
    )
    
    $scope.signUp = function(){
        console.log($scope);
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