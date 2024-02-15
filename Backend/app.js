const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:showTHEcode@cluster0.ndydelu.mongodb.net/';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

require('./db');
const User= mongoose.model('UserData'); 

app.get('/', (req, res) => {

    });
app.post('/login',async (req, res) => {
    const{name, email , password} = req.body;
    const oldUser = await User.findOne({email});
    if(oldUser){
        return res.send('User does exist');
    }
    try{
        await User.create({name, email, password});
        res.send({status: 'ok', message: 'User created'});
    }catch(err){
        res.send('Error: ' + err);
    }

})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})