
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-white py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group py-1">
            <img 
              src="logo.png" 
              alt="CIMS Online Services" 
              className="h-14 md:h-18 w-auto object-contain transform transition-transform group-hover:scale-102"
              onError={(e) => {
                // Fallback in case image is missing
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.fallback-text')) {
                  const span = document.createElement('span');
                  span.className = 'fallback-text text-2xl font-black text-primary tracking-tighter';
                  span.innerText = 'CIMS ONLINE';
                  parent.appendChild(span);
                }
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors font-bold text-sm uppercase tracking-wider relative group/link ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-white px-7 py-2.5 rounded-lg font-black shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95 text-xs uppercase tracking-widest">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-icons-round text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-4 rounded-xl text-base font-black uppercase tracking-widest ${
                  isActive(link.path) 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-black shadow-xl uppercase tracking-widest">
                Login to Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
