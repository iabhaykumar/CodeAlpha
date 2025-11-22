
import React, { useState } from 'react';
import { Calendar, Trophy, Search, CheckCircle2, XCircle, ArrowRight, Loader2, BrainCircuit } from 'lucide-react';
import { MOCK_QUIZ_RESULTS } from '../constants';
import { QuizResult } from '../types';

const Quiz: React.FC = () => {
  const [quizCode, setQuizCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState('');

  const handleCheckResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizCode.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      const data = MOCK_QUIZ_RESULTS[quizCode.trim() as keyof typeof MOCK_QUIZ_RESULTS];
      if (data) {
        setResult(data);
      } else {
        setError('Invalid Quiz ID. Please check your code and try again.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold uppercase tracking-wider mb-4 border border-brand-200">
            Monthly Event
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
            CodeAlpha <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">Tech Quiz</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Challenge yourself every month! Participate in our scheduled quizzes to test your knowledge, win badges, and get recognized.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Registration Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden group animate-in slide-in-from-left-8 duration-700 delay-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-500/20 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                <Calendar size={32} />
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Next: 5th {new Date().toLocaleString('default', { month: 'short' })}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Register for Next Quiz</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Don't miss out! Registration is open for the upcoming tech quiz. 
              Topics include Web Dev, AI, and more. Secure your spot now.
            </p>

            <a 
              href="https://forms.gle/s9TW7Tqi3tAQLCu78" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-500/30 transition-all group/btn"
            >
              <span>Register Now</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-xs text-slate-400 mt-4 text-center">
              * Registration closes 24 hours before the event.
            </p>
          </div>

          {/* Result Checker */}
          <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden animate-in slide-in-from-right-8 duration-700 delay-200">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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

              {/* Result Display */}
              {result && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-in zoom-in duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-slate-300 text-xs uppercase tracking-wide">Participant</p>
                      <h3 className="text-lg font-bold">{result.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 text-xs uppercase tracking-wide">Domain</p>
                      <h3 className="text-sm font-semibold text-brand-400">{result.domain}</h3>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-green-400">{result.score}%</div>
                      <div className="text-xs text-slate-400">Score</div>
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-400">#{result.rank}</div>
                      <div className="text-xs text-slate-400">Rank</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm font-bold animate-pulse">
                    <CheckCircle2 size={16} />
                    <span>Quiz Completed Successfully!</span>
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

export default Quiz;
