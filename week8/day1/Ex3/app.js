const express = require('express')
const app = express()
const router = require('./routes/books')

app.use(express.json())


app.use('/', router)

app.listen(4000, (req, res)=>{
    console.log('Server is listening on 4000');
})

