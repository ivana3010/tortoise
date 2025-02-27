import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-[27px] font-medium'>Find the Right Specialist</h1>
        <p className='sm:w-1/3 text-center text-base'>Discover top-rated specialists near you and arrange your appointment effortlessly.</p>
        <div className='flex sm:justify-center gap-16 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
               <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-sm font-normal cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
               <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border bg-blue-50 px-1 flex items-center justify-center">
                   <img src={item.image} alt="" />
               </div>
               <p>{item.speciality}</p>
           </Link>
           
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu