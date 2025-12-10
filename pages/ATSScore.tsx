import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, FileText, CheckCircle2, AlertTriangle, ArrowRight, Loader2, X, AlertCircle, Link as LinkIcon, Copy, Share2, Check } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

// Helper to safely get API Key
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  } catch (e) {
    return undefined;
  }
};

const ATSScore: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileData, setFileData] = useState<{ name: string; data: string; mimeType: string } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scoreData, setScoreData] = useState<{ score: number; feedback: string; critical_issues: string[] } | null>(null);
  const [error, setError] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dataFromUrl = searchParams.get('data');
    if (dataFromUrl && !scoreData) {
      try {
        const decodedData = JSON.parse(atob(decodeURIComponent(dataFromUrl)));
        setScoreData(decodedData);
        setFileData({ name: "Shared Analysis Result", data: "", mimeType: "" });
      } catch (e) {
        console.error("Failed to parse shared data from URL", e);
        setError("The shared link is invalid or corrupted.");
        setSearchParams({});
      }
    }
  }, []); // Run only on mount

  useEffect(() => {
    if (scoreData && fileData?.name !== "Shared Analysis Result") {
      try {
        const encodedData = encodeURIComponent(btoa(JSON.stringify(scoreData)));
        setSearchParams({ data: encodedData }, { replace: true });
      } catch (e) {
        console.error("Failed to encode data for URL", e);
      }
    }
  }, [scoreData]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!['application/pdf', 'text/plain'].includes(selectedFile.type)) {
      setError("Please upload a PDF or TXT file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const result = event.target?.result as string;
        const base64Data = result.split(',')[1];
        setFileData({
            name: selectedFile.name,
            data: base64Data,
            mimeType: selectedFile.type
        });
        setFile(selectedFile);
        setError('');
        setScoreData(null);
        setSearchParams({}); // Clear params for a new analysis
    };
    reader.readAsDataURL(selectedFile);
    e.target.value = '';
  };

  const calculateScore = async () => {
    if (!fileData) return;
    setIsAnalyzing(true);
    setError('');

    try {
        const apiKey = getApiKey();
        // Fallback demo mode if no key
        if (!apiKey) {
            await new Promise(r => setTimeout(r, 2000));
            setScoreData({
                score: 78,
                feedback: "Your resume is well-structured but lacks quantifiable achievements in the experience section. (Demo Mode)",
                critical_issues: ["Missing metrics in experience", "Header formatting inconsistencies"]
            });
            setIsAnalyzing(false);
            return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
        You are an expert ATS (Applicant Tracking System) algorithms auditor.
        Analyze the attached resume and calculate a strict ATS Score from 0 to 100 based on:
        1. Readability (Parsing success)
        2. Keyword density (Standard industry terms)
        3. Formatting (Standard headers, bullet points)
        4. Impact (Action verbs, metrics)

        Return a JSON object:
        {
            "score": number,
            "feedback": "Short summary of why this score was given.",
            "critical_issues": ["List of 2-3 major things to fix immediately"]
        }
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
                parts: [
                    { inlineData: { mimeType: fileData.mimeType, data: fileData.data } },
                    { text: prompt }
                ]
            },
            config: { responseMimeType: "application/json" }
        });

        const result = JSON.parse(response.text || '{}');
        setScoreData(result);

    } catch (err) {
        console.error(err);
        setError("Analysis failed. Please try again.");
    } finally {
        setIsAnalyzing(false);
    }
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const getScoreColor = (s: number) => {
      if (s >= 80) return 'text-green-500 stroke-green-500';
      if (s >= 60) return 'text-yellow-500 stroke-yellow-500';
      return 'text-red-500 stroke-red-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO title="Check ATS Score" description="Get your free Resume ATS Score instantly. Find out if your resume will pass the automated screening software." />
      <AIAssistant pageContext="ATS Score Checker Page" title="Score Assistant" suggestions={["What is a good score?", "How to fix formatting?", "Keywords help"]} />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                Check Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-kappel-500">ATS Score</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Most resumes are rejected by robots before a human ever sees them. 
                Upload your resume to see how well it parses and what score it gets.
            </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative mb-12">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-500 to-purple-500"></div>
            
            <div className="p-8 md:p-12">
                {!fileData ? (
                    <div className="text-center py-10">
                        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Upload size={40} className="text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload your Resume</h3>
                        <p className="text-slate-500 mb-8">Supported formats: PDF, TXT (Max 5MB)</p>
                        
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept=".pdf,.txt" 
                            onChange={handleFileSelect} 
                        />
                        <button 
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-slate-900 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/30 flex items-center gap-2 mx-auto"
                        >
                            Select File <ArrowRight size={20} />
                        </button>
                        {error && <p className="text-red-500 mt-4 font-medium flex items-center justify-center gap-2"><AlertCircle size={16}/> {error}</p>}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 flex items-center gap-4 mb-8 w-full max-w-lg">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                                <FileText size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-slate-900 truncate">{fileData.name}</p>
                                <p className="text-xs text-slate-500">Ready to scan</p>
                            </div>
                            <button onClick={() => { setFileData(null); setFile(null); setScoreData(null); setSearchParams({}); }} className="text-slate-400 hover:text-red-500 p-2"><X size={20}/></button>
                        </div>

                        {!scoreData && (
                            <button 
                                onClick={calculateScore}
                                disabled={isAnalyzing}
                                className="w-full max-w-xs bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                {isAnalyzing ? <><Loader2 className="animate-spin" /> Analyzing...</> : <>Get My Score <ArrowRight size={20} /></>}
                            </button>
                        )}
                    </div>
                )}

                {/* Results Section */}
                {scoreData && (
                    <div className="mt-12 pt-12 border-t border-slate-100 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Score Gauge */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="50%"
                                        cy="50%"
                                        r="45%"
                                        className="stroke-slate-100 fill-none"
                                        strokeWidth="10"
                                    />
                                    <circle
                                        cx="50%"
                                        cy="50%"
                                        r="45%"
                                        className={`fill-none transition-all duration-1000 ease-out ${getScoreColor(scoreData.score)}`}
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        strokeDasharray={`${2 * Math.PI * 45}%`}
                                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - scoreData.score / 100)}%`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className={`text-5xl md:text-6xl font-heading font-bold ${getScoreColor(scoreData.score).split(' ')[0]}`}>
                                        {scoreData.score}
                                    </span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">ATS Score</span>
                                </div>
                            </div>

                            {/* Analysis */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Analysis Report</h3>
                                    <p className="text-slate-600 leading-relaxed">{scoreData.feedback}</p>
                                </div>

                                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                                    <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                        <AlertTriangle size={18} /> Critical Improvements
                                    </h4>
                                    <ul className="space-y-2">
                                        {scoreData.critical_issues.map((issue, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-red-700">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></span>
                                                {issue}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-slate-100/70 border border-slate-200 rounded-xl p-5">
                                    <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                                        <Share2 size={18} /> Share Your Result
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-3">Share this link with friends or mentors to get feedback on your ATS score.</p>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                            <LinkIcon size={14} className="text-slate-400" />
                                        </div>
                                        <input 
                                            readOnly
                                            type="text" 
                                            value={window.location.href}
                                            className="w-full pl-9 pr-20 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-600 font-mono"
                                        />
                                        <button 
                                            onClick={handleCopyLink}
                                            className="absolute right-1 top-1 bottom-1 px-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md text-xs font-bold transition-colors flex items-center gap-1.5"
                                        >
                                            {linkCopied ? <Check size={12} /> : <Copy size={12} />}
                                            {linkCopied ? 'Copied' : 'Copy'}
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 pt-4">
                                    <button onClick={() => { setFileData(null); setFile(null); setScoreData(null); setSearchParams({}); }} className="px-6 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm transition-all">
                                        Check Another
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
                title="What is ATS?" 
                desc="Applicant Tracking Systems are robots that filter resumes before humans see them. 75% of resumes are rejected here."
                icon={<Loader2 className="text-brand-600" size={24} />} 
            />
            <InfoCard 
                title="How we score" 
                desc="We analyze keyword density, formatting parsability, and section structure against industry standards."
                icon={<FileText className="text-purple-600" size={24} />} 
            />
            <InfoCard 
                title="Secure & Private" 
                desc="Your resume is processed in memory and not stored. We prioritize your privacy."
                icon={<CheckCircle2 className="text-green-600" size={24} />} 
            />
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{title: string; desc: string; icon: React.ReactNode}> = ({ title, desc, icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="mb-4 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center">{icon}</div>
        <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default ATSScore;