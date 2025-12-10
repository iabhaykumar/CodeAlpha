
import React, { useState } from 'react';
import { verifyCertificateCode } from '../services/verificationService';
import { VerificationResult } from '../types';
import { ShieldCheck, AlertCircle, CheckCircle, Search, Loader2, Award, Sparkles, Share2, Check, Copy, FileCheck, Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

const Verification: React.FC = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult>({ status: 'idle', message: '' });
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setResult({ status: 'idle', message: '' });
    setShareStatus('idle');

    try {
      const isValid = await verifyCertificateCode(code);
      if (isValid) {
        setResult({ status: 'success', message: 'Valid Certificate' });
      } else {
        setResult({ status: 'error', message: 'Invalid Certificate ID' });
      }
    } catch (error) {
      setResult({ status: 'error', message: 'Verification failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShareStatus('copied');
    setTimeout(() => setShareStatus('idle'), 2000);
  };

  const handleShare = async () => {
    const shareText = `I just verified my CodeAlpha Internship Certificate! 🎓\nCertificate ID: ${code}\nVerify here:`;
    let shareUrl = window.location.href;
    const fullShareString = `${shareText} ${shareUrl}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'CodeAlpha Certificate Verification',
                text: shareText,
                url: shareUrl
            });
        } catch (err) {
            console.error('Share failed:', err);
            copyToClipboard(fullShareString);
        }
    } else {
        copyToClipboard(fullShareString);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
       <SEO 
         title="Certificate Verification" 
         description="Verify CodeAlpha internship certificates. Enter your unique Certificate ID to validate authenticity and share your achievement." 
       />

      <AIAssistant 
        title="Verification Support"
        pageContext="You are a Support Assistant for Certificate Verification. Help users locate their ID on the certificate (usually starts with CA/...). If a code fails, suggest checking for typos or contacting support at services@codealpha.tech."
        suggestions={["Where is my ID?", "Invalid code error", "Certificate not found"]}
      />

       {/* Background Elements */}
       <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/30 opacity-50 -z-10"></div>
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-xl mx-auto">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} /> Official Verification Portal
             </span>
             <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Verify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Certificate</span>
             </h1>
             <p className="text-slate-600 dark:text-slate-400 text-lg">
                Authenticate your achievement and showcase your verified credentials to the world.
             </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden animate-in zoom-in duration-500">
             {/* Gradient Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500"></div>

             <form onSubmit={handleVerify} className="space-y-6 relative z-10">
                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 ml-1">
                        Certificate ID
                    </label>
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="e.g. CA/2023/1001"
                            className="w-full px-5 py-4 pl-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:bg-white dark:focus:bg-slate-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 font-mono font-medium shadow-inner"
                        />
                        <Search className="absolute left-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={22} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2 ml-1">
                        Enter the ID found at the bottom of your certificate.
                    </p>
                </div>

                <button 
                    type="submit" 
                    disabled={loading || !code}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-slate-200 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {loading ? (
                        <><Loader2 className="animate-spin" size={20} /> Verifying...</>
                    ) : (
                        <>Verify Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/></>
                    )}
                </button>
             </form>
        </div>

        {/* Success Card */}
        {result.status === 'success' && (
            <div className="mt-8 relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border-2 border-green-500/20 p-8 animate-in slide-in-from-bottom-8 duration-500 shadow-2xl shadow-green-500/10">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Award size={120} className="text-green-500" />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                            <CheckCircle size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Verified</h3>
                            <p className="text-green-600 dark:text-green-400 font-medium text-sm">Official CodeAlpha Credential</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                             <FileCheck size={18} className="text-slate-400" />
                             <span>Certificate ID: <strong className="font-mono text-slate-900 dark:text-white">{code}</strong></span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                             <User size={18} className="text-slate-400" />
                             <span>Issued to: <strong className="text-slate-900 dark:text-white">Student</strong></span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                             <Calendar size={18} className="text-slate-400" />
                             <span>Status: <strong className="text-green-600 dark:text-green-400">Active & Valid</strong></span>
                        </div>
                    </div>

                    <button
                        onClick={handleShare}
                        className="w-full py-3 rounded-xl font-bold text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        {shareStatus === 'copied' ? <Check size={16}/> : <Share2 size={16}/>}
                        {shareStatus === 'copied' ? 'Copied to Clipboard' : 'Share Achievement'}
                    </button>
                </div>
            </div>
        )}

        {/* Error Card */}
        {result.status === 'error' && (
            <div className="mt-8 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-6 flex items-start gap-4 animate-in slide-in-from-bottom-8 duration-500">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                    <AlertCircle size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-1">Verification Failed</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                        We couldn't verify the certificate ID <strong>{code}</strong>. Please check for typos and try again.
                    </p>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                        Need help? Contact <a href="mailto:services@codealpha.tech" className="underline hover:text-red-800 dark:hover:text-red-200">Support</a>.
                    </p>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Verification;
