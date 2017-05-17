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

//get order by id
router.get('/:id', (req,res)=>{
    Order.findById(req.params.id).exec().then(order=>{
        res.json(order);
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
router.put('/:id', (req,res)=>{
    const order = new Order(req.body);
    Order.findByIdAndUpdate(req.params.id, {$set: order}).then(order=>{
        res.json(order);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })
})
//delete order
router.delete('/:id', (req,res)=>{
    Order.findByIdAndRemove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })
})