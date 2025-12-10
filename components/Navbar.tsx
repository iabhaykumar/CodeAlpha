import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown, User, LogOut, Loader2, Gift } from 'lucide-react';
import { UserProfile } from '../types';

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
  
  // Auth State
  const [user, setUser] = useState<UserProfile | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  // Check for logged in user on mount and listen for events
  useEffect(() => {
    const savedUser = localStorage.getItem('user_profile');
    if (savedUser) {
        try {
            setUser(JSON.parse(savedUser));
        } catch (e) {
            console.error("Failed to parse user", e);
        }
    }

    const handleAuthChange = () => {
        const updatedUser = localStorage.getItem('user_profile');
        if (updatedUser) {
            setUser(JSON.parse(updatedUser));
        } else {
            setUser(null);
        }
    };

    const handleOpenAuthModal = () => {
        setShowLoginModal(true);
    };
    
    window.addEventListener('auth-change', handleAuthChange);
    window.addEventListener('open-auth-modal', handleOpenAuthModal);
    
    return () => {
        window.removeEventListener('auth-change', handleAuthChange);
        window.removeEventListener('open-auth-modal', handleOpenAuthModal);
    };
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
    document.body.style.overflow = 'unset';
  }, [location]);

  const handleMobileSubmenuToggle = (label: string) => {
    if (openMobileSubmenu === label) {
      setOpenMobileSubmenu(null);
    } else {
      setOpenMobileSubmenu(label);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
        const mockUser: UserProfile = {
            name: "Rahul Sharma",
            email: "rahul.sharma@example.com",
            id: "u_123456",
            picture: "" 
        };
        setUser(mockUser);
        localStorage.setItem('user_profile', JSON.stringify(mockUser));
        window.dispatchEvent(new Event('auth-change'));
        setIsLoggingIn(false);
        setShowLoginModal(false);
    }, 1500);
  };

  const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('user_profile');
      window.dispatchEvent(new Event('auth-change'));
  };

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="block group relative z-50" onClick={() => setIsOpen(false)}>
            <div className="relative flex items-center justify-center">
              {!logoError ? (
                <img 
                  src="https://drive.google.com/thumbnail?id=1PuN2sdYkGURRFXlGd_zAjXQrYzmPaOhi&sz=w200" 
                  alt="CodeAlpha" 
                  onError={() => setLogoError(true)}
                  className={`object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`} 
                />
              ) : (
                <span className={`font-heading font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500 dark:from-brand-400 dark:to-kappel-400 text-2xl`}>
                  CodeAlpha
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-full shadow-sm px-2 py-1.5 mx-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className={`font-nav font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-300 ${
                        location.pathname.startsWith(item.path) 
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="mt-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link 
                    to={item.path}
                    className={`font-nav font-semibold text-sm px-4 py-2 rounded-full block transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50">
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
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {user ? (
                <div className="relative group">
                    <button className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm hover:shadow-md transition-all">
                        <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 flex items-center justify-center font-bold text-sm overflow-hidden">
                            {user.picture ? <img src={user.picture} alt="" className="w-full h-full object-cover" /> : user.name.charAt(0)}
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200 max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                        <ChevronDown size={14} className="text-slate-400" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50">
                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 mb-1">
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Account</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.email}</p>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            ) : (
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Login
                </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden z-[60]">
            <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 text-slate-900 dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-slate-950 z-40 md:hidden flex flex-col transition-all duration-300 ease-in-out pt-20 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
          <div className="flex-1 px-6 pb-6 overflow-y-auto scrollbar-hide flex flex-col h-full">
            {user ? (
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shrink-0">
                        <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 flex items-center justify-center font-bold text-lg overflow-hidden">
                            {user.picture ? <img src={user.picture} alt="" className="w-full h-full object-cover" /> : user.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-slate-900 dark:text-white truncate">{user.name}</p>
                            <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                        <button onClick={handleLogout} className="p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg"><LogOut size={20}/></button>
                    </div>
                </div>
            ) : (
                <button 
                  onClick={() => { setShowLoginModal(true); setIsOpen(false); }}
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold mb-6 shadow-lg flex items-center justify-center gap-2 shrink-0"
                >
                    Login / Sign Up <ArrowRight size={18} />
                </button>
            )}

            <div className="space-y-1 flex-1">
                {NAV_ITEMS.map((item) => (
                <div key={item.label} className={isOpen ? "animate-in slide-in-from-right-8 fade-in fill-mode-backwards" : ""}>
                    {item.children ? (
                        <div className="flex flex-col border-b border-slate-100 dark:border-slate-800 last:border-0">
                            <button
                                onClick={() => handleMobileSubmenuToggle(item.label)}
                                className="font-bold text-lg text-slate-800 dark:text-slate-200 py-4 flex items-center justify-between w-full"
                            >
                                {item.label}
                                <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileSubmenu === item.label ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileSubmenu === item.label ? 'max-h-64 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl p-2 space-y-1">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.path}
                                            to={child.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`font-medium text-sm py-3 px-4 rounded-lg transition-colors flex items-center justify-between ${
                                                location.pathname === child.path 
                                                ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm' 
                                                : 'text-slate-600 dark:text-slate-400'
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
                            onClick={() => setIsOpen(false)}
                            className="font-bold text-lg text-slate-800 dark:text-slate-200 py-4 border-b border-slate-100 dark:border-slate-800 last:border-0 flex items-center justify-between w-full"
                        >
                            {item.label}
                            {location.pathname === item.path && <ArrowRight size={18} className="text-brand-600" />}
                        </Link>
                    )}
                </div>
                ))}
            </div>
            
            <div className="pt-6 mt-auto border-t border-slate-100 dark:border-slate-800 text-center">
               <p className="text-xs text-slate-400">© 2025 CodeAlpha</p>
            </div>
          </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={() => !isLoggingIn && setShowLoginModal(false)}></div>
             <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-sm relative z-10 p-8 shadow-2xl animate-in zoom-in-95 border border-slate-100 dark:border-slate-800 overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-500 to-purple-500"></div>
                 
                 <div className="text-center mb-8">
                     <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center p-3 border border-slate-100 dark:border-slate-700">
                         <img src="https://drive.google.com/thumbnail?id=1PuN2sdYkGURRFXlGd_zAjXQrYzmPaOhi&sz=w200" alt="Logo" className="w-full h-full object-contain" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h3>
                     <p className="text-slate-500 dark:text-slate-400 text-sm">Sign in to access your dashboard.</p>
                 </div>

                 <button 
                    onClick={handleGoogleLogin}
                    disabled={isLoggingIn}
                    className="w-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                 >
                    {isLoggingIn ? (
                        <><Loader2 className="animate-spin" size={20} /> Signing in...</>
                    ) : (
                        <>
                             <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Continue with Google
                        </>
                    )}
                 </button>
                 
                 <button onClick={() => !isLoggingIn && setShowLoginModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                     <X size={20} />
                 </button>
             </div>
        </div>
      )}
    </>
  );
};

export default Navbar;