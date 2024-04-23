// Import React and necessary hooks
import { useEffect, useRef } from "react";

// Define Intersection component
const Intersection = ({ fetchingData, hasMore, page, children }) => {
    // Create a ref to target the loading element
    const loadingRef = useRef(null);

    // Effect hook to set up Intersection Observer
    useEffect(() => {
        // Check if Intersection Observer is available (client-side only)
        if (typeof IntersectionObserver !== "undefined") {
            const onIntersection = (entries) => {
                const loaderItem = entries[0];

                if (loaderItem.isIntersecting && hasMore) {
                    fetchingData();
                }
            };

            const observer = new IntersectionObserver(onIntersection);

            if (observer && loadingRef.current) {
                observer.observe(loadingRef.current);
            }

            // Cleanup function to disconnect observer
            return () => {
                if (observer) observer.disconnect();
            };
        }
    }, [fetchingData, hasMore, page]);

    // Render the component with the loadingRef attached
    return (
        <div ref={loadingRef}>
            {children}
        </div>
    );
};

// Export the Intersection component
export default Intersection;
