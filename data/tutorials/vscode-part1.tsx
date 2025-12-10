
import React from 'react';
import { Topic } from './types';
import { Layout, Command, Sidebar, Monitor, Settings, User } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';

// UI Helper: VS Code Window Mockup
const VSCodeMockup = () => (
  <div className="bg-[#1e1e1e] border border-slate-700 rounded-lg overflow-hidden font-mono text-sm shadow-xl select-none mb-6">
    {/* Title Bar */}
    <div className="bg-[#3c3c3c] text-[#cccccc] px-4 py-1.5 flex justify-between items-center text-xs">
      <div className="flex gap-4">
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      <div className="font-semibold opacity-70">index.tsx - CodeAlpha - Visual Studio Code</div>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#f1fa8c] opacity-20"></div>
        <div className="w-3 h-3 rounded-full bg-[#50fa7b] opacity-20"></div>
        <div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
      </div>
    </div>

    <div className="flex h-64">
      {/* Activity Bar (Left) */}
      <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 text-[#858585]">
        <div className="text-white border-l-2 border-white pl-3 pr-3 cursor-pointer"><Layout size={24} /></div>
        <div className="cursor-pointer hover:text-white"><Search size={24} /></div>
        <div className="cursor-pointer hover:text-white"><Command size={24} /></div>
        <div className="cursor-pointer hover:text-white mt-auto"><Settings size={24} /></div>
      </div>

      {/* Side Bar (Explorer) */}
      <div className="w-48 bg-[#252526] text-[#cccccc] flex flex-col text-xs border-r border-[#1e1e1e]">
        <div className="p-2 text-[10px] font-bold uppercase tracking-wider pl-4">Explorer</div>
        <div className="bg-[#37373d] p-1 pl-2 font-bold flex items-center gap-1">
            <span className="text-[10px]">▼</span> CODEALPHA
        </div>
        <div className="flex flex-col gap-1 p-2">
            <div className="flex items-center gap-2 pl-4 text-[#50fa7b] bg-[#37373d]/50 py-1 rounded-sm cursor-pointer">
                <span className="text-yellow-400">TS</span> index.tsx
            </div>
            <div className="flex items-center gap-2 pl-4 hover:bg-[#2a2d2e] cursor-pointer">
                <span className="text-blue-400">#</span> style.css
            </div>
            <div className="flex items-center gap-2 pl-4 hover:bg-[#2a2d2e] cursor-pointer">
                <span className="text-orange-400">{}</span> package.json
            </div>
        </div>
      </div>

      {/* Editor Group */}
      <div className="flex-1 bg-[#1e1e1e] text-[#d4d4d4] flex flex-col">
        {/* Editor Tabs */}
        <div className="flex bg-[#252526] text-xs">
            <div className="px-3 py-2 bg-[#1e1e1e] border-t border-[#007acc] text-white flex items-center gap-2">
                <span className="text-yellow-400 font-bold">TS</span> index.tsx <span className="ml-2 opacity-50 hover:opacity-100 cursor-pointer">✕</span>
            </div>
            <div className="px-3 py-2 text-[#969696] hover:bg-[#2d2d2d] cursor-pointer border-r border-[#1e1e1e]">
                style.css
            </div>
        </div>
        
        {/* Editor Content */}
        <div className="p-4 font-mono text-sm leading-6">
            <div><span className="text-[#569cd6]">import</span> React <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'react'</span>;</div>
            <div className="mt-2"><span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">App</span> = () <span className="text-[#569cd6]">{`=>`}</span> {'{'}</div>
            <div className="pl-4"><span className="text-[#569cd6]">return</span> (</div>
            <div className="pl-8 text-[#808080]">{`// Welcome to VS Code!`}</div>
            <div className="pl-8"><span className="text-[#808080]">{`<`}</span><span className="text-[#569cd6]">div</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">"container"</span><span className="text-[#808080]">{`>`}</span></div>
            <div className="pl-12">Hello World</div>
            <div className="pl-8"><span className="text-[#808080]">{`</`}</span><span className="text-[#569cd6]">div</span><span className="text-[#808080]">{`>`}</span></div>
            <div className="pl-4">);</div>
            <div>{'}'};</div>
        </div>
      </div>
    </div>

    {/* Status Bar */}
    <div className="bg-[#007acc] text-white text-[10px] px-2 py-1 flex justify-between items-center">
        <div className="flex gap-4">
            <span>master*</span>
            <span>0 errors, 0 warnings</span>
        </div>
        <div className="flex gap-4">
            <span>Ln 10, Col 34</span>
            <span>UTF-8</span>
            <span>TypeScript React</span>
            <span>Prettier</span>
        </div>
    </div>
  </div>
);

function Search(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
}

export const VSCODE_PART1_TOPICS: Topic[] = [
  // 1. Introduction
  {
    id: 'vscode-intro',
    title: 'What is VS Code?',
    parent: '1. Environment Setup',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Visual Studio Code (VS Code) is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go).
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Why VS Code?</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>IntelliSense:</strong> Goes beyond syntax highlighting and autocomplete; provides smart completions based on variable types, function definitions, and imported modules.</li>
            <li><strong>Debugging:</strong> Print statement debugging is a thing of the past. Debug code right from the editor.</li>
            <li><strong>Git Built-in:</strong> Review diffs, stage files, and make commits right from the editor.</li>
            <li><strong>Extensions:</strong> Install extensions to add new languages, themes, debuggers, and to connect to additional services.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-interface',
    title: 'The Interface Deep Dive',
    parent: '1. Environment Setup',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          VS Code's layout is deceptively simple. Understanding every part of it is key to speed.
        </p>
        <VSCodeMockup />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Activity Bar (Left):</strong> The "Switchboard". Icons here switch the Side Bar view (Explorer, Search, Source Control, Run & Debug, Extensions). You can drag these icons to rearrange or right-click to hide them.</li>
            <li><strong>Side Bar (Left Panel):</strong> Context-aware views. Shows files, search results, or git changes depending on what you selected in the Activity Bar.</li>
            <li><strong>Editor Area (Center):</strong> Where you code. You can split this vertically or horizontally (Ctrl+\) to edit multiple files side-by-side.</li>
            <li><strong>Panel (Bottom):</strong> Houses the Terminal, Debug Console, Output, and Problems tabs. Toggle with <kbd className="bg-slate-100 border px-1 rounded">Ctrl+`</kbd> or <kbd className="bg-slate-100 border px-1 rounded">Ctrl+J</kbd>.</li>
            <li><strong>Status Bar (Bottom):</strong> Shows branch name, errors/warnings, current line/col, and language mode. Clicking items here often triggers actions (e.g., changing branch).</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-command-palette',
    title: 'Command Palette Mastery',
    parent: '1. Environment Setup',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The <strong>Command Palette</strong> (<kbd className="bg-slate-100 border px-1 rounded">Ctrl+Shift+P</kbd>) is the single most important feature. It allows you to access <em>every</em> command in VS Code without touching the mouse.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Modes of the Palette</h3>
        <p className="mb-4">The behavior changes based on the first character you type:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>`>` (Default):</strong> Execute Commands (e.g., "Toggle Word Wrap", "Format Document").</li>
            <li><strong>(No prefix):</strong> Go to File (Quick Open). Just type filenames. (<kbd className="bg-slate-100 border px-1 rounded">Ctrl+P</kbd> opens this mode directly).</li>
            <li><strong>`@`</strong>: Go to Symbol (Variables, Functions in current file).</li>
            <li><strong>`:`</strong>: Go to Line Number.</li>
            <li><strong>`?`</strong>: View all available commands for the current context.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-settings-profiles',
    title: 'Settings, Sync & Profiles',
    parent: '1. Environment Setup',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Customize VS Code to fit your exact needs and sync it across machines.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">User vs Workspace Settings</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>User Settings:</strong> Apply globally to all VS Code instances on your machine. (Stored in `%APPDATA%\Code\User\settings.json`).</li>
            <li><strong>Workspace Settings:</strong> Specific to the current project. Stored in `.vscode/settings.json`. These <strong>override</strong> user settings and are great for enforcing project-specific rules (e.g., "tabs vs spaces") for your team.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Profiles (New Feature)</h3>
        <p className="mb-4">Profiles let you create sets of customizations. You can have a "Work" profile (Angular, Java, Enterprise themes) and a "Personal" profile (React, Python, Fun themes). Switch instantly via the Gear icon.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Settings Sync</h3>
        <p className="mb-4">Sign in with GitHub or Microsoft to sync your extensions, settings, keybindings, and snippets to the cloud. When you install VS Code on a new laptop, just sign in, and your entire environment is restored instantly.</p>
      </>
    )
  }
];
