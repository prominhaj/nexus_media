import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const TooltipFromPost = ({ data, button }) => {
    return (
        <div>
            <Tooltip
                placement={"bottom-start"}
                content={<div className="px-1 py-1">
                    <Link href={"/"} className='block'>
                        <small>Md Minhaj</small>
                    </Link>
                </div>}
                color="default"
                delay={100}
                closeDelay={50}
                motionProps={{
                    variants: {
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: 0.1,
                                ease: "easeIn",
                            }
                        },
                        enter: {
                            opacity: 1,
                            transition: {
                                duration: 0.15,
                                ease: "easeOut",
                            }
                        },
                    },
                }}
                classNames={{
                    content: [
                        "py-1 px-2 shadow-xl",
                        "text-neutral-300 bg-[#3C3C3C]",
                    ],
                }}
            >
                <button className='text-[#65676B] hover:underline dark:text-[#B0B3B8] font-sans text-[.9375.rem] leading-3'>
                    {button}
                </button>
            </Tooltip>
        </div>
    );
};

export default TooltipFromPost;