require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const routes = require('./routes')
const app = express()
const server = require('http').Server(app)

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (request, response) => {
  return response.json({
    message: 'Server running...'
  })
})

server.listen(process.env.PORT || 3333)