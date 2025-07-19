
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="3RE Motors" 
                className="h-12 w-auto filter brightness-0 invert" 
              />
              {/* <div className="logo-font text-2xl">3RE Motors</div> */}
            </div>
            <p className="text-gray-400 mb-6 body-font leading-relaxed max-w-md">
              Your trusted partner for all automotive needs. We specialize in selling, purchasing, 
              and importing quality vehicles with exceptional service and competitive prices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="body-font">759-760 B PCSIR 2 Main Blvd opposite Shoukat Khanum Hospital Lahore
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="body-font">0300 111 6962
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="body-font">Info@3remotors.com </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-font text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/inventory" className="body-font text-gray-400 hover:text-white transition-colors">Buy Cars</Link></li>
              <li><a href="#sell" className="body-font text-gray-400 hover:text-white transition-colors">Sell Your Car</a></li>
              <li><a href="#import" className="body-font text-gray-400 hover:text-white transition-colors">Import Services</a></li>
              <li><a href="#finance" className="body-font text-gray-400 hover:text-white transition-colors">Financing</a></li>
              <li><Link to="/about" className="body-font text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="heading-font text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="body-font text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#help" className="body-font text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#warranty" className="body-font text-gray-400 hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#faq" className="body-font text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="body-font text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 body-font text-center md:text-right">
              &copy; 2024 3RE Motors. All rights reserved. | EXPECT BEYOND
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
