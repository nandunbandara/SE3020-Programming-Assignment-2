/**
 * Created by ntban_000 on 5/15/2017.
 */
const
express     = require('express')
app         = express();
body_parser = require('body-parser');
morgan      = require('morgan');
mongoose    = require('mongoose');

//json web tokens to validate users
jwt         = require('jsonwebtoken');
//application configurations
config      = require('./config');
//user schema
User        = require('./user.model')

app.listen(7001, function(){
    console.log('Authentication service server listening on 7001');
})