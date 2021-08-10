const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const CONNECTION_URL = process.env.CONNECTION_URL;

// console.log(URL);

 mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
 }) 
 .then(() => console.log("connecting success"))
 .catch((error)=>console.error("error connecting! "))


module.exports = mongoose.connection;