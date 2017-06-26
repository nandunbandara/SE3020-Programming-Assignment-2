/**
 * Created by ntban_000 on 6/9/2017.
 */
angular.module('cinema.dashboardController',[])

.controller('dashboardController',['userFactory','movieDataFactory','movieInfoFactory','$location',
    function(userFactory,movieDataFactory,movieInfoFactory,$location){
    const app = this;
    app.test = "sample text";

    //view control variables
    app.movies_per_line = 3;

//    gell all available movies
    movieDataFactory.getAllMovies().then(function(data){
        app.movies = data.data;
        console.log();
        app.lines_of_movies = (Object.keys(app.movies).length/app.movies_per_line)+1;
    }).catch(function(err){
        if(err) console.log(err);
    })

//    view movie info
    app.viewInfo = function(movie){
        movieInfoFactory.setInfo(app.movies[movie]);
        $location.path('/movie_info')
    }

//    goto booking
    app.book = function(){
        console.log("booking called")
    }
}])