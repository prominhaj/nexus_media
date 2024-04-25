"use client";
import Intersection from "@/components/InfinityScroll/Intersection/Intersection";
import StoriesModalCard from "../StoriesModal/StoriesModalCard";
import { useState } from "react";
import { getStories } from "@/server/story";
import StoryLoading from "@/components/Loading/StoryLoading/StoryLoading";

// Posts Limit
const storiesLimit = 12;

const StoriesCard = () => {
    // Load all posts
    const [page, setPage] = useState(0);
    const [stories, setStories] = useState([]);
    const [hasMore, setHasMore] = useState(true);

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

    return (
        <>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
                {
                    stories.map(s => (
                        <StoriesModalCard key={s._id} story={s} />
                    ))
                }
            </div>

            {hasMore && (
                <Intersection fetchingData={fetchingStories} hasMore={hasMore} page={page}>
                    <div className="grid items-center justify-center grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
                        <StoryLoading />
                        <StoryLoading />
                        <StoryLoading />
                        <StoryLoading />
                    </div>
                </Intersection>
            )}
        </>
    );
};

export default StoriesCard;