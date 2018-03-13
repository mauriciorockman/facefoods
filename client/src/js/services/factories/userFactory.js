faceFoods.factory('userFactory', ['$http', '$resource', 'apiURL', function($http, $resource, apiURL) {
    var userFactory = {};
    var baseURL = apiURL.get()+'/api/user/'; 

    userFactory.loadData = $resource(baseURL+'data');
    userFactory.isAuthed = $resource(baseURL+'authed');

    return userFactory;
}]);