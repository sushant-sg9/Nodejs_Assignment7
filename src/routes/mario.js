const router = require('express').Router();
const e = require('express');
const marioModel = require('../models/marioChar');

router.get("/mario",async (req,res)=>{
    let data=await marioModel.find()
    res.send(data)
})

router.get('/mario/:id',async (req,res)=>{
    // console.log(req.params)
    
    try{
        let data=await marioModel.find({_id:req.params.id})
        console.log(data)
        if(!data.length || data==""){
            throw new Error("There is no person with that ID");
       
        }else{
            res.json(data)
        }
    }
    
    catch(e){
        res.status(400).json({
            message:e.message
        })
    }
   
})

router.post('/mario',async (req,res)=>{
    // console.log(req.body)
    try{
        if(!req.body.name || !req.body.age){
            throw new Error("either name or weight is missing")
        }else{
            let data=await marioModel.create(req.body)
            res.status(201).json({message:"successfuly submited",
                                    data})
        }
        
    }
    catch(e){
        res.json({
            message:e.message
        })
    }
   
})


router.patch('/mario/:id',async (req,res)=>{

    try{
        let data=await marioModel.updateOne({_id:req.params.id},{$set:req.body})
        if(data.n==0 ){
            throw new Error("There is no person with that ID")
        }else{
           
            res.status(201).json({message:"succesfully updated",data})
        }
        
    }
    catch(e){
        res.status(400).json({
            message:e.message
        })
    }
   
})


router.delete('/mario/:id',async (req,res)=>{

    try{
        let data=await marioModel.deleteOne({_id:req.params.id})
        if(data.n==0 ){
            throw new Error("There is no person with that ID")
        }else{
           
            res.status(200).json({message:"character deleted"})
        }
        
    }
    catch(e){
        res.status(400).json({
            message:e.message
        })
    }
   
})

module.exports=router