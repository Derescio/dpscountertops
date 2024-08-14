'use client'
import React from 'react'
import { FaQuoteLeft, FaClipboardCheck, FaCalendarAlt, FaTools } from 'react-icons/fa'

const PhaseCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="text-4xl mb-4 text-blue-500">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    {title === "Get a Quote" && (
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4">Get a Quote</button>
    )}
  </div>
)

const Approach = () => {
  const phases = [
    {
      icon: <FaQuoteLeft />,
      title: "Get a Quote",
      description: "Start your journey with us by requesting a personalized quote for your project."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Confirm Estimate",
      description: "Review and confirm the detailed estimate we provide based on your requirements."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Schedule a Visit",
      description: "Set up a convenient time for our experts to visit and assess your space in person."
    },
    {
      icon: <FaTools />,
      title: "Fabrication & Installation",
      description: "Watch as we bring your vision to life with our expert craftsmanship and top-quality materials."
    },
    
  ]

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <PhaseCard key={index} {...phase} />
        ))}
      </div>
    </div>
  )
}

export default Approach
