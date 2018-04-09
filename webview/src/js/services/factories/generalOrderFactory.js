app.factory('generalOrderFactory', ['$rootScope', 'shopCartFactory', function ($rootScope, shopCartFactory) {
    var generalOrderFactory = {};
    var template = {
        type: 'general',
        name: "",
        price: 0,
        qty: 1,
        id: 0,
        availableExtras: [],
        extras: []
    }
    
    function searchAndDelete(){
        $rootScope.generalOrder.extras.forEach( function(extra, index){
            if(extra.type == 1){
                $rootScope.generalOrder.extras.splice(index, 1);                
            }
        })
    }

    function totalQty(){
        var total = 0;
        $rootScope.generalOrder.extras.forEach( function(extra, index){
            if(extra.type == 2){
                total += extra.qty            
            }
        })
        return(total);
    }

    generalOrderFactory.reset = function(){
        $rootScope.generalOrder = JSON.parse(angular.toJson(template));
    }

    generalOrderFactory.addProduct = function(product){
        generalOrderFactory.reset();
        $rootScope.generalOrder.id = product.id;
        $rootScope.generalOrder.name = product.name;
        $rootScope.generalOrder.price = product.price;
        $rootScope.generalOrder.availableExtras = product.extras;
    }

    generalOrderFactory.addExtra = function(extra){
        if($rootScope.generalOrder.availableExtras.indexOf(extra.id)>=0){
            if(extra.type==1){
                searchAndDelete();
            }

            $rootScope.generalOrder.extras.push(extra);
        }
    }

    generalOrderFactory.selectQty = function(subID){
        var found, index 
        
        $rootScope.generalOrder.extras.forEach( function(extra, i){
            if(extra.subID == subID){
                found = true;
                index = i;
            }
        }) 

        return ((found == true) ? $rootScope.generalOrder.extras[index].qty : 0)
    }

    generalOrderFactory.incrementQty = function(detail, qtyMax){
        var found = false

        if(totalQty()==qtyMax){
            return 'full';
        }

        $rootScope.generalOrder.extras.forEach(function(extra, index){
            if(extra.subID == detail.subID){
                $rootScope.generalOrder.extras[index].qty++;
                found = true;
            }
        })

        if(!found){
            detail.qty = 1
            generalOrderFactory.addExtra(detail);
        }
    }


    generalOrderFactory.decrementQty = function(subID, qtyMin){
        $rootScope.generalOrder.extras.forEach( function(extra, index){
            if(extra.subID == subID && extra.qty > qtyMin){
                $rootScope.generalOrder.extras[index].qty--;
            }

            if(extra.subID == subID && extra.qty == qtyMin){
                $rootScope.generalOrder.extras.splice(index, 1);        
            }
        })
    }

    generalOrderFactory.finish = function(){
        shopCartFactory.addOrder($rootScope.generalOrder);
        generalOrderFactory.reset();        
    }

    return generalOrderFactory;
}]);