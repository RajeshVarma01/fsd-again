import express from "express";
import route from "./Routes/studentRoutes.js";
import dotenv from 'dotenv'
import connect from "./Database/conn.js";
import cors from 'cors'

const app = express()

dotenv.config()

app.use(cors())

app.use(express.json())

app.use("/api", route)

connect().then(() => {
    app.listen(5000, () => {
        console.log("Listening on port no 5000 in")
    })
}).catch(err => {
    console.log(err)
})

