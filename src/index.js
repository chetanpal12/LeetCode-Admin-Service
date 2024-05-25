const express=require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/ErrorHandler');
const connectToDB = require('./config/db.config');
const mongoose=require('mongoose')
// const errorHandler = require('./utils/errorHandler');


const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.get('/ping',(req,res)=>{
    return res.json({message:'admin service is alive'})
})

//If any request comes and routes starts with '/api' then we map it to apirouter
app.use('/api',apiRouter)

app.use(errorHandler);

app.listen(PORT,async (req,res)=>{
    console.log(`app is listning on the ${PORT}`);
    await connectToDB();
    console.log("successfully connected to db");

    //dummy code to remove
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
})