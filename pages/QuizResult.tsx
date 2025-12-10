import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Trophy, Search, Loader2, CheckCircle2, XCircle, BrainCircuit, Share2, Check, Download, Link as LinkIcon, Twitter, Linkedin, Copy } from 'lucide-react';
import { MOCK_QUIZ_RESULTS } from '../constants';
import { QuizResult } from '../types';
import html2canvas from 'html2canvas';
import AIAssistant from '../components/AIAssistant';

const QuizResultPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quizCode, setQuizCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState('');
  const [shareState, setShareState] = useState<'idle' | 'generating' | 'shared' | 'copied' | 'downloaded'>('idle');
  const [linkCopied, setLinkCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const issueDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Reusable fetch logic
  const fetchResult = (code: string) => {
    setLoading(true);
    setError('');
    setResult(null);
    setShareState('idle');

    // Simulate API call
    setTimeout(() => {
      const data = MOCK_QUIZ_RESULTS[code.trim() as keyof typeof MOCK_QUIZ_RESULTS];
      if (data) {
        setResult(data);
        // Update URL without reloading to allow easy sharing if user typed it manually
        setSearchParams({ id: code.trim() }, { replace: true });
      } else {
        setError('Invalid Quiz ID. Please check your code and try again.');
        setSearchParams({}, { replace: true }); // Clear invalid ID from URL
      }
      setLoading(false);
    }, 1500);
  };

  // Check for ID in URL on mount
  useEffect(() => {
    const idFromUrl = searchParams.get('id');
    if (idFromUrl && !result && !loading) {
      setQuizCode(idFromUrl);
      fetchResult(idFromUrl);
    }
  }, []); // Run once on mount

  const handleCheckResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizCode.trim()) return;
    fetchResult(quizCode);
  };

  const handleDownload = async () => {
    if (!result || !resultRef.current) return;
    setShareState('generating');

    try {
        const canvas = await html2canvas(resultRef.current, {
            backgroundColor: '#0f172a',
            scale: 3, 
            logging: false,
            useCORS: true,
            allowTaint: false
        });

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `CodeAlpha-Result-${result.name.replace(/\s+/g, '-')}.png`;
        link.click();

        setShareState('downloaded');
        setTimeout(() => setShareState('idle'), 2500);
    } catch (error) {
        console.error("Error downloading image:", error);
        setShareState('idle');
    }
  };

  const handleShareImage = async () => {
    if (!result || !resultRef.current) return;
    setShareState('generating');

    try {
        const canvas = await html2canvas(resultRef.current, {
            backgroundColor: '#0f172a',
            scale: 3,
            logging: false,
            useCORS: true,
            allowTaint: false
        });

        canvas.toBlob(async (blob) => {
            if (!blob) {
                setShareState('idle');
                return;
            }

            const file = new File([blob], `CodeAlpha-Result-${result.name.replace(/\s+/g, '-')}.png`, { type: 'image/png' });
            const shareUrl = window.location.href;
            const shareText = `I just secured Rank #${result.rank} with a score of ${result.score}% in the ${result.domain} Quiz on CodeAlpha! 🏆 #CodeAlpha #TechQuiz`;

            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'My CodeAlpha Quiz Result',
                        text: shareText,
                        url: shareUrl
                    });
                    setShareState('shared');
                } catch (error) {
                    console.error('Share dismissed', error);
                    setShareState('idle');
                }
            } else {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({ [blob.type]: blob })
                    ]);
                    setShareState('copied');
                } catch (err) {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = `CodeAlpha-Result-${result.name.replace(/\s+/g, '-')}.png`;
                    link.click();
                    setShareState('downloaded');
                }
            }
            setTimeout(() => setShareState('idle'), 2500);
        }, 'image/png');

    } catch (error) {
        console.error("Error generating image:", error);
        setShareState('idle');
    }
  };

  const getShareUrl = () => window.location.href;
  const getShareText = () => {
     if (!result) return '';
     return `I just secured Rank #${result.rank} in the ${result.domain} Quiz! 🏆 Check out my result here: ${getShareUrl()} #CodeAlpha #TechQuiz`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const shareToSocial = (platform: 'twitter' | 'linkedin') => {
    const text = getShareText();
    const url = getShareUrl();
    let shareLink = '';

    if (platform === 'twitter') {
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    } else if (platform === 'linkedin') {
        // LinkedIn mainly focuses on the URL
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }
    
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
       <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float"></div>
       <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed"></div>

       <AIAssistant 
        title="Results Helper"
        pageContext="You are a Results Assistant for CodeAlpha Quizzes. Explain how to check results using the Quiz ID, how rankings are calculated, and how to share the achievement certificate."
        suggestions={["How to check result?", "How is rank calculated?", "Share my result"]}
      />

       <div className="container mx-auto px-4">
            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold uppercase tracking-wider mb-4 border border-yellow-200">
                    Hall of Fame
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                    Check Quiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Results</span>
                </h1>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden animate-in zoom-in duration-700 delay-200">
                    {/* CSS-only background pattern to avoid CORS issues */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <Trophy className="text-yellow-400" size={28} />
                        <h2 className="text-2xl font-bold">Check Your Result</h2>
                    </div>

                    <form onSubmit={handleCheckResult} className="mb-8">
                        <label className="block text-sm text-slate-400 mb-2 ml-1">Enter Quiz ID</label>
                        <div className="relative">
                        <input 
                            type="text" 
                            value={quizCode}
                            onChange={(e) => setQuizCode(e.target.value)}
                            placeholder="e.g. QZ-2024-001"
                            className="w-full px-5 py-4 pr-12 rounded-xl bg-slate-800 border border-slate-700 focus:border-brand-500 focus:bg-slate-700/50 text-white placeholder-slate-500 outline-none transition-all font-mono"
                        />
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-600 hover:bg-brand-500 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                        </button>
                        </div>
                    </form>

                    {/* Result Display Card */}
                    {result && (
                        <div className="space-y-6">
                            <div 
                                ref={resultRef} 
                                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700/50 animate-in zoom-in duration-300 relative overflow-hidden shadow-2xl"
                            >
                                {/* Decorative Backgrounds for generated image */}
                                <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="absolute top-1/2 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                {/* Branding Header */}
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/60 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/95 p-2.5 rounded-xl shadow-lg border border-white/10">
                                            <img 
                                                src="https://drive.google.com/thumbnail?id=1-yXWiKJsXQ8umSLtjhBWIGs5u_7nanND&sz=w1000" 
                                                alt="CodeAlpha" 
                                                className="h-10 w-auto object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading font-bold text-white leading-none mb-1">CodeAlpha</h3>
                                            <p className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">Tech Education</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex flex-col items-end justify-center">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                                            Tech Quiz Series
                                        </span>
                                        <div className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md text-[10px] font-mono text-slate-300 flex items-center justify-center leading-none">
                                            {new Date().getFullYear()} Edition
                                        </div>
                                    </div>
                                </div>

                                {/* Congratulatory Text */}
                                <div className="text-center mb-8 relative z-10">
                                    <h4 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2 drop-shadow-md tracking-wide">
                                        Congratulations!
                                    </h4>
                                    <p className="text-slate-400 text-sm sm:text-base">
                                        You have successfully showcased your skills.
                                    </p>
                                </div>

                                {/* Stats Grid */}
                                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8 relative z-10 backdrop-blur-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-700/50 pb-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Participant</p>
                                            <h3 className="text-xl font-bold text-white">{result.name}</h3>
                                        </div>
                                        <div className="flex flex-col sm:items-end justify-center">
                                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Domain</p>
                                            <div className="text-base font-bold text-brand-400 bg-brand-900/20 px-4 py-1.5 rounded-lg w-fit flex items-center justify-center leading-none">
                                                {result.domain}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                                            <div className="text-3xl sm:text-4xl font-heading font-bold text-green-400 mb-1">{result.score}%</div>
                                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Final Score</div>
                                        </div>
                                        <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                                            <div className="text-3xl sm:text-4xl font-heading font-bold text-yellow-400 mb-1">#{result.rank}</div>
                                            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Global Rank</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Footer Verification */}
                                <div className="flex flex-col items-center justify-center gap-2 text-center relative z-10 mb-6">
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                                        <CheckCircle2 size={18} />
                                        <span>Verified Achievement</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                                        Issued: {issueDate} • ID: {quizCode}
                                    </p>
                                    <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                                        Authorized by CodeAlpha
                                    </p>
                                </div>
                            </div>

                            {/* Main Action Buttons */}
                            <div className="flex gap-3">
                                <button 
                                    onClick={handleShareImage}
                                    disabled={shareState !== 'idle'}
                                    className="flex-1 py-3.5 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 active:scale-95 disabled:opacity-70 disabled:cursor-wait group"
                                >
                                    {shareState === 'generating' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Generating...</span>
                                        </>
                                    ) : shareState === 'shared' ? (
                                        <>
                                            <Check size={18} />
                                            <span>Shared!</span>
                                        </>
                                    ) : shareState === 'copied' ? (
                                        <>
                                            <Check size={18} />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                                            <span>Share Image</span>
                                        </>
                                    )}
                                </button>

                                <button 
                                    onClick={handleDownload}
                                    disabled={shareState !== 'idle'}
                                    className="px-5 py-3.5 rounded-xl font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-wait"
                                    title="Download Result Image"
                                >
                                    {shareState === 'downloaded' ? (
                                        <Check size={20} className="text-green-400" />
                                    ) : (
                                        <Download size={20} />
                                    )}
                                </button>
                            </div>

                            {/* Social Sharing & Link Section */}
                            <div className="bg-slate-800/40 rounded-2xl p-4 border border-slate-700/30 animate-in slide-in-from-bottom-4 delay-100">
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 ml-1">
                                    Share Direct Link
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {/* Link Copy Input */}
                                    <div className="flex-1 relative">
                                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                            <LinkIcon size={14} className="text-slate-500" />
                                        </div>
                                        <input 
                                            readOnly
                                            type="text" 
                                            value={getShareUrl()}
                                            className="w-full pl-9 pr-20 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono outline-none focus:border-brand-500"
                                        />
                                        <button 
                                            onClick={copyLink}
                                            className="absolute right-1 top-1 bottom-1 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md text-xs font-bold transition-colors flex items-center gap-1.5"
                                        >
                                            {linkCopied ? <Check size={12} /> : <Copy size={12} />}
                                            {linkCopied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>

                                    {/* Social Shortcuts */}
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => shareToSocial('twitter')}
                                            className="flex-1 sm:flex-none p-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-sky-500/20"
                                            title="Share on Twitter"
                                        >
                                            <Twitter size={18} fill="currentColor" />
                                        </button>
                                        <button 
                                            onClick={() => shareToSocial('linkedin')}
                                            className="flex-1 sm:flex-none p-2.5 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-blue-700/20"
                                            title="Share on LinkedIn"
                                        >
                                            <Linkedin size={18} fill="currentColor" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Display */}
                    {error && (
                        <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-4 border border-red-500/20 flex items-center gap-3 text-red-200 animate-in shake duration-300">
                        <XCircle size={20} className="shrink-0" />
                        <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Hint */}
                    {!result && !error && (
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <BrainCircuit size={20} className="text-brand-400 mt-0.5 shrink-0" />
                        <div className="text-sm text-slate-400">
                            <p className="mb-1 font-semibold text-slate-300">Did you know?</p>
                            <p>Participating in quizzes earns you "Knowledge Points" which can be redeemed for premium course discounts.</p>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default QuizResultPage;