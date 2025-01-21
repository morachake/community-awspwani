import React, { useState } from 'react';
import { Menu, X, CloudLightning } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { navigation ,years} from '@/utilis/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024');
  const location = useLocation();

  

  const isActive = (path: string) => location.pathname === path;

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
    <nav className="bg-[#232F3E] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CloudLightning className="h-8 w-8 text-[#FF9900]" />
              <span className="ml-2 text-white font-bold text-xl">AWS Community Day Pwani</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'bg-[#FF9900] text-white'
                      : 'text-gray-300 hover:bg-[#FF9900] hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Select value={selectedYear} onValueChange={handleYearChange}>
                <SelectTrigger className="w-32 bg-transparent text-gray-300 border-2 border-[#FF9900] rounded-md hover:bg-[#FF9900] hover:text-white transition-colors focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2 focus:ring-offset-[#232F3E]">
                  <SelectValue placeholder="Edition" />
                </SelectTrigger>
                <SelectContent className="bg-[#232F3E] border-2 border-[#FF9900] text-gray-300">
                  {years.map((year) => (
                    <SelectItem 
                      key={year} 
                      value={year}
                      className="hover:bg-[#FF9900] hover:text-white focus:bg-[#FF9900] focus:text-white cursor-pointer"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#FF9900] border-2 border-[#FF9900] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-[#FF9900] text-white'
                    : 'text-gray-300 hover:bg-[#FF9900] hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger className="w-full bg-transparent text-gray-300 border-2 border-[#FF9900] rounded-md hover:bg-[#FF9900] hover:text-white transition-colors focus:ring-2 focus:ring-[#FF9900] focus:ring-offset-2 focus:ring-offset-[#232F3E] mt-2">
                <SelectValue placeholder="Edition" />
              </SelectTrigger>
              <SelectContent className="bg-[#232F3E] border-2 border-[#FF9900] text-gray-300">
                {years.map((year) => (
                  <SelectItem 
                    key={year} 
                    value={year}
                    defaultValue="Edition"
                    className="hover:bg-[#FF9900] hover:text-white focus:bg-[#FF9900] focus:text-white cursor-pointer"
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;