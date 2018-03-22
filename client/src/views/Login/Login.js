faceFoods.controller('LoginController', ['$scope', '$rootScope', 'loginFactory', 'userFactory', 'toaster', '$state', '$timeout', function($scope, $rootScope, loginFactory, userFactory, toaster, $state, $timeout){
    userFactory.loadData.get().$promise.then(
        function(result){
            $rootScope.userData.name = result.data.name;
            $rootScope.userData.email = result.data.email;
            // TODO: Mover dados para banco de dados
            $rootScope.userData.availableModules = {0: true, 1: true, 2: false, 3: false, 4: false, 5: true};
            $rootScope.userData.bio = 'Programador Ninja'
            $rootScope.userData.photo = 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg'

            $state.go('Dashboard.Home');
        }, function(result){
            $scope.loaded = true;
        }
    )
    
    $scope.signUp = function(){
        console.log($scope);
        loginFactory.login.save({email: $scope.email, password: $scope.password}).$promise.then(
            function(result){
                localStorage.setItem("id_token", result.data.token);
                toaster.pop('success', "Logado", "Logou com sucesso");
                $state.go('Dashboard.Home');
            }, function(result){
                toaster.pop('error', "Falha", "Falha na autenticação");                
            });
    }
}]) 