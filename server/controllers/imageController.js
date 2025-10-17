// for generating image via prompt

import FormData from "form-data"  // When you want to upload files (images, videos, docs…) from backend to another server.
import userModel from "../models/userModel.js"

import axios from "axios"
// import { use } from "react"

export const generateImage = async (req,res) =>{
    try {
        const {userId,prompt} = req.body
        const user = await userModel.findById(userId)
        if(!user || !prompt){
            return res.json({success: false,message:'Missing Details'})

        }
        if(user.creditBalance===0 || userModel.creditBalance <0){
            return res.json({ success:false, message:'no credit Balance',creditBalance: user.creditBalance})
        }
        // we are using clipdorp api 
        // CREATING  multipart form data 
        const formData = new FormData()
        formData.append('prompt',prompt)
        // api request 
        const {data} =await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{

            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                
            },
            responseType:'arraybuffer'   // When the response is a file (e.g., PDF, image, Excel, video), if you don’t use arraybuffer, the file data might get corrupted or unreadable.

        })
        // ab data ko store krne ke baad store krke buffer ko image bna lo 



        const base64Image = Buffer.from(data,'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`
        // deduct user credits 
        await userModel.findByIdAndUpdate(user.id,{creditBalance:user.creditBalance-1})
        res.json({success:true,message:"Image Generated",creditBalance: user.creditBalance-1,resultImage})

        
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message: error.message})
        
    }
}

