
import React, { useState, useEffect } from 'react';
import { INTERNSHIPS } from '../constants';
import { Users, Clock, ArrowRight, Filter, Search, X } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

// Image Component with Fallback
const ImageWithLoading: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className} bg-slate-100`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-slate-200 animate-pulse"></div>
        </div>
      )}
      
      {/* Error Fallback */}
      {hasError ? (
         <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
            <div className="text-center">
                <div className="text-4xl font-bold opacity-20 mb-2">{alt.charAt(0)}</div>
                <span className="text-xs uppercase tracking-wider font-semibold">Image N/A</span>
            </div>
         </div>
      ) : (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      )}
    </div>
  );
};

const Internships: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredInternships = INTERNSHIPS.filter(internship => {
    const matchesCategory = filter === 'all' || internship.category === filter;
    const matchesSearch = internship.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'development', label: 'Development' },
    { id: 'ai', label: 'AI & Data Science' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'misc', label: 'Emerging Tech' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      <SEO 
        title="Internships" 
        description="Browse CodeAlpha's virtual internship programs. Apply for Web Development, App Development, AI, and Machine Learning internships to boost your career." 
      />

      <AIAssistant 
        title="Internship Advisor"
        pageContext="You are an Internship Advisor for CodeAlpha. Help students choose between domains like Web Dev, App Dev, AI, Data Science. Explain the 4-week duration, project-based learning, and certification. Advise on prerequisites for each domain."
        suggestions={["Web Dev details", "AI Syllabus", "Duration?", "Do I need experience?"]}
      />

      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Available <span className="text-brand-600">Internships</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
            Choose from a wide range of technical and non-technical domains. Gain hands-on experience and get certified.
          </p>

          {/* Improved Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-16">
             {/* Search Bar */}
             <div className="relative group mb-8 z-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 via-purple-400 to-brand-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative flex items-center bg-white rounded-2xl shadow-xl transition-transform transform group-focus-within:scale-[1.01]">
                    <div className="pl-6 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                        <Search size={24} />
                    </div>
                    <input
                        type="text"
                        placeholder="Find your perfect internship (e.g. 'Python', 'Design')..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-5 py-5 text-lg bg-transparent border-0 outline-none text-slate-800 placeholder-slate-400 font-medium rounded-2xl"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="pr-6 pl-2 text-slate-300 hover:text-slate-500 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
             </div>

             {/* Filter Pills */}
             <div className="flex flex-wrap justify-center gap-3">
                {filters.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                            filter === f.id
                                ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
             </div>
          </div>
        </div>

        {/* Content Grid */}
        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-2xl h-80 animate-pulse border border-slate-100"></div>
              ))}
           </div>
        ) : (
           <>
             {filteredInternships.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                 {filteredInternships.map((internship) => (
                   <div key={internship.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col hover:-translate-y-1">
                      <div className="h-48 relative overflow-hidden">
                         <div className="absolute top-3 left-3 z-10">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-700 text-xs font-bold rounded-full shadow-sm">
                              {internship.badge}
                            </span>
                         </div>
                         <ImageWithLoading 
                            src={internship.img} 
                            alt={internship.name} 
                            className="w-full h-full group-hover:scale-110 transition-transform duration-500" 
                         />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                         <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{internship.name}</h3>
                         
                         <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <div className="flex items-center gap-1.5">
                               <Users size={16} className="text-brand-500" />
                               <span>{internship.students}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <Clock size={16} className="text-brand-500" />
                               <span>{internship.duration}</span>
                            </div>
                         </div>
                         
                         <div className="mt-auto pt-4 border-t border-slate-100">
                            <a 
                              href={internship.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="w-full bg-slate-900 hover:bg-brand-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group/btn"
                            >
                              Apply Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                         </div>
                      </div>
                   </div>
                 ))}
               </div>
             ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
                   <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                      <Filter size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-3">No programs found</h3>
                   <p className="text-slate-500 max-w-md mx-auto mb-8">We couldn't find any internships matching "{searchQuery}" in the selected category.</p>
                   <button 
                     onClick={() => { setFilter('all'); setSearchQuery(''); }}
                     className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25"
                   >
                     View All Programs
                   </button>
                </div>
             )}
           </>
        )}
      </div>
    </div>
  );
};

export default Internships;
