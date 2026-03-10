import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    console.log(user);

    // sign in
const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// sign out
const logOut=()=>{
return signOut(auth);
}


useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
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
}

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;