import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm ">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="360 Briyani" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-end space-x-8 md:flex justify-end">
          <Link
            to="/"
            className={`font-medium transition-colors ${
              isActive('/')
                ? 'text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={`font-medium transition-colors ${
              isActive('/gallery')
                ? 'text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors ${
              isActive('/contact')
                ? 'text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Contact
          </Link>
          <Link
            to="/menu"
            className={`font-medium transition-colors ${
              isActive('/menu')
                ? 'text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            Menu
          </Link>
        </nav>

        {/* Order Online Button */}
        <Link
          to="/order-online"
          className="hidden rounded-none bg-primary px-6 py-2 font-semibold text-white transition-colors hover:bg-[#a93a00] md:block"
        >
          Order Online
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-secondary md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`font-medium ${
                isActive('/') ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`font-medium ${
                isActive('/gallery') ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            
            <Link
              to="/contact"
              className={`font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/menu"
              className={`font-medium ${
                isActive('/menu') ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/order-online"
              className="w-full bg-primary py-2 text-center font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
