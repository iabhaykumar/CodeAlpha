
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';
import { Terminal, Cloud, Sparkles } from 'lucide-react';

export const GITHUB_PART5_TOPICS: Topic[] = [
  // 5. Advanced & Modern
  {
    id: 'github-cli',
    title: 'GitHub CLI (gh)',
    parent: '5. Advanced & Modern',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Take GitHub to your terminal. `gh` is GitHub's official command line tool.
        </p>
        <CodeBlock language="bash" code={`# Authenticate
gh auth login

# Clone a repo
gh repo clone codealpha/project

# View issues
gh issue list

# Create a Pull Request (Interactive)
gh pr create

# Checkout a Pull Request locally to test it
gh pr checkout 42`} />
      </>
    )
  },
  {
    id: 'github-codespaces',
    title: 'Codespaces',
    parent: '5. Advanced & Modern',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Codespaces</strong> is a complete development environment in the cloud. It spins up a Docker container with VS Code, your extensions, and dependencies pre-installed.
        </p>
        <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-200 my-4">
            <Cloud size={32} className="text-blue-500 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-slate-900">Why use it?</h4>
                <ul className="text-sm text-slate-700 list-disc pl-4 mt-2">
                    <li>Code from any device (iPad, Chromebook).</li>
                    <li>No local setup (great for contributors).</li>
                    <li>Consistent environment for the whole team.</li>
                </ul>
            </div>
        </div>
        <p className="text-slate-700">
            You configure it using a `.devcontainer/devcontainer.json` file.
        </p>
      </>
    )
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot',
    parent: '5. Advanced & Modern',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Your AI pair programmer. Copilot uses OpenAI's Codex to suggest code and entire functions in real-time.
        </p>
        <div className="bg-black text-slate-300 p-4 rounded-lg font-mono text-sm border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-50"><Sparkles size={20}/></div>
            <p><span className="text-purple-400">function</span> <span className="text-yellow-200">calculateDaysBetween</span>(date1, date2) {'{'}</p>
            <p className="text-slate-500 italic ml-4">// Copilot Suggestion:</p>
            <p className="text-slate-400 ml-4">const oneDay = 24 * 60 * 60 * 1000;</p>
            <p className="text-slate-400 ml-4">const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));</p>
            <p className="text-slate-400 ml-4">return diffDays;</p>
            <p>{'}'}</p>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Tips</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Write meaningful comments:</strong> Copilot reads your comments to understand intent.</li>
            <li><strong>Context matters:</strong> Keep related files open; Copilot uses context from other tabs.</li>
            <li><strong>Copilot Chat:</strong> You can now chat with Copilot to ask "Explain this code" or "Generate unit tests".</li>
        </ul>
      </>
    )
  }
];
