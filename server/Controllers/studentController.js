import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"

// Used GET requests to retrieve resource representation/information only – and not modify it in any way. As GET requests do not change the resource’s state, these are said to be safe methods.

export const getStudentController = async (req, res) => {
   let students;
   try{
    students = await userModel.find()
    console.log(students)
   }catch(e){

   }
   if(!students){
    res.status(400).json({
        message: "No data found"
    })
   }
   res.status(200).json(students)
}

// Used POST method to send the data to the database along with the API or URL.

export const postStudentController = async (req, res) => {
   const {name, email, password, batch} = req.body
   let existingStudent;
   try{
    existingStudent = await userModel.findOne({email})
   }catch(e){
    console.log(e)
   }
   if(existingStudent){
    return res.status(400).json({
        message:"USER ALREADY EXISTS"
    })
   }

// Imported bcryptjs package and used bcrypt.hashSync(password) method to convert the password into unreadeble format.

   const hashedPassword = bcrypt.hashSync(password);
//    console.log(hashedPassword)

   const newStudent = new userModel({
    name: name,
    email: email,
    password: hashedPassword,
    batch: batch
   })
   try{
   await newStudent.save()
   }catch(e){
    console.log(e)
   } 
   res.status(200).json({
    message:"NEW STUDENT CREATED"
   })
}

// Used DELETE method to delete the data from the Mongodb.

export const deleteStudentController = async(req, res) => {
   const email = req.params.email
   console.log("inside delete..", email)
   let studentEmail
   try{
    studentEmail = await userModel.findOne({email})
    console.log("syudent id..", studentEmail)
   }catch(e){
    console.log(e)
   }
   if(!studentEmail){
    res.status(400).json({
        message: "NO USER FOUND"
    })
   }
   try{
    await userModel.deleteOne({email})
   }catch(e){
    console.log(e)
   }
   res.status(200).json({
    message: "STUDENT SUCCESSFULLY DELETED"
   })     
}

// Used UPDATE method to update the data present in the database(Mongodb). we can use PUT and PATCH methods to update the data.
// In UPDATE method we follow to things "where to update" and "what to update"
// so here we use two things-> "req.params.id" and "req.body".

export const updateStudentController = async(req, res) => {
    const id = req.params.id
    const {name, password, email, batch} = req.body
    let student
    try{
        student = await userModel.findByIdAndUpdate(id,{
            name,
            password,
            email,
            batch
        })
    }catch(e){
        console.log(e)
    }
    if(!student){
        res.status(400).json({
            message:"NO USER FOUND TO UPDATE"
        })
    }
    res.status(200).json({student})
}