import dotenv from 'dotenv'
import express, { json, Response, urlencoded } from 'express'
import mongoose from 'mongoose'
import process from 'process'
import APIResponse from './interfaces/APIResponse'

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

server.get('/', ({res}: {res: Response}): void => {
  res.json(<APIResponse>{
    success: true,
    message: {
      timestamp: Date.now()
    },
    error: null
  })
})

server.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}`)
})
