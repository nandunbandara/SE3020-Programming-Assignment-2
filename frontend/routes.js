/**
 * Created by ntban_000 on 5/10/2017.
 */
angular.module('cinema.routes',['ngRoute'])

.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl as home'
        })

        .when('/register',{
            templateUrl: 'templates/register.html',
            controller: 'registerCtrl as reg'
        })

        .when('/order',{
            templateUrl: 'templates/order.html',
            controller: 'orderCtrl as order'
        })

        .when('/order_payment',{
            templateUrl: 'templates/order_payment.html',
            controller: 'orderPaymentController as orderPay'
        })

        .when('order_payment_confirm',{
            templateUrl: 'templates/order_payment_confirm.html',
            controller: 'orderPaymentConfirmController as payConfirm'
        })

        .when('/dashboard',{
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardController as dash'
        })

        .when('/movie_info',{
            templateUrl: 'templates/movie_info.html',
            controller: 'movieInfoController as info'
        })
}])