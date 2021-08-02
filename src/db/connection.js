const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/studentsAPI',{
    useCreateIndex : true, useNewUrlParser : true,
    useUnifiedTopology : true, useFindAndModify : false
}).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})