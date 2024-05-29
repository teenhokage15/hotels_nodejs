const express = require('express')
const router =  express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res)=>{
    try{
   const data = req.body
   
   const newPerson = new Person(data);
   
   const savedPerson = await newPerson.save(); 
   console.log('data saved');
   const response = savedPerson;   
   res.status(200).json(response);
   }
    catch(err){
       console.error(err);
       res.status(500).json({error:'internal server Error'});
        
    }
    
   })
    
router.get('/', async (req, res)=>{
    try{
const data = await Person.find();
console.log('data fetched');
res.status(200).json(data)

    }
    catch(err){
        console.err(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:workType', async(req ,res)=>{
    try{
        const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
    }
    else{
        res.status(404).json({error: 'Invalid work type'})
    }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    
})

router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,
            runValidator: true,
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
       
        console.log('data updated');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal server error'});
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        console.log('data fetched');
        res.status(200).json({message:'person deleted'})
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'internal server error'});
        
    }
})

module.exports = router;