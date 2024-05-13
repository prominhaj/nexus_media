"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Spinner } from '@radix-ui/themes';
import Link from 'next/link';

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
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    350: {
                        slidesPerView: 5,
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
                    1200: {
                        slidesPerView: 10,
                        spaceBetween: 10,
                    },
                    1600: {
                        slidesPerView: 12,
                        spaceBetween: 15,
                    },
                    1800: {
                        slidesPerView: 14,
                        spaceBetween: 15,
                    },
                }}
            >
                {data?.map((item) =>
                (
                    <SwiperSlide className='!flex !items-center !justify-center' key={item._id}>
                        <Link className='w-[3.5rem] h-[3.5rem]' href={`/stories/${item._id}`}>
                            <Image
                                src={item?.storyImage?.photoUrl}
                                width={50}
                                height={50}
                                className='rounded-full object-cover transition-all duration-300 w-full h-full border-[3px] border-blue-400 dark:border-blue-500'
                                alt="Image"
                            />
                        </Link>
                        {/* <StoryModal item={item} /> */}
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </div>
    );
};

export default StorySlider;