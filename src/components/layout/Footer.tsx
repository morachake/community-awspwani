import React from 'react';
import { CloudLightning, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <CloudLightning className="h-8 w-8 text-[#FF9900]" />
              <span className="ml-2 font-bold text-xl">AWS Community Day Pwani</span>
            </div>
            <p className="text-gray-300">
              Join us for an exciting day of cloud computing insights and networking
              with the AWS community in Pwani.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/speakers" className="text-gray-300 hover:text-[#FF9900]">Speakers</a></li>
              <li><a href="/schedule" className="text-gray-300 hover:text-[#FF9900]">Schedule</a></li>
              <li><a href="/sponsors" className="text-gray-300 hover:text-[#FF9900]">Sponsors</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-[#FF9900]">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Mombasa, Kenya</li>
              <li className="text-gray-300">awspwaniug@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF9900]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9900]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9900]">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} AWS USer Group Pwani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;