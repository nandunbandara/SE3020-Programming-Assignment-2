/**
 * Created by ntban_000 on 6/9/2017.
 */
angular.module('cinema.dashboardController',[])

.controller('dashboardController',['userFactory','movieDataFactory', function(userFactory,movieDataFactory){
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
}])