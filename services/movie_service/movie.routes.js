/**
 * Created by ntban_000 on 6/24/2017.
 */
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.json({'message':'movie router test'});
})

module.exports = router;