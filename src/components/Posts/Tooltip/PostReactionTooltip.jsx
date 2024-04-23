"use client";
import { BiLike, BiSolidLike } from "react-icons/bi";
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';
import useAuth from '@/Hooks/useAuth';
import { postReaction } from '@/utils/postReaction';
import { toast } from 'sonner';
import Tooltip from "./Tooltip";

const PostReactionTooltip = ({ id, reactions }) => {
    const user = useAuth();
    const [reactionState, setReactionState] = useState("");

    // Check if user already has reactions
    useEffect(() => {
        const alreadyReaction = reactions.find(r => r.email === user?.email);
        if (alreadyReaction) {
            setReactionState(alreadyReaction.reactionType);
        }
    }, [reactions, user]); // Update reactionState when reactions or user change

    const handleAction = async (action) => {
        try {
            const reaction = {
                name: user?.displayName,
                email: user?.email,
                profilePhoto: user?.photoURL,
                reactionType: action
            }
            const req = await postReaction(id, reaction);
            if (req.success) {
                if (reactionState !== action) {
                    const audio = new Audio("/Sound/likes-sound.mp3");
                    audio.play();
                    setReactionState(action);
                }
                else {
                    setReactionState("");
                }
            }
            else {
                toast.error(req.error);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Reactions Type
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
        <div className="w-60 max-w-full md:w-72 px-0.5 py-1 md:px-1 md:py-2">
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
                <button onClick={() => handleAction("like")} className='flex items-center justify-center w-full gap-1 font-medium'>
                    {reactionState === "like" ? <BiSolidLike className='text-xl' /> : <BiLike className='text-xl' />}
                    <div>Like</div>
                </button>
            );
        } else {
            const findAction = reactionsAction.find(item => item.name === reactionState);
            return (
                <button onClick={() => handleAction(findAction?.name)} className='flex items-center justify-center w-full gap-1' style={{ color: findAction?.color }}>
                    <Image src={findAction?.icon} width={20} height={20} className='w-5 h-5' alt={findAction?.name} />
                    <div className='font-medium capitalize'>{findAction?.name}</div>
                </button>
            );
        }
    };

    return (
        <div className='w-full flex items-center justify-center dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.375rem] text-[.875rem] dark:text-[#B0B3B8] rounded-md duration-200 transition-all cursor-pointer'>
            <Tooltip className="!bg-transparent pt-4" button={<div className={`w-full ${reactionState && reactionState === "like" && "text-[#1E76FF]"}`}>
                {renderButton()}
            </div>}>
                {toolTipContent}
            </Tooltip>
        </div>
    );
};

export default PostReactionTooltip;
