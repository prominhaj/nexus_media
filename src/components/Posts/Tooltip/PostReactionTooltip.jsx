import { Tooltip } from '@nextui-org/react';
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

// Import All Reactions
import like from '@/assets/Reactions/like.svg';
import love from '@/assets/Reactions/love.svg';
import care from '@/assets/Reactions/care.svg';
import haha from '@/assets/Reactions/haha.svg';
import sad from '@/assets/Reactions/sad.svg';
import angry from '@/assets/Reactions/angry.svg';
import wow from '@/assets/Reactions/wow.svg';
import Image from 'next/image';

const PostReactionTooltip = ({ state, setState }) => {

    const handleAction = (action) => {
        if (state === action) {
            setState("")
        }
        else {
            setState(action)
        }
    }

    const reactionsAction = [
        {
            name: "love",
            icon: love,
        },
        {
            name: "care",
            icon: care,
        },
        {
            name: "haha",
            icon: haha,
        },
        {
            name: "sad",
            icon: sad,
        },
        {
            name: "wow",
            icon: wow,
        },
        {
            name: "angry",
            icon: angry,
        },
    ]

    const toolTipContent = <>
        <div className="px-1 py-2">
            <div className='flex items-center gap-3'>
                {
                    reactionsAction.map((item, index) => (
                        <button onClick={() => handleAction(item.name)} className='transition-all duration-300 hover:scale-125' key={index}>
                            <Image src={item.icon} width={30} height={30} alt={item.name} />
                        </button>
                    ))
                }
            </div>
        </div>
    </>

    const findAction = reactionsAction.find(item => item.name === state);

    return (
        <div className='w-full dark:hover:bg-[#3A3B3C] hover:bg-[#F2F2F2] py-[0.3125rem] text-[.875rem] dark:text-[#B0B3B8] px-2 rounded-md duration-200 transition-all cursor-pointer'>
            <Tooltip
                placement='top'
                content={toolTipContent}
            >
                <div className={`w-full ${state && state === "like" && "text-[#1E76FF]"}`}>
                    {
                        !state ? <>
                            <button onClick={() => handleAction("like")} className='flex items-center justify-center w-full gap-1'>
                                {state === "like" ? <BiSolidLike className='text-xl' /> : <BiLike className='text-xl' />}<div>Like</div>
                            </button>
                        </> : state === "like" ? <>
                            <button onClick={() => handleAction("like")} className='flex items-center justify-center w-full gap-1'>
                                {state === "like" ? <BiSolidLike className='text-xl' /> : <BiLike className='text-xl' />}<div>Like</div>
                            </button>
                        </> : <>
                            <button onClick={() => handleAction(findAction.name)} className='flex items-center justify-center w-full gap-1'>
                                <Image src={findAction.icon} width={20} height={20} className='w-5 h-5' alt={findAction.name} />
                                <div className='capitalize'>{findAction.name}</div>
                            </button>
                        </>
                    }
                </div>
            </Tooltip>
        </div>
    );
};

export default PostReactionTooltip;