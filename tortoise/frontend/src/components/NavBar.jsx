import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className='flex items-center justify-between text-lg pt-3 pb-3 mb-6 border-b border-primary'>
            <img onClick={() => navigate('/')} className='w-[104px] cursor-pointer  rounded-full' src={assets.logobr1} alt="" />
            <ul className='hidden md:flex items-start gap-10 font-semibold text-primary pt-3'>
                <NavLink
                    className={({ isActive }) =>
                        `hover:underline py-1 px-3 rounded-md transition-all ${isActive
                            ? 'bg-primary text-white'
                            : ''  
                        }`
                    } to='/' >
                    <li >HOME</li>

                </NavLink>

                <NavLink className={({ isActive }) =>
                        `hover:underline py-1 px-3 rounded-md transition-all ${isActive
                            ? 'bg-primary text-white'
                            : ''  
                        }`
                    }  to='/food'>
                    <li>FOOD</li>
                </NavLink>

                <NavLink className={({ isActive }) =>
                        `hover:underline py-1 px-3 rounded-md transition-all ${isActive
                            ? 'bg-primary text-white'
                            : ''  
                        }`
                    } to='/species'>
                    <li>SPECIES</li>
                </NavLink>

                <NavLink className={({ isActive }) =>
                        `hover:underline py-1 px-3 rounded-md transition-all ${isActive
                            ? 'bg-primary text-white'
                            : ''  
                        }`
                    } to='/care'>
                    <li>CARE</li>
                </NavLink>
            </ul>
            
            
            <div className='gap-4 flex items-center'>
                        <div className='flex items-center gap-2 cursor-pointer group relative pt-3'>
                            <InfoIcon className='text-primary w-2 h-2' />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('faq')} className='hover:text-black cursor-pointer'>FAQ</p>
                                    <p onClick={() => navigate('contact')} className='hover:text-black cursor-pointer'>About & Contact</p>
                                    <p onClick={() => navigate('shop')} className='hover:text-black cursor-pointer'>Shop</p>
                                </div>
                            </div>
                        </div>
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-10 mt-5 text-lg font-medium '>
                        <NavLink to='/' onClick={() => setShowMenu(false)}><p>HOME</p></NavLink>
                        <NavLink to='/food' onClick={() => setShowMenu(false)}><p>FOOD</p></NavLink>
                        <NavLink to='/species' onClick={() => setShowMenu(false)}><p>SPECIES</p></NavLink>
                        <NavLink to='/care' onClick={() => setShowMenu(false)}><p>CARE</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
        
        
    )
}

export default NavBar