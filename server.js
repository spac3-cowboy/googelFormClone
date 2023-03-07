const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

// Importing routes
const formRouter = require('./routes/form')

// Adding middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Mounting routes
app.use('/form', formRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
