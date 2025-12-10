
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, X } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';
import { TUTORIAL_TREE } from '../data/tutorialData';

// Helper component for highlighting search matches
const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim() || !text) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0 m-0">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const Tutorials: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const lowercasedQuery = searchQuery.toLowerCase();

  const filteredCategories = TUTORIAL_TREE.filter(cat => {
    if (lowercasedQuery === '') return true;

    // Check category title or description
    if (cat.title.toLowerCase().includes(lowercasedQuery) || 
        (cat.description && cat.description.toLowerCase().includes(lowercasedQuery))) {
      return true;
    }
    
    // Check topic titles within the category
    return cat.topics.some(topic => topic.title.toLowerCase().includes(lowercasedQuery));
  });

  return (
    <div className="pt-[76px] min-h-screen bg-white font-sans text-slate-900">
      <SEO 
        title="Free Programming Tutorials & Tech Roadmaps" 
        description="Start your coding journey with CodeAlpha's free tutorials. Comprehensive guides on Data Structures (DSA), Python, Java, Machine Learning, Web Development, and DevOps." 
      />
      <AIAssistant pageContext="Tutorials Landing Page" title="Study Assistant" suggestions={["Where to start?", "DSA Guide", "Python vs Java"]} />

      <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Learn to Code</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                  Comprehensive tutorials with CodeAlpha branding. From Data Structures to Development.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-3xl mx-auto mb-16 group z-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 group-focus-within:opacity-60 blur-lg transition-all duration-500"></div>
                
                <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-transform transform group-focus-within:scale-[1.01]">
                    <div className="pl-6 text-slate-400 group-focus-within:text-green-600 transition-colors duration-300">
                        <Search size={24} />
                    </div>
                    <input
                        type="text"
                        className="w-full px-5 py-5 bg-transparent outline-none text-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 font-medium"
                        placeholder="Search tutorials..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <div className="pr-5">
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    )}
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/tutorials/${category.id}`}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden"
                  >
                      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ${category.color?.split(' ')[1] || 'bg-slate-100'}`}></div>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${category.color || 'text-slate-600 bg-slate-100'}`}>
                          {category.icon || <BookOpen size={24} />}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                        <Highlight text={category.title} highlight={searchQuery} />
                      </h3>
                      <p className="text-sm text-slate-500 mb-4 leading-relaxed min-h-[40px]">
                        {category.description && <Highlight text={category.description} highlight={searchQuery} />}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-green-600 gap-1">
                          Start Learning <ArrowRight size={16} />
                      </div>
                  </Link>
              ))}
          </div>
          
          {filteredCategories.length === 0 && (
              <div className="text-center py-20">
                  <p className="text-slate-500 text-lg">No tutorials found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="text-green-600 font-bold mt-2 hover:underline">Clear Search</button>
              </div>
          )}
      </div>
    </div>
  );
};

export default Tutorials;
