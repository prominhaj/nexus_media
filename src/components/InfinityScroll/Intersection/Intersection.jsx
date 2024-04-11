"use client"
import { useEffect, useRef } from "react";

const Intersection = ({ fetchingData, hasMore, page, children }) => {
    const loadingRef = useRef(null);

    useEffect(() => {
        const onInterSection = (items) => {
            const loaderItem = items[0];

            if (loaderItem.isIntersecting && hasMore) {
                fetchingData();
            }
        }

        const observer = new IntersectionObserver(onInterSection)

        if (observer && loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        // cleanup
        return () => {
            if (observer) observer.disconnect();
        }

    }, [fetchingData, hasMore, page])

    return (
        <div ref={loadingRef}>
            {children}
        </div>
    );
};

export default Intersection;