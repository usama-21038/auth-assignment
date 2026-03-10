import React from 'react';
import Header from '../components/Header';
import Login from '../components/Pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
               <header>
                <Header></Header>
               </header>
               <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
               </main>
              
        </div>
    );
};

export default AuthLayout;