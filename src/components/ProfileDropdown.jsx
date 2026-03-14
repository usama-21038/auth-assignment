import React, { useState } from 'react';

export default function ProfileDropdown({ user, amount }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        {user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full border" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 rounded-full border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        )}
      </div>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 p-4">
          <div className="mb-2 font-semibold">User Info</div>
          <div className="mb-1 text-sm">Email: {user?.email || 'N/A'}</div>
          <div className="mb-1 text-sm">Amount: {amount} tk</div>
        </div>
      )}
    </div>
  );
}
