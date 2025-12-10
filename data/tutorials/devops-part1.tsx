import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const DEVOPS_PART1_TOPICS: Topic[] = [
  // 1. Fundamentals & Linux
  {
    id: 'devops-intro',
    title: 'What is DevOps?',
    parent: '1. Foundation & Linux',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          DevOps is not a tool; it's a culture and set of practices that brings Development (Dev) and Operations (Ops) teams together to shorten the systems development life cycle and provide continuous delivery with high software quality.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The CALMS Framework</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Culture:</strong> Shared responsibility, no blame game.</li>
            <li><strong>Automation:</strong> Automate repetitive tasks (Testing, Deployment, Infra).</li>
            <li><strong>Lean:</strong> Minimize waste, optimize flow (Value Stream Mapping).</li>
            <li><strong>Measurement:</strong> Measure everything (MTTR, MTTF, Deployment Frequency).</li>
            <li><strong>Sharing:</strong> Knowledge sharing, feedback loops.</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-linux-basics',
    title: 'Linux Essentials for DevOps',
    parent: '1. Foundation & Linux',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Linux is the OS of the cloud. A DevOps engineer must be comfortable with the CLI.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">File System & Permissions</h3>
        <CodeBlock language="bash" code={`# List files with details (permissions, owner, size)
ls -lart

# Change permissions (User, Group, Others)
# 4=Read, 2=Write, 1=Execute
chmod 755 script.sh  # rwxr-xr-x

# Change ownership
chown user:group file.txt`} />
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Process Management</h3>
        <CodeBlock language="bash" code={`# View running processes (snapshot)
ps aux

# Real-time process view (CPU/Mem usage)
top  # or htop

# Kill a process by ID
kill -9 <PID>`} />
      </>
    )
  },
  {
    id: 'devops-linux-networking',
    title: 'Linux Networking & Text Processing',
    parent: '1. Foundation & Linux',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Networking Commands</h3>
        <CodeBlock language="bash" code={`# Check connectivity
ping google.com

# Check open ports and services
netstat -tulpn

# Secure Shell - Connect to remote server
ssh user@192.168.1.5 -i private_key.pem

# Download files
wget https://example.com/file.zip
curl -O https://example.com/file.zip`} />

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Text Processing (The Holy Trinity)</h3>
        <p className="mb-4"><strong>grep</strong>, <strong>sed</strong>, and <strong>awk</strong> are essential for parsing logs.</p>
        <CodeBlock language="bash" code={`# Grep: Search for pattern
cat app.log | grep "ERROR"

# Sed: Stream Editor (Replace 'foo' with 'bar')
sed 's/foo/bar/g' file.txt

# Awk: Column extraction
# Print the 2nd column of a CSV
awk -F',' '{print $2}' data.csv`} />
      </>
    )
  },
  {
    id: 'devops-bash-scripting',
    title: 'Bash Scripting',
    parent: '1. Foundation & Linux',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Bash scripts automate OS-level tasks.
        </p>
        <CodeBlock language="bash" code={`#!/bin/bash

# Variables
NAME="DevOps"
echo "Hello, $NAME!"

# Loops
for i in {1..5}
do
   echo "Iteration $i"
done

# Conditionals
if [ -f "/etc/passwd" ]; then
    echo "File exists."
else
    echo "File not found."
fi

# Functions
check_status() {
    systemctl status nginx
}
check_status`} />
      </>
    )
  },

  // 2. Version Control (Git)
  {
    id: 'devops-git-internals',
    title: 'Git Deep Dive',
    parent: '2. Version Control (Git)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Git is a distributed version control system. It stores data as a series of snapshots.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Three Stages</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Working Directory:</strong> Where you modify files.</li>
            <li><strong>Staging Area (Index):</strong> Where you prepare files for the next commit (`git add`).</li>
            <li><strong>Repository (.git):</strong> Where Git permanently stores metadata and object database (`git commit`).</li>
        </ul>
        <CodeBlock language="bash" code={`# Initialize
git init

# Stage changes
git add . 

# Commit (Snapshot)
git commit -m "Initial commit"

# Check status
git status

# View history
git log --oneline --graph`} />
      </>
    )
  },
  {
    id: 'devops-git-branching',
    title: 'Branching & Strategies',
    parent: '2. Version Control (Git)',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Branching allows you to diverge from the main line of development and continue work without messing up that main line.
        </p>
        <CodeBlock language="bash" code={`# Create and switch to branch
git checkout -b feature/login-page

# Merge branch into main
git checkout main
git merge feature/login-page

# Resolve Conflicts:
# Manually edit file, then:
git add file.txt
git commit`} />
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">GitFlow Strategy</h3>
        <p className="mb-4">Strict branching model for releases.</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Main:</strong> Production ready.</li>
            <li><strong>Develop:</strong> Latest delivered features.</li>
            <li><strong>Feature:</strong> Branch off Develop.</li>
            <li><strong>Release:</strong> Branch off Develop, merge to Main and Develop.</li>
            <li><strong>Hotfix:</strong> Branch off Main, fix bug, merge to Main and Develop.</li>
        </ul>
      </>
    )
  },
  {
    id: 'devops-git-advanced',
    title: 'Advanced Git (Rebase vs Merge)',
    parent: '2. Version Control (Git)',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Merge vs Rebase</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-900">Merge</h4>
                <p className="text-sm">Creates a new "merge commit". Preserves history exactly as it happened. Non-destructive.</p>
            </div>
            <div className="p-4 border bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900">Rebase</h4>
                <p className="text-sm">Moves the entire branch to begin on the tip of the master branch. Creates a linear history. Destructive (rewrites history).</p>
            </div>
        </div>
        <CodeBlock language="bash" code={`# Rebase feature branch onto main
git checkout feature
git rebase main

# If conflicts occur, fix them, then:
git rebase --continue

# Soft Reset (Undo commit, keep changes in staging)
git reset --soft HEAD~1

# Hard Reset (Undo commit, destroy changes)
git reset --hard HEAD~1`} />
      </>
    )
  }
];