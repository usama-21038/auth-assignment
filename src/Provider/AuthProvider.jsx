import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);
    
    console.log(user,loading);

    // sign up
const createUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

// signin
const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const updateUser=(updatedDate)=>{
    return updateProfile(auth.currentUser,updatedDate)
}

// sign out
const logOut=()=>{
return signOut(auth);
}


useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
unsubscribe();
    }
},[])

const authData={
    // user:user,
user,
setUser,
createUser,
logOut,
signIn,
loading,
setLoading,
updateUser,
}

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;