import { Tooltip } from '@nextui-org/react';
import React from 'react';

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';

const PostReactionTooltip = () => {
    return (
        <div>
            <Tooltip
                placement='top-start'
                content={
                    <div className="px-1 py-2">
                        <div className="font-bold text-small">Custom Content</div>
                        <div className="text-tiny">This is a custom tooltip content</div>
                    </div>
                }
            >
                <button>Reaction</button>
            </Tooltip>
        </div>
    );
};

export default PostReactionTooltip;