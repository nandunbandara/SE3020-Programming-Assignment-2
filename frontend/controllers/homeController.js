/**
 * Created by ntban_000 on 5/10/2017.
 */
angular.module('cinema.homeController',[])

.controller('homeCtrl', ['$location', function($location){
    const app = this;
    //test user data
    const users = [];

    app.login = function(){
        $location.path('/dashboard');
        console.log("login function called");
    }

}])