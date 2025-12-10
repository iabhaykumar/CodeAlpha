import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 relative group shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase ml-2">{language}</span>
        </div>
        <button 
          onClick={handleCopy}
          className="text-slate-500 hover:text-green-600 transition-colors flex items-center gap-1 text-xs font-medium"
        >
          {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
        </button>
      </div>
      <div className="p-4 overflow-x-auto bg-[#f8fafc]">
        <pre className="text-sm font-mono text-slate-800 leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;