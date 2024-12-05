import React from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full flex justify-center pt-4 z-50">
      <nav className="bg-gray-100 bg-opacity-70 backdrop-blur-sm rounded-full w-1/2 px-8 transition-all duration-300 hover:bg-opacity-80 shadow-lg">
        <div className="mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-indigo-600">dot</span>
                <span>design</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
              >
                Pricing
              </a>
              <button
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full text-left px-3 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
              >
                Contact
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gray-100 bg-opacity-70 backdrop-blur-sm rounded-2xl">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="block px-3 py-2 text-gray-800 hover:text-indigo-600"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="block px-3 py-2 text-gray-800 hover:text-indigo-600"
              >
                Pricing
              </a>
              <button
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full text-left px-3 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}