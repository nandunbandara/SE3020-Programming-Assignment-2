/**
 * Created by ntban_000 on 5/10/2017.
 */
angular.module('cinema.homeController',[])

.controller('homeCtrl', ['$location','userFactory', function($location){
    const app = this;
    //test user data
    const users = [];

    //validation
    app.signup_error = false;
    app.login_error = false;
    //validation messages
    app.signup_error_message = "";
    app.login_error_message = "";

    app.login = function(){
        $location.path('/dashboard');
        console.log("login function called");
    }

//    signup function
    app.signup = function(){
        console.log("signup called")
        console.log(app.signup_name)

        if(app.signup_name==""||app.signup_name==undefined){
            console.log("name not defined")
        }else if(app.signup_email==""||app.signup_email==undefined){
            console.log("email is not defined")
        }else if(app.signup_password==""||app.signup_password==undefined){
            console.log("password is not defined")
        }else if(app.signup_password_confirm==""||app.signup_password_confirm==undefined){
            console.log("password is not confirmed")
        }else if(app.signup_password!=app.signup_password_confirm){
            console.log("passwords do not match");
        }else{
            var signup_details = [];
            signup_details.name = app.signup_name;
            signup_details.email = app.signup_email;
            signup_details.password = app.signup_password;
        }
    }

}])