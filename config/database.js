const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://precticehtml:BqpNiecoJwns9Rov@cluster0.ilmgjfl.mongodb.net/books');

const db = mongoose.connection;

db.on('connected',(err) =>{
    if(err){
        console.log("Mongodb not connected");
        return false;
    }
    console.log("Mongodb connected");
})

module.exports = db;