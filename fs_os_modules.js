/*
var fs = require('fs')
var os = require('os')


var user = os.userInfo() // this function gives the information about the user of the system

//console.log(user)
//console.log(user.username)

fs.appendFile('greeting.txt' , "Hi there "+user.username+"!!\n" , () => {
    console.log("File is created")
})
*/


//Now we are going to see how we can import the files 

var notes = require('./notes.js')
console.log("this statement is from server.js file")

let age = notes.age
console.log(age)

let result = notes.add(5,7)
console.log(result)




//Now lets see about 'lodash' library
var _ = require('lodash')

var data = ["person","person",1,2,2,'name','age','2']
console.log(data)

var filter = _.uniq(data)
console.log(filter)


//lodash : lodash is the javascript library which helps us working with the arrays , strings , numbers , objects

