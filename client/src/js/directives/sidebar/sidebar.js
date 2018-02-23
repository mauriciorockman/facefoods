faceFoods.directive('sidebar', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/sidebar/sidebar.html',
        replace: true,
        controller: function($scope){
            $scope.sideBar = {
                                0: {
                                    name: 'Início',
                                    route: 'Home',
                                    icon: 'fa-home'
                                },

                                1: {
                                    name:'Cardápio', 
                                    route: 'Menu', 
                                    icon: 'fa-bars'
                                }, 
                                
                                2: {
                                    name:'ChatBot', 
                                    route: 'undef', 
                                    icon: 'fa-cogs'
                                }, 
                                
                                3: {
                                    name:'Marketing', 
                                    route: 'undef', 
                                    icon: 'fa-chart-line'
                                }, 
                                
                                4: {
                                    name: 'Agrupado', 
                                    route: 'undef', 
                                    icon: 'fa-tree', 
                                    isTree: true, 
                                    branchs: {
                                                0:{
                                                    name: 'Branch1', 
                                                    route: 'undef'
                                                }, 
                                                1:{
                                                    name: 'Branch2', 
                                                    route: 'undef'
                                                }, 
                                                2:{
                                                    name: 'Branch3', 
                                                    route: 'undef'
                                                }
                                            }
                                    },

                                5: {
                                    name: 'Agrupado', 
                                    route: 'undef', 
                                    icon: 'fa-tree', 
                                    isTree: true, 
                                    branchs: {
                                                0:{
                                                    name: 'Branch1', 
                                                    route: 'undef'
                                                }, 
                                                1:{
                                                    name: 'Branch2', 
                                                    route: 'undef'
                                                }, 
                                                2:{
                                                    name: 'Branch3', 
                                                    route: 'undef'
                                                }
                                            }
                                    }
                                }    
        }
    }
})