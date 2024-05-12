const HomePageLayout = ({ children, HomeStory }) => {
    return (
        <>
            {children}
            <div className='lg:px-5 xl:px-10'>{HomeStory}</div>
        </>
    );
};

export default HomePageLayout;
