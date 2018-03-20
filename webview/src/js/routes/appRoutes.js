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

        .state('entrega', {
            url: '/entrega',
            templateUrl: 'entrega/entrega.html',
            controller: 'MenuCtrl' 
        })

        .state('pagamento', {
            url: '/pagamento',
            templateUrl: 'pagamento/pagamento.html',
            controller: 'MenuCtrl' 
        })

        .state('resumoPedido', {
            url: '/resumoPedido',
            templateUrl: 'resumoPedido/resumoPedido.html',
            controller: 'MenuCtrl' 
        })


        .state('extraGeral', {
            url: '/extra',
            templateUrl: 'extraGeral/extraGeral.html',
            controller: 'MenuCtrl' 
        })
}); 