import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';
import Image from 'next/image';

const reactions = [
    { name: "like", icon: like, color: "#2078F4" },
    { name: "love", icon: love, color: "#F33E58" },
    { name: "care", icon: care, color: "#F7B125" },
    { name: "haha", icon: haha, color: "#F7B125" },
    { name: "sad", icon: sad, color: "#F7B125" },
    { name: "wow", icon: wow, color: "#F7B125" },
    { name: "angry", icon: angry, color: "#E9710F" },
];

const PostReactionShow = ({ reactionTypes }) => {
    // Extract reaction types from the provided data
    const types = reactionTypes.map(reaction => reaction.reactionType);

    // Filter reactions based on provided reaction types
    const filteredReactions = reactions.filter(reaction => types.includes(reaction.name));

    return (
        <div>
            <div className='flex items-center gap-1'>
                {filteredReactions?.map((item, index) => (
                    <span key={index}>
                        <Image width={18} height={18} className='w-[1.125rem] h-[1.125rem]' src={item.icon} alt='Reaction' />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostReactionShow;
