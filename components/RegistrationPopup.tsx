
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ArrowRight, Calendar } from 'lucide-react';

const RegistrationPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 5 seconds for Home, 7 seconds for other pages
  const idleThreshold = location.pathname === '/' ? 7000 : 20000;

  useEffect(() => {
    // If popup is already showing, don't track idle time
    if (isVisible) return;

    const resetTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setIsVisible(true);
        setIsClosing(false);
      }, idleThreshold);
    };

    // Events to detect user activity
    const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart', 'click'];

    // Set initial timer
    resetTimer();

    // Add event listeners
    events.forEach(event => window.addEventListener(event, resetTimer));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [isVisible, idleThreshold, location.pathname]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      // When isVisible becomes false, the useEffect above triggers again, 
      // restarting the idle timer automatically.
    }, 300); 
  };

  if (!isVisible && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none px-4 pb-4 sm:p-0">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      ></div>

      {/* Popup Card */}
      <div 
        className={`pointer-events-auto w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative transform transition-all duration-500 ${
          isClosing 
            ? 'translate-y-10 opacity-0 scale-95' 
            : 'translate-y-0 opacity-100 scale-100 animate-in slide-in-from-bottom-8 fade-in zoom-in-95'
        }`}
      >
        {/* Decorative Header */}
        <div className="h-24 bg-gradient-to-r from-brand-600 to-kappel-500 relative overflow-hidden p-6 flex items-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10 text-white">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10">New Batch</span>
                </div>
                <h3 className="text-2xl font-heading font-bold">Registration Open!</h3>
            </div>

            <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all"
            >
                <X size={20} />
            </button>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    <Calendar size={24} />
                </div>
                <div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Applications are now open for our upcoming <span className="font-bold text-slate-900">Virtual Internship Program</span>. Secure your spot in top domains like AI, Web Dev, and Cyber Security.
                    </p>
                </div>
            </div>

            <div className="flex gap-3">
                <button 
                    onClick={handleClose}
                    className="flex-1 py-3 rounded-xl font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                >
                    Maybe Later
                </button>
                <a 
                    href="https://forms.gle/s9TW7Tqi3tAQLCu78" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={handleClose}
                    className="flex-[1.5] bg-slate-900 hover:bg-brand-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-500/30 transition-all group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">Apply Now <ArrowRight size={16} /></span>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
