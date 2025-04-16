import React from 'react'
import { assets } from '../assets/assets'

const Introduction = () => {
  return (
    <div id="introduction" className="pt-20 pb-10">
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="flex items-center justify-center space-x-4">
          <img className='w-10 md:w-10' src={assets.tortoise} alt="Tortoise" />
          <h2 className="text-3xl font-semibold text-primary">Introduction to Tortoises</h2>
        </div>
        <p className="mt-10 text-lg text-gray-600">
          Tortoises are some of the most ancient and resilient creatures on Earth, having roamed our planet for over 200 million years. As part of the order Testudines, tortoises are reptiles known for their unique, hard, dome-shaped shells that offer protection from predators. These fascinating creatures have adapted to a variety of habitats, from the deserts and grasslands to the lush forests and islands of the world. The slow, deliberate movements and peaceful nature of tortoises have made them a symbol of patience and longevity in many cultures.
          <br /><br />
          Unlike their close relatives, the turtles, tortoises live exclusively on land. They are known for their distinct appearance, featuring a thick, hard shell made of bone and covered in keratin that shields their vulnerable bodies. This shell, which they carry with them their entire lives, is not only a shield against predators but also helps regulate their body temperature and serves as a storage unit for essential nutrients during times when food or water is scarce.
        </p>
      </div>
    </div>
  )
}

export default Introduction
