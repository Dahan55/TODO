const express = require('express')
const router = express.Router()

const todo = require('../model/todo_model')

router.delete('/:id', async (req , res ) => {
    try {
        const removeTodo = await todo.remove({ _id: req.params.id})
        res.json(removeTodo)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router