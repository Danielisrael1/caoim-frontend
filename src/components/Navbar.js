import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a 
            href="#" 
            className="text-xl font-bold text-white"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            
            <span className="text-amber-300">Caoim</span>
            
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a 
            href="#" 
            className="text-white hover:text-amber-300 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            HOME
          </a>
          <a 
            href="#" 
            className="text-white hover:text-amber-300 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            ABOUT US
          </a>
          <a 
            href="#" 
            className="text-white hover:text-amber-300 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('sermon');
            }}
          >
            SERMON
          </a>
          <a 
            href="#" 
            className="text-white hover:text-amber-300 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('blog');
            }}
          >
            BLOG
          </a>
        </div>

        <div className="hidden md:block">
          <a 
            href="#" 
            className="btn hover:shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-black p-4 z-50 md:hidden">
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-white hover:text-amber-300 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                HOME
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-300 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                ABOUT US
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-300 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('sermon');
                }}
              >
                SERMON
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-300 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('blog');
                }}
              >
                BLOG
              </a>
              <a 
                href="#" 
                className="text-center py-2 btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;