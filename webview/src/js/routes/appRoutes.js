app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Menu');
    
    $stateProvider
        
        .state('Menu', {
            url: '/Menu',
            templateUrl: 'Menu/Menu.html',
            controller: 'MenuCtrl' 
        })

        .state('pizzaoptions', {
            url: '/pizzaoptions',
            templateUrl: 'pizzaExtra/pizzaoptions.html',
            controller: 'MenuCtrl' 
        })

        .state('pizza-sabores', {
            url: '/pizza-sabores',
            templateUrl: 'pizza-sabores/sabores.html',
            controller: 'MenuCtrl' 
        })
});