faceFoods.factory('userFactory', ['$http', '$resource', 'apiURL', function($http, $resource, apiURL) {
    var userFactory = {};
    var baseURL = apiURL.get()+'api/auth/'; 

    userFactory.loadData = $resource(baseURL+'user');
    // userFactory.isAuthed = $resource(baseURL+'authed');

    return userFactory;
}]);