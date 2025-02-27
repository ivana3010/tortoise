import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Ivana Gabric',
    image: assets.profile,
    email: 'ivanagabricm@gmail.com',
    phone: '0655272109',
    dob: '2000-10-30'
  })
  const [isEditable, setIsEditable] = useState(true)
  return (
    <div className='max-w-md flex flex-col gap-2 text-base bg-sky-50 p-8 rounded-lg shadow-lg '>
      <img className='w-32 rounded' src={userData.image} alt="" />
      {
        isEditable
          ? <input className='bg-gray-200 text-2xl font-medium mt-2' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}></input> :
          <p className='font-medium text-2xl mt-2'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[2px]' />
      <div>
        <p className='text-neutral-600 mt-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEditable
              ? <input className='bg-gray-200' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}></input> :
              <p>{userData.phone}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEditable
              ? <input className='bg-gray-200' type='date' value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}></input> :
              <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-8'>
        {
          isEditable ?
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:font-medium transition-all' onClick={()=>setIsEditable(false)}>Save</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white hover:font-medium transition-all' onClick={()=>setIsEditable(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile