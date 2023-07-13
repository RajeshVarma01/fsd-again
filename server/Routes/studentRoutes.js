import { Router } from "express";
import { postStudentController } from "../Controllers/studentController.js";

const route = Router()

route.get('/student', (req, res) => {
    res.json({
        name:"Rajesh",
        email:"rajesh@1223"
    })
})
route.post('/student', postStudentController)

export default route
