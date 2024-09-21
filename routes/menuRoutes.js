const express = require('express')
const router = express.Router()

const menuItem = require('../models/menuItem')

//MenuItem get and post methods
router.post('/' , async (req , res) => {
    try{
       const data = req.body

       const newMenuItem = new menuItem(data)

       const response = await newMenuItem.save()
       res.status(200).json(response)
       console.log("Data saved sucessfully")
    }
    catch(e){
        console.log(e)
        res.status(500).json({error:'Internal server error'})
    }
})

router.get('/' , async (req , res) => {
    try{
        const data = await menuItem.find()
        res.status(200).json(data)
        console.log("Data found/fetched sucessfully")
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

router.get('/:tasteType' , async (req , res) => {
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == "spicy" || tasteType == "sour" || tasteType == "sweet"){
            const data = await menuItem.find({taste:tasteType})
            res.status(200).json(data)
            console.log("Data fetched succesfully using taste types")
        }
        else{
            res.status(404).json({error:'Invalid taste entered'})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports = router