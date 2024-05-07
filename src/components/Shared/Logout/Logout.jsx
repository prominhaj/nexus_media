"use client";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signOut } from "next-auth/react";

const Logout = ({ children }) => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/login');
            toast.success("Logout successfully");
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='w-full' onClick={handleLogout}>
            {children}
        </div>
    );
};

export default Logout;