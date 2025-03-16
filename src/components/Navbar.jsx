
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdOutlineLightMode } from 'react-icons/md';
import { RiDownload2Line } from 'react-icons/ri';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const links = <div className='text-lg flex flex-col lg:flex-row gap-3'>
    <a className='btn btn-ghost btn-sm' href="#home">Home</a>
    <a className='btn btn-ghost btn-sm' href="#about">About</a>
    <a className='btn btn-ghost btn-sm' href="#skills">Skills</a>
    <a className='btn btn-ghost btn-sm' href="#projects">Projects</a>
    <a className='btn btn-ghost btn-sm' href="#contact">Contact</a>
    </div>

const handleTheme = ()=>{
  setTheme((prevTheme)=>(prevTheme === 'light'? 'dark': 'light'))
}

    useEffect(()=>{
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
     },[theme])

    return (
        <div className='w-full'>
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost btn-sm lg:hidden">
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
        className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className="w-10 h-10 rounded-full md:mr-3" src={logo} alt="" />
    <a className="text-2xl font-bold hidden md:flex">Nazim Uddin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://drive.google.com/uc?export=download&id=12Y66z0fUA5RmBhSHxhb4QhGXELtocd-r' className='flex items-center btn btn-sm btn-ghost text-lg'><RiDownload2Line /><button className="">Resume</button></a>
    <button onClick={handleTheme} className='btn btn-sm btn-ghost text-4xl md:ml-1'>
      {theme === 'light'?
    <MdOutlineLightMode className='text-white' title='Click for Dark Mode'/>:
    <BsFillMoonStarsFill className='text-gray-500' title='Click for Light Mode' />}
      </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;