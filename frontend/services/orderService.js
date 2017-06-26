/**
 * Created by ntban_000 on 6/21/2017.
 */
angular.module('cinema.orderService',[])

//to share order data between order, order_payment, and order_payment_confirm views
.factory('orderDataFactory', function(){
    var orderData;
    var orderDataFac  = [];

    orderDataFac.setOrderData = function(data){
        orderData = data;
    }

    orderDataFac.getOrderData = function(){
        return orderData;
    }

    return orderDataFac;
})

//credit card payment process
.factory('creditCardFactory', ['$http', function($http){
    var ccFac = [];
    ccFac.pay = function(data){
        $http.post('http://localhost::8280/services/sampath_pay').then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }
}])


//dialog payment process
.factory('dialogCreditFactory',['$http', function($http){
    var dialogCreditFac = [];
    dialogCreditFac.pay = function(data){
        $http.post('http://localhost:8280/services/dialog_credit').then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }
}])