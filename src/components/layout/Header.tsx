import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../../assets/images/logo.png';


const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigateAndScroll = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', {
        state: { scrollTo: sectionId },
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -180,
      });
    }
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
          <button
            onClick={() => handleNavigateAndScroll('home')}
            className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigateAndScroll('gallery')}
            className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavigateAndScroll('contact')}
            className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
          >
            Contact
          </button>
          <Link
            to="/menu"
            className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
          >
            Menu
          </Link>
        </nav>

        {/* Order Online Button */}
        <Link
          to="https://www.zomato.com/"
          target="_blank"
          className="order-button-nav order-button md:flex"
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

            <button
              onClick={() => {setMobileMenuOpen(false); handleNavigateAndScroll('home');}}
              className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors text-left"
            >
              Home
            </button>

            <button
              onClick={() => {setMobileMenuOpen(false); handleNavigateAndScroll('gallery');}}
              className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors text-left"
            >
              Gallery
            </button>

            <button
              onClick={() => {setMobileMenuOpen(false); handleNavigateAndScroll('contact');}}
              className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors text-left"
            >
              Contact
            </button>

            <Link
              to="/menu"
              className="font-medium text-secondary hover:text-primary cursor-pointer transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            
            <Link
              to="https://www.zomato.com/"
              target="_blank"
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
