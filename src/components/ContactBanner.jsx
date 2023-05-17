import React from 'react'
import ship from '../assets/images/ship.jpg'

const ContactBanner = () => {
  return (
    <div className='h-[420px] relative mb-96'>
        <img className=' bg-no-repeat w-full' src={ship} />
        <h2 className='absolute bottom-32 font-bold text-white text-6xl px-20'>Contact Us</h2>
    </div>
  )
}

export default ContactBanner