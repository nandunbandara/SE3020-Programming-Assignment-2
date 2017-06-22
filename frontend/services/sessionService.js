/**
 * Created by ntban_000 on 6/21/2017.
 */
angular.module('sessionService', [])

.factory('sessionDataFactory', [function(){
    const isLoggedIn = false;
    const get = () =>{
        return isLoggedIn;
    }

    const set = (status) =>{
        this.isLoggedIn = status;
    }

    return {
        getUserStatus: get,
        setUserStatus: set
    }
}])