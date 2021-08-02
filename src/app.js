const express = require('express')
require('./db/connection')
const Student = require('./models/students')
const app = express();
const port = process.env.PORT || 3001

app.use(express.json());

app.post('/students',async(req, res)=>{
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
app.get('/students', async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData)
    }catch(e){
        res.send(e);
    }
})
//get data of individual data
app.get('/students/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        // console.log(_id);
        
        const studentData = await Student.findById({_id})
        res.send(studentData)

    }catch(e){
        res.send(e);
    }
})


// app.post('/students', (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })

app.listen(port, ()=>{
    console.log(`Connection is live on port ${port}`);
})