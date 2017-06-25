 /**
 * Created by ntban_000 on 5/17/2017.
 */
 const
     express     = require('express')
 app         = express();
 body_parser = require('body-parser');
 morgan      = require('morgan');
 mongoose    = require('mongoose');
 //mailjet service to send emails to users
 mailjet     = require('node-mailjet');
 //json web tokens to validate users
 jwt         = require('jsonwebtoken');
 //application configurations
 config      = require('./config');
 userRouter  = require('./user.route');

 app.use(body_parser.urlencoded({ extended: false }));
 app.use(body_parser.json());

 //log requests to console
 app.use(morgan('dev'));

 //set routes
 app.use('/users', userRouter);

 //initial display

 //connect to database
 mongoose.connect(config.database, function(err){
     if(err){
         console.log("Connection to database unsuccessful! :(");
         return;
     }
     console.log('Connection to database successful! :)');
 });

 app.listen(7002, function(err){
     if(err){
         console.log("Error: Can not startup server :(\nPort already in use!");
         return;
     }
     console.log('Authentication service server listening on 7001');
 })