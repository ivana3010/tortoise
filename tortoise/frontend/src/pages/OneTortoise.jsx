import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel'
import { AppContext } from '../context/AppContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const OneTortoise = () => {
    const { tortoises } = useContext(AppContext)
    const { tortId } = useParams()
    const navigate = useNavigate()

    const tortoise = tortoises.find(tort => tort._id === tortId)

    const dotColor = (status) => {
        switch (status) {
            case 'Least Concern':
                return 'bg-green-500'
            case 'Near Threatened':
                return 'bg-yellow-500'
            case 'Vulnerable':
                return 'bg-orange-500'
            case 'Critically Endangered':
                return 'bg-red-600'
        }
    }
    return (
        <div className="space-y-10">
            <div className="relative w-full flex flex-col items-center">
                <svg
                    className="w-full max-w-[600px] h-[120px] md:h-[150px]"
                    viewBox="0 0 800 150"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path id="title" d="M 0 110 C 200 50, 600 50, 800 120" fill="transparent" />
                    <text className="font-bungee" fontSize="56" fill="#784313">
                        <textPath href="#title" startOffset="50%" textAnchor="middle">
                            {tortoise.name}
                        </textPath>
                    </text>
                </svg>
                <p className="mt-[-40px] text-primary font-courgette text-2xl md:text-3xl">About me</p>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-6xl bg-primary bg-opacity-10 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">


                    <div className="flex-1 space-y-4 bg-primary bg-opacity-25 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mt-2">
                            <img src="/tortoise.svg" alt="Taxonomy" className="w-6 h-6" />
                            <h3 className="text-xl font-bold text-primary">Taxonomy</h3>
                        </div>

                        <ul className="space-y-2 text-lg ">
                            {Object.entries(tortoise.taxonomy).map(([key, value]) => (
                                <li key={key} className="flex gap-2 border-b border-primary">
                                    <p className="font-semibold text-primary">{key}:</p>
                                    <p >{value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation
                            className="rounded-lg shadow-lg overflow-hidden w-full max-w-[500px] mx-auto"
                        >
                            {tortoise.images.map((img, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <img className='w-full h-64 md:h-[350px] md:object-cover object-contain rounded-lg' src={img} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex-1 space-y-4 mt-6">
                        <div className="flex items-center gap-2">
                            <span className="text-primary text-2xl">
                                🛈
                            </span>
                            <h3 className="text-xl font-bold text-primary">General Info</h3>
                        </div>

                        <ul className="space-y-2 text-lg">
                            <li className='border-b border-primary pb-1'><span className="font-semibold text-primary ">Size:</span> {tortoise.size}</li>
                            <li className='border-b border-primary pb-1'><span className="font-semibold text-primary">Lifespan:</span> {tortoise.lifespan}</li>
                            <li className='border-b border-primary pb-1'><span className="font-semibold text-primary">Weight:</span> {tortoise.weight}</li>
                            <li className='border-b border-primary pb-1'><span className="font-semibold text-primary">Diet:</span> {tortoise.diet}</li>
                            <li className='border-b border-primary pb-1'><span className="font-semibold text-primary">Habitat Type:</span> {tortoise.habitatType}</li>
                            <li className="flex items-center pb-1">
                                <li className="flex items-center pb-1 group">
                                    <span className="font-semibold text-primary w-[200px]">Conservation Status:</span>
                                    <div className="relative ml-[-15px]">
                                        <div className={`w-4 h-4 rounded-full ${dotColor(tortoise.conservationStatus)}`} />
                                        <span className="hidden group-hover:block absolute text-[14px] bg-primary text-white p-1 rounded-lg mt-1 left-0 w-max z-10">
                                            {tortoise.conservationStatus}
                                        </span>
                                    </div>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className=' flex justify-center font-courgette text-4xl text-primary'>Where do I live?</h1>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                    <img className="border border-primary rounded-md w-full h-full object-cover" src={tortoise.imagePlace} alt="" />
                </div>
                <div className="flex flex-col items-center bg-primary bg-opacity-10 p-4 rounded-xl shadow-md flex-1">
                    <LocationOnIcon className='text-red-600 mb-1 mx-auto' style={{ width: '2rem', height: '2rem' }} />
                    <p className="text-lg text-justify overflow-auto">
                        {tortoise.location}
                    </p>
                </div>
            </div>
            <h1 className="text-center text-4xl font-courgette text-primary mb-8">Habits and Lifestyle</h1>
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                {tortoise.habits.map((item) => (
                    <div className=' border-l-4 border-primary bg-primary bg-opacity-10 rounded-md shadow-md w-full md:w-[250px] h-auto p-4 relative'>
                        <h1 className="text-lg font-bold text-primary">{item.title}</h1>
                        <p className="text-gray-800 mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col space-y-1 items-center'>
                <svg width="500" height="50" xmlns="http://www.w3.org/2000/svg">
                    <path id="curve" d="M 50 100 C 150 0, 350 0, 450 100" fill="transparent" />
                    <text fontSize="24" fill="#333">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            Want {tortoise.name}?
                        </textPath>
                    </text>
                </svg>
                <div className="mt-[-60px]">
                    <button onClick={() => { navigate('/shop'); scrollTo(0, 0); }} className='text-primary underline'>
                        Shop here
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    className="flex items-center gap-2 bg-primary text-white hover:translate-y-[-5px] transition-all duration-300 rounded-full py-3 px-6"
                    onClick={() => { navigate('/species'); scrollTo(0, 0); }}
                >
                    <CancelIcon /> Cancel
                </button>
            </div>
        </div>
    )
}

export default OneTortoise
