import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AppContext = createContext()
const AppContextProvider = (props)=>{
    const [user,setUser] = useState(null);
    // for close tag 2 one 
    const [showLogin,setShowLogin] = useState(false);
    // enable login feature and registration to token getting 
    const [token,setToken] = useState(localStorage.getItem('token'))
     const [credit,setCredit] =useState(false)



    // CONNCETING BACKEND 
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const navigate = useNavigate()

        // 1 LOAD CREDITS
        const loadCreditsData = async ()=>{
            try {
                const {data} = await axios.get(backendUrl + '/api/user/credits',{headers:{token}})

                if(data.success){
                    setCredit(data.credits)
                    setUser(data.user)
                }

                
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

        // for calling image generate api
        const generateImage = async (prompt)=>{
            try {
            const {data} =    await axios.post(backendUrl + '/api/image/generate-image',{prompt},{headers:{token}})
            if(data.success){
                loadCreditsData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditsData()
                if(data.creditBalance ===0){
                    navigate('/buy')
                }
            }

                
            } catch (error) {
                toast.error(error.message)
                
            }
        }
        //3
        const logout = ()=>{
            localStorage.removeItem('token')
            setToken('')
            setUser(null)
        }


        // 2 EXCUTE 1 
    useEffect(()=>{
        if(token){
            loadCreditsData()
        }
    } ,[token])
    const value = {
        user, setUser ,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider