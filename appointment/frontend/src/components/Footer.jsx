import React from 'react'
import { assets } from '../assets/assets'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Checkbox, TextField } from '@mui/material';

const Footer = () => {
    return (
        <div className='bg-[rgba(163,201,241,0.12)] rounded-lg mt-10 px-6 pt-9'>
            <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-10 text-sm'>
                <div className='flex flex-col items-center sm:items-start text-primary text-2xl'>
                    <img className='mb-6 w-40' src={assets.logo1} alt="Logo" />
                    <div className='flex gap-4'>
                        <FacebookIcon className='cursor-pointer hover:scale-110 transition-transform' />
                        <InstagramIcon className='cursor-pointer hover:scale-110 transition-transform' />
                        <XIcon className='cursor-pointer hover:scale-110 transition-transform' />
                        <YouTubeIcon className='cursor-pointer hover:scale-110 transition-transform' />
                    </div>
                </div>

                <div className='flex flex-col items-center sm:items-start text-center sm:text-left mt-3'>
                    <p className='font-semibold mb-2 text-base'>Join our online community</p>
                    <div className='flex w-full'>
                        <TextField
                            id="outlined-basic"
                            label="E-mail"
                            variant="outlined"
                            size="small"
                            className='w-full bg-white rounded-md'
                        />
                        <button className='border border-primary text-primary hover:bg-primary hover:text-white px-4 rounded-md transition-all duration-300'>
                            Subscribe
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <Checkbox size="small" />
                        <p className='text-sm'>I am over 15 years old</p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <hr className='border-gray-300' />
                <p className=' text-sm text-center text-gray-600 p-3'>© 2024 Althea - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
