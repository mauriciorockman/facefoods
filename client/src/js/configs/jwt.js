faceFoods.config(function Config($httpProvider, jwtOptionsProvider) {
    jwtOptionsProvider.config({
        tokenGetter: function(options) {
            if (options.url.substr(options.url.length - 5) == '.html') {
                return null;
            }
            
            return localStorage.getItem('id_token');
        },
        unauthenticatedRedirector: ['$state', function($state) {
            $state.go('Login');
        }],
        whiteListedDomains: ['localhost']
    });

    $httpProvider.interceptors.push('jwtInterceptor');
})