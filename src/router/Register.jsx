import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser,updateUser} = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, photoUrl, email, password });

        if (name.length < 5) {
            setNameError("Name must be at least 5 characters long");
            return;
        } else {
            setNameError("");
        }

        createUser(email, password)
            .then((result) => {
                // Signed up
                const user = result.user;
                updateUser({ displayName: name , photoURL: photoUrl }).then(() => {
                    setUser({...user, displayName: name , photoURL: photoUrl});
                    navigate('/');
                })
                .catch((error) => {
                    // console.error("Error updating user profile:", error);
                    setUser(user);
                    navigate('/');
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    alert("This email is already registered. Please log in or use a different email.");
                } else {
                    alert(errorMessage);
                }
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
                        {nameError && <p className='text-red-500'>{nameError}</p>}
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