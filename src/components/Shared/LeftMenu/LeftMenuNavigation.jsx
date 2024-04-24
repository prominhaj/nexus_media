"use client";
import useColor from "@/Hooks/useColor";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftMenuNavigation = ({ item }) => {
    const path = usePathname();
    const { color } = useColor();

    return (
        <Link className={`${path === item.path ? "dark:bg-[#3A3B3C] bg-[#F0F2F5]" : ""} block px-3 hover:bg-[#F2F2F2] dark:text-gray-300 dark:hover:bg-[#3A3B3C] rounded-md py-2 text-[1.02rem transition-all duration-300`} href={item.path}>
            <span className="flex items-center gap-2 sm:gap-3">
                <span className={`${path === item.path ? "dark:bg-[#1877F2] !bg-[#1877F2] text-[#ffffff]" : ""} bg-gray-300 dark:bg-gray-600 rounded-full p-2 ${color && path === item.path || color}`}>
                    {item.icon}
                </span>
                <span className="text-lg font-medium">
                    {item.name}
                </span>
            </span>
        </Link>
    );
};

export default LeftMenuNavigation;