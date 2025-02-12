import React from 'react'
import RestImg from '../assets/restaurant-logo.png'

const AboutUs = () => {
  return (
<>

<div className="bg-gray-700 min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">About Us</h1>
        <p className="text-lg text-gray-200 mb-6">
          Welcome to <span className="font-semibold text-yellow-500">Our Restaurant</span>, where we serve delicious, authentic cuisine made with fresh, locally sourced ingredients.
        </p>
        <img 
          src={RestImg} 
          alt="Restaurant" 
          className="rounded-xl w-[200px] shadow-lg mx-auto mb-6"
        />
        <div className="text-left text-gray-200 space-y-4">
          <p>
            Our journey started with a passion for great food and a love for bringing people together. We believe that food is more than just sustenance; it's an experience that should be savored and shared.
          </p>
          <p>
            Our chefs craft every dish with care, using traditional recipes and modern techniques to create flavors that delight your palate. Whether you're here for a quick bite or a family feast, we aim to provide a warm, welcoming environment.
          </p>
          <p>
            Thank you for choosing us. We look forward to serving you and making every meal memorable.
          </p>
        </div>
      </div>
    </div>

</>
  )
}

export default AboutUs