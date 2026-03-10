import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser,setUser} = use(AuthContext);

    const handleRegister=(e)=>{
e.preventDefault();
console.log(e.target);
const form=e.target;
const name=form.name.value;
const photoUrl=form.photoUrl.value;
const email=form.email.value;
const password=form.password.value;
console.log({ name, photoUrl, email, password });

createUser(email, password)
.then((result) => {
    // Signed up 
    const user = result.user;
    // console.log(user);
    setUser(user);
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
});
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Full Name */}
                        <label className="label">Full Name</label>
                        <input name='name' type="text" className="input" placeholder="Full Name" required/>
                        {/* Photo Url */}
                        <label className="label">Photo URL</label>
                        <input name='photoUrl' type="text" className="input" placeholder="Photo URL" required/>

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required   />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='mt-2'>Already have an account? <NavLink to="/auth/login" className='link link-hover text-blue-800'>Login</NavLink></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;