import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowRight, Terminal, Globe, Cpu, ShieldCheck,
  Code, Smartphone, BrainCircuit, Rocket, Star,
  Zap, CheckCircle2, TrendingUp, Users, Award, Timer,
  ChevronDown, X, Gift, Sparkles, Briefcase, BookOpen, PenTool,
  Layout, Database, Play, FileText, Mail, Trophy, Calendar,
  UserPlus, ClipboardCheck
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';
import { TESTIMONIALS } from '../constants';

// --- Helper Components ---

const TECH_ROW_1 = [
  { name: "PYTHON", color: "bg-yellow-500" },
  { name: "JAVA", color: "bg-red-500" },
  { name: "C++", color: "bg-blue-600" },
  { name: "JAVASCRIPT", color: "bg-yellow-300" },
  { name: "TYPESCRIPT", color: "bg-blue-400" },
  { name: "REACT", color: "bg-cyan-400" },
  { name: "ANGULAR", color: "bg-red-600" },
  { name: "VUE", color: "bg-green-500" },
];

const TECH_ROW_2 = [
  { name: "NODE.JS", color: "bg-green-600" },
  { name: "DOCKER", color: "bg-blue-500" },
  { name: "KUBERNETES", color: "bg-blue-700" },
  { name: "AWS", color: "bg-orange-500" },
  { name: "GIT", color: "bg-red-500" },
  { name: "LINUX", color: "bg-yellow-200" },
  { name: "TENSORFLOW", color: "bg-orange-400" },
  { name: "PYTORCH", color: "bg-red-400" },
];

