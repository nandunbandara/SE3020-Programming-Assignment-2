/**
 * Created by ntban_000 on 5/10/2017.
 */
angular.module('cinema.homeController',[])

.controller('homeCtrl', ['$location','userFactory', function($location,userFactory){
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
        if(app.login_email==""||app.login_email==undefined){
            console.log("email undefined");
        }else if(app.login_password==""||app.login_password==undefined){
            console.log("password undefined");
        }else{
            var login_data = {};
            login_data.email = app.login_email;
            login_data.password = app.login_password;
            userFactory.login(data).then(function(data){
                $location.path('/dashboard');
                console.log(data);
            }).catch(function(err){
                console.log(err);
            })
        }
    }

//    signup function
    app.signup = function(){
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
            var signup_details = {};
            signup_details.name = app.signup_name;
            signup_details.email = app.signup_email;
            signup_details.password = app.signup_password;
            userFactory.signup(signup_details).then(function(data){
                console.log(data);
            }).catch(function(err){
                console.log(err);
            })
        }
    }

}])