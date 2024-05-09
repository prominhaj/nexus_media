"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { getStories } from '@/server';
import { Spinner } from '@radix-ui/themes';
import domain from '@/Domain/domain.config';

// Dynamic Import
const StoryModal = dynamic(
    () => import('../Shared/Modal/StoryModal'),
    {
        loading: () => <Spinner size="1" loading />,
    }
)
const Intersection = dynamic(
    () => import('../InfinityScroll/Intersection/Intersection'),
    {
        loading: () => <Spinner size="1" loading />,
    }
)

// Posts Limit
const storiesLimit = 10;

const StorySlider = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [stories, setStories] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchingStories = async () => {
        const req = await fetch(`${domain}/api/story?limit=${storiesLimit}&skip=${page * storiesLimit}`, {
            cache: "no-store",
            next: {
                tags: ['stories'],
            }
        })
        const data = await req.json();
        // const data = await getStories(storiesLimit, page * storiesLimit)

        if (data?.length === 0) {
            setHasMore(false)
        }
        else {
            setStories(prev => [...prev, ...data])
            setPage(prev => prev + 1)
        }
    }

    console.log(stories);
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
                {stories?.map((item, index) =>
                (
                    <SwiperSlide className='!flex' key={index}>
                        <StoryModal
                            item={item}
                            card={<Image
                                src={item?.storyImage?.photoUrl}
                                width={50}
                                height={50}
                                className='rounded-full transition-all duration-300 w-[3.125rem] h-[3.125rem] border-[3px] border-blue-400 dark:border-blue-500'
                                alt="Image"
                            />} />
                    </SwiperSlide>
                )
                )}
            </Swiper>

            {hasMore && (
                <Intersection fetchingData={fetchingStories} hasMore={hasMore} page={page}>
                    <Spinner size="3" loading />
                </Intersection>
            )}
        </div>
    );
};

export default StorySlider;