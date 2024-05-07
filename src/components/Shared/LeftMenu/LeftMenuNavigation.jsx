"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftMenuNavigation = ({ item }) => {
    const path = usePathname();

    return (
        <Link className={`${path === item.path ? "dark:bg-[#3A3B3C] bg-[#F0F2F5]" : ""} block px-3 hover:bg-[#F2F2F2] dark:text-dark-text text-light-text dark:hover:bg-[#343536] rounded-md py-2 text-[1.02rem transition-all duration-300`} href={item.path}>
            <span className="flex items-center gap-2 sm:gap-3">
                <span className={`${path === item.path ? "dark:bg-[#1877F2] !bg-[#1877F2] text-[#ffffff]" : ""} dark:bg-dark-bg bg-light-bg rounded-full p-2.5`}>
                    {item.icon}
                </span>
                <span className="text-[1rem] font-medium">
                    {item.name}
                </span>
            </span>
        </Link>
    );
};

export default LeftMenuNavigation;