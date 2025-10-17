import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    // after generating image where he go bacically login or result page
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
    <div className='flex flex-col  justify-center items-center text-center my-20 '>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p> textTOimage </p>
            <img src= {assets.star_icon} alt=''/>

        </div>
        <h1 className='text-2xl max-w-[400px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'> turn text to ,<span className='text-pink-600'>image</span> in the seconds</h1>
        <p className='text-center max-w-xl mx-auto mt-5'> Welcome to <span className='text-pink-600 underline'> Puskar </span> & Creation , Convert Ur thought About Animals and Convert it into Image </p>
        <button onClick={onClickHandler} className='text-pink-600 sm:text-lg bg-black w-auto
        mt-8 px-12 py-2.5 flex items-center cursor-pointer 
                hover:scale-[1.02] gap-2 rounded-full'>
            Generate Images
            <img className='h-6' src={assets.star_group} />
        </button>
        <div className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(6).fill('').map((item,index)=>(
                <img className='rounded hover:scale-105 transition-all durat
                ion-300 cursor-pointer max-sm:w-10' src={index % 2 ===0 ?assets.sample_img_2 : assets.sample_img_1} key={index} width={70}/>
            ))}
        </div>
        <p> Generate image from this cheap website <span className='text-blue-600'> (mat krna mai to kh rha hu)</span></p>

    
        
    </div>
  )
}
export default Header

