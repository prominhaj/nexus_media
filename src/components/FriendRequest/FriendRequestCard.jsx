import { User } from '@nextui-org/react';
import React from 'react';

const FriendRequestCard = () => {
    return (
        <div>
            <User
                name="Jane Doe"
                description="12 mutual friends"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
        </div>
    );
};

export default FriendRequestCard;