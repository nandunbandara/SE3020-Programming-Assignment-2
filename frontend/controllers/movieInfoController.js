/**
 * Created by root on 6/26/17.
 */
angular.module('cinema.movieInfoController',[])

.controller('movieInfoController',['movieInfoFactory', function(movieInfoFactory){
    const app =  this;
    app.movie_data = movieInfoFactory.getInfo();

}])