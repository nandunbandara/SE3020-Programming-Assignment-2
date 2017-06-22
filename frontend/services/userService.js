/**
 * Created by ntban_000 on 6/22/2017.
 */
angular.module('cinema.userService',[])

.factory('userFactory', ['$http', function($http){
    const userFac = [];

    userFac.getAllUsers = ()=>{
        return $http.get('http://localhost:7001/users').then(function(data){
            return data;
        })
    }

    return userFac;
}])