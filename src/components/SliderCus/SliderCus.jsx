"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Avatar } from '@nextui-org/react';


const items = [
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
    { avatar: "https://via.placeholder.com/40" },
];

const SliderCus = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    50: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    230: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    350: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 14,
                        spaceBetween: 10,
                    },
                }}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide className='' key={index}>
                            <button className='p-2'>
                                <Avatar className='w-full h-full' isBordered color="primary" src={item.avatar} />
                            </button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SliderCus;