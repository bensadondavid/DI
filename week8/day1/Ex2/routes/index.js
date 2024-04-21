const todo = []

const getItems = (req, res)=>{
    res.json(todo)
}

const addItem = (req, res)=>{
    const newItem = {
        id : todo.length + 1,
        title : 'title1'
    }
    todo.push(newItem)
    res.status(201).json(newItem)
}

const updateItem = (req, res)=>{
    const id = Number(req.params.id)
    const index = todo.findIndex(p => p.id === id)
    const updatedItem = {
        id : id,
        title : req.params.title
    }
    todo[index] = updatedItem
    res.status(200).json('Item updated')
}

const deleteItem = (req, res)=>{
    const id = Number(req.params.id)
    const index = todo.findIndex(p => p.id === id)
    todo.splice(index, 1)
    res.status(200).send('Item deleted')
}

module.exports = {
    getItems,
    addItem,
    updateItem,
    deleteItem
}