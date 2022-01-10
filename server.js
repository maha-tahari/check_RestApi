const mongoose = require("mongoose")
const dotenv = require('dotenv');
const { response } = require("express");
dotenv.config({ path: './config/.env' })
mongoose.connect(process.env.MONGO_URI, function(err){
    if (err) 
        {
            console.error('Connexion to database failed')
        }
    else
        {
            console.log('Connected to database')
        }    
    
});

const express = require("express")
const app = express()
const user = require('./models/User')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/users/api', require('./routes/Person'))


app.listen("3000", function(err){
    try 
    {console.log('Server running on port 3000')}
    catch    
    {console.error(err)}
})