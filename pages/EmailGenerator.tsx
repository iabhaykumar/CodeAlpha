
import React, { useState, useRef, useEffect } from 'react';
import { Upload, FileText, Send, Copy, Check, Loader2, Building2, Briefcase, Sparkles, Mail, User, Search, Share2, Link as LinkIcon } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useSearchParams } from 'react-router-dom';
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

interface HRContact {
  name: string;
  role: string;
  company: string;
  email: string;
}

interface ResultData {
  subject: string;
  body: string;
  hrContacts: HRContact[];
}

const EmailGenerator: React.FC = () => {
  const [file, setFile] = useState<{ name: string; data: string; mimeType: string } | null>(null);
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState('');
  
  // Copy states
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedEmailIndex, setCopiedEmailIndex] = useState<number | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load state from URL on mount
  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam && !result) {
      try {
        // Safe decode for UTF-8 characters
        const json = decodeURIComponent(escape(atob(dataParam)));
        setResult(JSON.parse(json));
      } catch (e) {
        console.error("Failed to parse shared data", e);
        // Fail silently or show error
      }
    }
  }, []);

  // Update URL when result changes
  useEffect(() => {
    if (result) {
      try {
         // Safe encode for UTF-8 characters
         const json = JSON.stringify(result);
         const encoded = btoa(unescape(encodeURIComponent(json)));
         setSearchParams({ data: encoded }, { replace: true });
      } catch (e) {
          console.error("Failed to encode result to URL", e);
      }
    }
  }, [result, setSearchParams]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const allowedTypes = ['application/pdf', 'text/plain'];
    if (!allowedTypes.includes(selectedFile.type)) {
        setError("Only PDF and TXT files are supported.");
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const result = event.target?.result as string;
        const base64Data = result.split(',')[1];
        
        setFile({
            name: selectedFile.name,
            data: base64Data,
            mimeType: selectedFile.type
        });
        setError('');
    };
    reader.readAsDataURL(selectedFile);
    e.target.value = '';
  };

  const handleGenerate = async () => {
    if (!file) {
      setError('Please upload your resume first.');
      return;
    }
    
    setIsGenerating(true);
    setError('');
    setResult(null);

    try {
      const apiKey = getApiKey();
      
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        
        const context = jobTitle && company 
            ? `applying for the position of ${jobTitle} at ${company}`
            : `inquiring about potential opportunities matching my skills`;

        const hrLogic = company 
            ? `List 5-8 relevant HR Recruiters, Talent Acquisition Specialists, or Hiring Managers specifically at "${company}".`
            : `List 10 HR Recruiters from top tech companies (like Google, Microsoft, Amazon, or trending startups) that are currently hiring for roles relevant to the resume.`;

        const prompt = `
          You are an expert career coach and copywriter.
          
          TASK 1: EMAIL GENERATION
          Analyze the attached resume. Write a high-converting, professional cold email to an HR Manager.
          Context: The candidate is ${context}.
          Requirements:
          - Subject Line: Catchy, professional (under 60 chars).
          - Body: Brief intro, highlight 2-3 achievements from resume, explain fit, call to action. Under 200 words.
          
          TASK 2: HR CONTACT LIST
          Based on the user's input:
          ${hrLogic}
          For each contact, provide a Name, Role, Company, and a likely professional Email (or a generic careers email for that company if specific personal emails are private).
          
          Return ONLY a JSON object with this structure:
          {
            "subject": "The email subject line",
            "body": "The full email body text",
            "hrContacts": [
              { "name": "Name", "role": "Role", "company": "Company", "email": "email@company.com" }
            ]
          }
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: {
            parts: [
                { inlineData: { mimeType: file.mimeType, data: file.data } },
                { text: prompt }
            ]
          },
          config: { responseMimeType: "application/json" }
        });

        const jsonText = response.text;
        if (jsonText) {
            const parsedResult = JSON.parse(jsonText);
            setResult(parsedResult);
        } else {
            throw new Error("Empty response from AI");
        }
      } else {
        // Demo Mode
        await new Promise(r => setTimeout(r, 2000));
        setResult({
            subject: `Application for ${jobTitle || 'Software Engineer'} - [Your Name]`,
            body: `Dear [Hiring Manager],\n\nI hope this email finds you well.\n\nI am writing to express my strong interest in the ${jobTitle || 'Software Engineer'} position at ${company || 'your company'}. With my background in [Key Skill 1] and [Key Skill 2] as detailed in my resume, I am confident in my ability to contribute effectively to your team.\n\nIn my previous role, I successfully [Achievement 1]. I admire ${company || 'your company'}'s work in [Industry/Field] and would love the opportunity to bring my expertise in [Skillset] to your upcoming projects.\n\nI have attached my resume for your review. Are you available for a brief chat next week to discuss how my background aligns with your team's needs?\n\nBest regards,\n[Your Name]`,
            hrContacts: [
                { name: "Sarah Jenkins", role: "Senior Tech Recruiter", company: company || "Google", email: "sarah.j@example.com" },
                { name: "Mike Ross", role: "Talent Acquisition Lead", company: company || "Microsoft", email: "mike.ross@example.com" },
                { name: "Jessica Pearson", role: "Head of People", company: company || "Amazon", email: "jessica.p@example.com" },
            ]
        });
      }

    } catch (err: any) {
      console.error("Email Gen Error:", err);
      setError("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, type: 'subject' | 'body') => {
    navigator.clipboard.writeText(text);
    if (type === 'subject') {
        setCopiedSubject(true);
        setTimeout(() => setCopiedSubject(false), 2000);
    } else {
        setCopiedBody(true);
        setTimeout(() => setCopiedBody(false), 2000);
    }
  };

  const copyEmail = (email: string, index: number) => {
      navigator.clipboard.writeText(email);
      setCopiedEmailIndex(index);
      setTimeout(() => setCopiedEmailIndex(null), 2000);
  };

  const handleShareLink = () => {
      navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO title="Job Email Builder" description="Generate professional cold emails and find HR contacts for job applications using AI." />
      <AIAssistant pageContext="Email Generator Page" title="Email Assistant" suggestions={["Make it more formal", "Focus on leadership skills", "Find HRs for Google"]} />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Job Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Builder</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Upload your resume to generate a tailored cold email and get a curated list of HR contacts for your target company or top tech firms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Section */}
            <div className="lg:col-span-5 space-y-6">
                {/* File Upload */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
                        <FileText size={20} className="text-brand-600" /> 1. Upload Resume
                    </h3>
                    
                    {!file ? (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 hover:border-brand-500 hover:bg-brand-50 transition-all cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-white transition-colors">
                                <Upload size={24} />
                            </div>
                            <span className="font-semibold text-sm">Click to upload PDF or TXT</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between bg-brand-50 border border-brand-200 rounded-xl p-4">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
                                    <FileText size={20} />
                                </div>
                                <span className="font-bold text-sm text-slate-800 truncate">{file.name}</span>
                            </div>
                            <button onClick={() => setFile(null)} className="text-slate-400 hover:text-red-500 p-1">
                                <span className="sr-only">Remove</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    )}
                    <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.txt" onChange={handleFileUpload} />
                </div>

                {/* Job Details */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
                        <Briefcase size={20} className="text-purple-600" /> 2. Job Details (Optional)
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Target Job Title</label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    type="text" 
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    placeholder="e.g. Senior React Developer"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Target Company</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    type="text" 
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="e.g. Google (Leave empty for Top 10)"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5">
                                {company ? `We will find HRs at ${company}.` : "We will find HRs from top hiring companies."}
                            </p>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                        {error}
                    </div>
                )}

                <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !file}
                    className="w-full bg-slate-900 hover:bg-brand-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 text-lg group"
                >
                    {isGenerating ? (
                        <><Loader2 className="animate-spin" /> Generating...</>
                    ) : (
                        <><Sparkles className="group-hover:text-yellow-300 transition-colors" /> Generate Email & HR List</>
                    )}
                </button>
            </div>

            {/* Output Section */}
            <div className="lg:col-span-7 space-y-8">
                {result ? (
                    <>
                        {/* Share Button */}
                         <div className="flex justify-end">
                            <button 
                                onClick={handleShareLink}
                                className="flex items-center gap-2 text-sm font-bold text-brand-600 bg-white hover:bg-brand-50 px-4 py-2.5 rounded-xl transition-all border border-brand-200 shadow-sm"
                            >
                                {linkCopied ? <Check size={16} className="text-green-500"/> : <Share2 size={16} />}
                                {linkCopied ? 'Link Copied' : 'Share Result'}
                            </button>
                        </div>

                        {/* Email Draft */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in slide-in-from-right-8 duration-500">
                            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Mail size={20} />
                                    <span className="font-bold">Generated Email</span>
                                </div>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">AI Draft</span>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                {/* Subject Line */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject Line</span>
                                        <button 
                                            onClick={() => copyToClipboard(result.subject, 'subject')}
                                            className="text-brand-600 hover:text-brand-700 text-xs font-bold flex items-center gap-1"
                                        >
                                            {copiedSubject ? <><Check size={14}/> Copied</> : <><Copy size={14}/> Copy</>}
                                        </button>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-800 font-medium">
                                        {result.subject}
                                    </div>
                                </div>

                                {/* Body */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Body</span>
                                        <button 
                                            onClick={() => copyToClipboard(result.body, 'body')}
                                            className="text-brand-600 hover:text-brand-700 text-xs font-bold flex items-center gap-1"
                                        >
                                            {copiedBody ? <><Check size={14}/> Copied</> : <><Copy size={14}/> Copy</>}
                                        </button>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap leading-relaxed text-sm">
                                        {result.body}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HR Contacts List */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-100">
                             <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
                                <div className="flex items-center gap-2">
                                    <User size={20} />
                                    <span className="font-bold">
                                        {company ? `HR Contacts at ${company}` : `Top Hiring HR Contacts`}
                                    </span>
                                </div>
                            </div>
                            <div className="p-0">
                                {result.hrContacts && result.hrContacts.length > 0 ? (
                                    <div className="divide-y divide-slate-100">
                                        {result.hrContacts.map((contact, idx) => (
                                            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold shrink-0">
                                                        {contact.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 text-sm">{contact.name}</h4>
                                                        <p className="text-xs text-slate-500">{contact.role} @ <span className="text-brand-600 font-semibold">{contact.company}</span></p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1.5 pl-3 w-full sm:w-auto">
                                                    <span className="text-xs text-slate-600 truncate flex-1 sm:flex-none">{contact.email}</span>
                                                    <button 
                                                        onClick={() => copyEmail(contact.email, idx)}
                                                        className="p-1.5 bg-white rounded shadow-sm text-slate-400 hover:text-brand-600 transition-colors"
                                                        title="Copy Email"
                                                    >
                                                        {copiedEmailIndex === idx ? <Check size={14} className="text-green-500"/> : <Copy size={14}/>}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-6 text-center text-slate-500">
                                        No specific contact information found. Try verifying company name.
                                    </div>
                                )}
                            </div>
                            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
                                * AI-generated suggestions. Please verify emails before sending.
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="h-full bg-slate-100/50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                            <Send size={32} className="text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-400 mb-2">Results will appear here</h3>
                        <p className="text-slate-400 max-w-xs mx-auto">Upload resume and click generate to get your email draft and HR contacts.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmailGenerator;
