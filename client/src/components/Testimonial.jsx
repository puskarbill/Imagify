import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12 '>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Customer Testimonial</h1>
        <p className='text-gray-500 mb-8'> What Our Users Are Saying </p>
        <div className='flex flex-wrap gap-6'>
            {/* {testimonialsData.map((testimonial,index)=>(
                <div key={index}>
                    <div>
                        <img src={testimonial.image} className='rounded-full w-14'></img>
                        <h2>{testimonial.name}</h2>
                        <P>{testimonial.role}</P>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star}/>
                            ))}
                        </div>
                        <p>{testimonial.text}</p>
                    </div>

                </div>
            ))} */}
        </div>


    </div>
  )
}

export default Testimonial