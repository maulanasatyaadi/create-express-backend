import dotenv from 'dotenv'
import express, { json, urlencoded } from 'express'
import mongoose from 'mongoose'
import process from 'process'

dotenv.config()

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/appdb'

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.log('Failed when connecting to MongoDB')
    console.warn(err)
  })

let server = express()

server.use(json())
server.use(urlencoded({extended: true}))

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
  console.log(`Server has started at port ${PORT}`)
})
