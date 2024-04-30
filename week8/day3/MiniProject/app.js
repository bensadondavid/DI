const express = require('express')
const app = express()
const router = require('/routes')

app.use(express.static('public'))

app.use('/task', router)

app.listen(4000, ()=>{
    console.log('Server is listening on 4000');
})