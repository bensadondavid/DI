const express = require('express')
const app = express()
const router = require('./router.js')

app.use(express.json())
app.use(express.static('.'))





app.listen(4000, (req, res)=>{
    console.log('Server is listening on 4000');
})