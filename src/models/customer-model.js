const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    CustomerID: Number,
    FullName: String,
    DOB: String,
    Gender: String,
    Region: String,
    Email: String,
    Status: String,
    JoinDate: String,
}, {
    collection: 'customers'
});



module.exports = mongoose.model('customers', customerSchema);
