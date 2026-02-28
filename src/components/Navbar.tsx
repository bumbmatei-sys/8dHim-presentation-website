import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "Challenge", href: "#challenge" },
    { name: "Solution", href: "#solution" },
    { name: "Who It's For", href: "#who" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-frost/70 backdrop-blur-md border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Ensure z-index is higher than overlay */}
        <Link to="/" className="z-50 relative" onClick={closeMenu}>
          <img 
            src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/8DHIM-LOGO-BLACK.png?raw=true" 
            alt="8TH DAY HOPE INTERNATIONAL MINISTRIES" 
            className={`h-10 w-auto ${isOpen ? "invert transition-all duration-300" : "transition-all duration-300"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-forest/80">
          {navLinks.map((link) => (
            isHome ? (
              <a key={link.name} href={link.href} className="hover:text-teal transition-colors">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={`/${link.href}`} className="hover:text-teal transition-colors">
                {link.name}
              </Link>
            )
          ))}
          {/* Contact Us - Desktop */}
          <Link to="/contact" className="hover:text-teal transition-colors">
            Contact Us
          </Link>
        </div>
        
        <button className="hidden md:block bg-teal text-frost px-6 py-2.5 rounded-full font-medium hover:bg-teal/90 hover:shadow-[0_0_20px_rgba(130,228,208,0.4)] transition-all duration-300 ml-6">
          Enroll Free
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-forest p-2 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay - Rendered via Portal */}
        {createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-forest z-[60] flex flex-col items-center justify-center md:hidden"
              >
                <div className="flex flex-col items-center gap-8 text-xl font-medium text-white/90">
                  {/* Home Link */}
                  <Link 
                    to="/" 
                    className="hover:text-teal transition-colors"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  {navLinks.map((link) => (
                    isHome ? (
                      <a 
                        key={link.name} 
                        href={link.href} 
                        className="hover:text-teal transition-colors"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        key={link.name} 
                        to={`/${link.href}`} 
                        className="hover:text-teal transition-colors"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                  
                  {/* Contact Us - Mobile */}
                  <Link 
                    to="/contact" 
                    className="hover:text-teal transition-colors"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>

                  <button 
                    className="mt-6 bg-teal text-white px-10 py-3.5 rounded-full font-semibold text-lg hover:bg-teal/90 transition-all duration-300 shadow-lg"
                    onClick={closeMenu}
                  >
                    Enroll Free
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </nav>
  );
};
