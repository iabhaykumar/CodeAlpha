
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

const QuizRegistration: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextQuizMonth, setNextQuizMonth] = useState('');

  // Helper to get the target date
  const getNextQuizDate = () => {
    const now = new Date();
    const targetDate = new Date();
    
    // Set target to the 5th
    targetDate.setDate(5);
    targetDate.setHours(10, 0, 0, 0); // Assume 10:00 AM start time

    // If today is past the 5th (or is the 5th after 10am), move to next month
    if (now > targetDate) {
      targetDate.setMonth(targetDate.getMonth() + 1);
    }
    return targetDate;
  };

  // Calculate time until the next 5th of the month
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = getNextQuizDate();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    // Set initial display text
    const targetDate = getNextQuizDate();
    setNextQuizMonth(targetDate.toLocaleString('default', { month: 'short' }));

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
      <SEO 
        title="Tech Quiz Registration" 
        description="Register for CodeAlpha's monthly Tech Quiz. Test your knowledge in coding, win badges, and get recognized in our developer community." 
      />

      <AIAssistant 
        title="Quiz Master"
        pageContext="You are a Quiz Master assistant for CodeAlpha. Explain the monthly tech quiz schedule (held on the 5th of every month), the registration process (via Google Form), and how results/ranks are generated."
        suggestions={["When is the next quiz?", "How do I register?", "Is there a prize?"]}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold uppercase tracking-wider mb-4 border border-brand-200">
                Monthly Event
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                CodeAlpha <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Quiz Registration</span>
            </h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden group animate-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-500/20 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                <Calendar size={32} />
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Next: 5th {nextQuizMonth}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Register for Next Quiz</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Don't miss out! Registration is open for the upcoming tech quiz. 
              Topics include Web Dev, AI, and more. Secure your spot now to test your knowledge and win exciting badges.
            </p>

            {/* Countdown Timer */}
            <div className="mb-8">
               <div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
                  <Clock size={18} className="text-brand-600" />
                  <span className="text-sm uppercase tracking-wider">Registration Ends In</span>
               </div>
               <div className="grid grid-cols-4 gap-3 md:gap-4">
                  <TimeBox value={formatTime(timeLeft.days)} label="Days" />
                  <TimeBox value={formatTime(timeLeft.hours)} label="Hrs" />
                  <TimeBox value={formatTime(timeLeft.minutes)} label="Mins" />
                  <TimeBox value={formatTime(timeLeft.seconds)} label="Secs" />
               </div>
            </div>

            <a 
              href="https://forms.gle/s9TW7Tqi3tAQLCu78" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-500/30 transition-all group/btn"
            >
              <span>Register Now</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-xs text-slate-400 mt-4 text-center">
              * Registration closes 24 hours before the event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-4 text-center shadow-sm hover:scale-105 transition-transform duration-300">
     <div className="text-2xl md:text-3xl font-mono font-bold text-brand-600 mb-1">{value}</div>
     <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{label}</div>
  </div>
);

export default QuizRegistration;
