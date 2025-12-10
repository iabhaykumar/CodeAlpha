
import React from 'react';
import { Topic } from './types';
import { GitCommit, GitPullRequest, Clock, FileCode } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';

export const GITHUB_PART2_TOPICS: Topic[] = [
  // 2. Core Workflow
  {
    id: 'github-clone-push',
    title: 'Clone, Commit, Push',
    parent: '2. Core Workflow',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The fundamental cycle of working with GitHub involves moving code between your local machine and the remote server.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">1. Clone (Download)</h3>
        <p className="mb-2">Get a copy of the repo from GitHub to your computer.</p>
        <CodeBlock language="bash" code={`# HTTPS URL
git clone https://github.com/codealpha/awesome-project.git

# Navigate into the folder
cd awesome-project`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">2. Stage & Commit (Save)</h3>
        <p className="mb-2">Make changes, then save a snapshot.</p>
        <CodeBlock language="bash" code={`# Add file to staging area
git add index.html

# Save snapshot with a message
git commit -m "Added landing page header"`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">3. Push (Upload)</h3>
        <p className="mb-2">Send your local commits to GitHub.</p>
        <CodeBlock language="bash" code={`git push origin main`} />
      </>
    )
  },
  {
    id: 'github-web-editor',
    title: 'The Web Editor (github.dev)',
    parent: '2. Core Workflow',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Did you know GitHub has a full VS Code environment built-in?
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h4 className="font-bold text-blue-900 mb-1">The Magic Shortcut</h4>
            <p className="text-blue-800 text-sm">
                Open any repository on GitHub and press the <kbd className="bg-white border border-blue-200 rounded px-2 font-mono">.</kbd> (dot) key on your keyboard.
            </p>
        </div>
        <p className="mb-4">
            This opens <strong>github.dev</strong>, a lightweight version of VS Code running entirely in your browser. You can edit files, navigate code, and even commit changes without cloning the repo locally.
        </p>
      </>
    )
  },
  {
    id: 'github-history-blame',
    title: 'History & Blame',
    parent: '2. Core Workflow',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          GitHub provides powerful UI tools to inspect the past.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Commit History</h3>
        <p className="mb-4">Click the <span className="bg-slate-100 px-2 py-1 rounded text-xs font-mono"><Clock size={12} className="inline"/> 23 Commits</span> button on the repo page. It shows a list of every change ever made, who made it, and when.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Git Blame</h3>
        <p className="mb-4">Want to know who wrote a specific line of code? Open a file on GitHub and click the <strong>Blame</strong> button.</p>
        <div className="bg-slate-50 border border-slate-200 rounded p-4 font-mono text-xs overflow-x-auto">
            <div className="flex gap-4 border-b border-slate-200 pb-2 mb-2">
                <div className="w-24 text-slate-500 border-r border-slate-300 pr-2">2 days ago</div>
                <div className="w-20 font-bold text-slate-700">@alex</div>
                <div className="text-green-700">+ const api_key = process.env.KEY;</div>
            </div>
            <div className="flex gap-4">
                <div className="w-24 text-slate-500 border-r border-slate-300 pr-2">3 years ago</div>
                <div className="w-20 font-bold text-slate-700">@sarah</div>
                <div className="text-slate-600">  function init() {"{"}</div>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'github-branching',
    title: 'Branching Strategy',
    parent: '2. Core Workflow',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Never push directly to the <code>main</code> branch.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Main/Master:</strong> Production-ready code. Should always be stable.</li>
            <li><strong>Feature Branches:</strong> Create a new branch for every task (e.g., <code>feature/login-page</code>, <code>fix/header-bug</code>).</li>
        </ul>
        <CodeBlock language="bash" code={`# Create and switch to a new branch
git checkout -b feature/dark-mode

# Work work work...

# Push the branch to GitHub
git push origin feature/dark-mode`} />
        <p className="mt-4">Once pushed, GitHub will automatically suggest creating a <strong>Pull Request</strong>.</p>
      </>
    )
  }
];
