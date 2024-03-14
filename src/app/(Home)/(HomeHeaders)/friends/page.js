import FriendCard from '@/components/FriendPage/FriendCard/FriendCard';
import React from 'react';

const FriendsPage = () => {
    return (
        <>
            <div>
                <h2 className='block text-xl font-medium text-light-text dark:text-dark-text'>
                    Friend Requests
                </h2>
                <div className='grid grid-cols-2 gap-5 py-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                </div>
            </div>
        </>
    );
};

export default FriendsPage;
