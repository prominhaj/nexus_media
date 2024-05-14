import { Skeleton } from "@radix-ui/themes";

const StoryDetailsLoading = () => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <Skeleton className='!rounded-full' width='40px' height='40px' />
                <div className='flex flex-col gap-2'>
                    <Skeleton width='100px' height='18px' />
                    <Skeleton width='140px' height='10px' />
                </div>
            </div>
            <div className='py-3'>
                <Skeleton className='w-full min-h-[18rem] md:min-h-[20rem] max-h-[20rem] md:max-h-[25rem] transition-all duration-300 rounded-md' />
            </div>
            <div className='flex items-center justify-end'>
                <Skeleton width='70px' height='30px' />
            </div>
        </>
    );
};

export default StoryDetailsLoading;