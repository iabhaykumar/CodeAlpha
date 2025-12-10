
import React, { useState, useEffect } from 'react';
import { Copy, Share2, Gift, Users, Trophy, Check, Linkedin, Twitter, Facebook, MessageCircle, Wallet, Edit2, RefreshCw, Link as LinkIcon, Send } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

const ReferAndEarn: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [isInputActive, setIsInputActive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const [stats, setStats] = useState({
    referrals: 0,
    earned: 0,
    pending: 0
  });

  const GOOGLE_FORM_LINK = "https://forms.gle/nwBN6EQKrpS1nN687";

  useEffect(() => {
    // Retrieve Student ID from local storage
    const savedId = localStorage.getItem('ca_student_id');
    if (savedId) {
      setStudentId(savedId);
      setIsInputActive(false);
    }

    // Load mock stats or initialize
    const savedStats = localStorage.getItem('ca_referral_stats');
    if (savedStats) {
        setStats(JSON.parse(savedStats));
    } else {
        // Initial mock data to show the user what it looks like
        const mockStats = { referrals: 0, earned: 0, pending: 0 };
        setStats(mockStats);
        localStorage.setItem('ca_referral_stats', JSON.stringify(mockStats));
    }
  }, []);

  const handleSaveId = () => {
    if (studentId.trim()) {
        localStorage.setItem('ca_student_id', studentId);
        setIsInputActive(false);
    }
  };

  const handleEditId = () => {
      setIsInputActive(true);
  };

  const handleCopy = () => {
    // The message instructs the applicant to use the Student ID in the form
    const message = `🚀 Hey! Start your tech career with the CodeAlpha Internship Program.\n\n📝 Apply here: ${GOOGLE_FORM_LINK}\n\n🔑 IMPORTANT: Please mention my Referral ID *${studentId}* in the registration form to get priority selection!`;
    
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefreshStats = () => {
      setIsLoadingStats(true);
      // Simulate checking the database/Google Sheet
      setTimeout(() => {
          // In a real app, this would fetch from an API. 
          // Here we just simulate a random update for demonstration if referrals are 0.
          if (stats.referrals === 0) {
              const newStats = { referrals: 1, earned: 100, pending: 1 };
              setStats(newStats);
              localStorage.setItem('ca_referral_stats', JSON.stringify(newStats));
          }
          setIsLoadingStats(false);
      }, 1500);
  };

  const shareText = encodeURIComponent(`Join CodeAlpha Internship! Apply here: ${GOOGLE_FORM_LINK} and use my Referral ID: ${studentId} for priority selection.`);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">
      <SEO 
        title="Refer & Earn" 
        description="Invite friends to CodeAlpha using your Student ID and earn rewards." 
      />
      <AIAssistant 
        title="Referral Guide" 
        pageContext="Refer and Earn Page. Users enter their Student ID to generate a referral link. They share this link. When friends apply using the Student ID in the Google Form, the user earns rewards."
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Refer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Earn</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Help your friends get hired. Share your Student ID and earn rewards when they join the internship program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Generator Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <LinkIcon size={20} className="text-green-500"/> Generate Link
                </h3>

                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Your Student ID
                        </label>
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                disabled={!isInputActive}
                                placeholder="Enter ID (e.g. CA/2024/123)"
                                className={`flex-1 px-4 py-3 rounded-xl border ${isInputActive ? 'border-brand-500 ring-2 ring-brand-500/20 bg-white dark:bg-slate-950' : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500'} outline-none transition-all font-mono font-bold text-slate-800 dark:text-white`}
                            />
                            {isInputActive ? (
                                <button 
                                    onClick={handleSaveId}
                                    disabled={!studentId.trim()}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Save
                                </button>
                            ) : (
                                <button 
                                    onClick={handleEditId}
                                    className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 px-3 transition-colors"
                                >
                                    <Edit2 size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    {!isInputActive && (
                        <div className="animate-in fade-in slide-in-from-bottom-4">
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl mb-6">
                                <p className="text-sm text-green-800 dark:text-green-300 font-medium mb-2">
                                    Share this message with your friends:
                                </p>
                                <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-green-100 dark:border-green-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
                                    Apply here: {GOOGLE_FORM_LINK}<br/>
                                    Referral ID: <strong>{studentId}</strong>
                                </div>
                            </div>

                            <button 
                                onClick={handleCopy}
                                className="w-full bg-slate-900 hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                                {copied ? "Copied to Clipboard!" : "Copy Referral Message"}
                            </button>
                            
                            <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <a href={`https://wa.me/?text=${shareText}`} target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform"><MessageCircle size={28} /></a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(GOOGLE_FORM_LINK)}`} target="_blank" rel="noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform"><Linkedin size={28} /></a>
                                <a href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" rel="noreferrer" className="text-[#1DA1F2] hover:scale-110 transition-transform"><Twitter size={28} /></a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(GOOGLE_FORM_LINK)}`} target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform"><Facebook size={28} /></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Card */}
            <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Trophy size={20} className="text-yellow-500"/> Your Stats
                        </h3>
                        <button 
                            onClick={handleRefreshStats} 
                            className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-all ${isLoadingStats ? 'animate-spin text-brand-600' : ''}`}
                            title="Refresh Stats"
                        >
                            <RefreshCw size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stats.referrals}</div>
                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Referrals</div>
                        </div>
                        <div className="p-5 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800 text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">₹{stats.earned}</div>
                            <div className="text-xs text-green-600/80 dark:text-green-400/80 font-bold uppercase tracking-wider">Earnings</div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-orange-600">
                                 <Users size={18} />
                             </div>
                             <div>
                                 <p className="text-sm font-bold text-slate-900 dark:text-white">Pending</p>
                                 <p className="text-xs text-slate-500">Waiting for verification</p>
                             </div>
                         </div>
                         <span className="text-xl font-bold text-orange-500">{stats.pending}</span>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl p-8 shadow-lg">
                    <h3 className="font-bold text-lg mb-4">How it works?</h3>
                    <ol className="space-y-4 text-sm opacity-90">
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                            Enter your Student ID above.
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                            Copy the generated link and share it.
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                            Your friend must fill the Google Form and enter <strong>your ID</strong> in the "Referral Code" field.
                        </li>
                        <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                            You earn rewards once they are verified!
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
