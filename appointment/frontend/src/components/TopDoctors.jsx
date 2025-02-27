import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-8 text-gray-900 md:mx-10'>
        <h1 className='text-[27px] font-medium'>Book Top Medical Experts</h1>
        <p className='sm:w-1/3 text-center text-base'>Check our expert list and book your appointment with ease.</p>
        <div className='w-full grid grid-cols-auto gap-10 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,8).map((item,index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-lg'>{item.name}</p>
                        <p className='text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-100 text-gray-800 px-20 py-3 rounded-full my-3'>more</button>
    </div>
  )
}

export default TopDoctors