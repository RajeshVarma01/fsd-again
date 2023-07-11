import mongoose from "mongoose";

async function connect(){
   await mongoose.connect(process.env.MongoDB_URL)
}

export default connect