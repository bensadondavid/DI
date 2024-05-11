const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res)=>{
    res.json('Hello from express')
})

app.post('/api/world',  (req, res)=>{
    const {input} = req.body
    res.json({mess : 'I received your post : ' + input})
})

app.listen(4000, ()=>{
    console.log('Server is listening on 4000');
})