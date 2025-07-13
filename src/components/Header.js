import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path 
      ? 'text-black font-semibold relative' 
      : 'text-gray-600 hover:text-black font-medium relative group transition-colors duration-300';
  };

  return (
    <>
      {/* Add custom fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="transition-all duration-200"
            >
              <div className="flex items-center">
                <h1 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span className="font-extrabold">Care<span className='text-gray-500'>Genix</span></span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-base font-medium tracking-wide py-2 transition-colors duration-300 ${isActive('/')}`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Home
                {location.pathname !== '/' && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                )}
              </Link>
              <Link
                to="/team"
                className={`text-base font-medium tracking-wide py-2 transition-colors duration-300 ${isActive('/team')}`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Team
                {location.pathname !== '/team' && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                )}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <FiMenu 
                  className={`absolute inset-0 text-2xl text-gray-700 transition-all duration-200 ${
                    isMenuOpen ? 'rotate-45 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <FiX 
                  className={`absolute inset-0 text-2xl text-gray-700 transition-all duration-200 ${
                    isMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-45 opacity-0 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-1 border-t border-gray-200">
              <Link
                to="/"
                className={`block py-3 px-4 text-base font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === '/' 
                    ? 'text-black font-semibold' 
                    : 'text-gray-600 hover:text-black'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/team"
                className={`block py-3 px-4 text-base font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === '/team' 
                    ? 'text-black font-semibold' 
                    : 'text-gray-600 hover:text-black'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;