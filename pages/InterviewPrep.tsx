
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Code, ChevronDown, ChevronUp, 
  BrainCircuit, Terminal, Lock, CheckCircle2, 
  Star, PlayCircle, FileText, Users, Building2, X, CreditCard, QrCode, ShieldCheck, Download, GraduationCap,
  LogOut, User, Smartphone, ArrowRight, Loader2, Mail, Globe
} from 'lucide-react';

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

const PREVIEWS = [
  { type: 'PDF', title: 'Google Interview Cheatsheet.pdf', color: 'bg-red-100 text-red-600' },
  { type: 'Video', title: 'Graph Algorithms in 1 Shot', color: 'bg-blue-100 text-blue-600' },
  { type: 'Doc', title: 'Top 50 HR Answers Script', color: 'bg-yellow-100 text-yellow-600' }
];

const InterviewPrep: React.FC = () => {
  // Login State - Generic userId (can be phone or email)
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('dsa_user_id'));
  const [userId, setUserId] = useState(() => localStorage.getItem('dsa_user_id') || '');
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Purchase State
  const [isPurchased, setIsPurchased] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Track if user tried to purchase before logging in
  const [pendingPurchase, setPendingPurchase] = useState(false);

  // Check purchase status on load based on logged in user
  useEffect(() => {
    if (isLoggedIn && userId) {
        const purchaseStatus = localStorage.getItem(`dsa_purchased_${userId}`);
        setIsPurchased(purchaseStatus === 'true');
    } else {
        setIsPurchased(false);
    }
  }, [isLoggedIn, userId]);

  const handleUnlockClick = () => {
    if (isLoggedIn) {
        setShowCheckout(true);
    } else {
        setPendingPurchase(true);
        setShowLoginModal(true);
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

  const handleLoginSuccess = (id: string) => {
    setIsLoggedIn(true);
    setUserId(id);
    localStorage.setItem('dsa_user_id', id);
    setShowLoginModal(false);
    
    // Resume purchase flow if that was the intent
    if (pendingPurchase) {
        setShowCheckout(true);
        setPendingPurchase(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
    setIsPurchased(false);
    localStorage.removeItem('dsa_user_id');
    setExpandedModule(null);
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

  // Determine icon based on login type
  const isEmailLogin = userId.includes('@');

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-4">
        
        {/* User Login Header */}
        <div className="flex justify-end mb-8 animate-fade-up">
            {isLoggedIn ? (
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                            {isEmailLogin ? <Mail size={16} /> : <Smartphone size={16} />}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Logged In</span>
                            <span className="text-sm font-bold text-slate-700 leading-none mt-1">{userId}</span>
                        </div>
                    </div>
                    <div className="w-px h-6 bg-slate-200 mx-1"></div>
                    <button 
                        onClick={handleLogout} 
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all" 
                        title="Logout"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setShowLoginModal(true)}
                    className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-slate-700 font-bold text-sm hover:border-brand-300 hover:text-brand-600 transition-all hover:shadow-md"
                >
                    <div className="bg-slate-100 group-hover:bg-brand-50 p-1.5 rounded-full transition-colors">
                        <User size={16} />
                    </div>
                    Login / Signup
                </button>
            )}
        </div>

        {/* Hero / Sales Pitch */}
        <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-bold uppercase tracking-wider mb-6 border border-amber-200">
            <Star size={16} className="fill-amber-600 text-amber-600" />
            Premium Bundle
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
            Master DSA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Crack Placements</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
            The ultimate all-in-one resource. Includes Data Structures, Algorithms, Aptitude, Company-Specific Questions (Google, Meta, Tesla), and HR/GD Preparation.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-semibold text-slate-500 mb-12">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 500+ DSA Problems</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Top 50 MNC Sets</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Lifetime Access</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start animate-fade-up" style={{ animationDelay: '200ms' }}>
          
          {/* Left Column: Curriculum / Content */}
          <div id="course-content" className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Course Curriculum</h2>
              {!isPurchased && <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Locked Content</span>}
            </div>

            {MODULES.map((module, index) => (
              <div 
                key={module.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                  isPurchased 
                    ? 'border-slate-200 shadow-sm hover:border-brand-300 cursor-pointer' 
                    : 'border-slate-100 opacity-90 cursor-pointer'
                }`}
                onClick={() => toggleModule(module.id)}
              >
                {/* Lock Overlay if not purchased */}
                {!isPurchased && (
                  <div className="absolute inset-0 bg-slate-50/60 backdrop-blur-[2px] z-10 flex items-center justify-center group/lock">
                     <div className="bg-white p-3 rounded-full shadow-lg border border-slate-100 group-hover/lock:scale-110 transition-transform">
                        <Lock className="text-slate-400 group-hover/lock:text-brand-500 transition-colors" size={24} />
                     </div>
                  </div>
                )}

                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{module.title}</h3>
                      <p className="text-sm text-slate-500">{module.desc}</p>
                    </div>
                  </div>
                  {isPurchased && (
                    expandedModule === module.id ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-slate-400" />
                  )}
                </div>

                {/* Expanded Content (Only visible if purchased) */}
                <div className={`bg-slate-50 border-t border-slate-100 transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                  isPurchased && expandedModule === module.id ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                   <div className="p-6 space-y-6">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">
                           <div className="mt-1 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                              {topic.hasVideo ? <PlayCircle size={16} /> : <FileText size={16} />}
                           </div>
                           <div className="flex-1">
                              <h4 className="font-bold text-sm text-slate-800 mb-1 flex items-center gap-2">
                                {topic.title}
                                {topic.hasVideo && <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 rounded">Video</span>}
                              </h4>
                              <p className="text-xs text-slate-500 leading-relaxed">{topic.content}</p>
                           </div>
                           {topic.hasVideo ? (
                              <a 
                                href={topic.videoUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-xs font-bold text-brand-600 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 flex items-center gap-1"
                              >
                                Watch <PlayCircle size={14} />
                              </a>
                           ) : (
                              <button className="text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50">
                                Read
                              </button>
                           )}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pricing & Preview */}
          <div className="lg:col-span-1 sticky top-24 space-y-6">
            
            {/* Pricing / Dashboard Card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative">
               {isPurchased ? (
                 <div className="p-6">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-3 mb-6">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-green-800 text-sm">Access Granted</p>
                            <p className="text-xs text-green-600">Premium Bundle Unlocked</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-2">Your Progress</h3>
                    <div className="w-full bg-slate-100 h-3 rounded-full mb-1">
                        <div className="w-[5%] h-full bg-brand-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-500 text-right mb-6">5% Completed</p>

                    <h4 className="font-bold text-sm text-slate-700 mb-3 uppercase tracking-wider">Quick Resources</h4>
                    <div className="space-y-2 mb-6">
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100">
                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><PlayCircle size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Video Library</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Code size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Practice Problems</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-left transition-colors border border-transparent hover:border-slate-100">
                            <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Download size={18} /></div>
                            <span className="text-sm font-medium text-slate-700">Download Notes</span>
                        </button>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                         <div className="flex items-center gap-3 opacity-50">
                            <div className="bg-slate-100 p-2 rounded-lg text-slate-400"><GraduationCap size={18} /></div>
                            <div>
                                <p className="text-sm font-bold text-slate-500">Certificate</p>
                                <p className="text-xs text-slate-400">Locked (Complete 100%)</p>
                            </div>
                            <Lock size={14} className="ml-auto text-slate-400" />
                         </div>
                    </div>
                 </div>
               ) : (
                 <div className="p-8">
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
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
                      <span>Real MNC Questions (Google, etc)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>HR & GD Preparation Guide</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleUnlockClick}
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-brand-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Unlock Full Access <Lock size={18} />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    {isLoggedIn ? '100% Secure Payment • Instant Access' : 'Login required to purchase'}
                  </p>
                 </div>
               )}
            </div>

            {/* Preview / Proof Section */}
            {!isPurchased && (
              <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
                 <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-800">Sneak Peek</h3>
                    <button 
                      onClick={() => setShowPreviewModal(true)}
                      className="text-xs font-bold text-brand-600 hover:underline"
                    >
                      View All
                    </button>
                 </div>
                 <div className="space-y-3">
                    {PREVIEWS.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 hover:shadow-md transition-all cursor-pointer" onClick={() => setShowPreviewModal(true)}>
                         <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                            {item.type === 'PDF' && <FileText size={20} />}
                            {item.type === 'Video' && <PlayCircle size={20} />}
                            {item.type === 'Doc' && <BookOpen size={20} />}
                         </div>
                         <div className="overflow-hidden">
                            <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                            <p className="text-xs text-slate-500">{item.type} • Preview Available</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)} 
            onSuccess={handleLoginSuccess}
            message={pendingPurchase ? "Please login to complete your purchase." : undefined}
          />
      )}

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-up" onClick={() => setShowPreviewModal(false)}></div>
           <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[80vh] overflow-y-auto relative z-10 p-8 animate-fade-up">
              <button onClick={() => setShowPreviewModal(false)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                 <X size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-6">Material Preview</h2>
              
              <div className="space-y-8">
                 <div>
                    <h3 className="font-bold text-lg mb-3 text-brand-600">1. Google Interview Cheatsheet (Page 1/10)</h3>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 font-mono text-sm text-slate-700">
                       <p className="mb-2"><span className="text-purple-600">Topic:</span> Graph Traversal (BFS/DFS)</p>
                       <p className="mb-2"><span className="text-blue-600">Question:</span> Given a grid, find the shortest path from S to E avoiding obstacles.</p>
                       <p className="mb-4"><span className="text-green-600">Optimal Approach:</span> Use BFS because it guarantees shortest path in unweighted graphs.</p>
                       <div className="bg-slate-900 text-slate-300 p-4 rounded-lg">
                          <code>
                             function bfs(grid, start, end) &#123;<br/>
                             &nbsp;&nbsp;let queue = [start];<br/>
                             &nbsp;&nbsp;let visited = new Set();<br/>
                             &nbsp;&nbsp;// ... full code in premium bundle<br/>
                             &#125;
                          </code>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal onClose={() => setShowCheckout(false)} onSuccess={handlePurchaseSuccess} />
      )}

      {/* Success Modal */}
      {showSuccessModal && (
          <PurchaseSuccessModal onClose={closeSuccessModal} />
      )}
    </div>
  );
};

const LoginModal: React.FC<{ onClose: () => void; onSuccess: (id: string) => void; message?: string }> = ({ onClose, onSuccess, message }) => {
    const [step, setStep] = useState(1);
    const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('email');
    const [identifier, setIdentifier] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (authMethod === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(identifier)) {
                setError("Please enter a valid email address");
                return;
            }
        } else {
            // Basic phone validation (at least 7 digits for international)
            if (identifier.replace(/\D/g, '').length < 7) {
                setError("Please enter a valid phone number");
                return;
            }
        }

        setLoading(true);
        // Simulate OTP API
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 1000);
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.length !== 4) {
            setError("Please enter a 4-digit OTP");
            return;
        }
        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            setLoading(false);
            onSuccess(identifier);
        }, 1000);
    };

    const resetForm = () => {
        setStep(1); 
        setError('');
        setOtp('');
    };

    return (
     <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300" onClick={onClose}></div>
        
        {/* Modal Card */}
        <div className="bg-white rounded-[2.5rem] w-full max-w-md p-8 md:p-10 relative z-10 shadow-2xl animate-fade-up overflow-hidden">
            
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-400 to-purple-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-50 rounded-full blur-3xl pointer-events-none"></div>

            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-20"><X size={20} className="text-slate-400 hover:text-slate-600" /></button>

            {/* Header Section with Icon Animation */}
            <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-5 shadow-inner border border-white relative group">
                    <div className="absolute inset-0 bg-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {/* Icon Switching */}
                    <div className="relative transition-all duration-300 transform">
                        {authMethod === 'email' ? (
                            <Mail size={32} className="text-brand-600" />
                        ) : (
                            <Smartphone size={32} className="text-purple-600" />
                        )}
                    </div>
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                    {step === 1 ? 'Welcome Back' : 'Verification'}
                </h2>
                <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                    {message ? message : (step === 1 ? 'Enter your details to access premium content' : `We sent a code to ${identifier}`)}
                </p>
            </div>

            {step === 1 ? (
                <div className="space-y-6">
                    {/* Animated Tab Switcher */}
                    <div className="relative bg-slate-100 p-1.5 rounded-2xl flex">
                        {/* Sliding Background */}
                        <div 
                            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${authMethod === 'email' ? 'translate-x-0' : 'translate-x-full'}`}
                        ></div>
                        
                        <button 
                            type="button"
                            onClick={() => { setAuthMethod('email'); setIdentifier(''); setError(''); }}
                            className={`relative z-10 flex-1 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${authMethod === 'email' ? 'text-brand-700' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Email
                        </button>
                        <button 
                            type="button"
                            onClick={() => { setAuthMethod('phone'); setIdentifier(''); setError(''); }}
                            className={`relative z-10 flex-1 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${authMethod === 'phone' ? 'text-purple-700' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Phone
                        </button>
                    </div>

                    <form onSubmit={handleSendOtp} className="space-y-5">
                         {/* Input Field with Icon */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1 tracking-wider">
                                {authMethod === 'email' ? 'Email Address' : 'Mobile Number'}
                            </label>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within/input:text-brand-500 transition-colors">
                                    {authMethod === 'email' ? <Mail size={20} /> : <Globe size={20} />}
                                </div>
                                <input 
                                    autoFocus
                                    type={authMethod === 'email' ? "email" : "tel"}
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    placeholder={authMethod === 'email' ? "john@example.com" : "+1 234 567 8900"}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-lg font-medium placeholder:font-normal"
                                />
                            </div>
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-xs font-bold ml-1 animate-fade-up">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                {error}
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:bg-brand-600 hover:shadow-brand-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                             {/* Button Shimmer */}
                             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            
                            {loading ? <Loader2 className="animate-spin" /> : <>Get One-Time Password <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                        </button>
                    </form>
                </div>
            ) : (
                <div className="animate-fade-up">
                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                         <div>
                            <div className="flex justify-between items-end mb-2 ml-1">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enter Code</label>
                            </div>
                            <input 
                                autoFocus
                                type="text" 
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                placeholder="----"
                                className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-center text-3xl font-bold tracking-[0.5em] text-slate-800 placeholder:text-slate-300"
                            />
                        </div>
                        {error && (
                             <div className="flex items-center gap-2 text-red-500 text-xs font-bold ml-1 animate-fade-up">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                {error}
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            {loading ? <Loader2 className="animate-spin" /> : <>Verify & Access <ShieldCheck size={18} /></>}
                        </button>
                        <button 
                            type="button"
                            onClick={resetForm}
                            className="w-full py-2 text-slate-400 text-sm font-semibold hover:text-slate-600 transition-colors"
                        >
                            Start Over
                        </button>
                    </form>
                </div>
            )}
        </div>
     </div>
    );
};

const PurchaseSuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="bg-white rounded-3xl w-full max-w-md p-8 relative z-10 shadow-2xl animate-fade-up text-center overflow-hidden">
             {/* Confetti Background */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-[-10%] left-[20%] w-3 h-3 bg-red-500 rounded-full animate-float"></div>
                <div className="absolute top-[-5%] left-[50%] w-4 h-4 bg-yellow-500 rounded-full animate-float-delayed"></div>
                <div className="absolute top-[10%] left-[80%] w-3 h-3 bg-blue-500 rounded-full animate-float"></div>
             </div>

             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                 <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>
                 <CheckCircle2 size={48} className="text-green-600 relative z-10" />
             </div>

             <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Order Successful!</h2>
             <p className="text-slate-500 mb-8">
                Welcome to the premium club. Your learning journey begins now.
             </p>

             <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left border border-slate-100">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">Transaction ID</span>
                    <span className="font-mono font-bold text-slate-800">TXN_{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">Date</span>
                    <span className="font-bold text-slate-800">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Amount Paid</span>
                    <span className="font-bold text-brand-600">₹499.00</span>
                </div>
             </div>

             <button 
                onClick={onClose}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold shadow-xl hover:bg-brand-600 hover:shadow-brand-500/30 transition-all active:scale-95"
             >
                Start Learning Now
             </button>
        </div>
    </div>
);

const CheckoutModal: React.FC<{ onClose: () => void; onSuccess: () => void }> = ({ onClose, onSuccess }) => {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
    const [processing, setProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setTimeout(() => {
            onSuccess();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col md:flex-row shadow-2xl animate-fade-up">
                
                {/* Order Summary Sidebar */}
                <div className="md:w-1/3 bg-slate-50 p-8 border-r border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-6 text-lg">Order Summary</h3>
                    
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                            <Terminal size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800 leading-tight mb-1">Complete DSA & Placement Bundle</h4>
                            <p className="text-xs text-slate-500">Lifetime Access</p>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8 border-t border-b border-slate-200 py-4">
                        <div className="flex justify-between text-sm text-slate-600">
                            <span>Base Price</span>
                            <span>₹2499</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600 font-medium">
                            <span>Discount (80%)</span>
                            <span>-₹2000</span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-slate-900 pt-2">
                            <span>Total</span>
                            <span>₹499</span>
                        </div>
                    </div>

                    <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> 500+ Practice Problems</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Video Solutions</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> HR & Aptitude Guide</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Verified Certificate</li>
                    </ul>
                </div>

                {/* Payment Form */}
                <div className="flex-1 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Secure Checkout</h2>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
                    </div>

                    {/* Payment Method Tabs */}
                    <div className="flex gap-4 mb-6">
                        <button 
                            onClick={() => setPaymentMethod('card')}
                            className={`flex-1 py-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                paymentMethod === 'card' 
                                ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-500/20' 
                                : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                            }`}
                        >
                            <CreditCard size={18} /> Card Payment
                        </button>
                        <button 
                             onClick={() => setPaymentMethod('upi')}
                             className={`flex-1 py-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                paymentMethod === 'upi' 
                                ? 'border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-500/20' 
                                : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                            }`}
                        >
                            <QrCode size={18} /> UPI / QR
                        </button>
                    </div>

                    <form onSubmit={handlePay} className="space-y-4">
                        {paymentMethod === 'card' ? (
                            <>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Name on Card</label>
                                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Card Number</label>
                                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Expiry</label>
                                        <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">CVV</label>
                                        <input required type="password" placeholder="123" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                                <QrCode size={120} className="mx-auto text-slate-800 mb-4 opacity-80" />
                                <p className="font-bold text-slate-800 mb-1">Scan to Pay ₹499</p>
                                <p className="text-xs text-slate-500">Supports GPay, PhonePe, Paytm</p>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={processing}
                            className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-2 mt-6"
                        >
                            {processing ? (
                                <>Processing...</>
                            ) : (
                                <>Pay ₹499 Securely <Lock size={18} /></>
                            )}
                        </button>
                    </form>
                    
                    <div className="mt-6 flex items-center justify-center gap-4 opacity-50 grayscale">
                        {/* Mock Logos */}
                        <div className="h-6 w-10 bg-slate-300 rounded"></div>
                        <div className="h-6 w-10 bg-slate-300 rounded"></div>
                        <div className="h-6 w-10 bg-slate-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterviewPrep;