const COMPANIES_ROW_1 = [
  { name: "Google", color: "text-blue-600", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
  { name: "Microsoft", color: "text-green-600", bg: "group-hover:bg-green-50 dark:group-hover:bg-green-900/20" },
  { name: "Amazon", color: "text-yellow-600", bg: "group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/20" },
  { name: "Meta", color: "text-blue-500", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
  { name: "Netflix", color: "text-red-600", bg: "group-hover:bg-red-50 dark:group-hover:bg-red-900/20" },
  { name: "Apple", color: "text-slate-800 dark:text-white", bg: "group-hover:bg-slate-100 dark:group-hover:bg-slate-800" },
];

const COMPANIES_ROW_2 = [
  { name: "Tesla", color: "text-red-700", bg: "group-hover:bg-red-50 dark:group-hover:bg-red-900/20" },
  { name: "IBM", color: "text-blue-800", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
  { name: "Oracle", color: "text-red-500", bg: "group-hover:bg-red-50 dark:group-hover:bg-red-900/20" },
  { name: "Adobe", color: "text-red-600", bg: "group-hover:bg-red-50 dark:group-hover:bg-red-900/20" },
  { name: "Intel", color: "text-blue-400", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
  { name: "Samsung", color: "text-blue-700", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
  { name: "Uber", color: "text-slate-900 dark:text-white", bg: "group-hover:bg-slate-100 dark:group-hover:bg-slate-800" },
  { name: "LinkedIn", color: "text-blue-700", bg: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" },
];

const TechCard: React.FC<{ name: string; color: string }> = ({ name, color }) => (
    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 cursor-default group min-w-max">
        <span className={`w-3 h-3 rounded-full ${color} group-hover:scale-125 transition-transform`}></span>
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wider">{name}</span>
    </div>
);

const CompanyBadge: React.FC<{ name: string; color: string; bg: string }> = ({ name, color, bg }) => (
    <div className={`group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 hover:scale-110 hover:shadow-xl hover:-translate-y-1 cursor-default min-w-[200px]`}>
        <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${bg}`}></div>
        <Briefcase size={18} className={`relative z-10 transition-colors duration-300 text-slate-400 group-hover:text-current ${color}`} />
        <span className={`relative z-10 text-lg font-bold text-slate-500 transition-colors duration-300 group-hover:text-current ${color}`}>{name}</span>
    </div>
);

const AnimatedStat: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Start when 30% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2500; // 2.5 seconds duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure exact end value
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center p-6 transform hover:scale-105 transition-transform duration-300 group">
      <div className="text-4xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400 mb-2 drop-shadow-sm group-hover:from-purple-600 group-hover:to-brand-600 transition-all">
        {count >= 1000 ? (count / 1000).toFixed(0) + 'K' : count}{suffix}
      </div>
      <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">{label}</div>
    </div>
  );
};

const ScrambleText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let interval: any;
    let iteration = 0;

    const startScramble = () => {
      clearInterval(interval);
      iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    // Trigger on mount
    startScramble();

    // Trigger on hover if needed
    if (isHovered) {
        startScramble();
    }

    return () => clearInterval(interval);
  }, [text, isHovered]);

  return (
    <span 
        className={className} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
    >
        {displayText}
    </span>
  );
};

const DomainCard: React.FC<{ icon: any, title: string, description: string, color: string, to: string, cta?: string }> = ({ icon: Icon, title, description, color, to, cta = "Apply Now" }) => (
  <Link to={to} className="group relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-bl-[100px] transition-all group-hover:scale-150`}></div>
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${color} text-white shadow-md group-hover:scale-110 transition-transform`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
      {description}
    </p>
    <span className="inline-flex items-center text-sm font-bold text-brand-600 dark:text-brand-400 group-hover:translate-x-2 transition-transform mt-auto">
      {cta} <ArrowRight size={16} className="ml-1" />
    </span>
  </Link>
);

const ProcessStep: React.FC<{ number: string, title: string, description: string, icon: any, delay: string }> = ({ number, title, description, icon: Icon, delay }) => (
    <div className={`relative flex flex-col items-center text-center p-6 z-10 group ${delay}`}>
        {/* Animated Icon Container */}
        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-700 shadow-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 relative transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:border-brand-200 dark:group-hover:border-brand-800">
            <div className="absolute inset-0 bg-brand-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Icon size={32} />
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-md">
               {number}
            </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
);

const BenefitItem: React.FC<{ icon: any, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-brand-100 dark:border-brand-800">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showReferralToast, setShowReferralToast] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
        setReferralCode(ref);
        setShowReferralToast(true);
        localStorage.setItem('referred_by', ref);
        const timer = setTimeout(() => setShowReferralToast(false), 8000);
        return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const FAQS = [
    { question: "Is the internship really free?", answer: "Yes! Our virtual internships are 100% free. We believe in democratizing education and providing equal opportunities for all students." },
    { question: "How do I receive the certificate?", answer: "Upon successful completion of the assigned tasks within the 4-week duration, you will receive a verifiable completion certificate via email." },
    { question: "Can I apply for multiple domains?", answer: "Yes, you can apply for multiple domains if you have the required skills and time to manage the tasks." },
    { question: "Is there any selection process?", answer: "We have a screening process based on your application form details. Make sure to fill it out carefully." },
    { question: "Is it work from home?", answer: "Yes, all our internships are Virtual (Remote). You can work from anywhere." }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeAlpha",
    "url": "https://codealpha.tech",
    "logo": "https://drive.google.com/thumbnail?id=1PuN2sdYkGURRFXlGd_zAjXQrYzmPaOhi&sz=w200",
    "description": "The ultimate student ecosystem offering Virtual Internships, Online Compilers, and Career Tools.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9336576683",
      "contactType": "customer service",
      "email": "services@codealpha.tech",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  };

  return (
    <div className="animate-in fade-in duration-500 overflow-x-hidden font-sans bg-slate-50 dark:bg-slate-950">
      <SEO
        title="Home"
        description="CodeAlpha: The ultimate student ecosystem. Virtual internships, Online Compiler, Tutorials, and Interview Prep all in one place to boost your career."
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
        keywords={['CodeAlpha', 'Internships', 'Student Ecosystem', 'Online Compiler', 'Interview Preparation', 'Tech Tutorials', 'Virtual Internship', 'EdTech']}
        schema={organizationSchema}
      />

      <AIAssistant
        title="CodeAlpha Guide"
        pageContext="Home Page. CodeAlpha offers Virtual Internships in Web Dev, App Dev, etc. It's free."
      />
      
      {/* Custom Styles for Reverse Scroll */}
      <style>{`
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
      `}</style>

      {/* Referral Toast */}
      {showReferralToast && (
          <div className="fixed top-24 right-6 z-50 bg-white dark:bg-slate-900 border-l-4 border-green-500 rounded-r-xl shadow-2xl p-5 max-w-sm animate-in slide-in-from-right-8 duration-500 flex items-start gap-4">
             <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-full text-green-600 dark:text-green-400 shrink-0">
                 <Gift size={24} />
             </div>
             <div className="flex-1">
                 <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Welcome, Friend!</h4>
                 <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Referred by <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-1 rounded">{referralCode}</span>. Apply now!
                 </p>
             </div>
             <button onClick={() => setShowReferralToast(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><X size={18} /></button>
          </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-slate-950 -z-20"></div>
        {/* Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[80px] -z-10 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-up">
             <Sparkles size={14} /> #1 Platform for Virtual Internships
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            <span className="block animate-fade-up" style={{ animationDelay: '0.1s' }}>Where Learning Meets</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-brand-600 bg-300% animate-shimmer min-h-[1.1em] mt-2 cursor-pointer pb-2">
                <ScrambleText text="Real World Experience" />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Kickstart your career with our free virtual internship program. Gain hands-on experience, work on live projects, and get certified.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/internships"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-brand-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Apply for Internship <ArrowRight size={20} />
            </Link>
            <Link 
              to="/verification"
              className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Verify Certificate <ShieldCheck size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- STATS BANNER (Animated) --- */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
         <div className="container mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 dark:divide-slate-800 gap-y-8 md:gap-y-0">
                 <AnimatedStat end={980} suffix="K+" label="Registered Students" />
                 <AnimatedStat end={671} suffix="K+" label="Certificates Issued" />
                 <AnimatedStat end={25} suffix="+" label="Countries" />
                 <AnimatedStat end={100} suffix="%" label="Free & Online" />
             </div>
         </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
              Why Choose <span className="text-brand-600">CodeAlpha?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We provide the tools and platform you need to launch your tech career, completely free of charge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitItem 
              icon={Zap} 
              title="100% Free" 
              description="No hidden fees or charges. We believe quality education should be accessible to everyone." 
            />
            <BenefitItem 
              icon={Calendar} 
              title="Flexible Schedule" 
              description="Learn at your own pace. Manage your internship tasks alongside your college studies." 
            />
            <BenefitItem 
              icon={ShieldCheck} 
              title="Verified Certificates" 
              description="Earn a certificate with a unique ID that recruiters can instantly verify on our portal." 
            />
            <BenefitItem 
              icon={Briefcase} 
              title="Real-World Projects" 
              description="Stop watching tutorials. Build actual projects that you can showcase in your portfolio." 
            />
          </div>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE (Double) --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative group">
          <div className="container mx-auto px-4 mb-12 text-center">
             <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Skills</span>
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                Technologies You Will <span className="text-brand-600">Master</span>
             </h2>
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex flex-col gap-6">
            {/* Row 1: Left Scroll */}
            <div className="flex animate-scroll w-max gap-6 items-center group-hover:[animation-play-state:paused]">
                {[...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1].map((tech, i) => (
                    <TechCard key={`r1-${i}`} name={tech.name} color={tech.color} />
                ))}
            </div>
            
            {/* Row 2: Right Scroll */}
            <div className="flex animate-scroll-reverse w-max gap-6 items-center group-hover:[animation-play-state:paused]">
                {[...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2].map((tech, i) => (
                    <TechCard key={`r2-${i}`} name={tech.name} color={tech.color} />
                ))}
            </div>
          </div>
      </section>

      {/* --- PLACEMENT SUCCESS MARQUEE (Double Animated Rows) --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden relative group">
          <div className="container mx-auto px-4 mb-16 text-center">
             <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Success Stories</span>
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                Our Alumni Work At <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Top MNCs</span>
             </h2>
             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Join a network of students who have secured positions at the world's leading technology companies.
             </p>
          </div>
          
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-col gap-8">
             {/* Row 1: Left Scroll */}
             <div className="flex animate-scroll w-max gap-8 items-center group-hover:[animation-play-state:paused]">
                 {[...COMPANIES_ROW_1, ...COMPANIES_ROW_1, ...COMPANIES_ROW_1].map((company, i) => (
                     <CompanyBadge key={`r1-${i}`} name={company.name} color={company.color} bg={company.bg} />
                 ))}
             </div>
             
             {/* Row 2: Right Scroll */}
             <div className="flex animate-scroll-reverse w-max gap-8 items-center group-hover:[animation-play-state:paused]">
                 {[...COMPANIES_ROW_2, ...COMPANIES_ROW_2, ...COMPANIES_ROW_2].map((company, i) => (
                     <CompanyBadge key={`r2-${i}`} name={company.name} color={company.color} bg={company.bg} />
                 ))}
             </div>
          </div>
      </section>

      {/* --- CERTIFICATE PREVIEW SECTION --- */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 animate-in slide-in-from-left-8 duration-700">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                      <Award size={16} className="text-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">Verified Credential</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                      Earn a Recognized <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Certificate of Completion</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      Showcase your achievement. Our certificates come with a unique verification ID that can be verified instantly on our platform. Add it to your LinkedIn profile and resume to stand out to recruiters.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/internships" className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-flex items-center justify-center gap-2">
                          Start Your Journey <ArrowRight size={18}/>
                      </Link>
                      <Link to="/verification" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                          Verify a Certificate <CheckCircle2 size={18}/>
                      </Link>
                  </div>
              </div>
              
              <div className="lg:w-1/2 relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
                  
                  {/* Certificate Container with 3D Float Animation */}
                  <div className="relative transform transition-transform duration-700 hover:scale-[1.02] animate-float shadow-2xl rounded-2xl">
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800">
                          {/* Using the Google Drive Thumbnail as requested */}
                          <img 
                            src="https://drive.google.com/thumbnail?id=1JX3zGkpWF1zHT8SkOVWcEymLCcukwfdy&sz=w1000" 
                            alt="CodeAlpha Sample Certificate" 
                            className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                          />
                          {/* Overlay Glint Effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 skew-x-12 translate-x-[-200%] group-hover:animate-shimmer pointer-events-none"></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                          <div className="bg-green-100 p-2 rounded-full text-green-600">
                              <ShieldCheck size={24} />
                          </div>
                          <div>
                              <p className="text-xs font-bold text-slate-500 uppercase">Status</p>
                              <p className="font-bold">Verified & Valid</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- INTERNSHIP DOMAINS --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Opportunities</span>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                  Explore Our <span className="text-brand-600">Internships</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Choose from a variety of domains to build your skills. All internships are 4 weeks long and project-based.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
               <DomainCard 
                  icon={Globe} 
                  title="Web Development" 
                  description="Build modern, responsive websites using HTML, CSS, JavaScript, and React. Work on real-world projects." 
                  color="from-blue-500 to-cyan-400"
                  to="/internships"
               />
               <DomainCard 
                  icon={Smartphone} 
                  title="App Development" 
                  description="Create mobile applications for Android using Java/Kotlin or cross-platform apps with Flutter." 
                  color="from-green-500 to-emerald-400"
                  to="/internships"
               />
               <DomainCard 
                  icon={BrainCircuit} 
                  title="Machine Learning" 
                  description="Dive into AI/ML. Work with Python, TensorFlow, and Scikit-learn to build predictive models." 
                  color="from-purple-500 to-indigo-400"
                  to="/internships"
               />
               <DomainCard 
                  icon={Terminal} 
                  title="C++ Programming" 
                  description="Master the fundamentals of C++ and Object-Oriented Programming through practical tasks." 
                  color="from-red-500 to-orange-400"
                  to="/internships"
               />
               <DomainCard 
                  icon={Code} 
                  title="Java Programming" 
                  description="Learn Java core concepts, collections, and build robust console-based applications." 
                  color="from-orange-500 to-amber-400"
                  to="/internships"
               />
               <DomainCard 
                  icon={PenTool} 
                  title="Graphic Design" 
                  description="Unleash your creativity. Design social media posts, logos, and UI/UX mockups." 
                  color="from-pink-500 to-rose-400"
                  to="/internships"
               />
            </div>
            
            <div className="text-center mt-12">
                <Link to="/internships" className="inline-flex items-center font-bold text-slate-900 dark:text-white border-b-2 border-brand-500 hover:text-brand-600 transition-colors">
                    View All Domains <ArrowRight size={16} className="ml-2"/>
                </Link>
            </div>
         </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
               <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Process</span>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">How It <span className="text-brand-600">Works?</span></h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -z-10">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-brand-500/50 to-transparent animate-pulse"></div>
                </div>

                <ProcessStep 
                    number="01" 
                    title="Apply" 
                    description="Fill out the simple registration form. It's completely free and takes less than 2 minutes."
                    icon={UserPlus}
                    delay="animate-in fade-in slide-in-from-bottom-8 duration-700"
                />
                <ProcessStep 
                    number="02" 
                    title="Selection" 
                    description="Get your selection letter via email. Join our community channels for updates."
                    icon={Mail}
                    delay="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100"
                />
                <ProcessStep 
                    number="03" 
                    title="Complete Tasks" 
                    description="Receive task lists for your domain. Complete them within the 4-week deadline."
                    icon={ClipboardCheck}
                    delay="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
                />
                <ProcessStep 
                    number="04" 
                    title="Get Certified" 
                    description="Submit your work. Upon verification, receive your internship completion certificate."
                    icon={Award}
                    delay="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
                />
            </div>
         </div>
      </section>

      {/* --- AI TOOLS SPOTLIGHT --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
          {/* Background blobs for visual interest */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Career Boosters</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                      Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">AI Career Tools</span>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                      Stop getting rejected by robots. Use our AI-powered toolkit to optimize your resume, beat the ATS, and connect with recruiters instantly.
                  </p>
                  {/* Removed Practice Coding Link as requested */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                   {/* Tool 1: ATS Score */}
                   <DomainCard 
                      icon={TrendingUp} 
                      title="Check ATS Score" 
                      description="Is your resume beating the bots? Upload your CV to get an instant score out of 100 and actionable improvements." 
                      color="from-blue-500 to-cyan-400"
                      to="/ats-score"
                      cta="Check Now"
                   />
                   {/* Tool 2: Email Generator */}
                   <DomainCard 
                      icon={Mail} 
                      title="Job Email Builder" 
                      description="Generate professional cold emails in seconds and get a curated list of HR contacts from top tech companies." 
                      color="from-purple-500 to-indigo-400"
                      to="/email-generator"
                      cta="Generate Email"
                   />
                   {/* Tool 3: Resume Scanner */}
                   <DomainCard 
                      icon={FileText} 
                      title="AI Resume Scanner" 
                      description="Compare your resume against job descriptions to see how well you match and what keywords are missing." 
                      color="from-pink-500 to-rose-400"
                      to="/interview-prep/resume-scanner"
                      cta="Scan Resume"
                   />
              </div>

              {/* New Row for Practice, Tutorials, Quiz, Compiler */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {/* Tool 4: Coding Practice */}
                   <DomainCard 
                      icon={Terminal} 
                      title="Coding Practice" 
                      description="Sharpen your coding skills with exercises in C, C++, Java, and Python. Solve problems from basics to advanced." 
                      color="from-emerald-500 to-teal-400"
                      to="/practice"
                      cta="Start Coding"
                   />
                   {/* Tool 5: Online Compiler */}
                   <DomainCard 
                      icon={Code} 
                      title="Online Compiler" 
                      description="Write, compile, and run code in 5+ languages instantly. Includes AI debugging and 'Hello CodeAlpha' templates." 
                      color="from-cyan-500 to-blue-400"
                      to="/code-playground"
                      cta="Open Compiler"
                   />
                   {/* Tool 6: Tutorials */}
                   <DomainCard 
                      icon={BookOpen} 
                      title="Tech Tutorials" 
                      description="Comprehensive guides and roadmaps for Data Structures, Algorithms, Web Development, and more." 
                      color="from-orange-500 to-amber-400"
                      to="/tutorials"
                      cta="Start Learning"
                   />
                   {/* Tool 7: Quiz */}
                   <DomainCard 
                      icon={Trophy} 
                      title="Quiz Registration" 
                      description="Test your knowledge, complete challenges, and win badges. Register for our monthly tech quizzes." 
                      color="from-red-500 to-rose-400"
                      to="/quiz"
                      cta="Register Now"
                   />
              </div>
          </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
         <div className="container mx-auto px-4 mb-12 text-center">
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">Student <span className="text-brand-600">Reviews</span></h2>
         </div>
         
         <div className="relative w-full">
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>
             
             <div className="flex animate-scroll gap-6 w-max hover:[animation-play-state:paused] px-4">
                 {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
                    <div key={`${item.id}-${index}`} className="w-80 md:w-96 bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col shadow-sm">
                        <div className="flex gap-1 mb-4">
                             {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                             ))}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed flex-1">"{item.content}"</p>
                        <div className="flex items-center gap-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                             <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 flex items-center justify-center font-bold text-sm">
                                {item.name.charAt(0)}
                             </div>
                             <div>
                                 <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[160px]">{item.name}</p>
                                 <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                             </div>
                        </div>
                    </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
         <div className="container mx-auto px-4 max-w-3xl">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                 <p className="text-slate-600 dark:text-slate-400">Got questions? We've got answers.</p>
             </div>
             
             <div className="space-y-4">
                 {FAQS.map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <button 
                           onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                           className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                           <span className="text-lg">{faq.question}</span>
                           <ChevronDown 
                             size={20} 
                             className={`text-slate-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                           />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-brand-900/40 dark:to-slate-900 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
                  {/* Background decorations */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
                  
                  <div className="relative z-10 max-w-3xl mx-auto">
                      <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Ready to start your career?</h2>
                      <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                          Join thousands of students who are already building their future with CodeAlpha. It's free, flexible, and career-focused.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <Link to="/internships" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-xl hover:scale-105">
                              Apply Now
                          </Link>
                          <Link to="/contact" className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                              Contact Support
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;