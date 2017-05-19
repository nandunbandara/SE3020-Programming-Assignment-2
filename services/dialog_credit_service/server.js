/**
 * Created by ntban_000 on 5/19/2017.
 */

const express = require('express')
    mongoose = require('mongoose')
    morgan = require('morgan')
    bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

//database connection
mongoose.connect('mongodb://root:pass123@ds147681.mlab.com:47681/se3020_dialog_payment_gateway', err=>{
    if(err){
        console.log('Connection to database failed!');
        return;
    }
    console.log('Connected to database!');
})

app.listen(7007, err=>{
    if(err){
        console.log("Cannot start service. Port already in use!");
        return;
    }
    console.log("Dailog payment service started on port 7007");
})