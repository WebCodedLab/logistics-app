import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Logistics Hub</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Leading the way in transportation and logistics solutions.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Dry Vans
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Reefers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Flatbeds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li>
                <a href="tel:1234567890" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  123-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@logisticshub.com" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  info@logisticshub.com
                </a>
              </li>
              <li className="pt-4">
                <li className="pt-4">
                  <div className="flex space-x-4">
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                      <i className="ri-facebook-circle-fill text-xl "></i>
                    </Link>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                      <i className="ri-twitter-x-line text-xl "></i>
                    </Link>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                      <i className="ri-linkedin-box-fill text-xl "></i>
                    </Link>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Logistics Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;