const express = require('express')
const router = express.Router()
const fs = require('fs').promises

router.get('/task', async (req, res)=>{

    try{
        const data = await fs.readFile('file.json', 'utf-8')
        const jsonData = JSON.parse(data)
        res.status(200).send(jsonData)
    }
    catch(error){
        console.log('Error', error);
    }
})

router.get('/task/:id', async (req, res)=>{
    try{
            const data = await fs.readFile('file.json', 'utf-8')
            const jsonData = JSON.parse(data)
            const id = req.params.id
            const task = jsonData.find(t => t.id === id)
            if(task){
                res.status(200).send(task)
            }
            else{
                res.status(404).send('Not found')
            }
        }

    catch(error){
        console.log('Error');
    }
})

router.post('/task', async(req, res)=>{

    try{
        const task = req.body
        const data = await fs.readFile('file.json', 'utf-8')
        const jsonData = JSON.parse(data)

        jsonData.push(task)

        const newTask = await fs.writeFile('file.json', JSON.stringify(jsonData, null, 2), 'utf-8')

        res.send('New Task created', newTask)
    }

    catch{
        res.send('Error')
    }
})

router.put('/task/:id', async (req, res)=>{
    try{
            const data = await fs.readFile('file.json', 'utf-8')
            const jsonData = JSON.parse(data)
            const id = req.params.id
            const task = jsonData.find(t => t.id === id)
            const updatedTask = await fs.writeFile('file.json', JSON.stringify(jsonData, null, 2), 'utf-8')
            res.send('Task updated', updatedTask)
        }

    catch(error){
        console.log('Error');
    }
})

router.delete('/task/:id', async (req, res)=>{
    try{
        const data = await fs.readFile('file.json', 'utf-8')
        const jsonData = JSON.parse(data)
        const id = req.params.id
        const index = jsonData.findIndex(t => t.id === id)
        jsonData.splice(index, 1)
        fs.writeFile('file.json', JSON.stringify(jsonData, null, 2), 'utf-8')
        res.send('Task deleted')
    }
    catch(error){
        res.status(404).send('Error')
    }
})

module.exports = router