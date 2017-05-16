/**
 * Created by ntban_000 on 5/15/2017.
 */
'use-strict';

const
    User    =   require('./user.model');
    express =   require('express');
    mongoose=   require('mongoose');

    router  =   express.Router();

//register new user
router.post('/', (req,res)=>{
    //validate request body
    if(req.body.name==""||req.body.name==undefined){
        res.status(400).json({message: "Name undefined or blank"});
    }else if(req.body.email==""||req.body.email==undefined){
        res.status(400).json({message: "Email is undefined or blank"});
    }else if(req.body.password==""||req.body.password==undefined){
        res.status(400).json({message: "Password is undefined or blank"});
    }else{
        //add new user record
        const user = new User(req.body);
        user.save().then(userData=>{
            res.json(userData);
        }).catch(err=>{
            console.log(err);
            res.sendStatus(500);
        });
    }
})

//get all users
router.get('/', (req,res)=>{
    User.find().exec().then(users=>{
        res.json(users);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;

