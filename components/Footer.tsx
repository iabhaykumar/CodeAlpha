
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, Twitter, Youtube, Instagram, 
  Mail, MapPin, Phone, 
  Send, Globe, Loader2, Check 
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || subscribeStatus !== 'idle') {
      return;
    }
    
    setSubscribeStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail(""); // Clear email on success

      // Reset the form state after showing success message
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 font-sans">
      {/* Top Section: Newsletter & Branding */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 border-b border-slate-800/60 pb-12">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-6">
                    {!logoError ? (
                        <img 
                          src="https://drive.google.com/thumbnail?id=1PuN2sdYkGURRFXlGd_zAjXQrYzmPaOhi&sz=w200" 
                          alt="CodeAlpha" 
                          onError={() => setLogoError(true)}
                          className="h-12 object-contain" 
                        />
                    ) : (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20">
                                C
                            </div>
                            <span className="text-2xl font-heading font-bold text-white">CodeAlpha</span>
                        </div>
                    )}
                </div>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    Empowering the next generation of tech leaders through virtual internships, hands-on coding practice, and industry-standard mentorship.
                </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                <h3 className="text-xl font-bold text-white mb-2">Join our Newsletter</h3>
                <p className="text-slate-400 mb-6 text-sm">Get the latest internship updates, tech tutorials, and exclusive resources weekly.</p>
                <form onSubmit={handleSubscribe} className="flex flex-col">
                    <div className="flex gap-3">
                        <input 
                            type="email" 
                            placeholder={subscribeStatus === 'success' ? 'Thank you!' : 'Enter your email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white placeholder-slate-600 disabled:opacity-50"
                            required
                            disabled={subscribeStatus !== 'idle'}
                        />
                        <button 
                            type="submit" 
                            className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 disabled:bg-brand-700 disabled:scale-100 disabled:cursor-not-allowed w-40"
                            disabled={subscribeStatus !== 'idle' || !email.includes('@')}
                        >
                            {subscribeStatus === 'idle' && (<>Subscribe <Send size={16} /></>)}
                            {subscribeStatus === 'submitting' && (<><Loader2 size={16} className="animate-spin" /> Subscribing...</>)}
                            {subscribeStatus === 'success' && (<><Check size={16} /> Subscribed!</>)}
                        </button>
                    </div>
                     {subscribeStatus === 'success' && (
                        <p className="text-green-400 text-xs mt-3 animate-in fade-in">
                            Success! Keep an eye on your inbox for our weekly updates.
                        </p>
                    )}
                </form>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="col-span-2 lg:col-span-1">
                <h4 className="text-white font-bold mb-6 text-lg">Explore</h4>
                <ul className="space-y-4 text-sm">
                    <li><Link to="/internships" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Virtual Internships</Link></li>
                    <li><Link to="/practice" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Coding Practice</Link></li>
                    <li><Link to="/tutorials" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Video Tutorials</Link></li>
                    <li><Link to="/quiz" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Tech Quizzes</Link></li>
                    <li><Link to="/code-playground" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Online Compiler</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
                <ul className="space-y-4 text-sm">
                    {/* Mapped to relevant existing pages since dedicated pages don't exist yet */}
                    <li><Link to="/" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">About Us</Link></li>
                    <li><Link to="/internships" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Careers</Link></li>
                    <li><Link to="/tutorials" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Blog</Link></li>
                    <li><Link to="/contact" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Partners</Link></li>
                    <li><Link to="/verification" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Verify Certificate</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
                <ul className="space-y-4 text-sm">
                    <li><Link to="/ats-score" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">ATS Checker</Link></li>
                    <li><Link to="/interview-prep" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Interview Prep</Link></li>
                    <li><Link to="/feedback" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Testimonials</Link></li>
                    <li><Link to="/contact" className="hover:text-brand-400 transition-colors hover:translate-x-1 inline-block duration-200">Help Center</Link></li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-4 lg:col-span-2">
                <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 group">
                        <div className="p-2 bg-slate-900 rounded-lg text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all">
                            <MapPin size={18} />
                        </div>
                        <span className="mt-1.5 text-slate-400 group-hover:text-white transition-colors">Lucknow, Uttar Pradesh, India</span>
                    </li>
                    <li className="flex items-center gap-3 group">
                         <div className="p-2 bg-slate-900 rounded-lg text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all">
                            <Phone size={18} />
                        </div>
                        <span className="text-slate-400 group-hover:text-white transition-colors">+91 9336576683</span>
                    </li>
                    <li className="flex items-center gap-3 group">
                        <div className="p-2 bg-slate-900 rounded-lg text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all">
                            <Mail size={18} />
                        </div>
                        <a href="mailto:services@codealpha.tech" className="text-slate-400 hover:text-white transition-colors">services@codealpha.tech</a>
                    </li>
                    <li className="flex items-center gap-3 group">
                         <div className="p-2 bg-slate-900 rounded-lg text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-all">
                            <Globe size={18} />
                        </div>
                        <a href="https://codealpha.tech" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">www.codealpha.tech</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-4 py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6 animate-in fade-in duration-700 delay-300">
            <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} CodeAlpha. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
                <SocialLink href="https://www.linkedin.com/company/codealpha" icon={<Linkedin size={18} />} />
                <SocialLink href="#" icon={<Twitter size={18} />} />
                <SocialLink href="#" icon={<Instagram size={18} />} />
                <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <Link to="/contact" className="hover:text-brand-400 transition-colors">Privacy Policy</Link>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">Terms of Service</Link>
                <Link to="/contact" className="hover:text-brand-400 transition-colors">Cookies</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
    <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm border border-slate-800 hover:border-brand-500"
        onClick={(e) => {
          if (href === '#') e.preventDefault(); // Prevent scroll to top for placeholders
        }}
    >
        {icon}
    </a>
);

export default Footer;
