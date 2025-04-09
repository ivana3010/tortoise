import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Species = () => {
  const { speciality } = useParams()
  const{tortoises} = useContext(AppContext)
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(tortoises.filter(doc => doc.speciality === speciality))
    }else {
      setFilterDoc(tortoises)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[tortoises,speciality])

  return (
    <div>
          <div className='flex flex-wrap justify-center gap-4 mt-5'>
            {
              filterDoc.map((item,index)=>(
                <div className='border border-primary rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 w-[250px]'>
                    <img className='w-full h-[150px] object-cover' src={item.image} alt="" />
                    <div className='p-4 sm:text-left text-center flex flex-row items-center justify-between'>
                        <p className='text-lg'>{item.name}</p> 
                        <KeyboardDoubleArrowRightIcon onClick={()=> {navigate(`/one-tortoise/${item._id}`); scrollTo(0, 0);}}  key={index} className='text-primary cursor-pointer'/>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
  )
}

export default Species