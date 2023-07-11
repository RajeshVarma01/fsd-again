import { Router } from "express";

const route = Router()

route.get('/student', (req, res) => {
    res.json({
        name:"Rajesh",
        email:"rajesh@1223"
    })
})
route.post('/student', (req, res) => {
    res.json({
        message: "Success"
    })
})    

export default route
