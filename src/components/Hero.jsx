import React from 'react'
import plane from '../assets/images/plane.png'

const Hero = () => {
  return (
    <div className='primary-color h-screen w-screen relative'>

        <div className='relative'>

            <img className='plane__img' src={plane} />

        </div>

        <div className='absolute text-white  top-48 left-96'>
            <h2 className='mb-4 text-4xl font-bold '>About us</h2>
            <p className='text-xl pr-48'>WiShip Courier offers a web based solution. We are dedicated to facilitate the importation of all importable goods into Jamaica. Hence, we are able to offer tailor-made solutions to different industries as every industry has its unique features.
Our team of carefully chosen & trained professionals are friendly, knowledgeable, responsible and ensures each client experience is a positive one.</p>
        </div>

    </div>
  )
}

export default Hero