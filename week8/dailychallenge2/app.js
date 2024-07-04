const express = require('express')
const app = express()
const router = require('./route') 

app.use(express.json())
app.use(express.static('public'))

app.use('/', router)


app.listen(4000, (req, res)=>{
    console.log('Server is listening on 4000');
})