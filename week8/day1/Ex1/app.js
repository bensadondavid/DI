const router = require('/Users/davidbensadon/Desktop/DI/week8/day1/Ex1/routes/index.js')
const express = require('express')
const app = express()

app.use(express.json())

app.use('/', router)


app.listen(4000, (req, res)=>{
    console.log('Server listening on 4000');
})
