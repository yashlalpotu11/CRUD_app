const express = require('express')
require('./db/connection')
const Student = require('./models/students')
const app = express();
const port = process.env.PORT || 3001

app.use(express.json());

app.post('/students', (req,res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err);
    })
    // res.send("Hello from Yash")
})

app.listen(port, ()=>{
    console.log(`Connection is live on port ${port}`);
})