import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { containerVariants } from '../Variants';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useState, useEffect } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    user && navigate('/gallery');
  }, [loading, user]);

  return (
    <motion.div variants={containerVariants} initial={containerVariants.initial} animate={containerVariants.animate} exit={containerVariants.exit} className="flex flex-col gap-y-2 md:gap-y-4 items-center justify-center h-[90vh] w-full font-['Roboto',sans-serif] p-4">
      <p className='font-bold text-2xl md:text-3xl'>Login</p>

      <div className='flex flex-col border p-5 rounded-lg shadow-lg w-full max-w-sm gap-y-6'>
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-sm md:text-base'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            className='text-sm md:text-base p-2 border-[1px] border-black rounded-lg outline-none focus:drop-shadow-[0_0_2px_black] transition-all duration-200'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='password' className='text-sm md:text-base'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            className='p-2 border-[1px] border-black rounded-lg outline-none focus:drop-shadow-[0_0_2px_black] transition-all duration-200'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={() => logInWithEmailAndPassword(email, password)} type='submit' className='text-white  p-2 w-full rounded-lg bg-blue-500 drop-shadow-[0_0_1px_black] shadow-lg hover:scale-105 transition-all duration-200 active:shadow-sm active:scale-100 text-sm md:text-base'>
          Login
        </button>
        <button onClick={() => signInWithGoogle()} className='flex items-center justify-center gap-2 p-2 w-full bg-transparent rounded-lg border shadow-lg text-black font-medium hover:scale-105 transition-all duration-200 active:shadow-sm active:scale-100 text-sm md:text-base'>
          <FcGoogle />
          Sign in with Google
        </button>
      </div>
    </motion.div>
  );
};

export default LoginPage;
