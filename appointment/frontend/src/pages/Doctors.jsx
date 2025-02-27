import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const{doctors} = useContext(AppContext)
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else {
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
        <div className='flex flex-col items-start sm:items-center gap-5 mt-5'>
          <div className='flex sm:flex-row flex-col gap-4 text-sm text-gray-600 text-center '>
            <p onClick={()=>speciality=== 'Orthopedist' ? navigate('/doctors') : navigate('/doctors/Orthopedist')} className={`w-[94vw] sm:w-auto px-5 py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Orthopedist' ? 'bg-primary text-white' : ''}`}>Orthopedist</p>
            <p onClick={()=>speciality=== 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto px-5 py-1.5 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-primary text-white' : ''}`}>Gynecologist</p>
            <p onClick={()=>speciality=== 'Cardiologist' ? navigate('/doctors') : navigate('/doctors/Cardiologist')} className={`w-[94vw] sm:w-auto px-5  py-1.5 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Cardiologist' ? 'bg-primary text-white' : ''}`}>Cardiologist</p>
            <p onClick={()=>speciality=== 'Pulmonologist' ? navigate('/doctors') : navigate('/doctors/Pulmonologist')} className={`w-[94vw] sm:w-auto px-5  py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Pulmonologist' ? 'bg-primary text-white' : ''}`}>Pulmonologist</p>
            <p onClick={()=>speciality=== 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto px-5  py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-primary text-white' : ''}`}>Neurologist</p>
            <p onClick={()=>speciality=== 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto px-5  py-1.5 border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-primary text-white' : ''}`}>Gastroenterologist</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4 mt-5'>
            {
              filterDoc.map((item,index)=>(
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-[250px] ' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4 sm:text-left text-center'>
                        <div className='flex items-center gap-2 text-sm text-green-500 sm:justify-start justify-center '>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-lg'>{item.name}</p>
                        <p className='text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors