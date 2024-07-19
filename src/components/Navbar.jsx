import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaXmark, FaPhone } from "react-icons/fa6";

export default function Navbar() {
  // Visivel ou não
  const [nav, setNav] = useState(false);

  // Trocar a visibilidade
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, title: 'Home', to: "/"},
    { id: 2, title: 'Blog', to: "/financing-react/blog"},
    { id: 3, title: 'Services', to: "/financing-react/services"},
    { id: 4, title: 'About', to: "/financing-react/about"},
    { id: 5, title: 'Contact Us', to: "/financing-react/contact"},
  ];

  return (
    <div className='flex items-center justify-between h-28 mx-auto px-4 text-white lg:container '>
      
      {/* Desktop */}
      <h1 className='text-3xl font-bold '>Financing.</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <NavLink to={item.to} key={item.id} className='px-2 py-3 text-lg text-white/65 hover:text-white'>
              {item.title}
          </NavLink>
        ))}
      </ul>

      <div className="hidden items-center gap-2 md:flex">
        <FaPhone size={50} className='bg-blue-500 rounded-full p-3'/>
        <p className="text-lg">123-489-9381</p>
      </div>
      
      {/* Mobile */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <FaXmark size={40} /> : <FaBars size={40} />}
      </div>

      <ul
        className={
          nav
            ? 'flex flex-col fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-[url(../img/blob.svg)] bg-blue-700 bg-no-repeat bg-cover bg-left ease-in-out duration-500'
            : 'flex flex-col fixed top-0 bottom-0 left-[-100%] w-[60%] ease-in-out duration-500'
        }
      >
        <h1 className='text-3xl font-bold mt-10 mb-5 ms-4'>Financing.</h1>

        {navItems.map(item => (
          <NavLink onClick={handleNav} to={item.to} key={item.id} className='ms-3 px-2 py-3 text-2xl text-white/65 hover:text-white'>
            {item.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}