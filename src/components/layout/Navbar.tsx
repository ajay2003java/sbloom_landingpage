
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const industries = [
    { name: 'Education', href: '/industries/education' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Professional Services', href: '/industries/professional-services' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container" aria-label="sBLOOM Home" onClick={handleMobileClick}>
          <img src="/sbloom-logo-gold-v2.png?v=3" alt="sBLOOM Logo" className="navbar-logo-img" />
        </Link>
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} onClick={handleMobileClick}>Home</Link>
            </li>
            
            <li 
              className="nav-dropdown-wrapper" 
              onMouseEnter={() => !mobileMenuOpen && setDropdownOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setDropdownOpen(false)}
            >
              <button 
                className={`nav-link nav-dropdown-btn ${location.pathname.includes('/industries') ? 'active' : ''}`}
                onClick={() => mobileMenuOpen && setDropdownOpen(!dropdownOpen)}
              >
                Industries <ChevronDown size={16} className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="nav-dropdown"
                    style={mobileMenuOpen ? { transform: 'none', left: 0 } : { transform: 'translateX(-50%)', left: '50%' }}
                  >
                    {industries.map((ind) => (
                      <Link 
                        key={ind.name} 
                        to={ind.href} 
                        className={`dropdown-item ${location.pathname === ind.href ? 'active' : ''}`}
                        aria-current={location.pathname === ind.href ? 'page' : undefined}
                        onClick={handleMobileClick}
                      >
                        <span className="dropdown-item-title">{ind.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            
            <li>
              <Link to="/solutions" className={`nav-link ${location.pathname.includes('/solutions') ? 'active' : ''}`} aria-current={location.pathname === '/solutions' ? 'page' : undefined} onClick={handleMobileClick}>Solutions</Link>
            </li>
            
            <li>
              <Link to="/how-it-works" className={`nav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`} aria-current={location.pathname === '/how-it-works' ? 'page' : undefined} onClick={handleMobileClick}>How It Works</Link>
            </li>
            
            <li>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current={location.pathname === '/about' ? 'page' : undefined} onClick={handleMobileClick}>About</Link>
            </li>

            <li>
              <Link to="/proof-of-work" className={`nav-link ${location.pathname === '/proof-of-work' ? 'active' : ''}`} aria-current={location.pathname === '/proof-of-work' ? 'page' : undefined} onClick={handleMobileClick}>Proof of Work</Link>
            </li>
            <li className="nav-workspace-item" style={{ marginLeft: '10px', borderLeft: '1px solid rgba(229, 169, 60, 0.25)', paddingLeft: '16px' }}>
              <Link to="/creative-workspace" className={`nav-link ${location.pathname === '/creative-workspace' ? 'active' : ''}`} style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#D9A52E' }} onClick={handleMobileClick}>Advisor Network</Link>
            </li>
            <li className="nav-cta-item">
              <Link to="/contact" className="btn btn-primary btn-nav" onClick={handleMobileClick}>Talk to sBLOOM</Link>
            </li>
          </ul>
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
