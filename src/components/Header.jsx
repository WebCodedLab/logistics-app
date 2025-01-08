import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faq' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            {!isMenuOpen && <span className="text-2xl font-bold text-blue-600">
              Logistics Hub
            </span>}
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-2 py-1 text-sm font-medium text-gray-600 hover:text-blue-600
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium 
                hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
           {isMenuOpen ? <i class="ri-close-line"></i> : <i class="ri-menu-line"></i>}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'w-full' : 'max-h-0'}`}>
          <div className="space-y-3 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-600 rounded-lg
                  hover:bg-gray-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;