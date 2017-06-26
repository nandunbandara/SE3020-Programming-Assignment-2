/**
 * Created by ntban_000 on 5/10/2017.
 */
angular.module('cinema',[
    'cinema.routes',
    //controllers
    'cinema.homeController',
    'cinema.registerController',
    'cinema.orderController',
    'cinema.dashboardController',
    'cinema.movieInfoController',
    'cinema.orderPaymentConfirmController',
//  services
    'cinema.orderService',
    'cinema.userService',
    'cinema.movieService'
])

//    set interceptor to set token in request headers
.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('tokenInterceptorFactory');
}])