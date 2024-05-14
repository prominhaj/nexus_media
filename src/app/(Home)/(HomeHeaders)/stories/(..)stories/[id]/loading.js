import StoryDetailsLoading from '../../comp/StoryDetailsLoading';

const loading = () => {
    return (
        <div className='flex items-center justify-center py-5 md:py-10'>
            <div className='text-center transition-colors rounded-md shadow-xl w-[35rem] h-[30rem]'>
                <StoryDetailsLoading />
            </div>
        </div>
    );
};

export default loading;
