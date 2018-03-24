app.config(function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/Menu');
    
    $stateProvider
        
        .state('Menu', {
            url: '/Menu',
            templateUrl: 'Menu/Menu.html',
            controller: 'MenuCtrl' 
        })

        .state('PizzaOptions', {
            url: '/PizzaOptions',
            templateUrl: 'PizzaOptions/PizzaOptions.html',
            controller: 'PizzaOptionsCtrl' 
        })

        .state('PizzaFlavors', {
            url: '/PizzaFlavors',
            templateUrl: 'PizzaFlavors/PizzaFlavors.html',
            controller: 'PizzaFlavorsCtrl' 
        })

        .state('Delivery', {
            url: '/Delivery',
            templateUrl: 'Delivery/Delivery.html',
            controller: 'DeliveryCtrl' 
        })

        .state('Payment', {
            url: '/Payment',
            templateUrl: 'Payment/Payment.html',
            controller: 'PaymentCtrl' 
        })

        .state('OrderReview', {
            url: '/OrderReview',
            templateUrl: 'OrderReview/OrderReview.html',
            controller: 'OrderReviewCtrl' 
        })

        .state('ExtraGeneral', {
            url: '/ExtraGeneral',
            templateUrl: 'ExtraGeneral/ExtraGeneral.html',
            controller: 'ExtraGeneralCtrl' 
        })
}); 