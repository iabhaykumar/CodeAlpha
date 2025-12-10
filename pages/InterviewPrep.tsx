import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Code, ChevronDown, ChevronUp, 
  BrainCircuit, Terminal, Lock, CheckCircle2, 
  Star, PlayCircle, FileText, Users, Building2, X, CreditCard, QrCode, ShieldCheck, Download, GraduationCap,
  LogOut, User, Smartphone, ArrowRight, Loader2, Mail, Globe, HelpCircle, Minus, Plus, SmartphoneNfc, Bot, Sparkles, AlertCircle, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

// --- Course Data ---
const MODULES = [
  {
    id: 'dsa',
    title: 'Complete DSA Mastery',
    desc: 'From Arrays to Dynamic Programming. 100+ Solved Problems.',
    icon: <Terminal size={24} className="text-purple-500" />,
    topics: [
      { title: 'Arrays & Strings', content: 'Kadane’s Algorithm, Sliding Window, Two Pointers.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Linked Lists & Stacks', content: 'Reversal, Cycle Detection, LRU Cache implementation.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Trees & Graphs', content: 'BFS, DFS, Dijkstra, Lowest Common Ancestor.', hasVideo: false },
      { title: 'Dynamic Programming', content: 'Knapsack, LCS, Matrix Chain Multiplication.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' }
    ]
  },
  {
    id: 'company',
    title: 'MNC Specific Crack Sheet',
    desc: 'Exact questions asked in Google, Meta, Microsoft, Tesla.',
    icon: <Building2 size={24} className="text-blue-500" />,
    topics: [
      { title: 'Google', content: 'Tree inversion, Google Maps pathfinding logic, System Design basics.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Meta (Facebook)', content: 'Graph connections, News Feed algorithm logic, String manipulation.', hasVideo: false },
      { title: 'Microsoft', content: 'Matrix rotation, Debugging logic, OOPs concepts deeply asked.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Tesla', content: 'Embedded logic puzzles, Real-time data processing scenarios.', hasVideo: false }
    ]
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Logical Reasoning',
    desc: 'Speed math, puzzles, and logic required for Round 1.',
    icon: <BrainCircuit size={24} className="text-orange-500" />,
    topics: [
      { title: 'Quantitative Aptitude', content: 'Time & Work, Probability, Permutation & Combination.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Logical Reasoning', content: 'Blood Relations, Seating Arrangements, Syllogisms.', hasVideo: false },
      { title: 'Data Interpretation', content: 'Pie Charts, Bar Graphs, Complex Data Tables.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' }
    ]
  },
  {
    id: 'hr',
    title: 'HR & Group Discussion',
    desc: 'How to speak, what to say, and behavioral hacks.',
    icon: <Users size={24} className="text-green-500" />,
    topics: [
      { title: 'HR Interview', content: '"Tell me about yourself", "Why should we hire you?", Salary negotiation.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Group Discussion', content: 'Opening lines, concluding statements, handling aggressive participants.', hasVideo: true, videoUrl: 'https://youtu.be/H5kMz6VOdno' },
      { title: 'Resume Building', content: 'ATS friendly formats, Action verbs, Project descriptions.', hasVideo: false }
    ]
  }
];

