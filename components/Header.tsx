
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNotify, setShowNotify] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      categories: [
        {
          name: 'Identity',
          icon: 'badge',
          items: [
            { name: 'Aadhar Services', id: 'aadhar' },
            { name: 'PAN Card', id: 'pan' },
            { name: 'Voter ID', id: 'voter' },
            { name: 'Driving Licence', id: 'dl' },
            { name: 'E-Shram Card', id: 'eshram' }
          ]
        },
        {
          name: 'Certificates',
          icon: 'article',
          items: [
            { name: 'Birth Certificate', id: 'birth-cert' },
            { name: 'Death Certificate', id: 'death-cert' },
            { name: 'Caste Certificate', id: 'caste-cert' },
            { name: 'Income Certificate', id: 'income-cert' },
            { name: 'Residence Certificate', id: 'residence-cert' },
            { name: 'Ration Card Work', id: 'ration-card' }
          ]
        },
        {
          name: 'Business',
          icon: 'storefront',
          items: [
            { name: 'Firm Registration', id: 'firm-reg' },
            { name: 'GST Registration', id: 'gst-reg' },
            { name: 'Trade Licence', id: 'trade-lic' },
            { name: 'MSME / Udyam', id: 'msme-udyam' },
            { name: 'Rental Agreements', id: 'rental-agmt' },
            { name: 'Bank Account Services', id: 'bank-acc' }
          ]
        },
        {
          name: 'Banking & General',
          icon: 'account_balance',
          items: [
            { name: 'Money Transfer', id: 'money-transfer' },
            { name: 'AEPS & Micro ATM', id: 'aeps' },
            { name: 'PF Services', id: 'pf-services' },
            { name: 'Utility Bills', id: 'utility-bills' },
            { name: 'PP Photos', id: 'pp-photos' },
            { name: 'DTP & Printing', id: 'dtp-form' }
          ]
        },
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {showNotify && (
        <div className="bg-primary text-white py-2 px-4 relative z-[2010] text-center animate-in fade-in slide-in-from-top duration-500 shadow-lg">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="material-icons-round text-sm animate-pulse">campaign</span>
            Official Mee Seva hours: 9 AM to 8:30 PM. Visit our Ramanthapur Center!
          </p>
          <button
            onClick={() => setShowNotify(false)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <span className="material-icons-round text-xs">close</span>
          </button>
        </div>
      )}

      <header className={`sticky top-0 z-[1000] w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-1' : 'bg-white py-2'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="header__logo">
              <img
                src="/logo.png"
                alt="CIMS ONLINE SERVICES Logo"
                className="logo-img"
              />
            </Link>

            <nav className="hidden md:flex space-x-12 items-center h-full">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className={`h-full flex items-center ${link.hasDropdown ? 'nav-item--services' : ''}`}
                >
                  <Link
                    to={link.path}
                    className={`transition-colors font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-1.5 py-4 ${isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && <span className="material-icons-round text-sm opacity-50">expand_more</span>}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>

                  {link.hasDropdown && (
                    <div className="services-mega">
                      <div className="grid grid-cols-4 gap-10">
                        {link.categories?.map((cat) => (
                          <div key={cat.name} className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                              <span className="material-icons-round text-secondary text-2xl">{cat.icon}</span>
                              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-900">{cat.name}</h4>
                            </div>
                            <ul className="space-y-3.5">
                              {cat.items.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    to={`/services#${item.id}`}
                                    className="text-[11px] font-bold text-gray-500 hover:text-primary transition-all flex items-center gap-2 group/item"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0"></span>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 pt-6 border-t border-gray-50 flex justify-between items-center">
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Select a service to view requirements</p>
                        <Link to="/services" className="text-[10px] font-black text-secondary hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
                          View All Services <span className="material-icons-round text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none p-2.5 rounded-xl transition-colors bg-gray-50 border border-gray-100"
                aria-label="Toggle menu"
              >
                <span className="material-icons-round text-2xl">{isOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[90vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="px-6 py-6 space-y-2 overflow-y-auto max-h-[80vh] scrollbar-hide">
            {navLinks.map((link) => (
              <div key={link.name} className={`border-b border-gray-50 last:border-0 ${link.hasDropdown && isServicesOpen ? 'accordion-open' : ''}`}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    className={`flex-grow py-5 text-xs font-black uppercase tracking-widest transition-all ${isActive(link.path) ? 'text-primary' : 'text-gray-900'
                      }`}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`p-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                    >
                      <span className="material-icons-round">expand_more</span>
                    </button>
                  )}
                </div>

                {link.hasDropdown && (
                  <div className="accordion-content pl-4 space-y-8 pb-4">
                    {link.categories?.map((cat) => (
                      <div key={cat.name} className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="material-icons-round text-secondary text-sm">{cat.icon}</span>
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{cat.name}</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-3 pl-6 border-l-2 border-gray-50">
                          {cat.items.map((item) => (
                            <Link
                              key={item.id}
                              to={`/services#${item.id}`}
                              className="py-1 text-[11px] font-bold text-gray-600 hover:text-primary flex items-center gap-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
