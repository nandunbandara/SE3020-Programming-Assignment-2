/**
 * Created by ntban_000 on 5/17/2017.
 */
const Order = require('./order.model')
    express = require('express')
    mongoose = require('mongoose')
    router  = express.Router();

//get all orders
router.get('/', (req,res)=>{
    Order.find().exec().then(orders=>{
        res.json(orders);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })
})

//add new order
router.post('/',(req,res)=>{
    //validate user
    if(1==2){

    }else{
        const order =  new Order(req.body);
        order.save().then(orderData=>{
            res.json(orderData);
        }).catch(err=>{
            console.log(err);
            res.sendStatus(500);
        })
    }
})

//update order

//delete order