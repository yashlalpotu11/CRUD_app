const express = require('express')
require('./db/connection')
const Student = require('./models/students')
const app = express();
const port = process.env.PORT || 3001
const studentRouter = require('./Routers/student')

app.use(express.json());
app.use(studentRouter);


app.listen(port, ()=>{
    console.log(`Connection is live on port ${port}`);
})