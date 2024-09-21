const express = require('express')

const app = express()
const db = require('./db')
//const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',function(req , res) {
    res.send("Hello world");
})



//import the router files
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
//use the routers
app.use('/person' , personRoutes)
app.use('/menu' , menuRoutes)



app.listen(3000 , () => {
    console.log(`server is running on localhost:3000`)
})





/*
app.get('/sahil' , (req , res) => {
    res.send("Sahil")
})

app.get('/shiv' , (req , res) => {
    res.send("Shiv")
})

app.post('/person' , (req , res) => {
    res.send("Person")
})
*/