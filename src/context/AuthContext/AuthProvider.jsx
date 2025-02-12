import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // const updateUserProfile = () => {
    //     setLoading(true);
    //     return updateProfile(user, {
    //         displayName: "John Doe",
    //         photoURL: "https://example.com/johndoe/photo.jpg"
    //     }).then(() => {
    //         console.log("Profile updated successfully!");
    //     }).catch((error) => {
    //         console.error("Error updating profile:", error);
    //     });
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {
            if (currentUser?.email) {
                console.log("Currently loggedin user : ", currentUser);
                setUser(currentUser);
                // const user = {email: result.email}
                const {data} = await axios.post(`http://localhost:5000/jwt`, 
                    {email: currentUser?.email}, 
                    {withCredentials: true})
                console.log(data)
            }
            else{
                setUser(currentUser)
                const {data} = await axios.get(`http://localhost:5000/logout`,
                    {withCredentials: true})
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signInUser, signInWithGoogle, signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;