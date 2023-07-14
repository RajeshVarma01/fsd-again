import userModel from "../models/userModel.js"
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
   const newStudent = new userModel({
    name: name,
    email: email,
    password: password,
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

