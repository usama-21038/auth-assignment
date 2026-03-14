import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    // Avatar fallback
    const avatarUrl = "https://ui-avatars.com/api/?name=" + encodeURIComponent(user?.displayName || "User") + "&background=ccccff&color=222&size=120";
    const profileImage = user?.photoURL ? user.photoURL : avatarUrl;

    return (
        <div className='md:flex gap-10 w-11/12 mx-auto'>
            <div className='py-10'>
                <img className='rounded-4xl my-2' src={profileImage} alt="Profile" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className='py-10'>
                <h1 className='text-2xl underline font-bold'>User Details</h1>
                <h1 className='text-lg font-bold'>Name: {user?.displayName || 'N/A'}</h1>
                <p className='text-lg'>Email: {user?.email || 'N/A'}</p>
            </div>
        </div>
    );
};

export default Profile;