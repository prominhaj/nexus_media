"use client";
import useColor from "@/Hooks/useColor";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavigation = ({ item }) => {
    const pathname = usePathname();
    const { color } = useColor();

    return (
        <Link className={`${item.path === pathname ? "text-white dark:text-[#1e74fd] dark:bg-white bg-black" : `${color ? `${color}` : "text-light-text dark:text-dark-text"} bg-light-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover dark:bg-dark-bg`} p-2.5 rounded-full`} href={item.path} key={item.name}>
            <span className='text-2xl'>{item.icon}</span>
        </Link>
    );
};

export default HeaderNavigation;