

import React from 'react';
import { Topic } from './types';

// FIX: Made children prop optional to resolve TypeScript errors.
const Kbd = ({ children }: { children?: React.ReactNode }) => (
    <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] sm:text-xs font-sans text-slate-700 shadow-sm mx-0.5 min-w-[20px] inline-block text-center font-semibold">
        {children}
    </kbd>
);

const ShortcutTable = ({ items, colorClass }: { items: {action: string, key: React.ReactNode}[], colorClass: string }) => (
    <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
        <thead className={colorClass}>
            <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
        </thead>
        <tbody className="text-sm">
            {items.map((item, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-slate-50">
                    <td className="p-2 pl-3 text-slate-700">{item.action}</td>
                    <td className="p-2">{item.key}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export const VSCODE_PART6_TOPICS: Topic[] = [
  // 6. Ultimate Shortcuts
  {
    id: 'vscode-shortcuts-general',
    title: 'General & Navigation',
    parent: '6. Ultimate Shortcuts List',
    content: (
      <>
        <ShortcutTable 
            colorClass="bg-blue-50 text-blue-900"
            items={[
                { action: "Command Palette", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>P</Kbd></> },
                { action: "Quick Open File", key: <><Kbd>Ctrl</Kbd>+<Kbd>P</Kbd></> },
                { action: "New Window", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>N</Kbd></> },
                { action: "Close Window", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>W</Kbd></> },
                { action: "User Settings", key: <><Kbd>Ctrl</Kbd>+<Kbd>,</Kbd></> },
                { action: "Toggle Sidebar", key: <><Kbd>Ctrl</Kbd>+<Kbd>B</Kbd></> },
                { action: "Toggle Terminal", key: <><Kbd>Ctrl</Kbd>+<Kbd>`</Kbd></> },
                { action: "Focus Editor", key: <><Kbd>Ctrl</Kbd>+<Kbd>1</Kbd></> },
                { action: "Switch Tab", key: <><Kbd>Ctrl</Kbd>+<Kbd>Tab</Kbd></> },
                { action: "Go Back (Nav)", key: <><Kbd>Alt</Kbd>+<Kbd>←</Kbd></> },
                { action: "Go Forward (Nav)", key: <><Kbd>Alt</Kbd>+<Kbd>→</Kbd></> },
            ]}
        />
      </>
    )
  },
  {
    id: 'vscode-shortcuts-editing',
    title: 'Basic Editing',
    parent: '6. Ultimate Shortcuts List',
    content: (
      <>
        <ShortcutTable 
            colorClass="bg-green-50 text-green-900"
            items={[
                { action: "Cut Line (Empty Selection)", key: <><Kbd>Ctrl</Kbd>+<Kbd>X</Kbd></> },
                { action: "Copy Line (Empty Selection)", key: <><Kbd>Ctrl</Kbd>+<Kbd>C</Kbd></> },
                { action: "Move Line Up/Down", key: <><Kbd>Alt</Kbd>+<Kbd>↑</Kbd> / <Kbd>↓</Kbd></> },
                { action: "Copy Line Up/Down", key: <><Kbd>Shift</Kbd>+<Kbd>Alt</Kbd>+<Kbd>↑</Kbd> / <Kbd>↓</Kbd></> },
                { action: "Delete Line", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>K</Kbd></> },
                { action: "Insert Line Below", key: <><Kbd>Ctrl</Kbd>+<Kbd>Enter</Kbd></> },
                { action: "Insert Line Above", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>Enter</Kbd></> },
                { action: "Jump to matching bracket", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>\</Kbd></> },
                { action: "Indent/Outdent", key: <><Kbd>Ctrl</Kbd>+<Kbd>]</Kbd> / <Kbd>[</Kbd></> },
                { action: "Go to Beginning/End of File", key: <><Kbd>Ctrl</Kbd>+<Kbd>Home</Kbd> / <Kbd>End</Kbd></> },
                { action: "Toggle Line Comment", key: <><Kbd>Ctrl</Kbd>+<Kbd>/</Kbd></> },
                { action: "Toggle Block Comment", key: <><Kbd>Shift</Kbd>+<Kbd>Alt</Kbd>+<Kbd>A</Kbd></> },
            ]}
        />
      </>
    )
  },
  {
    id: 'vscode-shortcuts-multicursor',
    title: 'Multi-Cursor & Selection',
    parent: '6. Ultimate Shortcuts List',
    content: (
      <>
        <ShortcutTable 
            colorClass="bg-purple-50 text-purple-900"
            items={[
                { action: "Insert Cursor", key: <><Kbd>Alt</Kbd>+<Kbd>Click</Kbd></> },
                { action: "Insert Cursor Above/Below", key: <><Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>↑</Kbd> / <Kbd>↓</Kbd></> },
                { action: "Select Next Occurrence", key: <><Kbd>Ctrl</Kbd>+<Kbd>D</Kbd></> },
                { action: "Undo Last Cursor", key: <><Kbd>Ctrl</Kbd>+<Kbd>U</Kbd></> },
                { action: "Select All Occurrences", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>L</Kbd></> },
                { action: "Column (Box) Selection", key: <><Kbd>Shift</Kbd>+<Kbd>Alt</Kbd>+<Kbd>Drag</Kbd></> },
                { action: "Expand Selection", key: <><Kbd>Shift</Kbd>+<Kbd>Alt</Kbd>+<Kbd>→</Kbd></> },
                { action: "Shrink Selection", key: <><Kbd>Shift</Kbd>+<Kbd>Alt</Kbd>+<Kbd>←</Kbd></> },
            ]}
        />
      </>
    )
  },
  {
    id: 'vscode-shortcuts-display',
    title: 'Search & Display',
    parent: '6. Ultimate Shortcuts List',
    content: (
      <>
        <ShortcutTable 
            colorClass="bg-orange-50 text-orange-900"
            items={[
                { action: "Find", key: <><Kbd>Ctrl</Kbd>+<Kbd>F</Kbd></> },
                { action: "Replace", key: <><Kbd>Ctrl</Kbd>+<Kbd>H</Kbd></> },
                { action: "Find in Files (Global)", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>F</Kbd></> },
                { action: "Replace in Files", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>H</Kbd></> },
                { action: "Go to Symbol (File)", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>O</Kbd></> },
                { action: "Go to Symbol (Workspace)", key: <><Kbd>Ctrl</Kbd>+<Kbd>T</Kbd></> },
                { action: "Show Problems Panel", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>M</Kbd></> },
                { action: "Go to Next Error", key: <><Kbd>F8</Kbd></> },
                { action: "Zoom In", key: <><Kbd>Ctrl</Kbd>+<Kbd>=</Kbd></> },
                { action: "Zoom Out", key: <><Kbd>Ctrl</Kbd>+<Kbd>-</Kbd></> },
                { action: "Markdown Preview", key: <><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>V</Kbd></> },
            ]}
        />
      </>
    )
  }
];