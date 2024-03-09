"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

// Import Swiper styles
import 'swiper/css';
import { Avatar } from '@nextui-org/react';
import { Image } from 'primereact/image';


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
                        <SwiperSlide className='!flex' key={index}>
                            <Image
                                src={item.avatar}
                                zoomSrc="https://via.placeholder.com/400"
                                width="50"
                                height='50'
                                loading='lazy'
                                imageClassName='rounded-full border-[3px] border-blue-400 dark:border-blue-500'
                                alt="Image"
                                preview
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default StorySlider;