const DSA_QA = [
  {
    id: 1,
    question: "What is the difference between an Array and a Linked List?",
    answer: "Arrays store elements in contiguous memory locations, offering O(1) access but costly O(n) insertions/deletions. Linked Lists store nodes with pointers to the next element, allowing O(1) insertions/deletions if the position is known, but O(n) access time."
  },
  {
    id: 2,
    question: "Explain the time complexity of Binary Search.",
    answer: "Binary Search has a time complexity of O(log n). In each step, it divides the search interval in half. This is much faster than Linear Search (O(n)) but requires the array to be sorted beforehand."
  },
  {
    id: 3,
    question: "What is a Hash Map and how does it handle collisions?",
    answer: "A Hash Map stores key-value pairs and uses a hashing function to compute an index into an array of buckets or slots. Collisions (when two keys hash to the same index) are typically handled using Chaining (linked lists) or Open Addressing (probing)."
  },
  {
    id: 4,
    question: "What is the difference between BFS and DFS?",
    answer: "BFS (Breadth-First Search) explores neighbors level by level using a Queue. It is good for finding the shortest path in unweighted graphs. DFS (Depth-First Search) explores as deep as possible along each branch using a Stack (or recursion). It is often used for pathfinding, topological sorting, and cycle detection."
  },
  {
    id: 5,
    question: "What is Dynamic Programming (DP)?",
    answer: "Dynamic Programming is an optimization technique used to solve problems by breaking them down into simpler subproblems and storing their solutions (memoization or tabulation) to avoid redundant computations. Examples include Fibonacci sequence, Knapsack problem, and Longest Common Subsequence."
  }
];

