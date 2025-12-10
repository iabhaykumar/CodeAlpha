

import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft, Code, Terminal, Clipboard, Check, Share2, List } from 'lucide-react';
import { problemSets } from '../data/practice';
import SEO from '../components/SEO';

// Re-using the CodeBlock component idea for consistency
const CodeBlock: React.FC<{ code: string; language: string }> = ({ code, language }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        // FIX: Cast window to 'any' to access the Prism object injected by an external script.
        // This resolves the TypeScript error "Property 'Prism' does not exist on type 'Window'".
        if (typeof window !== 'undefined' && (window as any).Prism) {
            (window as any).Prism.highlightAll();
        }
    }, [code, language]);

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-slate-700 bg-[#282c34] relative group shadow-lg">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-700/50">
                <span className="text-xs font-bold text-slate-400 uppercase">{language}</span>
                <button 
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                    {copied ? <Check size={14} className="text-green-400 animate-in zoom-in duration-300"/> : <Clipboard size={14} />}
                    {copied ? 'Copied!' : 'Copy Code'}
                </button>
            </div>
            <pre className="text-sm font-mono !bg-[#282c34] p-4 overflow-x-auto custom-scrollbar">
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

const PracticeSolution: React.FC = () => {
  const { lang, problemId } = useParams<{ lang: string; problemId: string }>();
  const [copySuccess, setCopySuccess] = useState(false);

  const { name, problem, prevProblem, nextProblem } = useMemo(() => {
    if (!lang || !problemId || !problemSets[lang]) {
      return { name: '', problem: null, prevProblem: null, nextProblem: null };
    }
    const { name, data: categories } = problemSets[lang];
    const allProblems = categories.flatMap(cat => cat.problems);
    const currentIndex = allProblems.findIndex(p => p.id === problemId);

    if (currentIndex === -1) {
      return { name: '', problem: null, prevProblem: null, nextProblem: null };
    }

    const problem = allProblems[currentIndex];
    const prevProblem = currentIndex > 0 ? allProblems[currentIndex - 1] : null;
    const nextProblem = currentIndex < allProblems.length - 1 ? allProblems[currentIndex + 1] : null;
    
    return { name, problem, prevProblem, nextProblem };
  }, [lang, problemId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [problemId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  
  if (!problem) {
    return <div className="pt-32 text-center text-red-500">Problem not found.</div>;
  }

  const languageMap: { [key: string]: string } = {
    c: 'c',
    cpp: 'cpp',
    java: 'java',
    python: 'python',
    'basic-100': 'cpp',
    'dsa-100': 'cpp',
    'oop-100': 'cpp'
  };

  return (
    <div className="pt-[60px] md:pt-[76px] min-h-screen bg-slate-50 font-sans text-slate-900 pb-[calc(80px+env(safe-area-inset-bottom))] md:pb-0">
        <SEO 
            title={`${problem.title} - ${name} Solution`}
            description={`Solution and explanation for the ${problem.title} problem in ${name}. Includes code, test cases, and logic breakdown.`}
        />

        {/* Mobile Header / Breadcrumbs */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-[60px] md:top-[76px] z-20 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500 overflow-hidden whitespace-nowrap">
                <Link to="/practice" className="flex items-center hover:text-brand-600 transition-colors">
                    <Home size={16} className="mr-1.5" /> <span className="hidden sm:inline">Practice</span>
                </Link>
                <ChevronRight size={14} className="text-slate-300" />
                <Link to={`/practice/${lang}`} className="font-semibold text-slate-800 hidden sm:inline hover:text-brand-600">{name}</Link>
                <ChevronRight size={14} className="text-slate-300 hidden sm:inline" />
                <span className="font-bold text-brand-600 truncate max-w-[200px] sm:max-w-xs">{problem.title}</span>
            </div>
            
            <button
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
                title="Copy link to this problem"
            >
                {copySuccess ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
            </button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="mb-8 animate-in fade-in duration-500">
            <Link to={`/practice/${lang}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 mb-6">
                <ArrowLeft size={16} /> Back to Problem List
            </Link>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">{problem.title}</h1>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 space-y-8">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '100ms'}}>
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Problem Statement</h2>
                    <p className="text-slate-600 leading-relaxed">{problem.statement}</p>
                </section>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '200ms'}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <h3 className="font-semibold text-slate-700 mb-2">Input Format</h3>
                        <p className="text-sm text-slate-600">{problem.inputFormat}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <h3 className="font-semibold text-slate-700 mb-2">Output Format</h3>
                        <p className="text-sm text-slate-600">{problem.outputFormat}</p>
                    </div>
                </div>
            </div>
            
            {problem.constraints && problem.constraints.length > 0 &&
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '300ms'}}>
                <section>
                    <h3 className="font-semibold text-slate-700 mb-2">Constraints</h3>
                    <ul className="list-disc pl-5 font-mono text-sm text-slate-600 space-y-1">
                        {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                </section>
            </div>
            }

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '400ms'}}>
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Sample Test Cases</h2>
                    <div className="space-y-4">
                    {problem.testCases.map((tc, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-100 p-2 text-xs font-bold text-slate-600">Sample {index + 1}</div>
                            <div className="p-4">
                                <h4 className="font-semibold text-sm text-slate-700 mb-2">Input:</h4>
                                <pre className="bg-slate-900 text-white p-3 rounded font-mono text-sm">{tc.input || '(No Input)'}</pre>
                                <h4 className="font-semibold text-sm text-slate-700 mt-3 mb-2">Output:</h4>
                                <pre className="bg-slate-900 text-white p-3 rounded font-mono text-sm">{tc.output}</pre>
                                {tc.explanation && <p className="text-xs text-slate-500 mt-2 italic">{tc.explanation}</p>}
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '500ms'}}>
                <section>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2"><Code size={24} className="text-brand-600"/> Code Solution</h2>
                    <CodeBlock code={problem.solution} language={languageMap[lang]} />
                </section>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '600ms'}}>
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2"><Terminal size={20} className="text-slate-500"/> Explanation</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: problem.explanation }}>
                    </div>
                </section>
            </div>
        </div>

        {/* Footer Navigation - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-slate-200">
            {prevProblem ? (
                <Link 
                    to={`/practice/${lang}/${prevProblem.id}`}
                    className="group relative flex flex-col p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all text-left hover:-translate-y-1 active:scale-95"
                >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-brand-600 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center transition-colors">
                            <ChevronRight size={14} className="transform rotate-180" />
                        </div>
                        Previous Problem
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-brand-700 transition-colors line-clamp-2">
                        {prevProblem.title}
                    </span>
                </Link>
            ) : (
                <div className="hidden sm:block"></div>
            )}

            {nextProblem ? (
                <Link 
                    to={`/practice/${lang}/${nextProblem.id}`}
                    className="group relative flex flex-col p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all text-right hover:-translate-y-1 active:scale-95"
                >
                    <div className="flex items-center justify-end gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-brand-600 transition-colors">
                        Next Problem
                        <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center transition-colors">
                            <ChevronRight size={14} />
                        </div>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-brand-700 transition-colors line-clamp-2">
                        {nextProblem.title}
                    </span>
                </Link>
            ) : (
                <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl text-center col-start-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-green-600">
                        <Check size={24} />
                    </div>
                    <span className="text-green-800 font-bold text-lg mb-1">
                        Section Completed!
                    </span>
                    <Link to="/practice" className="text-sm font-semibold text-green-600 hover:text-green-700 hover:underline">
                        Back to Practice Home
                    </Link>
                </div>
            )}
        </div>
      </div>
      
      {/* Fixed Bottom Navigation Bar - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 px-6 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <Link 
                to={prevProblem ? `/practice/${lang}/${prevProblem.id}` : '#'}
                className={`flex flex-col items-center gap-1 min-w-[3rem] ${!prevProblem ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 transition-transform'}`}
            >
                <div className="p-1.5 rounded-full bg-slate-100 text-slate-700">
                    <ChevronRight size={20} className="transform rotate-180" />
                </div>
                <span className="text-[10px] font-bold text-slate-600">Prev</span>
            </Link>

            <Link 
                to={`/practice/${lang}`}
                className="flex flex-col items-center gap-1 min-w-[3rem] active:scale-95 transition-transform"
            >
                <div className="p-2 rounded-full bg-brand-50 text-brand-600">
                    <List size={22} />
                </div>
                <span className="text-[10px] font-bold text-brand-700">All Problems</span>
            </Link>

            <Link 
                to={nextProblem ? `/practice/${lang}/${nextProblem.id}` : '#'}
                className={`flex flex-col items-center gap-1 min-w-[3rem] ${!nextProblem ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 transition-transform'}`}
            >
                <div className="p-1.5 rounded-full bg-slate-900 text-white">
                    <ChevronRight size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-900">Next</span>
            </Link>
        </div>
      </div>

       <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1e293b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }
      `}</style>
    </div>
  );
};

export default PracticeSolution;