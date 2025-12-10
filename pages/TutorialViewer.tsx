import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, Search, ChevronLeft, Check, Copy, X, ArrowRight, Home, Share2, BookOpen, List } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';
import { TUTORIAL_TREE, Topic } from '../data/tutorialData';

// Helper to escape special characters for Regex
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper component for highlighting search matches
const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const escapedHighlight = escapeRegExp(highlight.trim());
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-slate-900 rounded-sm px-0.5 m-0 p-0 font-medium">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const TutorialViewer: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentCategoryData = TUTORIAL_TREE.find(c => c.id === categoryId);
  
  const [activeTopicId, setActiveTopicId] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentCategoryData) {
      const hash = location.hash.substring(1);
      const isValidTopic = currentCategoryData.topics.some(t => t.id === hash);
      
      if (isValidTopic) {
        if (activeTopicId !== hash) {
          setActiveTopicId(hash);
        }
      } else if (currentCategoryData.topics.length > 0) {
        const firstTopicId = currentCategoryData.topics[0].id;
        setActiveTopicId(firstTopicId);
        navigate(`#${firstTopicId}`, { replace: true });
      }
    }
  }, [location.hash, currentCategoryData, navigate, activeTopicId]);

  useEffect(() => {
      if (!currentCategoryData) {
          navigate('/tutorials');
      }
  }, [currentCategoryData, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!currentCategoryData) return null;

  const currentTopic = currentCategoryData.topics.find(t => t.id === activeTopicId) || currentCategoryData.topics[0];

  const groupedTopics = useMemo(() => {
    const groups = new Map<string, Topic[]>();
    currentCategoryData.topics.forEach(topic => {
        const key = topic.parent || 'General';
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)?.push(topic);
    });
    return groups;
  }, [currentCategoryData]);

  const lowercasedQuery = searchQuery.toLowerCase();

  const filteredGroupedTopics = useMemo(() => {
    if (!lowercasedQuery) {
        return groupedTopics;
    }
    const filteredGroups = new Map<string, Topic[]>();
    for (const [group, topics] of groupedTopics.entries()) {
        const matchingTopics = topics.filter(topic =>
            topic.title.toLowerCase().includes(lowercasedQuery)
        );
        if (matchingTopics.length > 0) {
            filteredGroups.set(group, matchingTopics);
        }
    }
    return filteredGroups;
  }, [lowercasedQuery, groupedTopics]);

  const hasSearchResults = filteredGroupedTopics.size > 0;

  const navigateToTopic = (topicId: string) => {
    navigate(`#${topicId}`);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIndex = currentCategoryData.topics.findIndex(t => t.id === activeTopicId);
  const nextTopic = currentIndex < currentCategoryData.topics.length - 1 ? currentCategoryData.topics[currentIndex + 1] : null;
  const prevTopic = currentIndex > 0 ? currentCategoryData.topics[currentIndex - 1] : null;

  const handleNext = () => {
     if (nextTopic) {
         navigateToTopic(nextTopic.id);
     }
  };

  const handlePrev = () => {
      if (prevTopic) {
          navigateToTopic(prevTopic.id);
      }
  };

  const handleShare = async () => {
    if (!currentTopic) return;
    const shareUrl = window.location.href;
    const shareData = {
      title: `${currentTopic.title} - ${currentCategoryData.title}`,
      text: `Check out this section on "${currentTopic.title}" from CodeAlpha's tutorials!`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      });
    }
  };

  return (
    <div className="pt-[60px] md:pt-[76px] min-h-screen bg-slate-50 font-sans text-slate-900 pb-[calc(80px+env(safe-area-inset-bottom))] md:pb-0">
      <SEO title={`${currentTopic?.title || ''} - ${currentCategoryData.title}`} description={`Learn ${currentTopic?.title || ''} in ${currentCategoryData.title} with CodeAlpha tutorials.`} />
      <AIAssistant pageContext={`Tutorial: ${currentCategoryData.title} > ${currentTopic?.title || ''}`} title="Study Assistant" suggestions={["Explain this concept", "Give an example", "Quiz me"]} />

      {/* Mobile Header / Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 sticky top-[60px] md:top-[76px] z-20 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500 overflow-hidden whitespace-nowrap">
                <Link to="/tutorials" className="flex items-center hover:text-brand-600 transition-colors">
                    <Home size={16} className="mr-1.5" /> <span className="hidden sm:inline">Tutorials</span>
                </Link>
                <ChevronRight size={14} className="text-slate-300" />
                <span className="font-semibold text-slate-800 hidden sm:inline">{currentCategoryData.title}</span>
                <ChevronRight size={14} className="text-slate-300 hidden sm:inline" />
                <span className="font-bold text-brand-600 truncate max-w-[200px] sm:max-w-xs">{currentTopic?.title}</span>
            </div>
            
            <button
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
                title="Share this topic"
            >
                {copySuccess ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
            </button>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] flex items-start relative z-10">
        
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] md:hidden animate-in fade-in duration-200" onClick={() => setSidebarOpen(false)}></div>
        )}

        {/* Sidebar */}
        <aside 
            className={`
                fixed inset-y-0 left-0 z-[70] w-80 bg-white border-r border-slate-200 overflow-hidden flex flex-col transition-transform duration-300 transform shadow-2xl md:shadow-none
                md:translate-x-0 md:sticky md:h-[calc(100vh-130px)] md:shrink-0 md:z-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                top-0 md:top-[130px] rounded-none md:rounded-xl md:ml-4 md:my-4 md:border
            `}
        >
            <div className="p-4 border-b border-slate-100 bg-white sticky top-0 z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between md:hidden">
                    <h2 className="font-bold text-lg text-slate-900">{currentCategoryData.title}</h2>
                    <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Desktop Title shown in sidebar */}
                <div className="hidden md:flex items-center gap-3 px-1">
                    <div className={`p-2 rounded-lg ${currentCategoryData.color || 'bg-slate-100 text-slate-600'}`}>
                        {currentCategoryData.icon}
                    </div>
                    <h2 className="font-bold text-lg text-slate-900">{currentCategoryData.title}</h2>
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-slate-400 group-focus-within:text-brand-500 transition-colors" size={16} />
                    </div>
                    <input 
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search topics..."
                        className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder-slate-400"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="space-y-6">
                    {Array.from(filteredGroupedTopics).map(([group, topics]) => (
                        <div key={group}>
                            {group !== 'General' && (
                                <h3 className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    {group}
                                    <span className="h-px flex-1 bg-slate-100"></span>
                                </h3>
                            )}
                            <div className="space-y-1">
                                {topics.map((topic) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => navigateToTopic(topic.id)}
                                        className={`
                                            w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-start justify-between group
                                            ${activeTopicId === topic.id 
                                                ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200' 
                                                : `text-slate-600 hover:bg-slate-50 hover:text-slate-900`
                                            }
                                        `}
                                    >
                                        <span className="leading-snug">
                                            <Highlight text={topic.title} highlight={searchQuery} />
                                        </span>
                                        {activeTopicId === topic.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    {!hasSearchResults && (
                        <div className="text-center py-8">
                            <p className="text-sm text-slate-400 mb-2">No topics found.</p>
                            <button onClick={() => setSearchQuery('')} className="text-brand-600 text-sm font-bold hover:underline">Clear Search</button>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 sticky bottom-0">
                <Link to="/tutorials" className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-slate-600 hover:text-brand-600 bg-white border border-slate-200 rounded-lg hover:border-brand-200 hover:shadow-sm transition-all">
                    <ChevronLeft size={16} /> All Tutorials
                </Link>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-8 md:py-8 max-w-4xl mx-auto">
            {currentTopic ? (
              <div key={currentTopic.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-wider mb-3">
                        <span className="w-6 h-0.5 bg-brand-600 rounded-full"></span> 
                        {currentTopic.parent || currentCategoryData.title}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
                        {currentTopic.title}
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-brand-500 to-kappel-500 rounded-full"></div>
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
                    prose-p:text-slate-600 prose-p:leading-relaxed 
                    prose-code:text-brand-700 prose-code:bg-brand-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none 
                    prose-strong:text-slate-900 prose-strong:font-bold
                    prose-li:text-slate-600 prose-li:marker:text-brand-400
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline">
                    {currentTopic.content}
                </div>

                {/* Footer Navigation - Hidden on Mobile, Visible on Desktop */}
                <div className="hidden md:grid md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-slate-200">
                    {prevTopic ? (
                        <button 
                            onClick={handlePrev}
                            className="group relative flex flex-col p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all text-left hover:-translate-y-1 active:scale-95"
                        >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-brand-600 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center transition-colors">
                                    <ChevronLeft size={14} />
                                </div>
                                Previous Lesson
                            </div>
                            <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-brand-700 transition-colors line-clamp-2">
                                {prevTopic.title}
                            </span>
                        </button>
                    ) : (
                        <div className="hidden sm:block"></div>
                    )}

                    {nextTopic ? (
                        <button 
                            onClick={handleNext}
                            className={`group relative flex flex-col p-5 rounded-2xl border border-slate-200 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all text-right ${!prevTopic ? 'col-span-1 sm:col-span-2' : ''} hover:-translate-y-1 active:scale-95`}
                        >
                            <div className="flex items-center justify-end gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-brand-600 transition-colors">
                                Next Lesson
                                <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-50 flex items-center justify-center transition-colors">
                                    <ChevronRight size={14} />
                                </div>
                            </div>
                            <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-brand-700 transition-colors line-clamp-2">
                                {nextTopic.title}
                            </span>
                        </button>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl text-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-green-600">
                                <Check size={24} />
                            </div>
                            <span className="text-green-800 font-bold text-lg mb-1">
                                Module Completed!
                            </span>
                            <Link to="/tutorials" className="text-sm font-semibold text-green-600 hover:text-green-700 hover:underline">
                                Back to Tutorials
                            </Link>
                        </div>
                    )}
                </div>
              </div>
            ) : (
                <div className="flex items-center justify-center min-h-[50vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
                </div>
            )}
        </main>
      </div>

      {/* Fixed Bottom Navigation Bar - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 px-6 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
            <button 
                onClick={handlePrev}
                disabled={!prevTopic}
                className={`flex flex-col items-center gap-1 min-w-[3rem] ${!prevTopic ? 'opacity-30' : 'active:scale-95 transition-transform'}`}
            >
                <div className="p-1.5 rounded-full bg-slate-100 text-slate-700">
                    <ChevronLeft size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-600">Prev</span>
            </button>

            <button 
                onClick={() => setSidebarOpen(true)}
                className="flex flex-col items-center gap-1 min-w-[3rem] active:scale-95 transition-transform"
            >
                <div className="p-2 rounded-full bg-brand-50 text-brand-600">
                    <List size={22} />
                </div>
                <span className="text-[10px] font-bold text-brand-700">Topics</span>
            </button>

            <button 
                onClick={handleNext}
                disabled={!nextTopic}
                className={`flex flex-col items-center gap-1 min-w-[3rem] ${!nextTopic ? 'opacity-30' : 'active:scale-95 transition-transform'}`}
            >
                <div className="p-1.5 rounded-full bg-slate-900 text-white">
                    <ChevronRight size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-900">Next</span>
            </button>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default TutorialViewer;