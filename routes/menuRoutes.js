const express = require('express');
const router = express.Router();
const menu = require("./../models/menuItems.js")
router.post("/", async (req, res)=>{    
    try {   
     const data = req.body;
      
     const name = await menu.findOne({name: data.name})
     if(name){
         return res.status(400).json({error: 'This Item is already exists in menu list'});
     }
     const newItem = new menu(data);
     const response = await newItem.save();
     console.log("New Item Is Saved to MenuList");
     res.status(200).json(response)
    } catch (err) {
     console.error(err);
     res.status(500).json({ error: "Internal Server Error" });
    }  
   });
 
   router.get("/", async(req , res)=>{
     try {
         const data = await menu.find();
         console.log("Menu Items Are displayed");
         res.status(200).json(data);
          
     } catch (err) {
     console.error(err);
     res.status(500).json({ error: "Internal Server Error" });
     }
   });
 
   router.get('/:itemType', async (req, res)=>{
     try {
        const itemType = req.params.itemType;
        
        if(itemType == 'Sweet' || itemType == 'Spicy' || itemType == 'Sour' )
         {
         const response = await menu.find({taste: itemType});
         console.log("response fetched");
         res.status(200).json(response);          
        }else{
         res.status(404).json({error: "Invalid Item Type"})
        }
 
     } catch (err) {
       console.error(err);
       res.status(500).json({ error: "Internal Server Error" });
     }
   });

   router.put('/:id', async (req, res)=>{
    try {
        const menuId = req.params.id;
        const menuUpdatedData=req.body;
        const response = await menu.findByIdAndUpdate(menuId, menuUpdatedData,{
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error: "Item Not Found"})
        }
        console.log("Menu Data Updated");
        res.status(200).json(response);
        
    } catch (err) {
        console.error(err);
       res.status(500).json({ error: "Internal Server Error" });
    }
   });

   router.delete('/:id', async (req, res) => {
    try {
        
    } catch (err) {
        
    }
   });
     



   module.exports=router;