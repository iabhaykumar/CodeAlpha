import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Home, Search, X } from 'lucide-react';
import { problemSets } from '../data/practice';
import SEO from '../components/SEO';

const PracticeProblems: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  if (!lang || !problemSets[lang]) {
    return <div className="pt-32 text-center text-red-500">Invalid language or track specified.</div>;
  }

  const { name, data: categories } = problemSets[lang];

  // Filtering logic
  const lowercasedQuery = searchQuery.toLowerCase();
  const filteredCategories = searchQuery
    ? categories.map(category => ({
        ...category,
        problems: category.problems.filter(problem =>
          problem.title.toLowerCase().includes(lowercasedQuery) ||
          problem.description.toLowerCase().includes(lowercasedQuery)
        )
      })).filter(category => category.problems.length > 0)
    : categories;
  
  const hasResults = filteredCategories.length > 0;


  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title={`${name} Practice Problems`}
        description={`Solve programming exercises in ${name}. Problems categorized from basics to advanced topics like OOP, sorting, and recursion.`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 animate-in fade-in duration-500">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <Link to="/practice" className="flex items-center gap-1 hover:text-brand-600"><Home size={14}/> Practice</Link>
                <ChevronRight size={14} />
                <span className="font-semibold text-slate-700">{name}</span>
            </div>
          <h1 className="text-4xl font-heading font-bold text-slate-900">
            {name} Problems
          </h1>
          <p className="text-slate-600 mt-2">
            Select a problem to view the full description and solution.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16 group z-10 animate-in fade-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 group-focus-within:opacity-60 blur-lg transition-all duration-500"></div>
          <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transition-transform transform group-focus-within:scale-[1.01]">
            <div className="pl-6 text-slate-400 group-focus-within:text-brand-500 transition-colors duration-300">
              <Search size={24} />
            </div>
            <input
              type="text"
              className="w-full px-5 py-4 bg-transparent outline-none text-lg text-slate-800 placeholder-slate-400 font-medium"
              placeholder={`Search in ${name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="pr-5">
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {hasResults ? (
            <div className="space-y-10">
            {filteredCategories.map((category, index) => (
                <div 
                key={category.category} 
                className="animate-in fade-in slide-in-from-bottom-6 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
                >
                <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-brand-200 pb-2 mb-4">
                    {category.category}
                </h2>
                <div className="space-y-3">
                    {category.problems.map((problem) => (
                    <Link
                        key={problem.id}
                        to={`/practice/${lang}/${problem.id}`}
                        className="block bg-slate-100/50 hover:bg-white hover:shadow-md border border-slate-200 hover:border-brand-200 rounded-lg p-4 transition-all group"
                    >
                        <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-brand-700 group-hover:text-brand-600">
                            {problem.title}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">
                            {problem.description}
                            </p>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-brand-500 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                    ))}
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-12 animate-in fade-in">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 border border-slate-200 shadow-sm">
                    <Search size={32} />
                </div>
                <p className="text-slate-500 text-lg">No problems found matching "{searchQuery}"</p>
                <button onClick={() => setSearchQuery('')} className="text-brand-600 font-bold mt-4 hover:underline">
                Clear Search
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default PracticeProblems;
