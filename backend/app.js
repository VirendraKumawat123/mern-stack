require('dotenv').config();
require('nodemon');
const express = require('express');
const App = express();
require('./db/db'); 
const Users = require('./models/Userschema');
const cors = require('cors');
const { use } = require('express/lib/application');
const Router = require('./routes/routers')
const Port = 7000;

App.use(cors());
App.use(express.json());
App.use(Router);




App.listen(Port, (err)=>{
    if(err){console.log(err)}
    console.log(`Port is listen on ${Port}`)
})
