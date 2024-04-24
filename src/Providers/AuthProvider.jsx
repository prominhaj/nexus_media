"use client"
import app from '@/Firebase/Firebase.config';
import { deleteCookies } from '@/components/Global/cookies/deleteCookies';
import { setCookies } from '@/components/Global/cookies/setCookies';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

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

    // Logout the user
    const logout = () => {
        return signOut(auth);
    }

    // Google Authentication
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Github Authentication
    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Set User
    useEffect(() => {
        setLoading(true);
        const disConnectedUsers = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setCookies("auth-token", process.env.NEXT_PUBLIC_AUTH_TOKEN)
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setLoading(false)
                deleteCookies("auth-token")
            }
        });

        return () => disConnectedUsers();
    }, [])

    // All Users Info
    const info = {
        createAccount,
        nameAndPhoto,
        login,
        user,
        loading,
        googleSignIn,
        githubSignIn,
        logout
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;