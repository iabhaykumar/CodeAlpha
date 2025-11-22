
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Play, Code, Smartphone, Terminal, Database, Globe, Briefcase, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setRotate({ x: y * -10, y: x * 10 }); // Multiplier adjusts sensitivity
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.3))] -z-10"></div>
        
        {/* Floating Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-400/20 dark:bg-brand-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-brand-700 dark:text-brand-300 rounded-full text-sm font-semibold tracking-wide shadow-sm border border-brand-100 dark:border-brand-900/30 animate-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-slate-400 dark:text-slate-500 font-bold mr-1">..</span>
            Launch your career in tech
          </div>
          
          {/* 3D Heading Wrapper */}
          <div className="perspective-1000 animate-in slide-in-from-bottom-8 duration-700 delay-100 py-2">
            <h1 
              className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight preserve-3d transition-transform duration-300 ease-out"
              style={{ 
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, 
                textShadow: '0 10px 30px rgba(0,0,0,0.1)' 
              }}
            >
              Practice your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500 inline-block">Skills</span><br />
              Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-orange-500 inline-block">Future</span>
            </h1>
          </div>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
            Lay the foundation for your future prospects with expert-led virtual internships and certifications at CodeAlpha.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link 
              to="/internships" 
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Find Courses <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/verification" 
              className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg"
            >
              Verify Certificate
            </Link>
          </div>

          {/* Floating Icons for "IT" feel */}
          <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
             <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-brand-500 dark:text-brand-400 border border-slate-100 dark:border-slate-700"><Code size={32} /></div>
          </div>
          <div className="absolute top-1/2 right-20 hidden lg:block animate-float-delayed">
             <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-kappel-500 dark:text-kappel-400 border border-slate-100 dark:border-slate-700"><Globe size={32} /></div>
          </div>
          <div className="absolute bottom-1/4 right-10 hidden lg:block animate-float">
             <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-accent-500 dark:text-accent-400 border border-slate-100 dark:border-slate-700"><Database size={32} /></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard value={384} suffix="K+" label="Registrations" />
            <StatCard value={249} suffix="K+" label="Participants" />
            <StatCard value={99.9} suffix="%" label="Satisfaction Rate" isFloat />
            <StatCard value={25} suffix="+" label="Countries" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-600 dark:text-brand-400 font-bold tracking-wide uppercase text-sm mb-2">Explore Categories</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white">
              Virtual <span className="text-brand-600 dark:text-brand-400">Internships</span> for Remote Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CategoryCard 
              icon={<Code size={32} />} 
              title="Web Development" 
              desc="Master the modern web stack with React, Node, and more."
              color="bg-blue-500"
              link="/internships?cat=development"
            />
            <CategoryCard 
              icon={<Smartphone size={32} />} 
              title="App Development" 
              desc="Build intuitive iOS and Android applications."
              color="bg-purple-500"
              link="/internships?cat=development"
            />
            <CategoryCard 
              icon={<Terminal size={32} />} 
              title="Java Programming" 
              desc="Core concepts to advanced enterprise applications."
              color="bg-red-500"
              link="/internships?cat=development"
            />
            <CategoryCard 
              icon={<Database size={32} />} 
              title="Data Science" 
              desc="Analyze complex data and build ML models."
              color="bg-green-500"
              link="/internships?cat=ai"
            />
            <CategoryCard 
              icon={<Briefcase size={32} />} 
              title="Digital Marketing" 
              desc="Learn SEO, SEM, and content strategies."
              color="bg-orange-500"
              link="/internships?cat=business"
            />
            <CategoryCard 
              icon={<Globe size={32} />} 
              title="Cloud Computing" 
              desc="Deploy scalable apps on AWS and Azure."
              color="bg-cyan-500"
              link="/internships?cat=misc"
            />
            <CategoryCard 
              icon={<ShieldCheck size={32} />} 
              title="Cyber Security" 
              desc="Protect systems and networks from attacks."
              color="bg-indigo-500"
              link="/internships?cat=misc"
            />
             <CategoryCard 
              icon={<Code size={32} />} 
              title="Python Programming" 
              desc="Versatile coding for web and data."
              color="bg-yellow-500"
              link="/internships?cat=development"
            />
          </div>
        </div>
      </section>

      {/* Video/About Section */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2 relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800 z-10 transition-colors duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                    alt="Students working together" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                     <a href="https://youtu.be/jLRZ1Sod_hA" target="_blank" rel="noreferrer" className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-brand-600 fill-current ml-1" />
                     </a>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-100 dark:bg-brand-900/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-100 dark:bg-accent-900/30 rounded-full blur-3xl -z-10"></div>
             </div>
             
             <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold mb-4">About Us</div>
                <h2 className="text-44xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">CodeAlpha?</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                  CodeAlpha is the country's quickest-growing pro training platform. We're all about shaping future tech creators. Our top internships and certifications show awesome results with over <span className="font-bold text-slate-900 dark:text-white">129,000+</span> alumni.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <FeatureItem text="Expert Trainers" />
                  <FeatureItem text="Real Projects" />
                  <FeatureItem text="Remote Learning" />
                  <FeatureItem text="Lifetime Access" />
                  <FeatureItem text="Verified Certificates" />
                  <FeatureItem text="24/7 Support" />
                </div>

                <Link to="/internships" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold hover:gap-3 transition-all">
                  Discover Opportunities <ArrowRight size={20} />
                </Link>
             </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
           <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
             Join thousands of students who have transformed their careers with CodeAlpha's industry-standard internship programs.
           </p>
           <a href="https://forms.gle/s9TW7Tqi3tAQLCu78" target="_blank" rel="noreferrer" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
             Register Now <ArrowRight size={20} />
           </a>
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{value: number, suffix: string, label: string, isFloat?: boolean}> = ({ value, suffix, label, isFloat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated, isFloat]);

  return (
    <div ref={ref} className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-50 dark:border-slate-700 group">
      <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-600 dark:from-white dark:to-slate-400 mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </h3>
      <p className="text-brand-600 dark:text-brand-400 font-bold uppercase text-sm tracking-wider">{label}</p>
    </div>
  );
};

const CategoryCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string, link: string }> = ({ icon, title, desc, color, link }) => (
  <Link to={link} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 group cursor-pointer hover:-translate-y-2 h-full flex flex-col">
    <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    <div className="flex items-center text-sm font-semibold text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
      Explore <ArrowRight size={16} className="ml-2" />
    </div>
  </Link>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full shrink-0">
       <CheckCircle2 size={16} className="text-green-600 dark:text-green-400" />
    </div>
    <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">{text}</span>
  </div>
);

export default Home;
