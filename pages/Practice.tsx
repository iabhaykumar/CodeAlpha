import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Terminal, FileText, Network, Library, BrainCircuit, Search, X } from 'lucide-react';
import SEO from '../components/SEO';

const languages = [
  { name: 'C', path: '/practice/c', icon: <span className="font-bold text-3xl">C</span>, color: 'from-blue-500 to-blue-700' },
  { name: 'C++', path: '/practice/cpp', icon: <span className="font-bold text-xl">C++</span>, color: 'from-indigo-500 to-indigo-700' },
  { name: 'Java', path: '/practice/java', icon: <i className="devicon-java-plain text-4xl"></i>, color: 'from-red-500 to-orange-500' },
  { name: 'Python', path: '/practice/python', icon: <i className="devicon-python-plain text-4xl"></i>, color: 'from-yellow-400 to-yellow-600' },
];

const practiceTracks = [
  { name: '100 Basic Problems', path: '/practice/basic-100', icon: <FileText size={40}/>, color: 'from-green-400 to-green-600' },
  { name: '100 DSA Problems', path: '/practice/dsa-100', icon: <Network size={40}/>, color: 'from-purple-400 to-purple-600' },
  { name: '100 OOP Problems', path: '/practice/oop-100', icon: <Library size={40}/>, color: 'from-orange-400 to-orange-600' },
];


const Practice: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const lowercasedQuery = searchQuery.toLowerCase();
  const filteredLanguages = languages.filter(lang => lang.name.toLowerCase().includes(lowercasedQuery));
  const filteredTracks = practiceTracks.filter(track => track.name.toLowerCase().includes(lowercasedQuery));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      <SEO
        title="Programming Practice"
        description="Sharpen your coding skills with exercises in C, C++, Java, and Python. Solve problems from basics to advanced topics."
      />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 dark:bg-grid-slate-800/20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] -z-10"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 lg:w-96 lg:h-96 bg-brand-400/20 dark:bg-brand-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 lg:w-80 lg:h-80 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider text-sm uppercase mb-2 block">Level Up Your Skills</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Programming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Practice</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Select a language or a track to begin solving problems, from basic syntax challenges to complex algorithmic puzzles.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-16 group z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 group-focus-within:opacity-60 blur-lg transition-all duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-transform transform group-focus-within:scale-[1.01]">
                <div className="pl-6 text-slate-400 group-focus-within:text-brand-500 transition-colors duration-300">
                    <Search size={24} />
                </div>
                <input
                    type="text"
                    className="w-full px-5 py-5 bg-transparent outline-none text-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 font-medium"
                    placeholder="Search for a language or track..."
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

        {filteredLanguages.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center animate-in fade-in">
                Practice by Language
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {filteredLanguages.map((lang, index) => (
                <Link
                  key={lang.name}
                  to={lang.path}
                  className="group block relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${lang.color} rounded-2xl blur-md opacity-25 group-hover:opacity-60 group-hover:blur-lg transition-all duration-300 ease-in-out`}></div>
                  <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-xl dark:group-hover:shadow-brand-500/20 transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-105">
                    <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-white bg-gradient-to-br ${lang.color} shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6`}>
                      {lang.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{lang.name}</h2>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                      View Problems <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {filteredLanguages.length > 0 && filteredTracks.length > 0 && (
          <div className="my-16 h-px bg-slate-200 dark:bg-slate-800 max-w-lg mx-auto"></div>
        )}

        {filteredTracks.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center animate-in fade-in">
                Practice by Track
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {filteredTracks.map((track, index) => (
                <Link
                  key={track.name}
                  to={track.path}
                  className="group block relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${track.color} rounded-2xl blur-md opacity-25 group-hover:opacity-60 group-hover:blur-lg transition-all duration-300 ease-in-out`}></div>
                  <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-xl dark:group-hover:shadow-purple-500/20 transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:scale-105">
                    <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-white bg-gradient-to-br ${track.color} shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6`}>
                      {track.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{track.name}</h2>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                      Start Track <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {searchQuery && filteredLanguages.length === 0 && filteredTracks.length === 0 && (
          <div className="text-center py-12 animate-in fade-in">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 dark:text-slate-500">
                <Search size={32} />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg">No practice sets found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="text-brand-600 font-bold mt-4 hover:underline">
              Clear Search
            </button>
          </div>
        )}

      </div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default Practice;