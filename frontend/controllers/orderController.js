/**
 * Created by ntban_000 on 6/5/2017.
 */
angular.module('cinema.orderController',[])

.controller('orderCtrl', [function(){
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
}])