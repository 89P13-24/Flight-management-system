import React from 'react'
import {FaUser} from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className="bg-slate-200 p-3 flex justify-between mx-auto max-w-6xl">
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=" text-slate-500 ">Abhishek</span>
            <span className="text-slate-700">Airlines</span>
        </h1>
        </Link>
        <ul className='flex gap-4 items-center'>
        <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline '>Home</li>
        </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li><FaUser className='text-slate-700'/></li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign-in</li>
            </Link>
        </ul>
        </div>
    </header>
    
  )
}
