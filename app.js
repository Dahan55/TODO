const express = require('express')
const mongoose = require('mongoose')
const url = `mongodb://localhost/todolist`


const swaggerUi = require('swagger-ui-express') , swaggerDocument = require('./swagger.json')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () =>{
    console.log('DB Connected...!')
})

app.use(express.json())


const todoRouter = require('./routers/todos')
app.use('/todos', todoRouter)

const updatTodo = require('./routers/updateTodo')
app.use('/updateTodo', updatTodo)

const deleteTodo = require('./routers/deleteTodo')
app.use('/deleteTodo', deleteTodo)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3000, () => {
    console.log('Server Start...!')
})