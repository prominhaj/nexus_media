import React from 'react';

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';
import Image from 'next/image';

// All Reactions Items
const reactions = [
    like,
    love,
    care,
    haha,
    sad,
    angry,
    wow
]

const PostReactionShow = () => {
    return (
        <div>
            <div className='flex items-center gap-1'>
                {reactions.map((item, index) => (
                    <span key={index}>
                        <Image width={18} height={18} className='w-[1.125rem] h-[1.125rem]' src={item} alt='Reaction' />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostReactionShow;