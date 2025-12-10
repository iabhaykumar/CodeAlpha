
import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight, Loader2, Search, BarChart3, AlertTriangle, X, Trash2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

interface AnalysisResult {
  atsScore: number;
  matchScore: number;
  summary: string;
  checks: {
    fileType: boolean;
    formatting: boolean;
    sections: boolean;
    fonts: boolean;
  };
  missingKeywords: string[];
  formattingIssues: string[];
  actionVerbSuggestions: string[];
  sectionImprovements: { section: string; suggestion: string }[];
}

// Helper to safely get API Key
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  } catch (e) {
    return undefined;
  }
};

const ResumeScanner: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<{ name: string; data: string; mimeType: string } | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['application/pdf', 'text/plain'];
    if (!allowedTypes.includes(file.type)) {
        setError("Only PDF and TXT files are supported.");
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const result = event.target?.result as string;
        // Result is "data:application/pdf;base64,....."
        // We need the part after the comma
        const base64Data = result.split(',')[1];
        
        setResumeFile({
            name: file.name,
            data: base64Data,
            mimeType: file.type
        });
        setError('');
    };
    reader.readAsDataURL(file);
    // Reset input value so the same file can be selected again if needed
    e.target.value = '';
  };

  const removeFile = () => {
      setResumeFile(null);
      setError('');
  };

  const handleAnalyze = async () => {
    // Validation
    if (!resumeFile) {
      setError('Please upload a resume (PDF/TXT) for analysis.');
      return;
    }
    
    setIsAnalyzing(true);
    setError('');
    setResult(null);

    try {
      const apiKey = getApiKey();
      
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        
        const promptInstructions = `
          You are an expert ATS (Applicant Tracking System) Resume Scanner. 
          Analyze the provided resume against the job description (if provided, otherwise perform a general check).
          
          JOB DESCRIPTION:
          ${jobDescription || "General Software Engineering Role"}
          
          Return a JSON object with the following structure:
          {
            "atsScore": number (0-100),
            "matchScore": number (0-100),
            "summary": "string summary",
            "checks": {
              "fileType": boolean,
              "formatting": boolean,
              "sections": boolean,
              "fonts": boolean
            },
            "missingKeywords": ["string", "string"],
            "formattingIssues": ["string", "string"],
            "actionVerbSuggestions": ["string", "string"],
            "sectionImprovements": [{ "section": "string", "suggestion": "string" }]
          }
        `;

        // Multimodal input: File + Text Prompt
        const contentsPayload = {
            parts: [
                {
                    inlineData: {
                        mimeType: resumeFile.mimeType,
                        data: resumeFile.data
                    }
                },
                { text: promptInstructions }
            ]
        };

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: contentsPayload,
          config: {
            responseMimeType: "application/json"
          }
        });

        const jsonText = response.text;
        if (jsonText) {
            const parsedResult = JSON.parse(jsonText);
            setResult(parsedResult);
        } else {
            throw new Error("Empty response from AI");
        }
      } else {
        // Fallback Simulation for Demo
        setTimeout(() => {
            setResult({
                atsScore: 72,
                matchScore: 55,
                summary: "The resume is well-structured but lacks some specific keywords relevant to the job description. The uploaded format is good. (Demo Mode)",
                checks: {
                    fileType: true,
                    formatting: true,
                    sections: true,
                    fonts: true
                },
                missingKeywords: ["Docker", "Kubernetes", "CI/CD", "Cloud Computing"],
                formattingIssues: ["Slightly cluttered header"],
                actionVerbSuggestions: ["Orchestrated", "Deployed", "Engineered"],
                sectionImprovements: [
                    { section: "Experience", suggestion: "Quantify your achievements (e.g., 'Reduced latency by 20%')." },
                    { section: "Skills", suggestion: "Categorize skills for better readability." }
                ]
            });
            setIsAnalyzing(false);
        }, 2000);
        return;
      }

    } catch (err: any) {
      console.error("Resume Scanner Error:", err);
      const errStr = (err.message || '') + (typeof err === 'object' ? JSON.stringify(err) : String(err));
      
      if (errStr.includes("429") || errStr.includes("quota") || errStr.includes("RESOURCE_EXHAUSTED")) {
        setError("API Quota Exceeded. Please check your usage limits or try again later.");
      } else if (errStr.includes("403") || errStr.includes("API key not valid") || errStr.includes("permission denied")) {
        setError("Access Denied: Invalid API Key or permissions.");
      } else if (errStr.includes("400") || errStr.includes("INVALID_ARGUMENT")) {
        setError("Invalid Request: The AI could not process the input.");
      } else if (errStr.includes("503") || errStr.includes("500") || errStr.includes("internal")) {
        setError("AI Service Unavailable. Please try again in a few moments.");
      } else if (errStr.includes("fetch failed") || errStr.includes("network") || errStr.includes("Load failed")) {
        setError("Network Error: Please check your internet connection.");
      } else if (errStr.includes("safety") || errStr.includes("blocked")) {
        setError("Content Flagged: The resume content triggered safety filters.");
      } else {
        setError(`Analysis Failed: ${err.message || 'Unknown error occurred.'}`);
      }
    } finally {
      if (getApiKey()) {
          setIsAnalyzing(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO title="AI Resume Scanner" description="Analyze your resume with AI to pass ATS filters and get more interview calls." />
      <AIAssistant pageContext="Resume Scanner Page. User is analyzing resume for ATS compatibility." title="Resume Coach" suggestions={["How to improve ATS score?", "Keywords for Web Dev", "Formatting tips"]} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            AI Resume <span className="text-brand-600">Scanner</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Check your resume's ATS compatibility and get instant AI-driven feedback to land your dream job at top MNCs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FileText size={20} className="text-brand-600" /> Upload Resume
              </h3>
              
              {/* File Upload Area */}
              <div className="mb-4">
                  <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileUpload} 
                      accept=".pdf,.txt" 
                      className="hidden" 
                  />
                  
                  {!resumeFile ? (
                      <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full border-2 border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center text-slate-500 hover:border-brand-500 hover:bg-brand-50 transition-all group"
                      >
                          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                              <Upload size={32} />
                          </div>
                          <span className="font-bold text-base mb-1">Click to upload PDF or TXT</span>
                          <span className="text-xs text-slate-400">Maximum size 5MB</span>
                      </button>
                  ) : (
                      <div className="flex items-center justify-between bg-brand-50 border border-brand-200 rounded-xl p-4">
                          <div className="flex items-center gap-3 overflow-hidden">
                              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
                                  <FileText size={24} />
                              </div>
                              <div className="min-w-0">
                                  <p className="font-bold text-sm text-slate-800 truncate">{resumeFile.name}</p>
                                  <p className="text-xs text-slate-500">Ready for analysis</p>
                              </div>
                          </div>
                          <button 
                              onClick={removeFile}
                              className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                              title="Remove file"
                          >
                              <X size={20} />
                          </button>
                      </div>
                  )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Search size={20} className="text-brand-600" /> Job Description (Optional)
              </h3>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description to check keyword matching..."
                className="w-full h-32 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none resize-none text-sm"
              ></textarea>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !resumeFile}
              className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 size={24} className="animate-spin" /> Analyzing...
                </>
              ) : (
                <>
                  Scan Resume <ArrowRight size={20} />
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2 border border-red-100 animate-in fade-in">
                <AlertCircle size={20} className="shrink-0" /> <span className="break-words">{error}</span>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result ? (
              <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                {/* Scores */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                    <div className="text-4xl font-bold text-brand-600 mb-2">{result.atsScore}%</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">ATS Score</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{result.matchScore}%</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">JD Match</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-500" /> Analysis Summary
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{result.summary}</p>
                </div>

                {/* Missing Keywords */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <AlertTriangle size={20} className="text-orange-500" /> Missing Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.missingKeywords.length > 0 ? result.missingKeywords.map((keyword, idx) => (
                      <span key={idx} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-100">
                        {keyword}
                      </span>
                    )) : <p className="text-sm text-slate-500 italic">No critical keywords missing.</p>}
                  </div>
                </div>

                {/* Improvements */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" /> Recommended Improvements
                  </h3>
                  <div className="space-y-4">
                    {result.sectionImprovements.map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold uppercase text-slate-400 mb-1 block">{item.section}</span>
                        <p className="text-slate-700 text-sm font-medium">{item.suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-200 p-8 min-h-[400px]">
                <div className="text-center text-slate-400">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={32} className="opacity-50" />
                  </div>
                  <p className="font-medium text-lg text-slate-500">Results will appear here</p>
                  <p className="text-sm">Upload your resume to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScanner;
