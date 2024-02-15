const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true},
    password: String
}, 
{ collection: 'UserData' }
);

mongoose.model('UserData', UserDataSchema);