
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';
import { Bug, Play, Terminal } from 'lucide-react';

export const VSCODE_PART4_TOPICS: Topic[] = [
  // 4. Debugging & Automation
  {
    id: 'vscode-debug-basics',
    title: 'Debugging Basics',
    parent: '4. Debugging & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Stop using `console.log` or `print` for everything. VS Code has a world-class debugger built-in.
        </p>
        <div className="flex gap-4 mb-6 justify-center bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col items-center text-center w-20">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm mb-2"></div>
                <span className="text-xs font-bold">Breakpoint</span>
                <span className="text-[10px] text-slate-500">Click gutter to pause here</span>
            </div>
            <div className="flex flex-col items-center text-center w-20">
                <div className="bg-slate-200 p-1 rounded mb-2"><Play size={16} className="fill-slate-600 text-slate-600"/></div>
                <span className="text-xs font-bold">Continue (F5)</span>
                <span className="text-[10px] text-slate-500">Resume execution</span>
            </div>
            <div className="flex flex-col items-center text-center w-20">
                <div className="bg-slate-200 p-1 rounded mb-2 text-slate-700 font-bold leading-none">↷</div>
                <span className="text-xs font-bold">Step Over (F10)</span>
                <span className="text-[10px] text-slate-500">Next line</span>
            </div>
            <div className="flex flex-col items-center text-center w-20">
                <div className="bg-slate-200 p-1 rounded mb-2 text-slate-700 font-bold leading-none">↓</div>
                <span className="text-xs font-bold">Step Into (F11)</span>
                <span className="text-[10px] text-slate-500">Go inside function</span>
            </div>
        </div>
        <p className="mb-4">
            <strong>Variables View:</strong> See the current value of all local/global variables while paused.
            <br/>
            <strong>Watch View:</strong> Add specific variables or expressions (e.g., `myArray.length`) to monitor them closely.
        </p>
      </>
    )
  },
  {
    id: 'vscode-launch-json',
    title: 'Advanced Config (launch.json)',
    parent: '4. Debugging & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          For complex apps, the default "Run" button isn't enough. You need a `launch.json` file in your `.vscode` folder.
        </p>
        <CodeBlock language="json" code={`// .vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "\${workspaceFolder}/app.js",
            "env": {
                "NODE_ENV": "development",
                "API_KEY": "secret"
            },
            "skipFiles": ["<node_internals>/**"]
        },
        {
            "type": "chrome",
            "request": "attach",
            "name": "Attach to Chrome",
            "port": 9222
        }
    ]
}`} />
        <p className="mt-4 mb-2"><strong>Launch vs Attach:</strong></p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Launch:</strong> VS Code starts the program for you.</li>
            <li><strong>Attach:</strong> The program is already running (e.g., a server), and VS Code connects to it to debug.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-adv-breakpoints',
    title: 'Conditional Breakpoints & Logpoints',
    parent: '4. Debugging & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Right-click a red breakpoint dot to see advanced options.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Conditional Breakpoint:</strong> "Expression": `i == 500`. The debugger will ONLY pause when the loop variable hits 500. Saves you from clicking "Continue" 499 times.</li>
            <li><strong>Hit Count:</strong> Pause only after the code has been hit 10 times.</li>
            <li><strong>Logpoints (Diamond shape):</strong> Instead of pausing, it logs a message to the console. This is a cleaner alternative to writing `console.log()` in your code and forgetting to remove it.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-tasks',
    title: 'Tasks & Automation',
    parent: '4. Debugging & Automation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Tasks allow you to run external tools (compilers, build scripts, tests) directly from VS Code without opening a separate terminal.
        </p>
        <p className="mb-4">Press <kbd className="bg-slate-100 border px-1 rounded">Ctrl+Shift+B</kbd> to run the default Build Task.</p>
        
        <CodeBlock language="json" code={`// .vscode/tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build Project",
            "type": "shell",
            "command": "npm run build",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": []
        }
    ]
}`} />
        <p className="mt-4"><strong>NPM Scripts:</strong> If you open a folder with a `package.json`, VS Code automatically detects scripts (`start`, `test`, `build`) and lists them in the "NPM Scripts" view in the Explorer sidebar.</p>
      </>
    )
  }
];
