import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true,unique: true},
    password:{type:String,required:true},
    creditBalance : {type:Number , default:5},
})

// for creating user  if user already exsist then use first one other whise use user schema to create new one
const userModel = mongoose.models.user || mongoose.model("user",userSchema)
export default userModel; 

// above is for creating the structure of the database for the user