const InterviewPrep: React.FC = () => {
  const navigate = useNavigate();
  // Unified Login State: Checks both local and global auth
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('dsa_user_id') || !!localStorage.getItem('user_profile');
  });
  const [userId, setUserId] = useState(() => {
      const globalUser = localStorage.getItem('user_profile');
      if (globalUser) return JSON.parse(globalUser).name;
      return localStorage.getItem('dsa_user_id') || '';
  });
  
  // Purchase State
  const [isPurchased, setIsPurchased] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Track if user tried to purchase before logging in
  const [pendingPurchase, setPendingPurchase] = useState(false);

  // QA Accordion State
  const [activeQA, setActiveQA] = useState<number | null>(null);

  // Progress State: Set of strings "moduleId-topicIndex"
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
        const getInitialUser = () => {
            const globalUser = localStorage.getItem('user_profile');
            if (globalUser) {
                try {
                    return JSON.parse(globalUser).name;
                } catch { return '' }
            }
            return localStorage.getItem('dsa_user_id') || '';
        };
        const initialUserId = getInitialUser();
        const storageKey = `dsa_progress_${initialUserId || 'guest'}`;
        const saved = localStorage.getItem(storageKey);
        try {
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch {
            return new Set();
        }
    }
    return new Set();
  });

  // Listen for global auth changes from Navbar
  useEffect(() => {
    const handleAuthChange = () => {
        const globalUser = localStorage.getItem('user_profile');
        if (globalUser) {
            const user = JSON.parse(globalUser);
            setIsLoggedIn(true);
            setUserId(user.name);
            // Reload progress for this user
            const storageKey = `dsa_progress_${user.name}`;
            const saved = localStorage.getItem(storageKey);
            setCompletedTopics(saved ? new Set(JSON.parse(saved)) : new Set());
        } else {
            // Only logout if no local ID exists either
            if (!localStorage.getItem('dsa_user_id')) {
                setIsLoggedIn(false);
                setUserId('');
                // Reset progress to guest
                const saved = localStorage.getItem('dsa_progress_guest');
                setCompletedTopics(saved ? new Set(JSON.parse(saved)) : new Set());
            }
        }
    };
    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  // Save progress when it changes
  useEffect(() => {
      const storageKey = `dsa_progress_${userId || 'guest'}`;
      localStorage.setItem(storageKey, JSON.stringify(Array.from(completedTopics)));
  }, [completedTopics, userId]);

  // Check purchase status on load based on logged in user
  useEffect(() => {
    if (isLoggedIn && userId) {
        // Simple mock check: If logged in globally, we can assume "free preview" or check purchase
        const purchaseStatus = localStorage.getItem(`dsa_purchased_${userId}`) || localStorage.getItem('user_profile'); // Global users unlock for demo
        setIsPurchased(!!purchaseStatus);
    } else {
        setIsPurchased(false);
    }
  }, [isLoggedIn, userId]);

  // If user just logged in and had a pending purchase, open checkout
  useEffect(() => {
    if (isLoggedIn && pendingPurchase) {
        setShowCheckout(true);
        setPendingPurchase(false);
    }
  }, [isLoggedIn, pendingPurchase]);

  // Calculate Progress Logic
  const totalTopics = MODULES.reduce((acc, mod) => acc + mod.topics.length, 0);
  const completedCount = completedTopics.size;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const handleUnlockClick = () => {
    if (isLoggedIn) {
        setShowCheckout(true);
    } else {
        setPendingPurchase(true);
        // Trigger global login modal via custom event
        window.dispatchEvent(new Event('open-auth-modal'));
    }
  };

  const toggleModule = (id: string) => {
    if (!isPurchased) {
        // If locked, trigger the login/purchase flow
        handleUnlockClick();
        return;
    }
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleTopicCompletion = (moduleId: string, index: number) => {
      if (!isPurchased) return;
      const topicId = `${moduleId}-${index}`;
      setCompletedTopics(prev => {
          const newSet = new Set(prev);
          if (newSet.has(topicId)) {
              newSet.delete(topicId);
          } else {
              newSet.add(topicId);
          }
          return newSet;
      });
  };

  const handlePurchaseSuccess = () => {
    setIsPurchased(true);
    if (userId) {
        localStorage.setItem(`dsa_purchased_${userId}`, 'true');
    }
    setShowCheckout(false);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
      setShowSuccessModal(false);
      window.scrollTo({ top: document.getElementById('course-content')?.offsetTop || 0, behavior: 'smooth' });
  };

  const toggleQA = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveQA(activeQA === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
      <SEO 
        title="Interview Preparation" 
        description="Master Data Structures & Algorithms (DSA) with CodeAlpha. Get access to HR interview questions, aptitude tests, and mock interviews to crack MNC jobs." 
      />

      <AIAssistant 
        title="Tech Coach"
        pageContext="You are a Tech Interview Coach. Explain the DSA & Placement course content (Arrays, Linked Lists, Graphs, etc.), the value of the MNC specific cheat sheet (Google, Meta), and the pricing (₹499). Offer basic advice on how to prepare for interviews."
        suggestions={["What is covered in DSA?", "Is the bundle worth it?", "HR Interview tips", "How to buy?"]}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-4">
        
        {/* User Login Header */}
        <div className="flex justify-end mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            {isLoggedIn && (
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                            <User size={16} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Welcome</span>
                            <span className="text-sm font-bold text-slate-700 leading-none mt-1 max-w-[150px] truncate">{userId}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Hero / Sales Pitch */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-bold uppercase tracking-wider mb-6 border border-amber-200 animate-in zoom-in duration-500 delay-200">
            <Star size={16} className="fill-amber-600 text-amber-600 animate-[spin_3s_linear_infinite]" />
            Premium Bundle
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 drop-shadow-sm">
            Master DSA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Crack Placements</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            The ultimate all-in-one resource. Includes Data Structures, Algorithms, Aptitude, Company-Specific Questions (Google, Meta, Tesla), and HR/GD Preparation.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-semibold text-slate-500 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"><CheckCircle2 size={18} className="text-green-500" /> 500+ DSA Problems</span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"><CheckCircle2 size={18} className="text-green-500" /> Top 50 MNC Sets</span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"><CheckCircle2 size={18} className="text-green-500" /> Lifetime Access</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Curriculum / Content */}
          <div id="course-content" className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4 animate-in fade-in slide-in-from-left-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900">Course Curriculum</h2>
              {!isPurchased && <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Lock size={12} /> Locked Content</span>}
            </div>

            {MODULES.map((module, index) => (
              <div 
                key={module.id} 
                style={{ animationDelay: `${index * 100}ms` }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden relative animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards ${
                  isPurchased 
                    ? 'border-slate-200 shadow-sm hover:border-brand-300 cursor-pointer hover:shadow-md' 
                    : 'border-slate-100 opacity-90 cursor-pointer hover:border-slate-200'
                }`}
                onClick={() => toggleModule(module.id)}
              >
                {/* Lock Overlay if not purchased */}
                {!isPurchased && (
                  <div className="absolute inset-0 bg-slate-50/60 backdrop-blur-[2px] z-10 flex items-center justify-center group/lock transition-opacity duration-300">
                     <div className="bg-white p-3 rounded-full shadow-lg border border-slate-100 group-hover/lock:scale-110 transition-transform duration-300">
                        <Lock className="text-slate-400 group-hover/lock:text-brand-500 transition-colors" size={24} />
                     </div>
                  </div>
                )}

                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-brand-50 transition-colors">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-600 transition-colors">{module.title}</h3>
                      <p className="text-sm text-slate-500">{module.desc}</p>
                    </div>
                  </div>
                  {isPurchased && (
                    <div className={`transition-transform duration-300 ${expandedModule === module.id ? 'rotate-180' : ''}`}>
                         <ChevronDown className="text-slate-400" />
                    </div>
                  )}
                </div>

                {/* Expanded Content (Only visible if purchased) - Using Grid Transition */}
                <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isPurchased && expandedModule === module.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                   <div className="overflow-hidden bg-slate-50 border-t border-slate-100">
                       <div className="p-6 space-y-4">
                          {module.topics.map((topic, i) => {
                            const topicId = `${module.id}-${i}`;
                            const isCompleted = completedTopics.has(topicId);
                            
                            return (
                            <div key={i} className={`flex items-start gap-4 p-3 rounded-xl transition-all border group/topic ${isCompleted ? 'bg-green-50/50 border-green-100' : 'bg-transparent border-transparent hover:bg-white hover:border-slate-100 hover:shadow-sm'}`}>
                              <button 
                                onClick={(e) => { e.stopPropagation(); toggleTopicCompletion(module.id, i); }}
                                disabled={!isPurchased}
                                className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all disabled:cursor-not-allowed disabled:opacity-50 ${isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-slate-400 bg-transparent hover:border-green-500'}`}
                                title={isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
                              >
                                {isCompleted && <Check size={14} strokeWidth={3} />}
                              </button>
                              
                              <div className="mt-1 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 group-hover/topic:scale-110 transition-transform">
                                  {topic.hasVideo ? <PlayCircle size={16} /> : <FileText size={16} />}
                              </div>
                              <div className="flex-1">
                                  <h4 className={`font-bold text-sm mb-1 flex items-center gap-2 ${isCompleted ? 'text-green-800 line-through decoration-green-300' : 'text-slate-800'}`}>
                                    {topic.title}
                                    {topic.hasVideo && <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 rounded animate-pulse no-underline">Video</span>}
                                  </h4>
                                  <p className={`text-xs leading-relaxed ${isCompleted ? 'text-green-600/70' : 'text-slate-500'}`}>{topic.content}</p>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                {topic.hasVideo ? (
                                    <a 
                                      href={topic.videoUrl} 
                                      target="_blank" 
                                      rel="noreferrer"
                                      className="text-xs font-bold text-brand-600 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 flex items-center gap-1 transition-colors"
                                    >
                                      Watch <PlayCircle size={14} />
                                    </a>
                                ) : (
                                    <div className="group relative">
                                      <button disabled className="text-xs font-bold text-slate-300 border border-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-not-allowed bg-slate-50">
                                        Video <Lock size={12} />
                                      </button>
                                      {/* Tooltip */}
                                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 animate-in fade-in zoom-in-95 duration-200">
                                        Coming Soon
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                                      </div>
                                    </div>
                                )}
                              </div>
                            </div>
                          )})}

                          {/* DSA Specific Q&A Section */}
                          {module.id === 'dsa' && (
                            <div className="mt-8 pt-6 border-t border-slate-200">
                              <div className="flex items-center gap-2 mb-4 text-slate-800">
                                <HelpCircle size={20} className="text-brand-500" />
                                <h3 className="font-bold text-lg">Common Interview Questions</h3>
                              </div>
                              <div className="space-y-3">
                                  {DSA_QA.map((qa) => {
                                    const isOpen = activeQA === qa.id;
                                    return (
                                      <div 
                                        key={qa.id} 
                                        className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-sm ${
                                            isOpen ? 'border-brand-200 shadow-md' : 'border-slate-200'
                                        }`}
                                      >
                                        <button 
                                          onClick={(e) => toggleQA(qa.id, e)}
                                          className={`w-full text-left p-4 flex items-center justify-between gap-4 group transition-colors duration-200 ${
                                              isOpen ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'
                                          }`}
                                        >
                                            <span className={`font-semibold text-sm transition-colors ${
                                                isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'
                                            }`}>
                                                {qa.question}
                                            </span>
                                            <span className={`transition-transform duration-300 transform shrink-0 ${
                                              isOpen ? 'rotate-180 text-brand-500' : 'text-slate-400 group-hover:text-brand-400'
                                            }`}>
                                              <ChevronDown size={18} />
                                            </span>
                                        </button>
                                        <div 
                                            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                              <div className={`p-4 pt-0 text-sm text-slate-600 leading-relaxed bg-slate-50 transition-opacity duration-300 ${
                                                  isOpen ? 'opacity-100' : 'opacity-0'
                                              }`}>
                                                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-top-2">
                                                  {qa.answer}
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                       </div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pricing & Preview */}
          <div className="lg:col-span-1 sticky top-24 space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            
            {/* AI Resume Scanner Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 cursor-pointer" onClick={() => navigate('/interview-prep/resume-scanner')}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-white/20 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20">
                        <Bot size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">AI Resume Scanner</h3>
                    <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                        Check your ATS score and get instant feedback for MNC roles (Google, Microsoft) using AI.
                    </p>
                    <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Try It Free <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* Pricing / Dashboard Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative transition-shadow hover:shadow-2xl duration-300">
               {isPurchased ? (
                 <div className="p-6">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-3 mb-6 animate-in zoom-in duration-300">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-green-800 text-sm">Access Granted</p>
                            <p className="text-xs text-green-600">Premium Bundle Unlocked</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-2">Your Progress</h3>
                    <div className="w-full bg-slate-100 h-3 rounded-full mb-2 overflow-hidden">
                        <div 
                            className="h-full bg-brand-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end"
                            style={{ width: `${Math.max(5, progressPercentage)}%` }}
                        >
                            {progressPercentage > 0 && <div className="h-full w-full bg-white/20 animate-[shimmer_2s_infinite]"></div>}
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 text-right mb-6 font-semibold">
                        {progressPercentage}% Completed ({completedCount}/{totalTopics})
                    </p>

                    <h4 className="font-bold text-sm text-slate-700 mb-3 uppercase tracking-wider">Quick Resources</h4>
                    <div className="space-y-2 mb-6">
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100 group">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600 group-hover:scale-110 transition-transform"><PlayCircle size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Video Library</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100 group">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:scale-110 transition-transform"><Code size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Practice Problems</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100 group">
                            <div className="bg-orange-100 p-2 rounded-lg text-orange-600 group-hover:scale-110 transition-transform"><Download size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Download Notes</span>
                        </button>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                         <div className={`flex items-center gap-3 ${progressPercentage === 100 ? 'opacity-100' : 'opacity-50'}`}>
                            <div className={`p-2 rounded-lg ${progressPercentage === 100 ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-400'}`}><GraduationCap size={18} /></div>
                            <div>
                                <p className="text-sm font-bold text-slate-700">Certificate</p>
                                <p className="text-xs text-slate-400">{progressPercentage === 100 ? 'Ready to Download' : 'Locked (Complete 100%)'}</p>
                            </div>
                            {progressPercentage < 100 && <Lock size={14} className="ml-auto text-slate-400" />}
                            {progressPercentage === 100 && <Download size={14} className="ml-auto text-brand-500 animate-bounce" />}
                         </div>
                    </div>
                 </div>
               ) : (
                 <div className="p-8">
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-md animate-pulse">
                    80% OFF
                  </div>
                  <div className="mb-6">
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Total Bundle Price</p>
                    <div className="flex items-end gap-2">
                      <h3 className="text-4xl font-bold text-slate-900">₹499</h3>
                      <span className="text-lg text-slate-400 line-through mb-1">₹2499</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>Complete DSA Roadmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>Aptitude & Reasoning Logic</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>Company Specific Crack Sheet</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>HR & GD Prep Guide</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleUnlockClick}
                    className="w-full bg-slate-900 hover:bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-brand-500/30 transition-all active:scale-95 group relative overflow-hidden"
                  >
                     <span className="relative z-10 flex items-center justify-center gap-2">
                        Unlock Bundle Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </button>
                  
                  <div className="text-center mt-4">
                     <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                        <ShieldCheck size={12} /> 100% Money Back Guarantee (7 Days)
                     </p>
                  </div>
                 </div>
               )}
            </div>

          </div>
        </div>

        {/* Checkout Modal (Mock) */}
        {showCheckout && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowCheckout(false)}></div>
                <div className="bg-white rounded-2xl w-full max-w-md z-10 overflow-hidden shadow-2xl animate-in zoom-in-95">
                    <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
                         <div className="flex items-center gap-3">
                             <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><CreditCard size={20} className="text-brand-600"/></div>
                             <div>
                                 <h3 className="font-bold text-slate-900">Secure Checkout</h3>
                                 <p className="text-xs text-slate-500">Completing purchase for User: {userId}</p>
                             </div>
                         </div>
                         <button onClick={() => setShowCheckout(false)} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
                    </div>
                    
                    <div className="p-8">
                         <div className="mb-8 text-center">
                             <p className="text-slate-500 font-bold uppercase text-xs mb-2">Total Amount</p>
                             <h2 className="text-5xl font-bold text-slate-900">₹499</h2>
                         </div>
                         
                         <div className="space-y-3 mb-8">
                             <button onClick={handlePurchaseSuccess} className="w-full border border-slate-200 hover:border-brand-500 hover:bg-brand-50 p-4 rounded-xl flex items-center justify-between group transition-all">
                                 <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><SmartphoneNfc size={20}/></div>
                                     <div className="text-left">
                                         <p className="font-bold text-slate-800 text-sm">UPI / QR Code</p>
                                         <p className="text-xs text-slate-500">Google Pay, PhonePe, Paytm</p>
                                     </div>
                                 </div>
                                 <div className="w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-brand-500"></div>
                             </button>

                             <button onClick={handlePurchaseSuccess} className="w-full border border-slate-200 hover:border-brand-500 hover:bg-brand-50 p-4 rounded-xl flex items-center justify-between group transition-all">
                                 <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600"><CreditCard size={20}/></div>
                                     <div className="text-left">
                                         <p className="font-bold text-slate-800 text-sm">Card Payment</p>
                                         <p className="text-xs text-slate-500">Credit / Debit Card</p>
                                     </div>
                                 </div>
                                 <div className="w-4 h-4 rounded-full border-2 border-slate-300 group-hover:border-brand-500"></div>
                             </button>
                         </div>
                         
                         <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                             <Lock size={10}/> Encrypted & Secure Payment
                         </div>
                    </div>
                </div>
            </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={closeSuccessModal}></div>
                <div className="bg-white rounded-3xl w-full max-w-sm z-10 p-8 text-center shadow-2xl animate-in zoom-in relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-green-500"></div>
                    
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-lg shadow-green-500/20 animate-[bounce_1s_infinite]">
                        <CheckCircle2 size={40} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        You have successfully unlocked the <strong>Complete DSA & Placement Bundle</strong>. Happy Learning!
                    </p>
                    
                    <button 
                        onClick={closeSuccessModal}
                        className="w-full bg-slate-900 hover:bg-brand-600 text-white py-3.5 rounded-xl font-bold shadow-xl hover:shadow-brand-500/30 transition-all active:scale-95"
                    >
                        Start Learning Now
                    </button>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default InterviewPrep;