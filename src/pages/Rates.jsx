import React from 'react'
import manw from '../assets/images/manwithbox.png'

const Rates = () => {
  return (
    <section className='mt-20'>
        <div className='w-screen flex '>
            <div className='pl-32 max-w-[700px] mt-20 text-[#263ba9]'>
                <h2 className='text-6xl font-bold  mb-8'>Rates</h2>
                <p className='text-2xl font-semibold'>We have the lowest shipping rates in Jamaica! You are able to enjoy these low rates courtesy of our strong market force.</p>

            </div>
            <div>
                <img src={manw} />
            </div>
        </div>
        <div className='bg-green-400'>
            <div>
                <h2 className='text-[#263ba9] text-5xl mb-8 font-semibold'>Enjoy Our Low Rates</h2>
            </div>
            <div>
                {/* table */}
            </div>
        </div>
        <div className='flex justify-evenly text-[#263ba9] pl-20 pr-2 my-32 space-x-5'>
            <div>
                <h2 className='text-4xl font-bold mb-4'>Processing Fees</h2>
                <p className='text-2xl max-w-sm font-thin'>Packages under $50.00 USD will attract a fee of $150.00. $50.00 USD and over will be $500.00</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold mb-4'>Custom Fees</h2>
                <p className='text-2xl max-w-sm font-thin'>Packages over $50.00 USD will atrract customs duty charges. Businesses with huge volume please call 1 (876) 457-9547 for a special quote.</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold mb-4'>Notice</h2>
                <p className='text-2xl max-w-smf font-thin'>All rates are subject to change without notice.</p>
            </div>
        </div>
    </section>
  )
}

export default Rates