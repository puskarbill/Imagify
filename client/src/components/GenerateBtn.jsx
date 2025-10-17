import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }

  }



  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt
        mt-4 font-semibold text-neutral-800 py-6 md:py-16'> See the magic. Try now</h1>
        <button onClick = {onClickHandler}className='inline-flex item-center gap-2 bg-pink-600 px-4 text-white sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>Generates Images
            <img src={assets.star_group} className='h-6'/>
        </button>
    </div>
  )
}

export default GenerateBtn