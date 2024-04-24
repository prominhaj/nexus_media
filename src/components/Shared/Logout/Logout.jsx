"use client";
import { AuthContext } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { toast } from 'sonner';

const Logout = ({ children }) => {
    const { logout } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();
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