import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 py-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Create AI Images</h1>
        <p className='text-gray-500 mb-8'> 𝑻𝒖𝒓𝒏 𝒕𝒉𝒐𝒖𝒈𝒉𝒕𝒔 𝒊𝒏𝒕𝒐 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝑨𝑰 𝒗𝒊𝒔𝒖𝒂𝒍𝒔</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered text to image Generator</h2>
                <p className='text-grey-600 mb-4'> Simply enter a prompt, and our AI transforms your words into stunning animal images. Whether it’s a realistic creature, a fantastical beast, or a cute pet, watch your imagination come to life instantly.
                </p>
                <p className='text-blue-800 text-bold'> Created By Puskar </p>
            </div>

        </div>
    </div>
  )
}

export default Description