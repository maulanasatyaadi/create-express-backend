import express from 'express'
import bodyParser from 'body-parser'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import process from 'process'

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/appdb'

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.log('Failed when connecting to MongoDB')
    console.warn(err)
  })

let server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(fileUpload({createParentPath: true, useTempFiles: true}))

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

