import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopSpecies = () => {
    const navigate = useNavigate()
    const {tortoises} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 md:my-10 my-6 text-primary md:mx-10'>
        <h1 className='text-[27px] font-medium text-center'>Popular Tortoise Species</h1>
        <div className='w-full grid grid-cols-auto gap-10 md:pt-10 pt-6 gap-y-6 px-3 sm:px-0'>
            {tortoises.slice(0,4).map((item,index)=>(
                <div onClick={()=> navigate(`/one-tortoise/${item._id}`)} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='w-full h-[150px] object-cover bg-blue-50' src={item.image} alt="" />
                    <div className='p-4 text-center md:text-left'>
                        <p className='text-lg'>{item.name}</p>
                        <p className='text-sm'>{item.scientificName}</p>
                    </div>
                </div>
            ))}
        </div>
      
        <button onClick={()=>{navigate('/species');scrollTo(0,0)}} className='bg-primary text-[#f7e4bb] font-semibold text-base px-20 py-3 rounded-full my-3 hover:translate-y-[-5px] transition-all duration-500'>more</button>
    </div>
  )
}

export default TopSpecies