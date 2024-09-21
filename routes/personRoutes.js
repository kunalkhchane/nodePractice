const express = require('express')
const router = express.Router()

const Person = require('../models/person')

router.post('/' , async (req , res) => {
    try{
    const data = req.body   //Assuming that request body contains the person data

    //create a new Person document using the Mongoose model
    const newPerson = new Person(data)

    //save the new person to the database
    const response = await newPerson.save()
    console.log("Data saved")
    res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

//Get method to get the person's data
router.get('/' , async (req , res) => {
    try{
        const data = await Person.find()    
        res.status(200).json(data)
        console.log("data fetched successfully")
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.get('/:workType' , async (req , res) => {
    try{
        const workType = req.params.workType //Extract the work type from the URL parameter
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work:workType})
            console.log("Worktype fetched successfully")
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'Invalid work type'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})


//Update operation 
router.put('/:id' , async (req , res) => {
    try{
        const personId = req.params.id  //Extract the id from the url parameter
        const updatedPersonData = req.body   //Updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData , {
            new:true, //return the updated document
            runValidators:true //run mongoose validation 
        })

        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }

        console.log("Data updated successfully!!!")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})



//Delete Operation
router.delete('/:id' , async (req , res) => {
    try{
        const personId = req.params.id; //Extract the person's id from the URL parameter

        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:'person not found'})
        }

        console.log("person deleted successfully")
        res.status(200).json({message:'Data deleted successfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports = router