const express=require('express');
const v1Router=require('./v1')

const apirouter=express.Router();

apirouter.use('/v1',v1Router);

module.exports=apirouter

