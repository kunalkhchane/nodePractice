const mongoose = require('mongoose')
require('dotenv').config()

//Define the mongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGO_DB_LOCAL


//setup mongodb connection
mongoose.connect(mongoURL ,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

//get the default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;


//Define event listeners for database connection
db.on('connected' , () => {
    console.log("Database connection has successfully made...")
    //alert("Connection has done scussessfully!!!!")
})

db.on('error' , (err) => {
    console.log("MongoDB connection error because of ",err)
})

db.on('disconnected' , () => {
    console.log('database connection has disconnected')
})


//Export the database connection
module.exports = db;
