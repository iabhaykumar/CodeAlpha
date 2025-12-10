
import React from 'react';
import { Topic } from './types';
import { GitPullRequest, MessageSquare, CheckCircle2, XCircle, AlertCircle, LayoutList } from 'lucide-react';

// UI Helper: Pull Request Mockup
const PullRequestUI = () => (
  <div className="bg-white border border-slate-300 rounded-lg overflow-hidden font-sans text-sm mb-6 shadow-sm">
    <div className="p-4 border-b border-slate-200">
        <div className="flex items-start gap-2 mb-2">
            <h3 className="text-xl font-normal text-slate-900">Add Dark Mode support</h3>
            <span className="text-slate-500 text-xl">#42</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full flex items-center gap-1 font-bold">
                <GitPullRequest size={14}/> Open
            </span>
            <span className="text-slate-600">
                <strong>alex-dev</strong> wants to merge 3 commits into <code className="bg-slate-100 px-1 rounded">main</code> from <code className="bg-slate-100 px-1 rounded">feature/dark-mode</code>
            </span>
        </div>
    </div>
    
    <div className="p-4 bg-slate-50">
        {/* Status Checks */}
        <div className="border border-slate-300 rounded-md bg-white mb-4">
            <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                <span className="font-bold text-slate-700 text-xs">1 check pending</span>
                <span className="text-xs text-blue-600 cursor-pointer hover:underline">Details</span>
            </div>
            <div className="p-3 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin"></div>
                <div className="flex-1">
                    <div className="font-bold text-xs text-slate-800">build (CI)</div>
                    <div className="text-[10px] text-slate-500">GitHub Actions — In progress...</div>
                </div>
            </div>
        </div>

        {/* Conversation */}
        <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-blue-600 text-xs">JD</div>
            <div className="flex-1 border border-blue-200 rounded-md bg-white relative">
                <div className="absolute top-3 -left-1.5 w-3 h-3 bg-white border-l border-t border-blue-200 transform -rotate-45"></div>
                <div className="bg-blue-50/50 p-2 border-b border-blue-100 rounded-t-md text-xs text-slate-500 flex justify-between">
                    <span><strong>Jane Doe</strong> commented yesterday</span>
                    <span className="bg-white border px-1 rounded text-[10px]">Owner</span>
                </div>
                <div className="p-3 text-slate-800">
                    Looks great! Can you add a toggle button in the settings menu?
                </div>
            </div>
        </div>
    </div>
    
    {/* Merge Button */}
    <div className="p-4 border-t border-slate-200 bg-white">
        <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-xs flex items-center gap-2">
                Merge pull request
                <span className="border-l border-green-500 pl-2">▼</span>
            </button>
            <span className="text-xs text-slate-500">Checking for merge conflicts...</span>
        </div>
    </div>
  </div>
);

export const GITHUB_PART3_TOPICS: Topic[] = [
  // 3. Collaboration
  {
    id: 'github-pr-basics',
    title: 'Pull Requests (PRs)',
    parent: '3. Collaboration',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          A <strong>Pull Request</strong> is a proposal to merge changes from one branch into another. It is the heart of collaboration on GitHub.
        </p>
        <PullRequestUI />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Lifecycle of a PR</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li><strong>Open PR:</strong> Compare your `feature` branch with `main`. Write a description explaining <em>what</em> changed and <em>why</em>.</li>
            <li><strong>Review:</strong> Teammates review the code, leave comments, and request changes.</li>
            <li><strong>Updates:</strong> You push new commits to the same branch to fix issues. The PR updates automatically.</li>
            <li><strong>Merge:</strong> Once approved and checks pass, the code is merged into `main`.</li>
        </ol>
      </>
    )
  },
  {
    id: 'github-code-review',
    title: 'Code Review Features',
    parent: '3. Collaboration',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          GitHub has advanced tools for reviewing code in the "Files changed" tab of a PR.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Line Comments:</strong> Click the <span className="bg-blue-600 text-white px-1 rounded text-xs">+</span> sign next to any line of code to leave a specific comment.</li>
            <li><strong>Suggestions:</strong> You can actually suggest a code fix inside a comment. The author can commit your suggestion with one click!
                <br/><code className="text-xs bg-slate-100 p-1 block mt-1">```suggestion
const x = 10;
```</code>
            </li>
            <li><strong>Review Status:</strong>
                <ul className="list-disc pl-5 mt-1 text-sm">
                    <li className="text-green-700"><strong>Approve:</strong> Code is good to go.</li>
                    <li className="text-yellow-700"><strong>Comment:</strong> General feedback, no approval/rejection.</li>
                    <li className="text-red-700"><strong>Request Changes:</strong> Blocks merging until issues are fixed.</li>
                </ul>
            </li>
        </ul>
      </>
    )
  },
  {
    id: 'github-issues',
    title: 'Issues & Milestones',
    parent: '3. Collaboration',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Issues are for tracking bugs, enhancements, or tasks.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Anatomy of an Issue</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Labels:</strong> Categorize issues (e.g., `bug`, `documentation`, `good first issue`).</li>
            <li><strong>Assignees:</strong> Who is working on this?</li>
            <li><strong>Milestones:</strong> Group issues into a target (e.g., "Version 2.0 Release"). Shows a progress bar.</li>
        </ul>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <h4 className="font-bold text-green-900 mb-1">Closing via Commit</h4>
            <p className="text-green-800 text-sm">
                If you write <code>Fixes #42</code> in your commit message or PR description, GitHub will <strong>automatically close</strong> Issue #42 when that code is merged into the default branch.
            </p>
        </div>
      </>
    )
  },
  {
    id: 'github-projects',
    title: 'GitHub Projects (Kanban)',
    parent: '3. Collaboration',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Projects</strong> allows you to organize issues and PRs into a Kanban board (like Trello/Jira) or a Table view.
        </p>
        <div className="flex gap-4 overflow-x-auto pb-4 my-6">
            <div className="min-w-[200px] bg-slate-100 rounded-lg p-3">
                <div className="font-bold text-slate-600 mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-slate-400"></span> Todo
                    <span className="bg-slate-200 text-slate-600 px-2 rounded-full text-xs ml-auto">3</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 text-sm mb-2">Fix login crash</div>
                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 text-sm">Update docs</div>
            </div>
            <div className="min-w-[200px] bg-slate-100 rounded-lg p-3">
                <div className="font-bold text-blue-600 mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-blue-500 bg-blue-500"></span> In Progress
                    <span className="bg-slate-200 text-slate-600 px-2 rounded-full text-xs ml-auto">1</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 text-sm">Dark mode UI</div>
            </div>
            <div className="min-w-[200px] bg-slate-100 rounded-lg p-3">
                <div className="font-bold text-green-600 mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-green-500 bg-green-500"></span> Done
                    <span className="bg-slate-200 text-slate-600 px-2 rounded-full text-xs ml-auto">5</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 text-sm mb-2 opacity-60 line-through">Setup Repo</div>
            </div>
        </div>
        <p className="text-slate-700">You can automate this: "When a PR is opened, move card to 'In Progress'".</p>
      </>
    )
  }
];
