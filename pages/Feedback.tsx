import React, { useState } from 'react';
import { Star, Send, Quote, Heart, PlusCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { FeedbackItem } from '../types';
import AIAssistant from '../components/AIAssistant';
import SEO from '../components/SEO';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  // Your specific Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzl3BQ_HTuylTARfF4SfW938V-ijUYLFTxz9TEjFj-mybJpNIrIcnJUFR-19vkLvpH/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('role', formData.role);
        data.append('rating', formData.rating.toString());
        data.append('message', formData.content);
        data.append('date', new Date().toLocaleString());

        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: data,
            mode: 'no-cors'
        });

        setSubmitStatus('success');
        setFormData({ name: '', role: '', rating: 5, content: '' });

    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        setSubmitStatus('success');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title="Student Feedback & Reviews" 
        description="Read what students are saying about CodeAlpha internships and courses. Share your own experience."
        keywords={['CodeAlpha Reviews', 'Student Feedback', 'Testimonials', 'Internship Reviews', 'EdTech Reviews']}
      />
      <AIAssistant 
        title="Feedback Helper"
        pageContext="You are a Feedback Assistant. Encourage users to share honest reviews about their CodeAlpha internship experience. Help them structure their testimonials if asked."
        suggestions={["What should I write?", "Can I edit later?", "Is my name public?"]}
      />

      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Community Voices</span>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
          Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Feedback</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          See what our interns have to say about their journey with CodeAlpha. Your experience matters to us.
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 perspective-1000">
          {TESTIMONIALS.map((item, index) => (
            <FeedbackCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Feedback Form Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative animate-in slide-in-from-bottom-10 duration-700 delay-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Form/Success Side */}
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center min-h-[500px]">
                
                {submitStatus === 'success' ? (
                  // Success Message - Now flows naturally in the layout
                  <div className="flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 h-full">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-red-200 rounded-full animate-ping opacity-20"></div>
                        <div className="w-24 h-24 bg-gradient-to-tr from-red-50 to-pink-50 rounded-full flex items-center justify-center shadow-xl border border-red-100 relative z-10">
                            <Heart size={40} className="text-red-500 fill-red-500 animate-pulse" />
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">You're Awesome!</h3>
                    <p className="text-slate-600 mb-10 max-w-xs mx-auto text-lg leading-relaxed">
                      Thanks for sharing your thoughts. Your feedback helps us build a better community.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button 
                            onClick={() => setSubmitStatus('idle')}
                            className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                        >
                        <PlusCircle size={18} />
                        Submit Another
                        </button>
                        <Link 
                            to="/"
                            className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-kappel-600 hover:from-brand-700 hover:to-kappel-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                        <Home size={18} />
                        Back to Home
                        </Link>
                    </div>
                  </div>
                ) : (
                  // Form
                  <div className="animate-in fade-in duration-300">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Share Your Experience</h2>
                    <p className="text-slate-500 mb-8 text-sm">Your feedback helps us improve and inspires future interns.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                            <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Role / Domain</label>
                            <input
                            required
                            type="text"
                            value={formData.role}
                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                            placeholder="e.g. Web Development"
                            />
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setFormData({...formData, rating: star})}
                                className={`p-1 transition-transform hover:scale-110 ${formData.rating >= star ? 'text-yellow-400' : 'text-slate-200'}`}
                            >
                                <Star size={28} fill={formData.rating >= star ? "currentColor" : "none"} />
                            </button>
                            ))}
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                            placeholder="What did you like about the internship?"
                        ></textarea>
                        </div>

                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                        {isSubmitting ? 'Submitting...' : (
                            <>
                            <span>Submit Feedback</span>
                            <Send size={18} />
                            </>
                        )}
                        </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Decorative Side */}
              <div className="lg:col-span-2 bg-slate-900 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative z-10 text-white">
                  <Quote size={48} className="text-brand-500 mb-6 opacity-50" />
                  <h3 className="text-2xl font-heading font-bold mb-4">Why Feedback Matters?</h3>
                  <ul className="space-y-4 text-slate-300 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                      Helps us improve our curriculum.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                      Guides future students.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                      Builds a transparent community.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedbackCard: React.FC<{ item: FeedbackItem, index: number }> = ({ item, index }) => (
  <div 
    style={{ animationDelay: `${index * 150}ms` }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards group"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"} />
      ))}
    </div>
    
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow relative">
      <Quote size={24} className="absolute -top-2 -left-2 text-brand-100 transform -scale-x-100 opacity-50" />
      <span className="relative z-10">"{item.content}"</span>
    </p>
    
    <div className="pt-6 border-t border-slate-50">
      <div>
        <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">{item.name}</h4>
        <p className="text-xs text-slate-400">{item.role}</p>
      </div>
    </div>
  </div>
);

export default Feedback;