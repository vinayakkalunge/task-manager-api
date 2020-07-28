const express = require('express')
require('./db/mongoose')

const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())     // To parse our incoming json message
app.use(userRouter)         // Route handler created in user.js and used by app.use()
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})