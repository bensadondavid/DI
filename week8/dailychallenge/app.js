const express = require('express')
const app = express()
const router = require('./router.js')

app.use(express.json())
app.use(express.static('.'))

app.use('/', router)



app.listen(4000, (req, res)=>{
    console.log('Server is listening on 4000');
})