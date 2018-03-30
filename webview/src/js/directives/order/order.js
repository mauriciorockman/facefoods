app.directive('order', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/order/order.html',
        replace: true,
        scope: {
            order: '=order'
        }
    }
})