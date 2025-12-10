


import React from 'react';
// FIX: Imported the 'Code' icon from lucide-react.
import { Github, Book, GitBranch, Plus, Lock, Globe, Code } from 'lucide-react';
// FIX: Imported the 'Topic' type to resolve a type error.
// FIX: Corrected import path for Topic type from the tutorials directory.
import { Topic } from '../tutorials/types';

// UI Helper: GitHub Repo Header Mockup
export const RepoHeaderMockup = () => (
  <div className="bg-[#0d1117] border border-slate-700 rounded-lg overflow-hidden font-sans text-sm text-[#c9d1d9] mb-6 shadow-sm select-none">
    {/* Top Bar */}
    <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-[#161b22]">
      <div className="flex items-center gap-2">
        <Book size={16} className="text-[#8b949e]" />
        <span className="text-[#58a6ff] hover:underline cursor-pointer">codealpha</span>
        <span className="text-[#8b949e]">/</span>
        <span className="text-[#58a6ff] font-bold hover:underline cursor-pointer">awesome-project</span>
        <span className="text-xs border border-slate-600 rounded-full px-2 py-0.5 text-[#8b949e]">Public</span>
      </div>
      <div className="flex gap-2 text-xs">
        <button className="flex items-center gap-1 bg-[#21262d] border border-[rgba(240,246,252,0.1)] px-3 py-1 rounded hover:bg-[#30363d] transition-colors">
            <span>♡</span> Sponsor
        </button>
        <button className="flex items-center gap-1 bg-[#21262d] border border-[rgba(240,246,252,0.1)] px-3 py-1 rounded hover:bg-[#30363d] transition-colors">
            <span>👁</span> Watch <span className="bg-[rgba(110,118,129,0.4)] px-1.5 rounded-full ml-1 text-[10px]">12</span>
        </button>
        <button className="flex items-center gap-1 bg-[#21262d] border border-[rgba(240,246,252,0.1)] px-3 py-1 rounded hover:bg-[#30363d] transition-colors">
            <GitBranch size={12}/> Fork <span className="bg-[rgba(110,118,129,0.4)] px-1.5 rounded-full ml-1 text-[10px]">34</span>
        </button>
        <button className="flex items-center gap-1 bg-[#21262d] border border-[rgba(240,246,252,0.1)] px-3 py-1 rounded hover:bg-[#30363d] transition-colors">
            <span>★</span> Star <span className="bg-[rgba(110,118,129,0.4)] px-1.5 rounded-full ml-1 text-[10px]">1.2k</span>
        </button>
      </div>
    </div>
    
    {/* Navigation Tabs */}
    <div className="flex gap-1 px-4 pt-4 overflow-x-auto bg-[#0d1117]">
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-[#fd8c73] font-semibold text-[#c9d1d9] cursor-pointer">
        {/* FIX: Replaced incorrect usage of 'CodeBlock' component with the 'Code' icon. */}
        <Code size={14} className="inline mr-1"/> Code
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-[#8b949e] text-[#c9d1d9] cursor-pointer whitespace-nowrap">
        <span>⊙</span> Issues
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-[#8b949e] text-[#c9d1d9] cursor-pointer whitespace-nowrap">
        <GitBranch size={14}/> Pull requests
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-[#8b949e] text-[#c9d1d9] cursor-pointer whitespace-nowrap">
        <span>▶</span> Actions
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-transparent hover:border-[#8b949e] text-[#c9d1d9] cursor-pointer whitespace-nowrap">
        <span>▦</span> Projects
      </div>
    </div>
  </div>
);

export const GITHUB_PART1_TOPICS: Topic[] = [
  // 1. Introduction
  {
    id: 'github-intro',
    title: 'Git vs GitHub',
    parent: '1. Foundations',
    content: (
      <>
        <p className="text-lg text-slate-700 mb-4">
          Many beginners confuse Git and GitHub. It's crucial to understand the difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl">
                <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                    <GitBranch className="text-orange-600"/> Git
                </h3>
                <p className="text-sm text-orange-800 mb-2 font-bold">The Tool (Local)</p>
                <p className="text-sm text-slate-700">
                    A version control system installed on your computer. It tracks changes in your files. You use it via command line (CLI) or GUI. It works even without internet.
                </p>
            </div>
            <div className="p-6 bg-slate-100 border border-slate-300 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Github className="text-slate-900"/> GitHub
                </h3>
                <p className="text-sm text-slate-700 mb-2 font-bold">The Service (Cloud)</p>
                <p className="text-sm text-slate-700">
                    A website that hosts your Git repositories. It adds social coding features (collaboration, bug tracking, code review) on top of Git. It requires internet.
                </p>
            </div>
        </div>
        <p className="text-slate-600 italic text-center">"Git is to GitHub what MP3 is to Spotify."</p>
      </>
    )
  },
  {
    id: 'github-account',
    title: 'Account & Profile',
    parent: '1. Foundations',
    content: (
      <>
        <p className="mb-4">
            Your GitHub profile is your <strong>Developer Portfolio</strong>. Recruiters look at it to see your activity graph, pinned repositories, and contribution history.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Profile README</h3>
        <p className="mb-4">
            You can add a special README to your profile page to introduce yourself.
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li>Create a new repository.</li>
            <li>Name it <strong>exactly the same as your username</strong> (e.g., `codealpha/codealpha`).</li>
            <li>Make it <strong>Public</strong>.</li>
            <li>Initialize with a <strong>README</strong>.</li>
        </ol>
        <p className="mb-4">GitHub will display the contents of this README on your main profile page.</p>
      </>
    )
  },
  {
    id: 'github-repo-create',
    title: 'Creating a Repository',
    parent: '1. Foundations',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <strong>Repository (Repo)</strong> is like a project folder. It contains all your project files and the history of every change made to those files.
        </p>
        <RepoHeaderMockup />
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Steps to Create</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li>Click the <Plus size={14} className="inline bg-slate-200 rounded p-0.5"/> icon in the top-right corner.</li>
            <li>Select <strong>New repository</strong>.</li>
            <li><strong>Name:</strong> Short, memorable, hyphen-separated (e.g., `react-todo-app`).</li>
            <li><strong>Visibility:</strong> 
                <ul className="list-disc pl-5 mt-1 text-sm">
                    <li><Globe size={12} className="inline"/> <strong>Public:</strong> Anyone can see it. Open source.</li>
                    <li><Lock size={12} className="inline"/> <strong>Private:</strong> Only you and invited collaborators can see it.</li>
                </ul>
            </li>
            <li><strong>Initialize:</strong>
                <ul className="list-disc pl-5 mt-1 text-sm">
                    <li>Add a README file (Documentation).</li>
                    <li>Add .gitignore (What files to ignore, like `node_modules`).</li>
                    <li>Choose a license (MIT, Apache, etc.).</li>
                </ul>
            </li>
        </ol>
      </>
    )
  }
];