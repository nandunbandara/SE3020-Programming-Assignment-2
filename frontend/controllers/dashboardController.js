/**
 * Created by ntban_000 on 6/9/2017.
 */
angular.module('cinema.dashboardController',[])

.controller('dashboardController',['userFactory', function(userFactory){
    console.log("dashboard controller")
    const app = this;
    app.users;
    app.test = "sample text";
    userFactory.getAllUsers().then(function(data){
        app.users = data.data;
        // console.log(users);
        console.log(this.users)
    })
}])