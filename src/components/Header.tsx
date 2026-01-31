import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const baseLink =
    'relative h-12 px-4 lg:px-5 flex items-center text-[15px] font-medium whitespace-nowrap transition-premium overflow-hidden';

  const navLinkClass = () =>
    `${baseLink} hover:bg-[#86bb40] group`;

  return (
    <>
      <style>{`
        @keyframes mobileMenuSlide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mobileItemPop {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .mobile-menu-animate {
          animation: mobileMenuSlide 0.3s ease-out forwards;
        }
        
        .mobile-item-animate {
          animation: mobileItemPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <header className="bg-[#006738] text-white relative z-50">
        <div className="mx-auto flex h-12 max-w-6xl items-center">

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center overflow-hidden">
            <NavLink to="/" className={navLinkClass()}>
              <span className="relative z-10">Home</span>
              {/* Active link underline */}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink to="/natural-farming" className={navLinkClass()}>
              <span className="relative z-10">Natural Farming</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink to="/principles-techniques" className={navLinkClass()}>
              <span className="relative z-10">Principles &amp; Techniques</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink to="/crops-practices" className={navLinkClass()}>
              <span className="relative z-10">Crops &amp; Practices</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink to="/resources-learning" className={navLinkClass()}>
              <span className="relative z-10">Resources &amp; Learning</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink to="/news-workshops" className={navLinkClass()}>
              <span className="relative z-10">News &amp; Workshops</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </NavLink>

            {/* Push to far right */}
            <NavLink
              to="/farmer-registration"
              className={`${baseLink} bg-[#ff7800] text-white btn-premium hover:shadow-lg`}
            >
              Farmer Registration
            </NavLink>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="ml-auto px-2 lg:hidden transition-transform hover:scale-110 duration-200"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation with staggered animation */}
        {open && (
          <nav
            key="mobile-nav"
            className="
          absolute top-full left-0 right-0 lg:hidden
          bg-[#006b2f]
          flex flex-col
          shadow-lg
          origin-top
          mobile-menu-animate
        "
          >
            <NavLink
              to="/"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '0ms' }}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/natural-farming"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '40ms' }}
              onClick={() => setOpen(false)}
            >
              Natural Farming
            </NavLink>

            <NavLink
              to="/principles-techniques"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '80ms' }}
              onClick={() => setOpen(false)}
            >
              Principles &amp; Techniques
            </NavLink>

            <NavLink
              to="/crops-practices"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '120ms' }}
              onClick={() => setOpen(false)}
            >
              Crops &amp; Practices
            </NavLink>

            <NavLink
              to="/resources-learning"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '160ms' }}
              onClick={() => setOpen(false)}
            >
              Resources &amp; Learning
            </NavLink>

            <NavLink
              to="/news-workshops"
              className={`${navLinkClass()} mobile-item-animate`}
              style={{ animationDelay: '200ms' }}
              onClick={() => setOpen(false)}
            >
              News &amp; Workshops
            </NavLink>

            <NavLink
              to="/farmer-registration"
              className={`${baseLink} bg-[#ff7800] text-white mobile-item-animate`}
              style={{ animationDelay: '240ms' }}
              onClick={() => setOpen(false)}
            >
              Farmer Registration
            </NavLink>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
