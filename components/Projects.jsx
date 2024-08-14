import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-1'
          src='/aaron-huber-CMejBwGAdGk-unsplash (1).jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-1'
          src='/bri-rtp-Kukdz3VKzNc-unsplash.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-1'
          src='/decima-athens-BVg__LO2TVY-unsplash.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-1'
          src='/nathan-van-egmond-rkVTdpQ1zSg-unsplash.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-1'
          src='/bri-rtp-Kukdz3VKzNc-unsplash.jpg'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Craftsmanship</h3>
        <p className='text-2xl py-6'>
        Transform your space with stunning custom countertops that blend elegance and durability, making your dream kitchen a reality.
        </p>
        <p className='pb-6'>
        From selecting the finest materials to precise installation, we handle every detail with care, ensuring a seamless experience and a result that exceeds expectations. Whether it's granite, quartz, or marble, our countertops are designed to withstand the test of time, offering both beauty and functionality.
        </p>
        <div>
        
          <button className='bg-black text-white border-black hover:shadow-xl'>View Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;