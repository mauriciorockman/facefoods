faceFoods.controller('DashboardController', ['$scope', '$state', '$rootScope', 'userFactory', 'toaster', function($scope, $state, $rootScope, userFactory, toaster){
    // TODO: Bola de Loading    
    userFactory.loadData.get().$promise.then(
        function(result){            
            $rootScope.userData.name = result.name;
            $rootScope.userData.email = result.email;
            // TODO: Mover dados para banco de dados
            $rootScope.userData.availableModules = {0: true, 1: true, 2: false, 3: false, 4: false, 5: true};
            $rootScope.userData.bio = 'Programador Ninja'
            $rootScope.userData.photo = 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg'
        }, function(result){
            toaster.pop('error', "Falha", "Falha ao coletar dados, verifique sua conexão ou tente novamente mais tarde");
    });
    
    $state.go('Dashboard.Home');
    $scope.sidebarToggle = function(){
        angular.element(document.querySelector('#body')).toggleClass('sidenav-toggled');        
    }
}]) 