import userModel from '../models/userModel.js';  // this is schmea where we created how are database look like 

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// user register function
const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.json({success:false , message:'Missing Details'})
        }
        // for password encription
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const userData = {
            name,
            email,
            password: hashedPassword
        }
        // credit balance will be added in new usser
        const newUser = new userModel(userData) 
        //save new user in the data base
        const user = await newUser.save()   
        // for token
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
        // sent tokens
        res.json({success:true,token,user:{name:user.name}})

    }catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
// user login function
const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false , message:'User doesnot exist'})
        }
        // for matching save password 
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
             const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
              res.json({success:true,token,user:{name:user.name}})

        }else{
            return res.json({success:false , message:'Invalid credentials'})
        }
        
    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

const userCredits = async (req,res)=>{
    try {
        const {userId} =req.body
        // by chat gpt
        // const { userId } = req.user;
        const user = await userModel.findById(userId)
        res.json({success:true,credits: user.creditBalance,user:{name:user.name}})
        
    } catch (error) {
        
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}
export {registerUser,loginUser,userCredits}