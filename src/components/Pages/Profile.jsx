import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [editing, setEditing] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Avatar fallback
    const avatarUrl = "https://ui-avatars.com/api/?name=" + encodeURIComponent(user?.displayName || "User") + "&background=ccccff&color=222&size=120";
    const profileImage = user?.photoURL ? user.photoURL : avatarUrl;

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
        setDisplayName(user?.displayName || '');
        setPhotoURL(user?.photoURL || '');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await updateUser({ displayName, photoURL });
            setUser({ ...user, displayName, photoURL });
            setEditing(false);
        } catch (err) {
            setError('Failed to update profile.');
        }
        setLoading(false);
    };

    return (
        <div className='md:flex gap-10 w-11/12 mx-auto'>
            <div className='py-10'>
                <img className='rounded-4xl my-2' src={profileImage} alt="Profile" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className='py-10'>
                <h1 className='text-2xl underline font-bold'>User Details</h1>
                {editing ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xs">
                        <label className="font-semibold">Name:</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="text"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            required
                        />
                        <label className="font-semibold">Profile Picture URL:</label>
                        <input
                            className="border rounded px-2 py-1"
                            type="text"
                            value={photoURL}
                            onChange={e => setPhotoURL(e.target.value)}
                        />
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <div className="flex gap-2 mt-2">
                            <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
                            <button type="button" className="bg-gray-400 text-white px-4 py-1 rounded" onClick={handleCancel} disabled={loading}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <h1 className='text-lg font-bold'>Name: {user?.displayName || 'N/A'}</h1>
                        <p className='text-lg'>Email: {user?.email || 'N/A'}</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-1 rounded" onClick={handleEdit}>Edit Profile</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;