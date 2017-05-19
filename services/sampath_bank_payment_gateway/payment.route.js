/**
 * Created by ntban_000 on 5/19/2017.
 */
const express = require('express')
    mongoose = require('mongoose')

    //mongoose schemas
    Payment = require('./payment.model');

    //payment router
    router = express.Router();

router.post('/', (req,res)=>{
    if(req.body.name==""||req.body.name==undefined){
        res.status(400).json({message:"Account holder's name not set!"});
    }else if(req.body.amount==""||req.body.amount==undefined||req.body.amount=="0"){
        res.status(400).json({message:"Amount not set or is zero!"});
    }else if(req.body.account_id==""||req.body.account_id==undefined){
        res.status(400).json({message:"Invalid account!"});
    }else if(req.body.dateTime==""||req.body.dateTime==undefined){
        res.status(400).json({message:"Invalid date and time!"});
    }else{
        const payment = new Payment(req.body);
        payment.save().then(payment=>{
            res.json(payment);
        }).catch(err=>{
            console.log(err);
            res.status(500).json({error:err});
        })
    }
})

router.get('/', (req,res)=>{
    res.sendStatus(401);
})

module.exports = router;