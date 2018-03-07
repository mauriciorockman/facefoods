faceFoods.controller('DashboardController', function($scope, $state){
    $state.go('Dashboard.Home');
    $scope.sidebarToggle = function(){
        angular.element(document.querySelector('#body')).toggleClass('sidenav-toggled');        
    }
}) 