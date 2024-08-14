import React from 'react'

const Offers = () => {
  return (
    <div>
        <div className='container mx-auto mt-4 text-5xl text-center'>Products</div>
    <div className='max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between '>
      <p className='text-lg font-bold text-white bg-red-600 py-1 px-4 border rounded-xl shadow-lg mb-4'>Sinks</p>
      <p className='text-lg font-bold text-gray-700 bg-gray-200 py-1 px-4 border rounded-xl shadow-lg mb-4'>Quartz</p>
      <p className='text-lg font-bold text-white bg-green-600 py-1 px-4 border rounded-xl shadow-lg mb-4'>Natural Stone</p>
      <p className='text-lg font-bold text-white bg-red-600 py-1 px-4 border rounded-xl shadow-lg mb-4'>Dekton</p>
    </div>   
    </div>
  )
}

export default Offers
