
import React from 'react';
import { Topic } from './types';
import { PlayCircle, Globe, Shield } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';

export const GITHUB_PART4_TOPICS: Topic[] = [
  // 4. Automation & Hosting
  {
    id: 'github-actions-intro',
    title: 'GitHub Actions (CI/CD)',
    parent: '4. Automation & Hosting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>GitHub Actions</strong> is a platform to automate your developer workflows. You can build, test, and deploy your code right from GitHub.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Workflow:</strong> A configurable automated process defined by a YAML file.</li>
            <li><strong>Event:</strong> What triggers the workflow (e.g., `push`, `pull_request`, `schedule`).</li>
            <li><strong>Job:</strong> A set of steps that execute on the same runner.</li>
            <li><strong>Action:</strong> A custom application that performs a complex task (e.g., "Checkout Code", "Setup Node.js").</li>
        </ul>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Example Workflow</h3>
        <p className="mb-2">Create `.github/workflows/test.yml`:</p>
        <CodeBlock language="yaml" code={`name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - run: npm ci
    - run: npm test`} />
      </>
    )
  },
  {
    id: 'github-pages',
    title: 'GitHub Pages',
    parent: '4. Automation & Hosting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Host static websites directly from your repository for <strong>free</strong>. Great for portfolios, documentation, or project demos.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How to Setup</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-slate-700">
            <li>Go to Repo <strong>Settings</strong> &gt; <strong>Pages</strong>.</li>
            <li>Under "Source", select `Deploy from a branch`.</li>
            <li>Select your branch (usually `main`) and folder (`/root` or `/docs`).</li>
            <li>Click <strong>Save</strong>.</li>
        </ol>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center gap-3">
            <Globe className="text-green-600" size={24} />
            <div>
                <p className="text-sm font-bold text-green-900">Your site is live!</p>
                <p className="text-xs text-green-800">https://your-username.github.io/repo-name</p>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'github-security',
    title: 'Security Features',
    parent: '4. Automation & Hosting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          GitHub helps you keep your code secure.
        </p>
        <ul className="list-disc pl-5 space-y-4 mb-4 text-slate-700">
            <li>
                <strong>Dependabot:</strong> Automatically scans your `package.json` or `requirements.txt` for outdated or insecure dependencies. It creates Pull Requests to update them automatically.
            </li>
            <li>
                <strong>Secret Scanning:</strong> Detects if you accidentally pushed an API Key or Token to a public repo and alerts you (or blocks the push).
            </li>
            <li>
                <strong>Encrypted Secrets:</strong> Never hardcode keys in your code. Store them in <strong>Settings &gt; Secrets and variables &gt; Actions</strong>. Use them in workflows as `${'{'}secrets.API_KEY{'}'}`.
            </li>
        </ul>
      </>
    )
  }
];
