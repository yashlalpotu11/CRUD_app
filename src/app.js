const express = require('express')
const app = express();
const port = process.env.PORT || 3001

app.post('/students', (req,res) => {
//   console.info('body', req.body)
//   res.json(req.body);
    res.send("Hello from Yash")
})

app.listen(port, ()=>{
    console.log(`Connection is live on port ${port}`);
})