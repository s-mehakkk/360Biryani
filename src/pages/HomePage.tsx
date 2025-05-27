import { Link } from 'react-router-dom';
import biryaniHero from '../assets/images/biryani2.png';
import image1 from '../assets/images/instagram-1.jpg';
import image2 from '../assets/images/instagram-2.jpg';
import image3 from '../assets/images/instagram-3.jpg';
import image4 from '../assets/images/instagram-4.jpg';
import image5 from '../assets/images/instagram-5.jpg';
import CK from '../assets/images/CK.jpg';
import HB from '../assets/images/HB.jpg';
import MSK from '../assets/images/MSK.jpg';
import OB from '../assets/images/OB.jpg';
import Bag from '../assets/images/bag.png';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" data-bbox="47.613 49.942 104.775 100.116" viewBox="47.613 49.942 104.775 100.116" fill="currentColor" height="40" width="40" role="presentation" aria-hidden="true" aria-label="">
    <g>
        <path d="M106.126 50.179l14.183 28.739 31.715 4.608a.425.425 0 01.236.725l-22.949 22.37 5.418 31.587a.425.425 0 01-.617.448l-28.367-14.913-28.367 14.913a.425.425 0 01-.617-.448l5.418-31.587-22.949-22.37a.425.425 0 01.236-.725l31.715-4.608 14.183-28.739a.425.425 0 01.762 0z" fill="#ce5300" data-color="1"/>
        <path d="M125.874 150.058c-.318 0-.638-.076-.931-.229l-28.199-14.825-28.199 14.825a2 2 0 01-2.902-2.108l5.386-31.4-22.814-22.239a2.002 2.002 0 011.109-3.412l31.527-4.581L94.95 57.521a2 2 0 013.588 0l14.099 28.568 31.527 4.581a2 2 0 011.109 3.412L122.46 116.32l5.386 31.4a2.003 2.003 0 01-1.972 2.338zm-29.13-19.314c.319 0 .64.076.931.229l25.543 13.429-4.879-28.442a2.007 2.007 0 01.575-1.771l20.665-20.143-28.558-4.149a2.002 2.002 0 01-1.507-1.095l-12.77-25.877-12.77 25.877a2 2 0 01-1.507 1.095l-28.558 4.149 20.665 20.143c.471.46.686 1.122.575 1.771l-4.879 28.442 25.543-13.429c.292-.153.612-.229.931-.229z" fill="#000010" data-color="2"/>
    </g>
</svg>
);
// SVG Icons for Features
const QualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-32 w-32 text-primary">
    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
  </svg>
);

const VarietyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-32 w-32 text-primary">
    <path d="M2,2V4H4V20H2V22H22V20H20V4H22V2H2M6,4H18V20H6V4M8,6V14H16V6H8M10,8H14V12H10V8Z" />
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-32 w-32 text-primary">
    <path d="M3,13.5L2.25,12H7.5L6.75,10.5H2L1.25,9H9.5L8.75,7.5H1L0.25,6H10.5L9.75,4.5H4L3.25,3H13.5L12,7.5V8.25L13,9.75V10.5L12,12V12.75L13,14.25V15H12.75L15,18.75L18.75,15H17V13H21V15H19.5L16.5,19.5L12.75,15H11.25V16.5H10.5L6,15H5.25V13.5H3Z" />
  </svg>
);

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -80,
      });
    }
  }, [location.state]);

  return (
    <div id="home">
         {/* Hero Section */}
      <section className="bg-yellow py-12 md:py-3 relative overflow-x-hidden">
        <div className="custom-container container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-start relative">

            {/* Text Container - Positioned over the image space on larger screens */}
            <div className="w-full md:w-2/3 text-left pt-8 md:pt-16 md:pr-12 z-20 relative
                      md:absolute md:top-24 md:left-16 md:translate-x-[-18px] 
                      bg-transparent md:bg-transparent p-4 md:p-0">
              <h1 className="text-xl md:text-5xl font-bold uppercase text-secondary mb-4">
                Open for Delivery & Pick Up
              </h1>
              <h2 className="text-5xl md:text-8xl font-bold uppercase text-primary leading-tight">
                Get it while
              </h2>
              <h2 className="text-5xl md:text-8xl font-bold uppercase text-primary leading-tight mb-6">
                it's hot
              </h2>
              <Link to="https://www.zomato.com/" target="_blank" className="order-button inline-block">
                Order Online
              </Link>
            </div>

            {/* Image Container */}
            <div className="md:ml-[270px] md:mt-[200px] ml-[0px] translate-x-[140px] mt-[-100px] relative w-full md:w-4/5 h-[280px] md:h-[800px] mr-0 overflow-hidden">
              <img
                src={biryaniHero}
                alt="Delicious Biryani"
                className="h-full w-full object-contain scale-125 md:scale-110"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="bg-yellow py-12 pb-40">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center transition-smooth hover-scale bg-white p-10 pb-24 ">
              
              <QualityIcon /> 
              
              <h3 className="mt-5 text-lg font-bold uppercase text-secondary">
                Unmatched Quality
              </h3>
              <p className="mt-3 text-secondary">
                Fine aged basmati,
              </p>
              <p className="mt-1 text-secondary">
                handpicked spices, premium
              </p>
              <p className="mt-1 text-secondary">
               meats chosen for excellence in
              </p>
              <p className="mt-1 text-secondary">
               every single bite
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center transition-smooth hover-scale bg-white p-10 pb-24">
              <VarietyIcon />
              <h3 className="mt-5 text-lg font-bold uppercase text-secondary">
                Rich Variety
              </h3>
              <p className="mt-3 text-secondary">
                From Lucknow to Hyderabad to
              </p>
              <p className="mt-1 text-secondary">
                Moradabad discover regional
              </p>
              <p className="mt-1 text-secondary">
               biryanis, kebabs, and curries
              </p>
              <p className="mt-1 text-secondary">
                crafted to perfection
              </p>
              
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center transition-smooth hover-scale bg-white p-10 pb-24">
              <DeliveryIcon />
              <h3 className="mt-5 text-lg font-bold uppercase text-secondary">
                Quick Delivery
              </h3>
              <p className="mt-3 text-secondary">
                Hot, fresh biryani at your door in
              </p>
              <p className="mt-1 text-secondary">
                under 40 minutes. Flavor and
              </p>
              <p className="mt-1 text-secondary">
               speed served together
              </p>
            </div>
          </div>
        </div>
      </section>

      
<section className="bg-white py-12 px-4 md:px-0 m-[0rem] md:m-[6rem]">
  <div className="container mx-auto">
    {/* Heading */}
    <div className="mb-8 text-center">
      <h2 className="inline-flex items-center justify-center gap-4 text-2xl font-bold uppercase text-secondary md:text-4xl">
        <Star />
        All Time Favorites
        <Star />
      </h2>
    </div>

    {/* Menu Favorites */}
    <div className="flex flex-col gap-8 md:flex-row md:gap-8 justify-center items-center">
      {/* Item 1 */}
      <div className="overflow-hidden rounded bg-white text-center w-full max-w-[376px]">
        <div className="w-full h-[376px] bg-gray-200 relative">
          <img
            src={HB}
            alt="Hyderabadi Biryani"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-[16px] font-bold uppercase text-secondary">
            Hyderabadi Biryani
          </h3>
        </div>
      </div>

      {/* Item 2 */}
      <div className="overflow-hidden rounded bg-white text-center w-full max-w-[376px]">
        <div className="w-full h-[376px] bg-gray-200 relative">
          <img
            src={MSK}
            alt="Mutton Seekh Kebab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-[16px] font-bold uppercase text-secondary">
            Mutton Seekh Kebab
          </h3>
        </div>
      </div>

      {/* Item 3 */}
      <div className="overflow-hidden rounded bg-white text-center w-full max-w-[376px]">
        <div className="w-full h-[376px] bg-gray-200 relative">
          <img
            src={CK}
            alt="Chicken Korma"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-[16px] font-bold uppercase text-secondary">
            Chicken Korma
          </h3>
        </div>
      </div>
    </div>

    {/* Full Menu Link */}
    <div className="mt-8 flex justify-center">
      <Link
        to="/menu"
        className="order-button inline-block"
      >
        Full Menu
      </Link>
    </div>
  </div>
</section>



     {/* About Us Section */}
<section className="bg-background py-12 px-3rem mx-[0rem]">
  <div className="container mx-auto p-0">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="bg-white py-24 md: py-12">
        <div className="mb-6 text-center md:text-left flex justify-center">
          <h2 className="flex relative inline-block text-2xl font-bold uppercase text-secondary md:text-[40px]">
            <Star />
            About Us
            <Star />
          </h2>
        </div>
        <h3 className="mb-4 text-center font-bold uppercase text-secondary md:text-left flex justify-center text-[22px] mt-17">
          Crafted with care.<br />
          Rooted in tradition.
        </h3>
        <p className="text-center text-secondary md:text-left flex justify-center">
          At Biryani 360, food isn't just food—it's a story.
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          Inspired by the royal kitchens of Lucknow and the
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          bustling streets of Moradabad, we recreate heritage
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          with exacting standards and a deep respect for
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          tradition. From the first aroma to the final bite, our
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          biryani isn't just made—it's meticulously crafted to
        </p>
        <p className="text-center text-secondary md:text-left flex justify-center">
          comfort, connect, and celebrate.
        </p>
        <div className="mt-6 text-center md:text-left flex justify-center">
          <Link to="/contact" className="order-button inline-block">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex items-center hidden md:flex">
        <img src={OB} alt="About Biryani 360" className="w-full h-full" />
      </div>
    </div>
  </div>
</section>


      {/* Delivery Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
              
              <div className="h-100 w-80 rounded">
                <img src= {Bag} alt=""/>
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-center text-2xl font-bold uppercase md:text-center md:text-[40px] ">
                We Deliver More
              </h2>
              <h2 className="mb-6 text-center text-2xl font-bold uppercase md:text-center md:text-[40px] ">
                Than Food</h2>
              
              <h3 className="mb-4 text-center font-bold uppercase md:text-center text-[22px]">
                Real Biryani. Real Fast
              </h3>
              <p className="text-center md:text-center">
                Craving comfort? We bring slow-cooked <br /> biryani straight to your door in just 30–40 <br /> minutes. Packed in eco-friendly bags, <br /> every order carries the warmth <br /> of tradition—fresh, pure, and made with love.
              </p>
              <div className="mt-6 text-center md:text-center flex justify-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="gallery" className="bg-background py-12 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <a className="text-2xl font-bold uppercase text-secondary md:text-3xl" href='https://www.instagram.com/biryani.360'>
              Follow @Biryani.360
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
            {/* Instagram image placeholders */}
            
              <div className="aspect-square bg-light-tan">
                <img src={image1} alt="" />
              </div>
              <div className="aspect-square bg-light-tan">
                <img src={image2} alt="" />
              </div>
              <div className="aspect-square bg-light-tan">
                <img src={image3} alt="" />
              </div>
              <div className="aspect-square bg-light-tan">
                <img src={image4} alt="" />
              </div>
              <div className="aspect-square bg-light-tan">
                <img src={image5} alt="" />
              </div>
          
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section  id="contact" className="bg-white py-12 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div >
              <h2 className="mb-6 text-2xl font-bold uppercase text-secondary">
                Contact Us
              </h2>
              <p className="mb-6 uppercase text-secondary">
                Drop us a line and we'll get back to you
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm text-secondary">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full border-b border-secondary bg-transparent py-2 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm text-secondary">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full border-b border-secondary bg-transparent py-2 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm text-secondary">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border-b border-secondary bg-transparent py-2 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm text-secondary">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border-b border-secondary bg-transparent py-2 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-secondary">
                    Leave us a message...
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-secondary bg-transparent py-2 focus:border-primary focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="border border-secondary px-8 py-2 font-medium uppercase text-secondary transition-colors hover:bg-secondary hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Opening Hours */}
            <div>
              <h2 className="mb-6 text-2xl font-bold uppercase text-secondary">
                We're Open
              </h2>
              <p className="mb-2">Monday-Friday : 11am-10pm</p>
              <p className="mb-6">Saturday-Sunday: 11am-12am</p>
              <p className="mb-1">4th Floor, Wolk, Punj Essen House,</p>
              <p className="mb-6">Nehru Place, New Delhi, 110019</p>
              <p className="mb-6">Tel: 84474-27407</p>
              <a
                href="https://www.instagram.com/biryani.360/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-secondary"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
