/**
 * Created by ntban_000 on 5/19/2017.
 */
const express = require('express')
    mongoose = require('mongoose')
    bodyParser = require('body-parser')
    morgan = require('morgan')

//app configurations
app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//echo requests to console
app.use(morgan('dev'));

//database connection
mongoose.connect('mongodb://root:pass123@ds147551.mlab.com:47551/se3020_sampath_bank_gateway',err=>{
    if(err){
        console.log("Connection to database failed!");
        return;
    }
    console.log("Connected to database :)");
})

//listen
app.listen(7008, err=>{
    if(err){
        console.log("Can not start service. Port already in use!");
        return;
    }
    console.log("Sampath Bank Payment Gateway server listening on 7001")
})