
import React, { useState } from 'react';
import TransparentLogo from '../../assets/logo-no-background.png';


const Dropdown = (e) => {
  e.preventDefault();
  return(
  <div className="absolute mt-2 bg-black text-white p-2 flex flex-col">
    <a href="#" className="mb-2">Test Portal</a>
    <a href="#" className="mb-2">Admin Portal</a>
  </div>

  );
};

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <header className="bg-gray-600 p-3">
        <nav className="flex items-center justify-between">
      
          <div
            className="text-white flex items-center sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          {/* Logo */}
          <div className="flex-grow text-center">
            <img src={TransparentLogo} alt="Logo" className="w-24 h-[20px] mx-auto" />
          </div>

          <div className="text-white flex items-center mr-8">
            <img
              width="28"
              height="20"
              src="https://img.icons8.com/wired/64/000000/login-rounded-right.png"
              alt="login-rounded-right"
            />
            <a href="/login" onClick={toggleMenu}>Login{menuVisible && <Dropdown />}</a>
          </div>
        </nav>
      </header>
  
  <div className="p-2 bg-black hidden sm:block">
        <div className="flex justify-center space-x-8">
          <a href="" className="text-white">
            Home
          </a>
          <a href="" className="text-white">
            Contact
          </a>
          <a href="" className="text-white">
            About us
          </a>
          <a href="" className="text-white">
            Support
          </a>
          <a href="" className="text-white">
            Help
          </a>
        </div>
      </div>
      <div className="p-4 sm:p-0 bg-black"></div>
 

{menuVisible && (
  <div className="p-[10%] bg-black sm:hidden left-0 top-0 bottom-0 flex flex-col items-center relative">
    <div className="flex justify-end p-2 absolute top-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-6 h-6 cursor-pointer"
        onClick={closeMenu}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div className="mb-2"></div>
    <a href="" className="text-white mb-2">
      Home
    </a>
    <a href="" className="text-white mb-2">
      Contact
    </a>
    <a href="" className="text-white mb-2">
      About us
    </a>
    <a href="" className="text-white mb-2">
      Support
    </a>
    <a href="" className="text-white mb-2">
      Help
    </a>
  </div>
)}



    </>
  );
};

export default Header;

