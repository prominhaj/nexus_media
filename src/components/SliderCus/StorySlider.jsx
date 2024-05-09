"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Spinner } from '@radix-ui/themes';

// Dynamic Import
const StoryModal = dynamic(
    () => import('../Shared/Modal/StoryModal'),
    {
        loading: () => <Spinner size="1" loading />,
    }
)

const StorySlider = ({ data }) => {

    return (
        <div className='flex'>

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
                {data?.map((item) =>
                (
                    <SwiperSlide className='!flex' key={item._id}>
                        <StoryModal item={item} />
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </div>
    );
};

export default StorySlider;