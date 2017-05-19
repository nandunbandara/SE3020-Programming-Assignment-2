/**
 * Created by ntban_000 on 5/19/2017.
 */
const express = require('express');
    paymentModel
router = express.Router();

router.post('/', (req,res)=>{
    if(req.body.phoneNumber==""||req.body.phoneNumber==undefined){
        res.status(400).json({message:"Invalid phone number"});
    }else if(req.body.amount==""||req.body.amount==undefined||req.body.amount=="0"){
        res.status(400).json({message:"Amount not set or is zero"});
    }else{

    }
})