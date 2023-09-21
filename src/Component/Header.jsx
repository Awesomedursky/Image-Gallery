import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../services/firebase';

const Header = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  return (
    <div className=' bg-[rgba(254,200,200,0.46)] p-2 flex items-center justify-between md:px-10 '>
      <Link to='/' className="font-['Fuggles',cursive] font-bold text-lg  md:text-3xl drop-shadow-[0px_0px_2px_black]  hover:scale-105 transition-all duration-300 hover:text-[rgba(254,200,200,0.8)] hover:drop-shadow-[0px_0px_1px_black">
        Image Gallery
      </Link>

      <div className='flex items-center gap-x-8'>
        {!user && (
          <Link to='/login' className='text-xs md:text-base font-medium shadow h px-3 py-1 bg-white rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow'>
            Login
          </Link>
        )}

        {user && location.pathname !== '/gallery' && (
          <Link to='/gallery' className=' text-blue-500 text-xs md:text-base font-medium  px-3 py-1 rounded-xl hover:text-slate-900 hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow'>
            Gallery
          </Link>
        )}
        {user && (
          <Link
            to='/'
            className='text-xs md:text-base font-medium shadow h px-3 py-1 bg-white rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow'
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
