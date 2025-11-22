
import React, { useState, useEffect } from 'react';
import { INTERNSHIPS } from '../constants';
import { Internship } from '../types';
import { Users, Clock, ArrowRight, Filter, Rocket, AlertTriangle } from 'lucide-react';

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
  const [animateKey, setAnimateKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const filteredInternships = filter === 'all' 
    ? INTERNSHIPS 
    : INTERNSHIPS.filter(i => i.category === filter);

  // Reset animation when filter changes
  useEffect(() => {
    setAnimateKey(prev => prev + 1);
  }, [filter]);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Faster perceived load
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
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pb-12 pt-8 mb-12 animate-in fade-in slide-in-from-top-10 duration-700">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block animate-in fade-in slide-in-from-bottom-2 delay-200">Career Growth</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 animate-in fade-in zoom-in duration-700 delay-100">
            Pick an <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Internship</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-300">
            Select from our wide range of industry-standard internship programs designed to give you practical experience.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex flex-col items-center gap-8 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            {/* Apply All Button */}
            <a 
                href="https://forms.gle/s9TW7Tqi3tAQLCu78"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 group relative overflow-hidden text-lg animate-[pulse_3s_ease-in-out_infinite]"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <Rocket size={20} />
                    Apply to Multiple Internships
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </a>

            {/* Filters */}
            <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="flex items-center gap-2 mr-2 text-slate-400 font-medium hidden md:flex">
                    <Filter size={18} />
                    <span>Filter:</span>
                </div>
                {filters.map((f) => (
                    <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 ${
                        filter === f.id 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                    >
                    {f.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Loading State - Skeleton Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <InternshipSkeleton key={index} />
            ))}
          </div>
        ) : (
          /* Grid - Key prop forces re-render for animation reset */
          <div key={animateKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {filteredInternships.map((internship, index) => (
              <InternshipCard key={internship.id} data={internship} index={index} />
            ))}
          </div>
        )}
        
        {!isLoading && filteredInternships.length === 0 && (
           <div className="text-center py-32 animate-in zoom-in duration-500 bg-white rounded-3xl border border-slate-200 shadow-sm">
             <div className="text-6xl mb-4 animate-bounce">🔍</div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">No internships found</h3>
             <p className="text-slate-500">Try selecting a different category or view all programs.</p>
             <button onClick={() => setFilter('all')} className="mt-6 text-brand-600 font-bold hover:underline">View All Internships</button>
           </div>
        )}
      </div>
    </div>
  );
};

const InternshipSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-full flex flex-col">
    <div className="h-52 bg-slate-200 animate-pulse relative">
      <div className="absolute top-4 left-4 w-20 h-6 bg-slate-300 rounded-full"></div>
      <div className="absolute bottom-4 right-4 w-24 h-6 bg-slate-300 rounded-lg"></div>
    </div>
    <div className="p-7 flex-1 flex flex-col">
      <div className="h-8 bg-slate-200 rounded-lg w-3/4 animate-pulse mb-6"></div>
      <div className="bg-slate-100 h-14 rounded-lg animate-pulse mb-8"></div>
      <div className="h-14 bg-slate-200 rounded-xl mt-auto animate-pulse"></div>
    </div>
  </div>
);

const InternshipCard: React.FC<{ data: Internship, index: number }> = ({ data, index }) => (
  <div 
    style={{ animationDelay: `${index * 100}ms` }}
    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards"
  >
    {/* 3D Perspective Container for Image */}
    <div className="relative h-52 overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/0 transition-colors pointer-events-none"></div>
      
      <ImageWithLoading 
        src={data.img} 
        alt={data.name} 
        className="w-full h-full group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
      />

      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Active
      </div>
      <div className="absolute bottom-4 right-4 z-20 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
        {data.badge}
      </div>
    </div>
    
    <div className="p-7 flex-1 flex flex-col">
      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors leading-tight">
        {data.name}
      </h3>
      
      <div className="bg-slate-50 rounded-lg p-3 flex justify-around items-center mb-8 border border-slate-100 group-hover:bg-brand-50 transition-colors">
         <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 text-brand-600 mb-1">
                <Clock size={16} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Duration</span>
            </div>
            <span className="font-semibold text-slate-700">{data.duration}</span>
         </div>
         <div className="w-px h-8 bg-slate-200"></div>
         <div className="text-center">
             <div className="flex items-center justify-center gap-1.5 text-brand-600 mb-1">
                <Users size={16} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Students</span>
             </div>
             <span className="font-semibold text-slate-700">{data.students}</span>
         </div>
      </div>

      <a 
        href={data.link} 
        target="_blank" 
        rel="noreferrer"
        className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-600 text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-brand-500/30 relative overflow-hidden group/btn"
      >
        <span className="relative z-10 flex items-center gap-2">Register Now <ArrowRight size={18} /></span>
        {/* Button Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </a>
    </div>
  </div>
);

export default Internships;
