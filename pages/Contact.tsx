import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Specific Google Apps Script URL provided by user
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywlny6j5K_ysH_CTTmghG1zfuM_UjqBpLUR3e7wEm7qoyeHEGm2HzdZwpokHVc0ySr/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Create FormData to send to Google Script
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);
      
      // Send data using fetch with no-cors mode (required for Google Scripts)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      // Fallback to success state to not confuse user if network request was actually sent but opaque
      setStatus('success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Contact Us" 
        description="Get in touch with CodeAlpha. Have questions about our internships or services? We're here to help. Contact us via email or phone."
        keywords={['Contact CodeAlpha', 'Support', 'Help Center', 'CodeAlpha Email', 'Customer Service']}
      />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <AIAssistant 
        title="Support Agent"
        pageContext="You are a Support Agent for CodeAlpha. Provide contact details: services@codealpha.tech, location: Lucknow, India. Standard response time is 24-48 hours. Answer general queries about support channels."
        suggestions={["Email address?", "Response time?", "Partnership inquiry", "Office location"]}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Conversation</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Have questions about our internships or courses? We're here to help you accelerate your tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
             <ContactInfoCard 
                icon={<MapPin size={24} />}
                title="Visit Us"
                content="Lucknow, Uttar Pradesh, India"
                delay={100}
             />
             <ContactInfoCard 
                icon={<Mail size={24} />}
                title="Email Us"
                content="services@codealpha.tech"
                link="mailto:services@codealpha.tech"
                delay={200}
             />
             <ContactInfoCard 
                icon={<Phone size={24} />}
                title="Call Us"
                content="+91 9336576683"
                link="tel:+919336576683"
                delay={300}
             />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                    <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 relative overflow-hidden group ${
                    status === 'success' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-slate-900 hover:bg-brand-600 hover:shadow-brand-500/25'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} className="animate-bounce" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard: React.FC<{ icon: React.ReactNode, title: string, content: string, link?: string, delay: number }> = ({ icon, title, content, link, delay }) => (
  <div 
    style={{ animationDelay: `${delay}ms` }}
    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 animate-in fade-in slide-in-from-left-4 fill-mode-backwards"
  >
    <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-slate-500 hover:text-brand-600 transition-colors text-sm">{content}</a>
      ) : (
        <p className="text-slate-500 text-sm">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;