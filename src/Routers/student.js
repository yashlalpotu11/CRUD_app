const express = require('express')
const router = new express.Router;
const Student = require('../models/students')

router.post('/students',async(req, res)=>{
    console.log(req.body);
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e);
    }
})

//read the data
router.get('/students', async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData)
    }catch(e){
        res.send(e);
    }
})
//get data of individual data
router.get('/students/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        // console.log(_id);
        
        const studentData = await Student.findById({_id})
        res.send(studentData)

    }catch(e){
        res.send(e);
    }
})


//update data of students by id
router.patch('/students/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudent);
    }catch(e){
        res.status(400).send(e);
    }
})

//delete data of students by id
router.delete('/students/:id', async(req, res)=>{
    try{
        const id = req.params.id
        const deleteStudent = await Student.findByIdAndDelete(id);
        res.send(deleteStudent)
    }catch(e){
        res.status(400).send(e);
    }
})

// router.post('/students', (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })


module.exports = router;