import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const daysOfWeek = ['SUN','MON','TUE', 'WED','THU','FRI', 'SAT']
  const navigate = useNavigate()

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }
  const getAvailableSlots = async () => {
    setDocSlots([])
    //get current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit',minute:'2-digit'})
        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time:formattedTime
        })
        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }

  }

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo()
    }
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])
  useEffect(()=>{
    console.log(docSlots);
  },[docSlots])

  return docInfo && (
    <div>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <div>
          <img className='border-2 border-gray-250 m-auto rounded-lg sm:max-w-72' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border-2 border-gray-250 rounded-lg p-8 ]'>
          <p className='flex items-center gap-2 text-2xl'>{docInfo.name} <img className='w-4' src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <p className='border text-sm p-1.5 rounded-full'>{docInfo.experience}</p>
          </div>
          <div>
            <p>About </p>
            <p className='mt-2'>{docInfo.about}</p>
          </div>
          <p className='mt-2 font-medium'>Appontment fee:  ${docInfo.fees} </p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4'>
        <p>Booking slots</p>
        <div className='flex gap-3 mt-4 w-full overflow-x-scroll '>
  {
    docSlots.length > 0 ? (
      docSlots.map((item, index) => (
        <div 
         onClick={()=>setSlotIndex(index)}
          className={`text-center rounded-full cursor-pointer min-w-16 py-4 ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-400'}`} 
          key={index}
        >
          <p>{item[0] ? daysOfWeek[item[0].datetime.getDay()] : '-'}</p>
          <p>{item[0] ? item[0].datetime.getDate() : '-'}</p>
        </div>
      ))
    ) : (
      <div className="text-center border border-gray-400 min-w-16 py-4">
        <p>No slots available</p>
      </div>
    )
  }
</div>

        <div className='flex items-center gap-3 mt-6 overflow-x-scroll w-full'>
          {
            docSlots.length && docSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-normal cursor-pointer flex-shrink-0 px-5 py-2 rounded-full ${item.time===slotTime ? 'bg-primary text-white':'border border-gray-400'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <div className='flex justify-between items-center mt-10'>
       <button className=' bg-primary py-3 px-14 rounded-full font-medium text-white hover:translate-y-[-10px] transition-all duration-500'><CheckCircleOutlineIcon className='mr-2 ' />Book an appointment</button>
       <button  className='bg-primary text-white hover:translate-y-[-10px] transition-all duration-500 rounded-full py-3 px-14' onClick={()=>{navigate('/doctors'); scrollTo(0, 0);}}><CancelIcon  /> Cancel</button>
       </div>
      </div>
    </div>
  )
}

export default Appointment