const express = require ('express')
const router = express.Router()
const {getItems, addItem, updateItem, deleteItem} = require('./index')

router.get('/', getItems)
router.post('/', addItem)
router.put('/todos/:id', updateItem)
router.delete('/todos/:id',deleteItem)


module.exports = router