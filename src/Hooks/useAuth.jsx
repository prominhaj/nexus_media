"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import { useContext } from 'react';

const useAuth = () => {
    const { user } = useContext(AuthContext);
    return user;
};

export default useAuth;