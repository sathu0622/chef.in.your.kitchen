import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-[#1d3557] text-[#f1faee] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink 
            to="/" 
            onClick={closeMenu} 
            className="flex items-center text-2xl font-serif font-bold tracking-wide hover:text-[#e63946] transition-colors"
          >
            <FaUtensils className="mr-2 text-[#e63946]" />
            chef.in.your.kitchen
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={label}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#e63946]' : 'hover:text-[#e63946] text-gray-300'
                  }`
                }
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#e63946] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            {/* <button className="ml-4 text-gray-300 hover:text-[#e63946] transition-colors">
              <FiSearch className="text-xl" />
            </button> */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e63946] hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all"
            >
              Reservations
            </motion.button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-2xl focus:outline-none text-gray-300 hover:text-white"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#14213d] shadow-xl"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex items-center mb-4 px-2 py-3 bg-[#1d3557]/50 rounded-lg">
                <FiSearch className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
                />
              </div>
              <ul className="flex flex-col space-y-2">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-colors ${
                        isActive ? 'bg-[#e63946] text-white' : 'text-gray-300 hover:bg-[#1d3557] hover:text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                {/* <li>
                  <button className="w-full bg-[#e63946] hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all mt-2">
                    Make Reservation
                  </button>
                </li> */}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
export default Header;
