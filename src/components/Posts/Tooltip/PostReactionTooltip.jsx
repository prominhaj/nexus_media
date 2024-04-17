"use client"
import { Tooltip } from '@nextui-org/react';
import { BiLike, BiSolidLike } from "react-icons/bi";
import Image from 'next/image';
import { useState, useMemo } from 'react';

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';

const PostReactionTooltip = () => {
    const [reactionState, setReactionState] = useState("");

    const handleAction = (action) => {
        setReactionState(prevState => prevState === action ? "" : action);
    };

    const reactionsAction = useMemo(() => [
        { name: "like", icon: like, color: "#2078F4" },
        { name: "love", icon: love, color: "#F33E58" },
        { name: "care", icon: care, color: "#F7B125" },
        { name: "haha", icon: haha, color: "#F7B125" },
        { name: "sad", icon: sad, color: "#F7B125" },
        { name: "wow", icon: wow, color: "#F7B125" },
        { name: "angry", icon: angry, color: "#E9710F" },
    ], []);

    const toolTipContent = useMemo(() => (
        <div className="px-1 py-2">
            <div className='flex items-center gap-3'>
                {reactionsAction.map((item, index) => (
                    <button onClick={() => handleAction(item.name)} className='transition-all duration-300 hover:scale-125' key={index}>
                        <Image src={item.icon} width={30} height={30} alt={item.name} />
                    </button>
                ))}
            </div>
        </div>
    ), [reactionsAction]);

    const renderButton = () => {
        if (!reactionState) {
            return (
                <button onClick={() => handleAction("like")} className='flex items-center justify-center w-full gap-1'>
                    {reactionState === "like" ? <BiSolidLike className='text-xl' /> : <BiLike className='text-xl' />}
                    <div>Like</div>
                </button>
            );
        } else {
            const findAction = reactionsAction.find(item => item.name === reactionState);
            return (
                <button onClick={() => handleAction(findAction?.name)} className='flex items-center justify-center w-full gap-1' style={{ color: findAction?.color }}>
                    <Image src={findAction?.icon} width={20} height={20} className='w-5 h-5' alt={findAction?.name} />
                    <div className='capitalize'>{findAction?.name}</div>
                </button>
            );
        }
    };

    return (
        <div className='w-full dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.3125rem] text-[.875rem] dark:text-[#B0B3B8] px-2 rounded-md duration-200 transition-all cursor-pointer'>
            <Tooltip placement='top' content={toolTipContent}>
                <div className={`w-full ${reactionState && reactionState === "like" && "text-[#1E76FF]"}`}>
                    {renderButton()}
                </div>
            </Tooltip>
        </div>
    );
};

export default PostReactionTooltip;
