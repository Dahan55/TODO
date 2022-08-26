const express = require('express')

const router = express.Router()

const todo = require('../model/todo_model')

router.put('/:id', async (req , res) => {
    try {
        const updatTodo = await todo.updateOne(
            { _id: req.params.id},
            {
                $set: {
                    assignee: req.body.assignee
                }
            }
        )
        res.json(updatTodo)

    } catch (error) {
        res.send(error)
    }
})

module.exports = router