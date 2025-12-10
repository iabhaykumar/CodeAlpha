import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  // --- Back to Top Button Logic ---
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // --- Scroll on Navigate Logic ---
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  // --- Render Logic ---
  // The scroll on navigate logic is a side effect and doesn't render anything,
  // so we just return the button based on its own visibility logic.
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTopButton}
      className="fixed bottom-24 right-8 z-50 p-3 bg-brand-600 text-white rounded-full shadow-xl hover:bg-brand-700 hover:shadow-brand-500/30 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1 group print:hidden"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="group-hover:animate-bounce" />
    </button>
  );
};

export default ScrollToTop;