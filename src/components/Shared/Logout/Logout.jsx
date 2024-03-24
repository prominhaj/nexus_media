"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import React, { useContext } from 'react';
import { toast } from 'sonner';

const Logout = ({ children }) => {
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logout successfully")
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