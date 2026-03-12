import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from './loading';

const PrivateRoute = ({ children }) => {
    const {user,loading}=use(AuthContext);
    // console.log(user);
if(loading){
    return <Loading></Loading>
}
    if(user && user?.email){
        // if user thake return children
    return children;
    }
return <Navigate to="/auth/login"></Navigate>
    
    // else navigate login
};

export default PrivateRoute;