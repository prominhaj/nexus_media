"use client";
import { useSession } from 'next-auth/react';

const useAuth = () => {
    const { data, status } = useSession();
    const user = data?.session?.user;
    return { status, user };
};

export default useAuth;