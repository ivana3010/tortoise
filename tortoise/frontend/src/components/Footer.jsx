import React from 'react'
import { assets } from '../assets/assets'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Checkbox, TextField } from '@mui/material';

const Footer = () => {
    return (
        <div
            className='relative rounded-lg mt-10 px-6 pt-9 bg-cover bg-center'
            style={{ backgroundImage: `url(${assets.futer})` }}
        >
            <div>
                <div className='grid md:grid-cols-3 text-sm  text-primary'>
                    <div className='flex flex-col items-center md:items-start'>
                        <img className='mb-4 w-32' src={assets.logobr2} alt="Logo" />
                        <div className='flex gap-4'>
                            <FacebookIcon className='cursor-pointer hover:scale-110 transition-transform' />
                            <InstagramIcon className='cursor-pointer hover:scale-110 transition-transform' />
                            <XIcon className='cursor-pointer hover:scale-110 transition-transform' />
                            <YouTubeIcon className='cursor-pointer hover:scale-110 transition-transform' />
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start md:ml-14 gap-3 md:gap-4 text-sm font-medium mt-6 md:mt-0">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/care" className="hover:underline">Care</a>
                        <a href="/food" className="hover:underline">Food</a>
                        <a href="/contact" className="hover:underline">About</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </div>

                    <div className='flex flex-col items-center md:items-start text-center md:text-left gap-2 mt-10 md:mt-4'>
                        <p className='font-semibold text-base text-orange-950'>Join our online community</p>
                        <div className='flex flex-col sm:flex-row w-full gap-3'>
                            <TextField
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                size="small"
                                className='bg-white rounded-md w-full'
                            />
                            <button className='border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-all duration-300 w-full sm:w-auto'>
                                Subscribe
                            </button>
                        </div>
                        <div className='flex items-center justify-center md:justify-start'>
                            <Checkbox size="small" />
                            <p className='text-sm'>I am over 15 years old</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <hr className='border-gray-300' />
                    <p className='text-sm text-center text-orange-950 p-3'>© 2025 Tortoise World - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
