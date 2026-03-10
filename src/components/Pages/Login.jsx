import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
         {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='mt-2'>Don't have an account? <NavLink to="/auth/register" className='link link-hover text-red-800'>Register</NavLink></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;