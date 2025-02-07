import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  BriefcaseIcon, 
  PlusCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkclass = ({isActive}) => 
    `flex items-center space-x-2 ${
      isActive 
        ? 'bg-indigo-200 text-white' 
        : 'text-indigo-400 hover:bg-indigo-400'
    } rounded-md px-3 py-2 transition-colors duration-200`;

  const navLinks = [
    { path: "/", name: "Home", icon: <HomeIcon className="h-5 w-5" /> },
    { path: "/jobs", name: "Jobs", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { path: "/add-job", name: "Post Job", icon: <PlusCircleIcon className="h-5 w-5" /> }
  ];

  

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-3">
              <BriefcaseIcon className="h-8 w-8 text-black" />
              <span className="text-black text-xl font-bold">React Jobs</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkclass}
                >
                  {({ isActive }) => (
                    <div className="flex items-center space-x-2 text-black">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-indigo-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkclass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {({ isActive }) => (
                  <div className="flex items-center space-x-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;