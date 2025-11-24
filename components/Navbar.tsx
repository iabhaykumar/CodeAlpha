
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  }, [location]);

  const handleMobileSubmenuToggle = (label: string) => {
    if (openMobileSubmenu === label) {
      setOpenMobileSubmenu(null);
    } else {
      setOpenMobileSubmenu(label);
    }
  };

  return (
    <>
      {/* Header with z-index 40 */}
      <header 
        className={`fixed w-full top-0 z-40 transition-all duration-300 animate-in slide-in-from-top-full ${
          scrolled || isOpen 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-md border-b border-slate-100 dark:border-slate-800' 
            : 'bg-transparent'
        } py-2`}
      >
        <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="block group relative z-10 transition-transform duration-300 hover:scale-105">
            <div className={`relative flex items-center justify-center transition-all duration-300 ${!scrolled && !isOpen ? 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm border border-white/50 dark:border-slate-700' : ''}`}>
              {!logoError ? (
                <img 
                  src="/logo-bg.png" 
                  alt="CodeAlpha" 
                  onError={() => setLogoError(true)}
                  className={`object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`} 
                />
              ) : (
                <span className={`font-heading font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500 dark:from-brand-400 dark:to-kappel-400 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                  CodeAlpha
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-100 dark:border-slate-700 rounded-full shadow-sm px-2 py-1.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className={`font-medium text-sm uppercase tracking-wide transition-all duration-300 relative px-4 py-1.5 rounded-full flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-700/50 ${
                        location.pathname.startsWith(item.path) ? 'text-brand-600 dark:text-brand-400 font-bold' : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link 
                    to={item.path}
                    className={`font-medium text-sm uppercase tracking-wide transition-all duration-300 relative px-4 py-1.5 rounded-full block ${
                      location.pathname === item.path 
                        ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold shadow-inner' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50">
                        {item.children.map((child) => (
                            <Link
                                key={child.path}
                                to={child.path}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    location.pathname === child.path
                                    ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400'
                                }`}
                            >
                                {child.label}
                            </Link>
                        ))}
                    </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 animate-in fade-in slide-in-from-right-8 duration-700">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all shadow-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="https://forms.gle/s9TW7Tqi3tAQLCu78" 
              target="_blank" 
              rel="noreferrer"
              className="relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-heading font-medium text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-500/40 hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent z-10"></div>
              <span className="relative z-20">Enroll Now</span>
              <ArrowRight size={16} className="relative z-20 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle - z-index needs to be highest */}
          <div className="flex items-center gap-3 md:hidden z-[60]">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={toggleMenu} className="text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - z-index 50 to slide OVER header */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-950 z-50 md:hidden flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-24 flex flex-col gap-2 overflow-y-auto">
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.label} style={{ animationDelay: `${idx * 70}ms` }} className="animate-in slide-in-from-right-8 fade-in fill-mode-backwards">
                {item.children ? (
                    <div className="flex flex-col">
                        <button
                            onClick={() => handleMobileSubmenuToggle(item.label)}
                            className={`font-heading font-semibold text-2xl text-slate-800 dark:text-slate-200 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-between ${
                                location.pathname.startsWith(item.path) ? 'text-brand-600 dark:text-brand-400' : ''
                            }`}
                        >
                            {item.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileSubmenu === item.label ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-col pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-4 my-1 space-y-1">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.path}
                                        to={child.path}
                                        className={`font-sans font-medium text-lg py-2 px-4 rounded-lg transition-colors ${
                                            location.pathname === child.path 
                                            ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400' 
                                            : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300'
                                        }`}
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link 
                        to={item.path}
                        className={`font-heading font-semibold text-2xl text-slate-800 dark:text-slate-200 p-4 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-between ${
                            location.pathname === item.path ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400' : ''
                        }`}
                    >
                        {item.label}
                        <ArrowRight size={16} className="opacity-50" />
                    </Link>
                )}
              </div>
            ))}
            <div className="mt-auto pt-8 animate-in slide-in-from-bottom-8 delay-300 fade-in fill-mode-backwards">
              <a 
                 href="https://forms.gle/s9TW7Tqi3tAQLCu78"
                 className="bg-brand-600 text-white w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-brand-500/20 active:scale-95 transition-transform"
              >
                Enroll Now <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;