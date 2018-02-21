faceFoods.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    
    $stateProvider
        
        .state('Home', {
            url: '/Home',
            templateUrl: 'Home/Home.html',
            controller: 'HomeController' 
        })
});