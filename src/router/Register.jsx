import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
       <div className='flex justify-center items-center min-h-screen'>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='mt-2'>Already have an account? <NavLink to="/auth/login" className='link link-hover text-blue-800'>Login</NavLink></p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Register;