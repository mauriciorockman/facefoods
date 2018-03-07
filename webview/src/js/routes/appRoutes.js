app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Menu');
    
    $stateProvider
        
        .state('Menu', {
            url: '/Menu',
            templateUrl: 'Menu/Menu.html',
            controller: 'MenuCtrl' 
        })
});