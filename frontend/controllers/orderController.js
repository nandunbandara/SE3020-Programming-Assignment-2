/**
 * Created by ntban_000 on 6/5/2017.
 */
angular.module('cinema.orderController',[])

.controller('orderCtrl', ['orderDataFactory','$location', function(orderDataFactory,$location){
    var app = this;

    //get selected no of seats
    var count = $('#seats:selected').length;

    //snack variables
    app.popcorn = 0;
    app.salt = 0;
    app.cheese = 0;
    app.chicken = 0;
    app.coke = 0;
    app.pepsi = 0;

    app.total = (app.popcorn*250)+(app.salt*100)+(app.cheese*100)+(app.chicken*100)
        +(app.coke*100)+(app.pepsi*100);

    app.calcTotal = function(){
        app.total = (app.popcorn*250)+(app.salt*100)+(app.cheese*100)+(app.chicken*100)
            +(app.coke*100)+(app.pepsi*100);
    }

    //checkbox and textboxes
    document.getElementById('popcorn_txt').disabled = true;
    document.getElementById('salt_txt').disabled = true;
    document.getElementById('cheese_txt').disabled = true;
    document.getElementById('chicken_txt').disabled = true;
    document.getElementById('coke_txt').disabled = true;
    document.getElementById('pepsi_txt').disabled = true;

    document.getElementById('popcorn_check').onchange = function() {
        document.getElementById('popcorn_txt').disabled = !this.checked;
    };
    document.getElementById('salt_check').onchange = function() {
        document.getElementById('salt_txt').disabled = !this.checked;
    };
    document.getElementById('cheese_check').onchange = function() {
        document.getElementById('cheese_txt').disabled = !this.checked;
    };
    document.getElementById('chicken_check').onchange = function() {
        document.getElementById('chicken_txt').disabled = !this.checked;
    };
    document.getElementById('coke_check').onchange = function() {
        document.getElementById('coke_txt').disabled = !this.checked;
    };
    document.getElementById('pepsi_check').onchange = function() {
        document.getElementById('pepsi_txt').disabled = !this.checked;
    };

    app.proceed = function(){
        console.log("proceed")
        orderDataFactory.setOrderData(app.total);
        if(app.total!=0){
            $location.path('/order_payment');
        }
    }

}])