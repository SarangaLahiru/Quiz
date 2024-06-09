import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div  className='mt-8'>
    <nav className="mx-14  md:mx-16 mt-4 md:mt-10 flex flex-row md:flex-row justify-between items-center">
      <Link to="/" className="">
        <img src="/images/logo 1.png" alt="Logo 1" className="h-8 w-auto md:h-12 hover:opacity-75 transition-opacity duration-300" />
      </Link>
      <Link to="/" className=" ">
        <img src="/images/ROUND 01.png" alt="Logo 2" className="h-5 w-auto md:h-7 hover:opacity-75 transition-opacity duration-300" />
      </Link>
    </nav>
  </div>
  );
}

export default Navbar;
