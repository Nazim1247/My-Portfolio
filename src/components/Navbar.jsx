
import { useState } from 'react';
import logo from '../assets/logo.png';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  const [darkMode,setDarkMode]= useState(false);
    const links = <div className='text-lg flex flex-col lg:flex-row gap-3'>
    <a className='btn btn-ghost' href="#home">Home</a>
    <a className='btn btn-ghost' href="#about">About</a>
    <a className='btn btn-ghost' href="#skills">Skills</a>
    <a className='btn btn-ghost' href="#projects">Projects</a>
    <a className='btn btn-ghost' href="#contact">Contact</a>
    </div>

    const handleTheme = ()=>{
      setDarkMode(!darkMode)
      document.body.classList.toggle('dark')
    }

    return (
        <div className=' w-11/12 mx-auto'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className="w-12 h-12 rounded-full md:mr-3" src={logo} alt="" />
    <a className="text-2xl font-bold hidden md:flex">Nazim Uddin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://drive.google.com/file/d/198_vPtoQs1prLO2zHPqYNDuEI_49boEI/view?usp=sharing'><button className="btn ">Download Resume</button></a>
    <button onClick={handleTheme} className='btn btn-ghost text-4xl md:ml-1'>{darkMode?<BsFillMoonStarsFill className='text-gray-500' title='Click for Light Mode' />:<MdOutlineLightMode className='text-white' title='Click for Dark Mode'/>}</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;