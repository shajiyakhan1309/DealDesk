import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import {User} from "./models/User.js"

let conn=await mongoose.connect("mongodb://localhost:27017/users")
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/', async(req, res) => {
  const { username, email, help } = req.body;
  const user = new User({
    username:username,
    email:email,
    message:help

  });
 await user.save();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})