/**
 * Created by root on 6/26/17.
 */
angular.module('cinema.orderPaymentConfirmController',[])

.controller('orderPaymentConfirmController',['creditCardFactory','dialogCreditFactory', function(creditCardFactory,dialogCreditFactory){
    const app = this;
    //select method of payment and process
    this.pay = function(data){
        if(data.method=="credit"){
            creditCardFactory.pay(data.data).then(function(data){
                console.log(data);
            }).catch(function(err){
                console.log(err);
            })
        }else if(data.method=='dialog'){
            dialogCreditFactory.pay(data.data).then(function(data){
                console.log(data);
            }).catch(function(err){
                console.log(err);
            })
        }
    }
}])