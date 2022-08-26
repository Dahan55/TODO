const express = require('express')

const router = express.Router()

const todo = require('../model/todo_model')

router.get('/', async (req , res) => {
    
    try {
        const todos = await todo.find()
        res.json(todos)
    } catch (error) {
        res.send(error)
    }

})


router.post('/', async (req , res) => {
    const newTodo = new todo({
        title: req.body.title,
        description: req.body.description,
        assignee: req.body.assignee
    })
    try {
        const todo1 = await newTodo.save()
        res.json(todo1)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router