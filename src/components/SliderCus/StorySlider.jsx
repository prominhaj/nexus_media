"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import StoryModal from '../Shared/Modal/StoryModal';
import Image from 'next/image';


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

const StorySlider = () => {

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
                    210: {
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
                        <SwiperSlide className='!flex' key={index}>
                            <StoryModal image={item.avatar} card={<Image
                                src={item.avatar}
                                width={50}
                                height={50}
                                loading='lazy'
                                className='rounded-full border-[3px] border-blue-400 dark:border-blue-500'
                                alt="Image"
                            />} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default StorySlider;