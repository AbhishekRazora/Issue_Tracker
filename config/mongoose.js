// require('dotenv').config({path:'./env'})
const mongoose = require('mongoose');

// mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);
mongoose.connect(`${process.env.DB_URL}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;