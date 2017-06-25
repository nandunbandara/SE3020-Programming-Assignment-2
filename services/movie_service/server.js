const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const router = require('./movie.routes');

app.use('/',router);

app.listen('7003', function(err){
    if(err){
        console.log('Can not listen on port 7003. Shutting down server.');
        return;
    }
    console.log('Server starting up...\nListening on port 7003 for connections!');
})