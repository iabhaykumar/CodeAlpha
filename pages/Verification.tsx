
import React, { useState } from 'react';
import { verifyCertificateCode } from '../services/verificationService';
import { VerificationResult } from '../types';
import { ShieldCheck, AlertCircle, CheckCircle, Search, Loader2, Award, Sparkles } from 'lucide-react';

const Verification: React.FC = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult>({ status: 'idle', message: '' });

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setResult({ status: 'idle', message: '' });

    try {
      const isValid = await verifyCertificateCode(code);
      if (isValid) {
        setResult({ status: 'success', message: 'This certificate is valid and was officially issued to the student by CodeAlpha.' });
      } else {
        setResult({ status: 'error', message: 'Invalid Certificate ID. Please double-check the code and try again.' });
      }
    } catch (error) {
      setResult({ status: 'error', message: 'An error occurred during verification. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 opacity-50 -z-10"></div>
       {/* Pulsing Tech Orbs */}
       <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
       <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-kappel-100 rounded-full blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
       <div className="absolute top-1/2 right-10 w-32 h-32 bg-accent-100 rounded-full blur-2xl opacity-30 animate-float"></div>

      <div className="max-w-lg w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700 hover:shadow-brand-500/10 transition-shadow">
        {/* Top Decor */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-500 via-kappel-500 to-accent-500"></div>
        
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-600 shadow-inner border border-brand-100 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-in zoom-in delay-200">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-3 animate-in fade-in slide-in-from-bottom-2 delay-300">Certificate Verification</h1>
          <p className="text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 delay-400">
            Ensure the authenticity of your CodeAlpha certification by entering the unique ID found on your document.
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6 relative z-10 animate-in fade-in slide-in-from-bottom-4 delay-500">
          <div className="group">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Certificate ID</label>
            <div className="relative transition-all duration-300 transform focus-within:scale-[1.02] focus-within:-translate-y-1">
              <input 
                type="text" 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. CA/SE1/23569"
                className="w-full px-5 py-4 pl-12 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-slate-800 placeholder-slate-400 font-medium shadow-sm"
              />
              <Search className="absolute left-4 top-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={22} />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading || !code}
            className="w-full bg-slate-900 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 hover:shadow-brand-500/25 active:scale-95 relative overflow-hidden"
          >
             {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Verifying...
              </>
            ) : (
              <>
                 <span className="relative z-10">Verify Authenticity</span>
                 <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </>
            )}
          </button>
        </form>

        {/* Success Result Notification */}
        {result.status === 'success' && (
          <div className="mt-8 relative overflow-hidden rounded-3xl bg-white p-10 text-center animate-in zoom-in duration-500 shadow-2xl shadow-green-500/20 border-2 border-green-100 bg-gradient-to-br from-white to-green-50/50">
            {/* Confetti CSS implementation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i}
                  className={`absolute w-2 h-2 rounded-full animate-float ${
                    ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'][i % 6]
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 1.5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    opacity: 0.8
                  }}
                />
              ))}
            </div>
            
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 mb-6 shadow-lg shadow-green-200 animate-bounce relative z-10">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <CheckCircle size={48} strokeWidth={3} />
            </div>
            
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-2 tracking-tight">Verified!</h3>
            <p className="text-slate-500 font-medium text-base mb-8 leading-relaxed max-w-xs mx-auto">
              {result.message}
            </p>
            
            <div className="inline-flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-xl shadow-green-500/40 text-white font-bold tracking-widest uppercase text-sm transform hover:scale-105 transition-transform relative overflow-hidden group animate-[pulse_3s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                    <Award size={20} className="text-yellow-300 fill-yellow-300" />
                    <span>Official & Valid</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">CodeAlpha Certification</span>
            </div>
          </div>
        )}

        {/* Error Result Notification */}
        {result.status === 'error' && (
          <div className="mt-8 p-5 rounded-2xl flex items-start gap-4 text-sm border bg-red-50 border-red-100 text-red-900 animate-in slide-in-from-bottom-4 zoom-in duration-300">
            <div className="p-2 rounded-full shrink-0 bg-red-100 text-red-600">
                <AlertCircle size={20} />
            </div>
            <div>
                <h4 className="font-bold text-base mb-1">Verification Failed</h4>
                <p className="opacity-90 leading-relaxed">{result.message}</p>
            </div>
          </div>
        )}
        
        <div className="mt-10 pt-6 border-t border-slate-100 text-center animate-in fade-in delay-700">
           <p className="text-xs text-slate-400 font-medium">
             Having trouble? Contact support at <a href="mailto:services@codealpha.tech" className="text-brand-600 hover:underline hover:text-brand-700 transition-colors">services@codealpha.tech</a>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
