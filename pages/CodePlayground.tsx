import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, Loader2, Terminal, Upload, Download, 
  Maximize2, Minimize2, Wand2, Bug, Zap, BookOpen, Copy, Trash2, ChevronDown,
  Undo, Redo, ZoomIn, ZoomOut, Share2, Save, RotateCcw, Link as LinkIcon, Check
} from 'lucide-react';
import Editor from 'react-simple-code-editor';
import { GoogleGenAI } from "@google/genai";
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import AIAssistant from '../components/AIAssistant';

// --- Configuration ---
const LANGUAGES_CONFIG = [
  { id: 'python', name: 'Python', file: 'main.py', language: 'python' },
  { id: 'javascript', name: 'JS', file: 'index.js', language: 'javascript' },
  { id: 'java', name: 'Java', file: 'Main.java', language: 'java' },
  { id: 'cpp', name: 'C++', file: 'main.cpp', language: 'cpp' },
  { id: 'c', name: 'C', file: 'main.c', language: 'c' },
  { id: 'php', name: 'PHP', file: 'index.php', language: 'php' },
];

const HELLO_WORLD_TEMPLATES: { [key: string]: string } = {
  python: `print("Hello from CodeAlpha!")\n\n# Try the AI Tools above!\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(f"Fib(10) is {fibonacci(10)}")`,
  javascript: `console.log("Hello from CodeAlpha!");\n\n// Try the AI Tools above!\nfunction factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log("Factorial of 5:", factorial(5));`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello CodeAlpha!");\n        // Try the AI Tools above!\n    }\n}`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello CodeAlpha!" << std::endl;\n    return 0;\n}`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello CodeAlpha!\\n");\n    return 0;\n}`,
  php: `<?php\n    echo "Hello CodeAlpha!\\n";\n?>`,
};

// Helper to safely get API Key
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  } catch (e) {
    return undefined;
  }
};

// --- Hacker Style Loader ---
const HackerLoader = () => {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  useEffect(() => {
    // Generate static noise initially to fill screen
    const rows = 40; // Enough to fill the height
    const initial = Array(rows).fill('').map(() => generateLine());
    setBinaryLines(initial);

    const interval = setInterval(() => {
      setBinaryLines(prev => {
        const next = [...prev];
        next.shift(); // Remove top line
        next.push(generateLine()); // Add new bottom line
        return next;
      });
    }, 50); // Fast scrolling speed

    return () => clearInterval(interval);
  }, []);

  const generateLine = () => {
    const chars = '01';
    let line = '';
    // Generate a long line to cover width
    for(let i=0; i<120; i++) {
        line += chars.charAt(Math.floor(Math.random() * chars.length));
        // Add random spacing for matrix feel
        if (Math.random() > 0.9) line += ' '; 
    }
    return line;
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono overflow-hidden">
      {/* Full Screen Binary Rain Effect */}
      <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none flex flex-col justify-end overflow-hidden leading-none">
         {binaryLines.map((line, i) => (
             <div key={i} className="text-green-500 text-[10px] md:text-xs whitespace-nowrap font-mono tracking-wider opacity-60">
                {line}
             </div>
         ))}
      </div>
      
      {/* Central HUD */}
      <div className="relative z-10 flex flex-col items-center bg-black/80 p-8 rounded-2xl border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.15)] backdrop-blur-sm">
        <div className="relative w-20 h-20 mb-6">
           {/* Outer static ring */}
           <div className="absolute inset-0 border-[3px] border-green-900/50 rounded-full"></div>
           {/* Inner spinning ring */}
           <div className="absolute inset-0 border-[3px] border-t-green-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
           {/* Reverse spinning ring */}
           <div className="absolute inset-2 border-[3px] border-b-green-400 border-t-transparent border-l-transparent border-r-transparent rounded-full animate-spin [animation-direction:reverse] duration-1000"></div>
           
           <div className="absolute inset-0 flex items-center justify-center">
              <Terminal size={28} className="text-green-500 animate-pulse" />
           </div>
        </div>
        
        <div className="text-green-500 font-bold tracking-[0.2em] text-lg animate-pulse text-center drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]">
          COMPILING
        </div>
        <div className="text-green-700 text-[10px] mt-3 font-mono tracking-widest uppercase">
          Initializing Runtime Environment...
        </div>
      </div>
    </div>
  );
};

// --- Typing Effect Output ---
const TypingOutput = ({ content }: { content: string }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    if (!content) {
      setDisplayed('');
      return;
    }
    
    setDisplayed('');
    let index = 0;
    const chunkSize = content.length > 500 ? 20 : 2; // Faster for long output
    
    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayed(prev => prev + content.slice(index, index + chunkSize));
        index += chunkSize;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-green-400">
      {displayed}
      <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse align-middle"></span>
    </div>
  );
};

const CodePlayground: React.FC = () => {
  const location = useLocation();
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [aiStatus, setAiStatus] = useState<'idle' | 'analyzing' | 'optimizing' | 'explaining'>('idle');
  const [aiResponse, setAiResponse] = useState<{ type: string, content: string } | null>(null);
  
  const [fontSize, setFontSize] = useState(14);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Toast State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // History State for Undo/Redo
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // --- Initialization Logic ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sharedLang = params.get('lang');
    const sharedCode = params.get('code');

    let initialCode = '';
    let initialLang = 'python';

    if (sharedLang && sharedCode && LANGUAGES_CONFIG.some(l => l.id === sharedLang)) {
        // Priority 1: Load Shared Link
        initialLang = sharedLang;
        initialCode = decodeURIComponent(sharedCode);
        triggerToast("Shared code loaded successfully!");
    } else {
        // Priority 2: Load Local Storage (if < 2 hours old)
        const savedData = localStorage.getItem(`cp_save_${language}`); // Check default language
        if (savedData) {
            try {
                const { code: savedCode, ts } = JSON.parse(savedData);
                const TWO_HOURS = 2 * 60 * 60 * 1000;
                if (Date.now() - ts < TWO_HOURS) {
                    initialCode = savedCode;
                    triggerToast("Restored your previous session");
                }
            } catch (e) { console.error("Error parsing saved code", e); }
        }
    }

    // Priority 3: Default Template
    if (!initialCode) {
        initialCode = HELLO_WORLD_TEMPLATES[initialLang];
    }

    setLanguage(initialLang);
    setCode(initialCode);
    setHistory([initialCode]);
    setHistoryIndex(0);
  }, []);

  // Scroll to output on mobile when running
  useEffect(() => {
    if ((isRunning || aiStatus !== 'idle') && window.innerWidth < 1024 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isRunning, aiStatus]);

  const handleLanguageChange = (newLangId: string) => {
    if (newLangId === language) return;
    
    // Save current code before switching? (Already auto-saved on type)
    
    setLanguage(newLangId);
    setOutput('');
    setAiResponse(null);
    setHistoryIndex(0);

    // Check if we have saved code for the new language
    const savedData = localStorage.getItem(`cp_save_${newLangId}`);
    let newCode = '';
    
    if (savedData) {
        try {
            const { code: savedCode, ts } = JSON.parse(savedData);
            const TWO_HOURS = 2 * 60 * 60 * 1000;
            if (Date.now() - ts < TWO_HOURS) {
                newCode = savedCode;
            }
        } catch (e) {}
    }

    if (!newCode) {
        newCode = HELLO_WORLD_TEMPLATES[newLangId] || '';
    }

    setCode(newCode);
    setHistory([newCode]);
  };

  const handleCodeUpdate = (newCode: string) => {
    setCode(newCode);
    
    // Auto-Save Logic
    localStorage.setItem(`cp_save_${language}`, JSON.stringify({
        code: newCode,
        ts: Date.now()
    }));
    
    if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
    }
    
    // Debounce history save (600ms)
    typingTimeoutRef.current = setTimeout(() => {
        setHistory(prev => {
            const currentHistory = prev.slice(0, historyIndex + 1);
            if (currentHistory[currentHistory.length - 1] !== newCode) {
                return [...currentHistory, newCode];
            }
            return prev;
        });
        setHistoryIndex(prev => prev + 1); 
    }, 600);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCode(history[newIndex]);
        // Also update local storage on undo
        localStorage.setItem(`cp_save_${language}`, JSON.stringify({
            code: history[newIndex],
            ts: Date.now()
        }));
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCode(history[newIndex]);
        // Also update local storage on redo
        localStorage.setItem(`cp_save_${language}`, JSON.stringify({
            code: history[newIndex],
            ts: Date.now()
        }));
    }
  };

  const handleZoomIn = () => setFontSize(prev => Math.min(prev + 2, 32));
  const handleZoomOut = () => setFontSize(prev => Math.max(prev - 2, 12));

  const handleManualSave = () => {
      localStorage.setItem(`cp_save_${language}`, JSON.stringify({
          code: code,
          ts: Date.now()
      }));
      triggerToast("Code saved successfully!");
  };

  const handleShare = () => {
      // Create a shareable URL with query params
      // Use window.location.origin + pathname
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      url.searchParams.set('code', encodeURIComponent(code));
      
      navigator.clipboard.writeText(url.toString()).then(() => {
          triggerToast("Shareable link copied to clipboard!");
      }).catch(() => {
          triggerToast("Failed to copy link.");
      });
  };

  const handleReset = () => {
      if (window.confirm("Are you sure you want to reset? This will clear your current code and revert to the default template.")) {
          const template = HELLO_WORLD_TEMPLATES[language];
          setCode(template);
          setHistory([template]);
          setHistoryIndex(0);
          setOutput('');
          setAiResponse(null);
          // Clear saved data for this language
          localStorage.removeItem(`cp_save_${language}`);
          triggerToast("Editor reset to default");
      }
  };

  const highlightWithPrism = (code: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Prism) {
      // @ts-ignore
      const prism = window.Prism;
      const langDef = prism.languages[language] || prism.languages.plaintext;
      return prism.highlight(code, langDef, language);
    }
    return code;
  };

  const executeGeminiRequest = async (prompt: string, actionType: typeof aiStatus) => {
    const apiKey = getApiKey();
    if (!apiKey) {
        setOutput("Error: API Key is missing. Cannot perform AI action.");
        return;
    }

    setAiStatus(actionType);
    if(actionType === 'idle') setIsRunning(true);

    try {
        const ai = new GoogleGenAI({ apiKey });
        const model = 'gemini-2.5-flash';
        
        const response = await ai.models.generateContent({ 
            model: model, 
            contents: prompt,
            config: {
                temperature: 0, // Force deterministic output
                topP: 0.1,
                topK: 1,
            }
        });
        
        let text = response.text?.trim() || "No output generated.";

        // Remove markdown code blocks if present
        if (text.startsWith("```")) {
            text = text.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/, '').trim();
        }
        
        if (actionType === 'idle') {
            setOutput(text);
        } else {
            setAiResponse({ type: actionType, content: text });
        }
    } catch (err) {
        const errorMsg = "Failed to process request. Please try again.";
        if (actionType === 'idle') setOutput(errorMsg);
        else setAiResponse({ type: 'error', content: errorMsg });
    } finally {
        setIsRunning(false);
        setAiStatus('idle');
    }
  };

  const handleRunCode = () => {
    const langName = LANGUAGES_CONFIG.find(l => l.id === language)?.name;
    const prompt = `Act as a strict ${langName} interpreter/compiler. 
    Execute the following code and return ONLY the output (stdout). 
    Do not add any explanation, markdown code fences, or intro/outro text.
    If there is an error, return only the error message.
    
    CODE:
    ${code}`;
    setOutput("");
    setAiResponse(null);
    executeGeminiRequest(prompt, 'idle');
  };

  const handleExplainCode = () => {
    const prompt = `Explain the following ${language} code to a beginner. 
    Be concise (max 3-4 sentences). Break down complex logic if any.
    
    CODE:
    ${code}`;
    executeGeminiRequest(prompt, 'explaining');
  };

  const handleDebugCode = () => {
    const prompt = `Analyze this ${language} code for bugs, syntax errors, or logical issues.
    If bugs are found, explain them and provide the fixed code block.
    If no bugs, say "No bugs found! Code looks clean."
    
    CODE:
    ${code}`;
    executeGeminiRequest(prompt, 'analyzing');
  };

  const handleOptimizeCode = () => {
    const prompt = `Analyze the time and space complexity of this ${language} code.
    Suggest optimizations to make it faster or more memory efficient.
    Provide the optimized code block if possible.
    
    CODE:
    ${code}`;
    executeGeminiRequest(prompt, 'optimizing');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    triggerToast("Code copied to clipboard");
  };

  const handleClear = () => {
    setOutput('');
    setAiResponse(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === 'string') {
            const content = ev.target.result;
            handleCodeUpdate(content); // Use update handler to save to history
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDownloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    const langConfig = LANGUAGES_CONFIG.find(l => l.id === language);
    element.download = langConfig ? langConfig.file : "code.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] text-slate-200 font-sans flex flex-col pt-24 ${isFullScreen ? 'fixed inset-0 z-[100] bg-[#0f172a] pt-0' : ''}`}>
      <SEO title="Pro Code Playground" description="Advanced online compiler with AI debugging, code explanation, and optimization tools." />
      <AIAssistant pageContext="Coding Playground" title="Code Buddy" />

      {/* Toast Notification */}
      {showToast && (
          <div className="fixed top-28 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl border border-green-500/50 flex items-center gap-2 z-[200] animate-in fade-in slide-in-from-top-4">
              <Check size={18} className="text-green-400" />
              <span className="text-sm font-semibold">{toastMessage}</span>
          </div>
      )}

      {/* --- Toolbar --- */}
      <div className="bg-[#1e293b] border-b border-slate-700 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0 relative z-20 shadow-md">
        
        {/* Left: Branding & Language */}
        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg whitespace-nowrap">
                <Terminal size={20} className="text-green-400" />
                <span className="hidden md:inline text-white">Code<span className="text-green-400">Playground</span></span>
            </div>
            
            <div className="h-6 w-px bg-slate-600 hidden md:block"></div>

            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                {LANGUAGES_CONFIG.map(lang => (
                    <button
                        key={lang.id}
                        onClick={() => handleLanguageChange(lang.id)}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${language === lang.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto md:justify-end">
            {/* Scrollable Icon Toolbar for Mobile */}
            <div className="flex-1 md:flex-none flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 overflow-x-auto scrollbar-hide">
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                
                {/* File Ops */}
                <button onClick={() => fileInputRef.current?.click()} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded" title="Upload"><Upload size={16}/></button>
                <button onClick={handleDownloadCode} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded" title="Download"><Download size={16}/></button>
                <button onClick={handleCopy} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded" title="Copy Code"><Copy size={16}/></button>
                
                <div className="w-px h-5 bg-slate-700 mx-1 shrink-0"></div>
                
                {/* Collaboration & State */}
                <button onClick={handleShare} className="p-2 text-indigo-400 hover:text-white hover:bg-indigo-600/30 rounded" title="Share with Class"><Share2 size={16}/></button>
                <button onClick={handleManualSave} className="p-2 text-green-400 hover:text-white hover:bg-green-600/30 rounded" title="Save Code"><Save size={16}/></button>
                <button onClick={handleReset} className="p-2 text-red-400 hover:text-white hover:bg-red-600/30 rounded" title="Reset Code"><RotateCcw size={16}/></button>

                <div className="w-px h-5 bg-slate-700 mx-1 shrink-0"></div>
                
                {/* Undo / Redo */}
                <button onClick={handleUndo} disabled={historyIndex <= 0} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded disabled:opacity-30 disabled:cursor-not-allowed" title="Undo"><Undo size={16}/></button>
                <button onClick={handleRedo} disabled={historyIndex >= history.length - 1} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded disabled:opacity-30 disabled:cursor-not-allowed" title="Redo"><Redo size={16}/></button>
                
                <div className="w-px h-5 bg-slate-700 mx-1 shrink-0"></div>

                {/* Zoom */}
                <button onClick={handleZoomOut} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded" title="Zoom Out"><ZoomOut size={16}/></button>
                <button onClick={handleZoomIn} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded" title="Zoom In"><ZoomIn size={16}/></button>
            </div>

            {/* Run Button - Fixed & Distinct */}
            <button 
                onClick={handleRunCode}
                disabled={isRunning || aiStatus !== 'idle'}
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-green-500/20 whitespace-nowrap shrink-0"
            >
                {isRunning ? <Loader2 className="animate-spin" size={18}/> : <Play size={18} fill="currentColor" />}
                Run
            </button>
        </div>
      </div>

      {/* --- Workspace --- */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden p-2 md:p-4 gap-4">
        
        {/* Editor Section */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden min-h-[60vh] lg:min-h-0">
            
            {/* AI Toolbar & Window Controls */}
            <div className="bg-[#252526] border-b border-slate-700 p-2 flex items-center gap-2 overflow-x-auto scrollbar-hide shrink-0">
                {/* Mac Window Dots */}
                <div className="flex gap-1.5 px-2 mr-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                </div>
                
                <div className="w-px h-4 bg-slate-600/50 mx-1"></div>

                <button onClick={handleExplainCode} disabled={aiStatus !== 'idle'} className="ai-btn border-blue-500/30 text-blue-300 hover:bg-blue-500/10"><BookOpen size={14} /> Explain</button>
                <button onClick={handleDebugCode} disabled={aiStatus !== 'idle'} className="ai-btn border-red-500/30 text-red-300 hover:bg-red-500/10"><Bug size={14} /> Debug</button>
                <button onClick={handleOptimizeCode} disabled={aiStatus !== 'idle'} className="ai-btn border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10"><Zap size={14} /> Optimize</button>
                
                {/* Full Screen Button Moved Here */}
                <button onClick={() => setIsFullScreen(!isFullScreen)} className="ai-btn border-slate-500/30 text-slate-400 hover:text-slate-200 hover:bg-slate-500/10" title={isFullScreen ? "Exit Full Screen" : "Full Screen"}>
                    {isFullScreen ? <Minimize2 size={14}/> : <Maximize2 size={14}/>} 
                    {isFullScreen ? 'Minimize' : 'Full Screen'}
                </button>

                {aiStatus !== 'idle' && <span className="ml-auto text-xs text-green-400 flex items-center gap-2 animate-pulse px-2"><Wand2 size={12} /> AI Processing...</span>}
            </div>

            {/* The Code Editor */}
            <div className="relative flex-1 overflow-auto custom-scrollbar flex">
                {/* Line Numbers */}
                <div 
                    className="bg-[#1e1e1e] text-slate-600 text-right pr-4 pt-4 select-none border-r border-slate-800 shrink-0 min-h-full w-12 font-mono"
                    style={{ fontSize: `${fontSize}px`, lineHeight: '1.5' }}
                >
                    {code.split('\n').map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Editor Area */}
                <div className="flex-1 min-w-0" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    <Editor
                        value={code}
                        onValueChange={handleCodeUpdate}
                        highlight={highlightWithPrism}
                        padding={16}
                        style={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: `${fontSize}px`,
                            lineHeight: '1.5',
                            backgroundColor: '#1e1e1e',
                            minHeight: '100%',
                        }}
                        className="min-h-full"
                    />
                </div>
            </div>
        </div>

        {/* Output Section */}
        <div 
            ref={outputRef}
            className="lg:w-[35%] bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl flex flex-col h-[40vh] lg:h-auto overflow-hidden relative"
        >
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b] border-b border-slate-700 shrink-0 relative z-20">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={14} className="text-green-500" /> 
                    {aiResponse ? `AI Analysis: ${aiResponse.type}` : 'Terminal Output'}
                </span>
                <button onClick={handleClear} className="text-slate-500 hover:text-red-400 transition-colors p-1 rounded hover:bg-slate-800"><Trash2 size={14} /></button>
            </div>

            <div className="flex-1 overflow-auto custom-scrollbar bg-[#0f172a] relative z-10">
                {isRunning || aiStatus !== 'idle' ? (
                    <HackerLoader />
                ) : (
                    <div className="p-4">
                        {aiResponse ? (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <TypingOutput content={aiResponse.content} />
                            </div>
                        ) : output ? (
                            <TypingOutput content={output} />
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-50 py-10">
                                <Terminal size={32} className="mb-2" />
                                <span className="text-sm font-mono">Ready to compile...</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
      </div>

      <style>{`
        .ai-btn {
            @apply flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all whitespace-nowrap hover:shadow-md active:scale-95;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1e1e1e; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CodePlayground;
