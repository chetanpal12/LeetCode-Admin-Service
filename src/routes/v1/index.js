const express=require('express');
const problemRouter=require('./problem.routes')
const v1Router=express.Router();

//If any request comes and routes continues with '/problems' then we map it to problemRouter
v1Router.use('/problems',problemRouter)

module.exports= v1Router