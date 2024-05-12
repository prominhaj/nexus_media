const HomePageLayout = ({ children, HomeStory, AllPosts }) => {
    return (
        <>
            {children}
            <div className='lg:px-5 xl:px-10'>
                {HomeStory}
                {AllPosts}
            </div>
        </>
    );
};

export default HomePageLayout;
