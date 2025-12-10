

import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';
import { GitMerge, Clock, Zap } from 'lucide-react';

// FIX: Made children prop optional to resolve TypeScript errors.
const Kbd = ({ children }: { children?: React.ReactNode }) => (
    <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] sm:text-xs font-sans text-slate-700 shadow-sm mx-0.5 min-w-[20px] inline-block text-center font-semibold">
        {children}
    </kbd>
);

export const VSCODE_PART5_TOPICS: Topic[] = [
  // 5. Version Control & Productivity
  {
    id: 'vscode-git-advanced',
    title: 'Advanced Git Features',
    parent: '5. Advanced Git & Productivity',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Going beyond simple commits.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Merge Conflict Editor</h3>
        <p className="mb-4">When a merge conflict occurs, VS Code provides a 3-way editor (Current, Incoming, and Result). It's much safer than editing <code>&lt;&lt;&lt;&lt; HEAD</code> markers manually.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Timeline View</h3>
        <p className="mb-4">At the bottom of the Explorer pane, expand "Timeline". It shows a history of file saves AND Git commits for the currently active file. Great for checking "what did this file look like 2 hours ago?".</p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Staging Ranges</h3>
        <p className="mb-4">You don't have to stage an entire file. Select specific lines, right-click, and choose <strong>Stage Selected Ranges</strong>. This lets you make atomic commits from a file with messy changes.</p>
      </>
    )
  },
  {
    id: 'vscode-git-branching',
    title: 'Git Branching Strategies (Gitflow)',
    parent: '5. Advanced Git & Productivity',
    content: (
        <>
            <p className="mb-4 text-lg text-slate-700">
                A consistent branching strategy is essential for team collaboration, preventing conflicts, and maintaining a stable codebase. VS Code's Git tools make it easy to follow popular models like Gitflow.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Gitflow Model</h3>
            <p className="mb-4">
                Gitflow is a strict branching model designed around project releases. It defines specific roles for different branches and how they should interact.
            </p>
            <pre className="bg-slate-900 text-white p-4 rounded-lg text-xs font-mono my-6 overflow-x-auto">
{`# Main Branches
main    ------------------*-----------*------ (v1.0, v1.1)
                         /           /
develop ---*----*-------*-----*-----*--------
            \\  /         \\   /
# Supporting Branches
feature      \\/--feat-A--\\ /
hotfix                    \\---hotfix-1.0.1
release                       \\----release-1.1`}
            </pre>
            <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
                <li><strong>`main` (or `master`):</strong> This branch contains production-ready code. Each commit on `main` is a new release and should be tagged with a version number (e.g., `v1.0.1`).</li>
                <li><strong>`develop`:</strong> This is the main development branch where all completed features are merged. It represents the "next release" in development.</li>
                <li><strong>`feature/*`:</strong> Branched from `develop`. Each new feature is built in its own branch (e.g., `feature/user-authentication`). When complete, it's merged back into `develop`.</li>
                <li><strong>`release/*`:</strong> Branched from `develop` when it's time to prepare a release. Only bug fixes and documentation are added here. Once ready, it's merged into `main` (and tagged) and also back into `develop`.</li>
                <li><strong>`hotfix/*`:</strong> Branched from `main` to fix a critical bug in production. Once fixed, it's merged back into both `main` and `develop`.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Branch Naming Conventions</h3>
            <p className="mb-4">
                Clear naming makes it easy to understand a branch's purpose at a glance. A common convention is `type/description`.
            </p>
            <CodeBlock
                language="bash"
                code={`# Examples:
feature/add-dark-mode
fix/login-button-not-working
chore/update-dependencies
docs/add-installation-guide
refactor/simplify-api-service`}
            />
            <p className="mt-4 text-slate-700">
                VS Code's Source Control panel (<Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>G</Kbd>) allows you to easily create, switch, and manage these branches. Use the "Create Branch" command in the Command Palette to get started.
            </p>
        </>
    )
  },
  {
    id: 'vscode-snippets-custom',
    title: 'Custom Snippets',
    parent: '5. Advanced Git & Productivity',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Stop typing boilerplate. Create your own snippets.
        </p>
        <p className="mb-4">Go to <strong>File &gt; Preferences &gt; Configure User Snippets</strong>. Select a language (e.g., JavaScript).</p>
        <CodeBlock language="json" code={`"React Functional Component": {
    "prefix": "rfc",
    "body": [
        "import React from 'react';",
        "",
        "const \${1:ComponentName} = () => {",
        "    return (",
        "        <div>",
        "            $0",
        "        </div>",
        "    );",
        "};",
        "",
        "export default \${1:ComponentName};"
    ],
    "description": "Create a React component"
}`} />
        <p className="text-slate-700 mt-2">
            <strong>$1:</strong> The first cursor position (type the name once, it updates both places).<br/>
            <strong>$0:</strong> Final cursor position after pressing Tab.
        </p>
      </>
    )
  },
  {
    id: 'vscode-zen-mode',
    title: 'Zen Mode & Centered Layout',
    parent: '5. Advanced Git & Productivity',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          For deep focus work.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Zen Mode (<Kbd>Ctrl</Kbd>+<Kbd>K</Kbd> <Kbd>Z</Kbd>):</strong> Full screen, no bars, just code. Press Esc twice to exit.</li>
            <li><strong>Centered Layout:</strong> Centers the code editor with margins on the side, making it easier to read on wide monitors.</li>
        </ul>
      </>
    )
  },
  {
    id: 'vscode-keymaps',
    title: 'Keymaps (Vim/Sublime)',
    parent: '5. Advanced Git & Productivity',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Coming from another editor? Don't relearn muscle memory.
        </p>
        <p className="mb-4">Install <strong>Keymap Extensions</strong>. VS Code has official keymaps for:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Vim:</strong> Brings full modal editing (Normal/Insert/Visual modes) to VS Code.</li>
            <li><strong>Sublime Text:</strong> Port of Sublime shortcuts.</li>
            <li><strong>IntelliJ / Eclipse:</strong> For Java developers moving to VS Code.</li>
        </ul>
      </>
    )
  }
];