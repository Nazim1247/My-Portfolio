
import logo from '../assets/logo.png';

const Navbar = () => {
    const links = <div className='text-lg flex flex-col lg:flex-row gap-3'>
    <a className='btn' href="#home">Home</a>
    <a className='btn' href="#about">About</a>
    <a className='btn' href="#skills">Skills</a>
    <a className='btn' href="#projects">Projects</a>
    <a className='btn' href="#contact">Contact</a>
    </div>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-200 shadow-md">
  <div className="navbar-start w-full">
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
    <img className="w-12 h-12 rounded-full mr-3" src={logo} alt="" />
    <a className="text-2xl font-bold">Nazim Uddin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary" href='https://docs.google.com/document/d/1VQ7nFEn27QH6-mBFwsVJwLJhCM40OnjVh3ofymu5IuM/edit?usp=sharing'>Download Resume</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;