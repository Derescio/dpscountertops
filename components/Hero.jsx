"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

   const images = [
        "/bri-rtp-Kukdz3VKzNc-unsplash.jpg",
        "/aaron-huber-CMejBwGAdGk-unsplash.jpg",
        "/decima-athens-BVg__LO2TVY-unsplash.jpg",
      ]

  const goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className='relative w-full h-screen'>
            <Image 
              src={src} 
              alt={`hero ${index + 1}`} 
              layout="fill"
              objectFit="cover"
              className={`transition-transform duration-1000 ${loaded ? 'scale-100' : 'scale-110'}`}
            />
            <div className='absolute inset-0 bg-black/30'></div>
          </div>
        ))}
      </Slider>
      <div className='absolute inset-0 flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
          <p className='max-w-[600px] py-2 text-xl drop-shadow-lg'>Counter Tops</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl mb-3'>High Quality Craftsmanship</h1>
          <button className='bg-white text-black hover:scale-105 mt-2'>Contact Us</button>
        </div>
      </div>
      <button onClick={goToPrev} className="absolute left-4 sm:top-2/3 top-3/4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <FaChevronLeft size={24} />
      </button>
      <button onClick={goToNext} className="absolute right-4 sm:top-2/3 top-3/4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <FaChevronRight size={24} />
      </button>
    </div>
  )
}

export default Hero
