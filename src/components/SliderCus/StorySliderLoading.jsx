import { Skeleton } from '@nextui-org/react';

const StorySliderLoading = () => {
    return (
        <div className='flex items-center gap-5'>
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
            <Skeleton className="flex w-12 h-12 rounded-full bg-default-400 dark:bg-default-100" />
        </div>
    );
};

export default StorySliderLoading;