import express from 'express'
import bodyParser from 'body-parser'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import process from 'process'

const PORT = process.env.PORT || 3000

let server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.json({
    success: true,
    result: {
      message: new Date(),
      error: null
    }
  })
})

server.listen(PORT, () => {
  console.log('Server has started')
})

