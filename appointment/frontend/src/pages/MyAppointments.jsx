import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { LocationOn, CalendarToday, AccessTime, Payment, Cancel } from '@mui/icons-material';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='font-medium text-xl my-3 mt-10 text-center sm:text-left'>My Appointments</p>
      <hr />
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
          className='grid sm:grid-cols-[auto_1fr_auto] gap-9 py-6 border-b border-gray-300 text-center sm:text-left items-center'
          key={index}
        >
          <div className='flex justify-center'>
            <img className='w-36' src={item.image} alt="" />
          </div>
        
          <div>
            <p className='font-medium text-lg'>{item.name}</p>
            <p className='text-gray-600'>{item.speciality}</p>
        
            <div className='flex items-center justify-center sm:justify-start gap-2 text-gray-700'>
              <LocationOn fontSize="small" />
              <p>{item.address}</p>
            </div>
        
            <div className='flex items-center justify-center sm:justify-start gap-2 text-gray-700'>
              <CalendarToday fontSize="small" />
              <p>25. Feb 2025</p>
            </div>
        
            <div className='flex items-center justify-center sm:justify-start gap-2 text-gray-700'>
              <AccessTime fontSize="small" />
              <p>4:00 PM</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 sm:items-end sm:justify-center'>
            <button className='w-full flex items-center justify-center gap-2 border border-zinc-400 hover:bg-primary rounded-md hover:text-white py-2 px-16 hover:-translate-y-1 duration-500'>
              <Payment fontSize="small" />
              Pay Online
            </button>
            <button className='w-full flex items-center justify-center gap-2 border border-zinc-400 hover:bg-red-500 hover:text-white py-2 px-16 rounded-md hover:-translate-y-1 duration-500'>
              <Cancel fontSize="small" />
              Cancel Appointment
            </button>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
