const mongoose = require('mongoose')
const dotnev = require('dotenv').config();


module.exports.connection = async () => {
    
    await mongoose.connect(process.env.MONGODB_URI);

}