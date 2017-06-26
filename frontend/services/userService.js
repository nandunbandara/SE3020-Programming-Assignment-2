/**
 * Created by ntban_000 on 6/22/2017.
 */
angular.module('cinema.userService',[])

.factory('userFactory', ['$http','tokenFactory', function($http, tokenFactory){
    const userFac = [];

    userFac.getAllUsers = ()=>{
        return $http.get('http://localhost:8280/services/users').then(function(data){
            return data;
        })
    }
    //login function
    userFac.login = function(data){
        return $http.post('http://localhost:8280/services/users/authenticate', data).then(function(data){
            tokenFactory.setToken(data.data.token);
            return data;
        }).catch(function(err){
            return err;
        });
    }
    //signup - new user
    userFac.signup = function(data){
        console.log(data);
        return $http.post('http://localhost:8280/services/users',data).then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }

    return userFac;
}])


//token factory to set and get token (within application)
.factory('tokenFactory', ['$window', function($window){
    const tokenFac = [];
    //store token in the local storage
    tokenFac.setToken = function(token){
        if(token){
            $window.localStorage.setItem('cinemaToken', token);
        }else{
            $window.localStorage.removeItem('cinemaToken');
        }
    }

    //get token from the local storage
    tokenFac.getToken = function(){
        return $window.localStorage.getItem('cinemaToken');
    }

    return tokenFac;
}])


//embed tokens in requests
.factory('tokenInterceptorFactory', ['tokenFactory', function(tokenFactory){
    const tokenInterceptor = [];

    tokenInterceptor.request = function(req){
        const token = tokenFactory.getToken();
        if(token){
            req.headers['x-access-token'] = token;
        }
        return req;
    }

    return tokenInterceptor;
}])