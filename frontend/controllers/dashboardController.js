/**
 * Created by ntban_000 on 6/9/2017.
 */
angular.module('cinema.dashboardController',[])

.controller('dashboardController',['userFactory','movieDataFactory', function(userFactory,movieDataFactory){
    const app = this;
    app.users;
    app.test = "sample text";
    userFactory.getAllUsers().then(function(data){
        app.users = data.data;
        // console.log(users);
        console.log(this.users)
    })

//    gell all available movies
    movieDataFactory.getAllMovies().then(function(data){
        app.movies = data.data;
        console.log(app.movies);
    }).catch(function(err){
        if(err) console.log(err);
    })
}])