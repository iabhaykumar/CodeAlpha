
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

const MultiCursorMockup = () => (
    <div className="bg-[#1e1e1e] p-4 rounded-lg border border-slate-700 font-mono text-sm text-[#d4d4d4] my-6">
        <p className="mb-2 text-[#6a9955]">// Multi-cursor in action (Ctrl+D or Alt+Click)</p>
        <div className="leading-6">
            <p><span className="text-[#569cd6]">const</span> <span className="bg-[#264f78] border border-[#007acc]">user</span>Name = <span className="text-[#ce9178]">"Alex"</span>;</p>
            <p><span className="text-[#569cd6]">const</span> <span className="bg-[#264f78] border border-[#007acc]">user</span>Age = 25;</p>
            <p><span className="text-[#569cd6]">const</span> <span className="bg-[#264f78] border border-[#007acc]">user</span>Role = <span className="text-[#ce9178]">"Admin"</span>;</p>
            <p className="mt-2 text-[#808080]">// Editing 'user' in 3 places simultaneously!</p>
        </div>
    </div>
);

export const VSCODE_PART2_TOPICS: Topic[] = [
  // 2. Coding & Navigation
  {
    id: 'vscode-intellisense',
    title: 'IntelliSense & Autocomplete',
    parent: '2. Coding & Navigation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Suggestions:</strong> Start typing, and VS Code suggests methods, variables, and keywords. Press <kbd className="bg-slate-100 border px-1 rounded text-xs">Tab</kbd> or <kbd className="bg-slate-100 border px-1 rounded text-xs">Enter</kbd> to accept.</li>
            <li><strong>Trigger Manually:</strong> Press <kbd className="bg-slate-100 border px-1 rounded text-xs">Ctrl + Space</kbd> to force the suggestion list to appear.</li>
            <li><strong>Parameter Info:</strong> While typing a function call, press <kbd className="bg-slate-100 border px-1 rounded text-xs">Ctrl + Shift + Space</kbd> to see the arguments list again.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-code-nav',
    title: 'Advanced Code Navigation',
    parent: '2. Coding & Navigation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Never get lost in a large codebase again.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Go To Definition (<kbd className="bg-slate-100 border px-1 rounded">F12</kbd>)</h3>
        <p className="mb-4">Jumps straight to the file and line where a function/variable was created. Hold <kbd className="bg-slate-100 border px-1 rounded">Ctrl</kbd> and click the symbol to do this with the mouse.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Peek Definition (<kbd className="bg-slate-100 border px-1 rounded">Alt+F12</kbd>)</h3>
        <p className="mb-4">Opens a small inline window showing the definition <em>without</em> navigating away from your current file. Perfect for quickly checking a function's logic.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Find All References (<kbd className="bg-slate-100 border px-1 rounded">Shift+F12</kbd>)</h3>
        <p className="mb-4">Shows every place in your project where a variable or function is used. Essential before refactoring or deleting code.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Go to Symbol (<kbd className="bg-slate-100 border px-1 rounded">Ctrl+Shift+O</kbd>)</h3>
        <p className="mb-4">Jump directly to a function or class within the current file by name.</p>
      </>
    )
  },
  {
    id: 'vscode-multicursor',
    title: 'Multi-Cursor Magic',
    parent: '2. Coding & Navigation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Multi-cursor editing lets you change multiple occurrences of text at once. It's a massive time saver.
        </p>
        <MultiCursorMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How to use</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Alt + Click:</strong> Insert a cursor wherever you click.</li>
            <li><strong>Ctrl + Alt + Up/Down:</strong> Insert cursors above or below the current line (Vertical editing).</li>
            <li><strong>Ctrl + D:</strong> Selects the next occurrence of the current selection. Press repeatedly to select more.</li>
            <li><strong>Ctrl + Shift + L:</strong> Select ALL occurrences of the current selection in the file instantly.</li>
            <li><strong>Shift + Alt + I:</strong> Puts a cursor at the end of every selected line.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-refactoring',
    title: 'Refactoring Tools',
    parent: '2. Coding & Navigation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          VS Code has built-in refactoring capabilities, especially strong for TS/JS, Python, and C#.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Rename Symbol (<kbd className="bg-slate-100 border px-1 rounded">F2</kbd>):</strong> Renames a variable/function across ALL files in the project intelligently. Do not use Find/Replace for code renaming!</li>
            <li><strong>Extract Method/Variable:</strong> Select a block of code, click the Lightbulb icon (💡) or press <kbd className="bg-slate-100 border px-1 rounded">Ctrl + .</kbd>, and choose "Extract to function". It automatically creates the function and replaces the code with a call.</li>
            <li><strong>Move to New File:</strong> Quickly move a class or function to its own file.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-visual-aids',
    title: 'Visual Aids (Sticky Scroll)',
    parent: '2. Coding & Navigation',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Features that help you understand code structure visually.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Sticky Scroll</h3>
        <p className="mb-4">This feature sticks the class/function signature to the top of the editor as you scroll down its body. You never forget "which function am I inside?". Enable via `View > Appearance > Sticky Scroll`.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Breadcrumbs</h3>
        <p className="mb-4">The bar at the top of the editor (`src > components > Button.tsx > ButtonClass > render`). It shows your path and symbol hierarchy. You can click elements to navigate.</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Minimap</h3>
        <p className="mb-4">A high-level overview of your code on the right side. Great for spotting patterns or jumping to sections in long files.</p>
      </>
    )
  }
];
