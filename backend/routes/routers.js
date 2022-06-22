const express = require('express');
const session = require('express-session');
const { mutateExecOptions } = require('nodemon/lib/config/load');
const Users = require('../models/Userschema');
const Router = express();
const User = require('../models/Userschema')


Router.use(session({
    secret: "thisismysecrctekjsbdbdgsjbeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    resave: false
}));

Router.post("/signup", async (req,res)=>{
    let {username, email, password} = req.body;
    console.log(req.body, "jjjjjjjjjjjjjjjjjjjjjj");
    if(!username || !email || !password){
      res.status(404).json("Fill All Input");
      // stop further execution in this callback
      return;
     }
    try{
        let preuser = await Users.findOne({email:email});
        if(preuser){
            res.status(404).json('User alrady Register');
        }else{
            let addUser = new User({
                username,email,password
            })
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
    }
    catch(error){ 
        res.status(404).json(error)
    }

})


Router.post("/signin", async (req, res)=>{
    let{email, password} = req.body
    // console.log(email,password);  
    if(!email || !password){
        res.status(404).json('Fill all field')
    }else{
        let parser = await Users.findOne({email:email});
        if(parser){
            if(parser.password == password){
                req.session.user = parser;
                res.status(202).json(req.session.user);                
            }else{
                res.status(404).json('Password is Wrong');
            }
        }
    }
})

module.exports = Router;