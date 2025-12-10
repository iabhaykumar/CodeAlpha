
import React from 'react';
import { Topic } from './types';
import { Settings, GitBranch, Play, Bug, Globe, Database, Server } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';

const RemoteDevMockup = () => (
    <div className="flex gap-4 my-6 justify-center">
        <div className="flex flex-col items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg w-32 text-center">
            <div className="bg-green-100 p-2 rounded text-green-700"><Server size={24}/></div>
            <span className="font-bold text-xs text-green-900">Remote - SSH</span>
            <span className="text-[10px] text-green-700">Edit code on a Linux server from your laptop</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg w-32 text-center">
            <div className="bg-blue-100 p-2 rounded text-blue-700"><Globe size={24}/></div>
            <span className="font-bold text-xs text-blue-900">Dev Containers</span>
            <span className="text-[10px] text-blue-700">Code inside a Docker container</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 bg-orange-50 border border-orange-200 rounded-lg w-32 text-center">
            <div className="bg-orange-100 p-2 rounded text-orange-700"><Settings size={24}/></div>
            <span className="font-bold text-xs text-orange-900">WSL</span>
            <span className="text-[10px] text-orange-700">Run Linux tools on Windows</span>
        </div>
    </div>
);

export const VSCODE_PART3_TOPICS: Topic[] = [
  // 3. Extensions & Ecosystem
  {
    id: 'vscode-extensions-guide',
    title: 'Essential Extensions',
    parent: '3. Extensions & Ecosystem',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          VS Code is basically a shell; Extensions give it super powers. Here are absolute must-haves.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Prettier:</strong> Opinionated code formatter. Enforces consistent style.</li>
            <li><strong>ESLint:</strong> Finds bugs and bad practices in JS/TS.</li>
            <li><strong>GitLens:</strong> Shows who wrote each line of code (blame) and extensive Git history.</li>
            <li><strong>Live Server:</strong> Launch a local server with live reload for static HTML pages.</li>
            <li><strong>Material Icon Theme:</strong> Makes your file explorer look beautiful with distinct icons.</li>
            <li><strong>Error Lens:</strong> Shows error messages inline (next to the code) rather than just a red squiggly line.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-remote-dev',
    title: 'Remote Development',
    parent: '3. Extensions & Ecosystem',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          VS Code allows you to code on a remote machine as if it were local. This is a game-changer.
        </p>
        <RemoteDevMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Remote - SSH</h3>
        <p className="mb-4">Connect to a cloud server (AWS, DigitalOcean). VS Code runs a small server component there, but the UI runs on your laptop. You get full IntelliSense and Debugging on the remote files!</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">WSL (Windows Subsystem for Linux)</h3>
        <p className="mb-4">If you are on Windows, install the "Remote - WSL" extension. This lets you use a full Linux terminal and toolchain (Ubuntu) while keeping the VS Code GUI on Windows.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Dev Containers</h3>
        <p className="mb-4">Define your development environment in a `Dockerfile`. VS Code spins up a Docker container and connects to it. Everyone on your team gets the <strong>exact same versions</strong> of Node/Python/Go instantly.</p>
      </>
    )
  },
  {
    id: 'vscode-data-science',
    title: 'Python & Data Science',
    parent: '3. Extensions & Ecosystem',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          VS Code is now the most popular editor for Python, beating PyCharm in many surveys.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Jupyter Notebooks</h3>
        <p className="mb-4">VS Code natively supports `.ipynb` files. You don't need to run `jupyter notebook` in the terminal. Just open the file, select a kernel, and run cells. It supports variable explorers, dataframes, and plots.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Pylance</h3>
        <p className="mb-4">The ultimate Python language server. It provides super-fast static analysis, auto-imports, type checking, and code navigation.</p>
      </>
    )
  },
  {
    id: 'vscode-web-stack',
    title: 'Web Development Setup',
    parent: '3. Extensions & Ecosystem',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Specific tips for Frontend/Backend devs.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Emmet:</strong> Built-in. Type `div.container>ul>li*5` and hit Tab.</li>
            <li><strong>Tailwind CSS IntelliSense:</strong> Autocomplete for class names, hover previews of CSS, and linting.</li>
            <li><strong>Auto Rename Tag:</strong> Rename the opening HTML tag, and the closing tag updates automatically.</li>
            <li><strong>REST Client:</strong> Send HTTP requests directly from a `.http` file in VS Code. Alternative to Postman.</li>
        </ul>
        <CodeBlock language="http" code={`# test.http
POST https://api.example.com/login
Content-Type: application/json

{
    "username": "codealpha",
    "password": "password123"
}`} />
      </>
    )
  }
];
