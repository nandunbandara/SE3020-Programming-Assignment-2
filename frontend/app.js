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
//  services
    'cinema.orderService',
    'cinema.userService'
]);