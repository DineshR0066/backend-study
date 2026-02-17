const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb://localhost:27017/myDatabase');

connectDB.then(()=>{
    console.log("Database connected Successfully");
})
.catch((error)=>{
    console.log(error.message);
})

module.exports = connectDB;