/**
 * Created by ntban_000 on 6/24/2017.
 */
const express = require('express');
const router = express.Router();

const movies = require('./movies.json');

router.get('/',function(req,res){
    res.json(movies);
})

module.exports = router;