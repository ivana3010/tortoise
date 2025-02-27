import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating, Typography } from '@mui/material';

const Banner = () => {
    const reviews = [
      { name: "Ana", text: "Excellent service and very friendly doctors. Highly recommend!" },
      { name: "Marko", text: "Amazing staff and a clean clinic. I’ll definitely come back!" },
      { name: "Jovana", text: "Fantastic experience! The staff made me feel very welcomed." },
      { name: "Stefan", text: "Easy to navigate and book appointments. Would use again." },
      { name: "Ivana", text: "Efficient and professional." }
    ];
  
    return (
      <div className="max-w-4xl mx-auto my-12">
        <h2 className="text-[27px] font-semibold text-center mb-8">Patient Feedback</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg shadow-lg">
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="bg-blue-50 p-10 rounded-lg pl-20">
                <Rating name="read-only" value={'5'} readOnly />
              <p className="text-[17px] font-normal italic">"{review.text}"</p>
              <p className="text-right mt-4 font-normal mr-5">- {review.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Banner;
  