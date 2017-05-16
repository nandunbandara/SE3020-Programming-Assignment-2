/**
 * Created by ntban_000 on 5/15/2017.
 */
'use-strict';

const
    User    =   require('./user.model');
    express =   require('express');
    mongoose=   require('mongoose');
    mailjet =   require('node-mailjet').connect("e49bde0cda73ada102f220f80ff2d50d","57d9ff591447737dd0e50ef8ceea2293");
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
            //send welcome email
            mailjet.post("send")
                .request({
                    "FromEmail":"ntbandara3@hotmail.com",
                    "FromName":"CinemaTimes",
                    "Subject":"Welcome to Cinema Times",
                    "Text-part":"Dear "+userData.name+", Welcome to Cinema Times! And, please dont be this guy! Enjoy!",
                    "Html-part":"<h3>Dear "+userData.name+",</h3><br />Welcome to Cinema Times! And thanks for joining our community! " +
                            "Here is a quick guide to help you get started.<br><br>" +
                            "<h2>Book your seats</h2>" +
                            "Using our platform you ccould select your favourite theatre, your favourite movie and the best showtime and the best seats!<br><br>" +
                            "<h2>Want some snacks?</h2>" +
                            "Pre-order snacks online, which you will recieve to yout seats during the intermission.<br><br>" +
                            "<h2>Dine After</h2>" +
                            "Make reservations on the restaurants that are within each cinema complex and enjoy your dinner right after the movies!" +
                            "<br><br>And, dont be this guy! Save it for its gonna be a fun ride!<br>" +
                            "<img src='https://s-media-cache-ak0.pinimg.com/originals/b1/0a/19/b10a19e7264bbdcf7d4e81b267fc11fb.png'>" +
                            "<br><br>Enjoy!<br>Cinema Times Team",
                    "Recipients":[{"Email": userData.email}]
                }).then(result=>{
                    console.log(result.body);
                }).catch(err=>{
                    console.log(err);
                })
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

