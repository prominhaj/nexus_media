"use client"
import app from '@/Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Register the user
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const nameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Login the user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Set User
    useEffect(() => {
        const disConnectedUsers = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });

        return () => disConnectedUsers();
    }, [])

    // All Users Info
    const info = {
        createAccount,
        nameAndPhoto,
        login,
        user,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;