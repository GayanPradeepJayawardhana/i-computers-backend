import express from "express"
import mongoose from "mongoose"
import Student from "./models/student.js"
import studentRouter from "./routers/studentRouter.js"
import jwt from "jsonwebtoken"


import dns from "node:dns"
import userRouter from "./routers/userRouter.js"
 dns.setServers(["1.1.1.1"],["8.8.8.8"])

const mongodbURI = "mongodb+srv://admin:1234@cluster0.dilbzon.mongodb.net/?appName=Cluster0"

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("Connected to MongoDB")
    }
)

const app = express()

app.use(express.json())

 

app.use("/students",studentRouter)
app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log("backend is running")
})
