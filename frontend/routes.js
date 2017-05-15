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
}])