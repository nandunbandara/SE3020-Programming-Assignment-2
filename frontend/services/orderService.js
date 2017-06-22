/**
 * Created by ntban_000 on 6/21/2017.
 */
angular.module('cinema.orderService',[])

//to share order data between order, order_payment, and order_payment_confirm views
.factory('orderDataFactory', function(){
    var orderData = {};
    function set(data){
        orderData = data;
    }

    function get(){
        return orderData;
    }

    return {
        set: set,
        get: get
    }
})