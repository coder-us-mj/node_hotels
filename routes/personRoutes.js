const express = require('express');
const router = express.Router();
const person = require("./../models/person.js");
router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming the reqest body contains the person data
  
      // create a new person document using the mongoose model
  
      const email = await person.findOne({ email: data.email });
      if(email){
         return res.status(400).json({error: "This email is already exists"})
      }
      const newPerson = new person(data);
      // save the person document to the database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
     } 
     catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.get("/", async (req, res) => {
          
    try {
        const data = await person.find();
        console.log("Data fatched");
        res.status(200).json(data);
        
    } catch (error) {
        console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
    }
  });

    router.get('/:workType', async (req, res) => {
       try{
        const workType = req.params.workType;

       if(workType == "chef" || workType == "manager" || workType == "waiter"){
        const response = await person.find({work: workType});
        console.log("Data fatched");
        res.status(200).json(response);
       }else{
       res.status(404).json({error: "Invalid Work Type"})
       }
       }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
       }
    });
    
    router.put('/:id', async (req, res) => {
       try {
       const personId = req.params.id;
       const updatePersonData = req.body;
       const response = await person.findByIdAndUpdate(personId, updatePersonData ,{
           new: true,
           runValidators: true,
       })
       if(!response){
        return res.status(404).json({error: "Person Not Found"})
       }
       console.log("Found Data Updated");
       res.status(200).json(response);
       } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
       }
    });
    router.delete('/:id', async (req, res) => {
        try {
            const personId = req.params.id;
            const response = await person.findByIdAndDelete(personId);
            if(!response){
                return res.status(404).json({error: "Person Not Found"})
               } 
            console.log('data deleted');
            res.status(200).json(response)   
        } catch (err) {
            console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
        }
    })

  module.exports= router;