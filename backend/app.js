const express = require('express');
const app = express();
const FitnessRoutes = require('./api/routes/fitnessDetails');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
 
mongoose.connect('mongodb+srv://Chandra63:chandra@cluster0.3djwmm5.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',()=>{
    console.log('database connection is filed...')
})
mongoose.connection.on('connected',()=>{
    console.log('database is connectied...')
})
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
 
app.use(cors())
app.use('/fitnessDetails',FitnessRoutes)
app.use((req,res,next)=>{
    res.status(200).json({
        msg:'app is runing'
    })
})

module.exports=app;