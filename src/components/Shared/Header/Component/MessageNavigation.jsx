import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";

const MessageNavigation = () => {
    return (
        <Link className='block' href={"/message"}>
            <button className='p-3 rounded-full bg-light-bg dark:bg-dark-bg dark:hover:bg-dark-bg-hover hover:bg-light-bg-hover duration-250'>
                <FaFacebookMessenger className="text-2xl" />
            </button>
        </Link>
    );
};

export default MessageNavigation;