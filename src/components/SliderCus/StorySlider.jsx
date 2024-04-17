"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import StoryModal from '../Shared/Modal/StoryModal';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import StorySliderLoading from './StorySliderLoading';
import getAllStory from '@/utils/getAllStory';
import Intersection from '../InfinityScroll/Intersection/Intersection';
import { getStories } from '@/server/story';

// Posts Limit
const storiesLimit = 10;

const StorySlider = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [stories, setStories] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchingStories = async () => {
        const data = await getStories(storiesLimit, page * storiesLimit)

        if (data.length === 0) {
            setHasMore(false)
        }
        else {
            setStories(prev => [...prev, ...data])
            setPage(prev => prev + 1)
        }
    }

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -200, // Adjust scroll speed as needed
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 200, // Adjust scroll speed as needed
                behavior: 'smooth',
            });
        }
    };

    // useEffect(() => {
    //     setLoading(true)
    //     const story = async () => {
    //         const result = await getAllStory();
    //         setStories(result);
    //         setLoading(false);
    //     }
    //     story()
    // }, [])

    return (
        <div className='flex overflow-x-hidden'>
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
                {stories?.map((item, index) =>
                (
                    <SwiperSlide className='!flex' key={index}>
                        <StoryModal
                            item={item}
                            card={<Image
                                src={item.storyPhoto}
                                width={50}
                                height={50}
                                loading='lazy'
                                className='rounded-full transition-all duration-300 w-[3.125rem] h-[3.125rem] border-[3px] border-blue-400 dark:border-blue-500'
                                alt="Image"
                            />} />
                    </SwiperSlide>
                )
                )}
            </Swiper>

            {hasMore && (
                <Intersection fetchingData={fetchingStories} hasMore={hasMore} page={page}>
                    Loading...
                </Intersection>
            )}
        </div>
    );
};

export default StorySlider;