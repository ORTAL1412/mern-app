const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const URL = process.env.URL;

console.log(URL);

 mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
 }) 
 .then(() => { console.log("connecting success")})
 .catch((error)=>{console.error("error connecting! "); })


module.exports = mongoose.connection;