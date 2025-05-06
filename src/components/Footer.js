import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a 
              href="#" 
              className="text-xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <span className="text-white">[</span>
              <span className="text-amber-300">Finsweet</span>
              <span className="text-white">]</span>
            </a>
            <p className="mt-4 text-gray-400">
              Join our community and become part of something meaningful. Connect with like-minded individuals in a supportive environment.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('sermon');
                  }}
                >
                  Sermons
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('events');
                  }}
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <MapPin size={18} className="mr-2 text-amber-300 group-hover:text-amber-500 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">NH 234 PUBLIC SQUARE, SAN FRANCISCO 65368</span>
              </div>
              <div className="flex items-center group">
                <Phone size={18} className="mr-2 text-amber-300 group-hover:text-amber-500 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">(480) 555-0103</span>
              </div>
              <div className="flex items-center group">
                <Mail size={18} className="mr-2 text-amber-300 group-hover:text-amber-500 transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">CAOIM@EXAMPLE.COM</span>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 transform hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 transform hover:scale-110">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors duration-300 transform hover:scale-110">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Caoim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;