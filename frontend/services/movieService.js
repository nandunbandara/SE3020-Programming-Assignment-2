/**
 * Created by root on 6/26/17.
 */
angular.module('cinema.movieService',[])

.factory('movieDataFactory', ['$http', function($http){
    var movieFac = [];
    movieFac.getAllMovies = function(){
        return $http.get('http://localhost:7003/').then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }
    return movieFac;
}])