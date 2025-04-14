import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Shop = () => {
  const{tortoises} = useContext(AppContext) 
  return (
    <div>
      <h1 className='font-courgette text-primary text-2xl text-center'>Welcome to our web-shop!</h1>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6">
            {tortoises.map((item) => (
              <div className="relative w-[280px] h-[200px] overflow-hidden rounded-xl shadow-md group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Shop