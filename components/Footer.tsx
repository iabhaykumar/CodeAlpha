
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-0 fill-mode-backwards">
            <Link to="/" className="inline-block mb-6 bg-white px-4 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 group">
                {!logoError ? (
                  <img 
                    src="/logo-bg.png" 
                    alt="CodeAlpha" 
                    onError={() => setLogoError(true)}
                    className="h-12 w-auto group-hover:scale-105 transition-transform" 
                  />
                ) : (
                  <span className="font-heading font-bold text-2xl tracking-tight bg-gradient-to-r from-brand-600 to-kappel-600 bg-clip-text text-transparent">
                    CodeAlpha
                  </span>
                )}
            </Link>
            <p className="mb-8 leading-relaxed text-slate-400 text-sm">
              CodeAlpha leads in Ed-Tech, shaping future tech creators through hands-on internships and real-world projects. Building the next generation of developers.
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://www.linkedin.com/company/codealpha" icon={<Linkedin size={18} />} delay={100} />
              <SocialLink href="#" icon={<Twitter size={18} />} delay={200} />
              <SocialLink href="#" icon={<Youtube size={18} />} delay={300} />
              <SocialLink href="https://t.me/CodeAlphaOfficial" icon={<MessageCircle size={18} />} delay={400} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-backwards">
            <h4 className="text-lg font-heading font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-500 after:rounded-full">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Home</Link></li>
              <li><Link to="/#about" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Services</Link></li>
              <li><a href="#" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-backwards">
            <h4 className="text-lg font-heading font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-500 after:rounded-full">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/internships" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Internship Program</Link></li>
              <li><a href="#" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">App Development</a></li>
              <li><a href="#" className="hover:text-brand-400 hover:translate-x-2 transition-all inline-block duration-300">Ambassador Program</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-backwards">
             <h4 className="text-lg font-heading font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-brand-500 after:rounded-full">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-brand-600 transition-colors duration-300">
                    <MapPin size={18} className="text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <span className="mt-1.5 text-slate-400 group-hover:text-white transition-colors">Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-brand-600 transition-colors duration-300">
                    <Phone size={18} className="text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors">+91 9336576683</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-brand-600 transition-colors duration-300">
                    <Mail size={18} className="text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:services@codealpha.tech" className="text-slate-400 group-hover:text-brand-400 transition-colors">services@codealpha.tech</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 animate-in fade-in duration-1000 delay-700">
          <p>&copy; {new Date().getFullYear()} CodeAlpha. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white hover:underline transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:underline transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; delay: number }> = ({ href, icon, delay }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    style={{ animationDelay: `${delay}ms` }}
    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-500/50 animate-in zoom-in duration-500 fill-mode-backwards"
  >
    {icon}
  </a>
);

export default Footer;
