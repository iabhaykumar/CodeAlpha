

import React from 'react';
import { Topic } from './types';

// FIX: Made children prop optional to resolve TypeScript errors.
const Kbd = ({ children }: { children?: React.ReactNode }) => (
    <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] sm:text-xs font-sans text-slate-700 shadow-sm mx-0.5 min-w-[20px] inline-block text-center font-semibold">
        {children}
    </kbd>
);

const MacroDialogMockup = () => (
    <div className="bg-[#f0f0f0] border border-slate-400 rounded shadow-md p-1 w-64 mx-auto my-6 font-sans text-xs select-none">
        <div className="flex justify-between items-center bg-white px-2 py-1 mb-2 border border-slate-300">
            <span>Record Macro</span>
            <span>✕</span>
        </div>
        <div className="px-2 mb-2">
            <label className="block mb-1">Macro name:</label>
            <input type="text" value="FormatTable" readOnly className="w-full border border-slate-400 px-1" />
        </div>
        <div className="px-2 mb-2">
            <label className="block mb-1">Assign macro to:</label>
            <div className="flex gap-2">
                <div className="bg-white border border-slate-400 px-2 py-1 flex items-center gap-1 rounded hover:bg-blue-100 cursor-pointer">
                    <div className="w-3 h-3 bg-slate-400"></div> Button
                </div>
                <div className="bg-white border border-slate-400 px-2 py-1 flex items-center gap-1 rounded hover:bg-blue-100 cursor-pointer">
                    <div className="w-3 h-3 bg-slate-400"></div> Keyboard
                </div>
            </div>
        </div>
        <div className="flex justify-end gap-2 px-2 pb-2 mt-4">
            <button className="px-3 py-1 bg-slate-200 border border-slate-400 rounded">OK</button>
            <button className="px-3 py-1 bg-slate-200 border border-slate-400 rounded">Cancel</button>
        </div>
    </div>
);

export const WORD_PART4_TOPICS: Topic[] = [
  // 9. Advanced Features
  {
    id: 'word-macros',
    title: 'Macros',
    parent: '9. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Macros</strong> automate repetitive tasks by recording a sequence of actions and replaying them.
        </p>
        <MacroDialogMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Steps to Record</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li>Go to <strong>View &gt; Macros &gt; Record Macro</strong>.</li>
            <li>Name it (e.g., "DailyReportFormat"). No spaces allowed.</li>
            <li>Assign a shortcut (e.g., <Kbd>Alt</Kbd> + <Kbd>R</Kbd>).</li>
            <li>Perform your actions (change margins, insert table, etc.).</li>
            <li>Click <strong>Stop Recording</strong>.</li>
        </ol>
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-4">
            <p className="text-sm text-red-900"><strong>Important:</strong> Save your file as a <strong>Word Macro-Enabled Document (.docm)</strong>, otherwise your macros will be deleted.</p>
        </div>
      </>
    )
  },
  {
    id: 'word-building-blocks',
    title: 'Building Blocks (Quick Parts)',
    parent: '9. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Insert &gt; Quick Parts</strong>. Save snippets of text, logos, or tables that you use frequently.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>AutoText:</strong> Type "Thank" and press F3 to insert "Thank you for your business...".</li>
            <li><strong>Document Property:</strong> Insert metadata like [Author] or [Publish Date]. Updates automatically.</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-protect',
    title: 'Document Protection',
    parent: '9. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>File &gt; Info &gt; Protect Document</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Encrypt with Password:</strong> Secures the file so it cannot be opened without a password.</li>
            <li><strong>Restrict Editing:</strong> Allows users to only <em>fill in forms</em> or leave <em>comments</em>, but not change the text.</li>
        </ul>
      </>
    )
  },

  // 10. Shortcut Keys (Comprehensive)
  {
    id: 'word-shortcuts-general',
    title: 'General & Document Shortcuts',
    parent: '10. Ultimate Shortcuts List',
    content: (
      <>
        <p className="mb-4 text-slate-700">Essential shortcuts for managing documents and the Word application interface.</p>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-blue-50 text-blue-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>New Document</td><td><Kbd>Ctrl</Kbd>+<Kbd>N</Kbd></td></tr>
                <tr className="border-b"><td>Open Document</td><td><Kbd>Ctrl</Kbd>+<Kbd>O</Kbd></td></tr>
                <tr className="border-b"><td>Save</td><td><Kbd>Ctrl</Kbd>+<Kbd>S</Kbd></td></tr>
                <tr className="border-b"><td>Save As</td><td><Kbd>F12</Kbd></td></tr>
                <tr className="border-b"><td>Print</td><td><Kbd>Ctrl</Kbd>+<Kbd>P</Kbd></td></tr>
                <tr className="border-b"><td>Print Preview</td><td><Kbd>Ctrl</Kbd>+<Kbd>F2</Kbd></td></tr>
                <tr className="border-b"><td>Close Document</td><td><Kbd>Ctrl</Kbd>+<Kbd>W</Kbd></td></tr>
                <tr className="border-b"><td>Switch Window</td><td><Kbd>Alt</Kbd>+<Kbd>Tab</Kbd></td></tr>
                <tr className="border-b"><td>Help</td><td><Kbd>F1</Kbd></td></tr>
                <tr className="border-b"><td>Maximize/Restore</td><td><Kbd>Ctrl</Kbd>+<Kbd>F10</Kbd></td></tr>
                <tr className="border-b"><td>Minimize</td><td><Kbd>Win</Kbd>+<Kbd>Down</Kbd></td></tr>
                <tr className="border-b"><td>Show/Hide Ribbon</td><td><Kbd>Ctrl</Kbd>+<Kbd>F1</Kbd></td></tr>
                <tr className="border-b"><td>Zoom In (Scroll)</td><td><Kbd>Ctrl</Kbd>+<Kbd>Wheel Up</Kbd></td></tr>
                <tr className="border-b"><td>Split Window</td><td><Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>S</Kbd></td></tr>
                <tr className="border-b"><td>Go to Tell Me</td><td><Kbd>Alt</Kbd>+<Kbd>Q</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'word-shortcuts-format',
    title: 'Text & Formatting Shortcuts',
    parent: '10. Ultimate Shortcuts List',
    content: (
      <>
        <p className="mb-4 text-slate-700">Master text styling without touching the mouse.</p>
        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Character Formatting</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-purple-50 text-purple-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Bold</td><td><Kbd>Ctrl</Kbd>+<Kbd>B</Kbd></td></tr>
                <tr className="border-b"><td>Italic</td><td><Kbd>Ctrl</Kbd>+<Kbd>I</Kbd></td></tr>
                <tr className="border-b"><td>Underline</td><td><Kbd>Ctrl</Kbd>+<Kbd>U</Kbd></td></tr>
                <tr className="border-b"><td>Double Underline</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>D</Kbd></td></tr>
                <tr className="border-b"><td>Word Underline</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>W</Kbd></td></tr>
                <tr className="border-b"><td>All Caps</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>A</Kbd></td></tr>
                <tr className="border-b"><td>Small Caps</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>K</Kbd></td></tr>
                <tr className="border-b"><td>Subscript (x₂)</td><td><Kbd>Ctrl</Kbd>+<Kbd>=</Kbd></td></tr>
                <tr className="border-b"><td>Superscript (x²)</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>+</Kbd></td></tr>
                <tr className="border-b"><td>Grow Font</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>&gt;</Kbd></td></tr>
                <tr className="border-b"><td>Shrink Font</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>&lt;</Kbd></td></tr>
                <tr className="border-b"><td>Grow Font (1pt)</td><td><Kbd>Ctrl</Kbd>+<Kbd>]</Kbd></td></tr>
                <tr className="border-b"><td>Shrink Font (1pt)</td><td><Kbd>Ctrl</Kbd>+<Kbd>[</Kbd></td></tr>
                <tr className="border-b"><td>Change Case</td><td><Kbd>Shift</Kbd>+<Kbd>F3</Kbd></td></tr>
                <tr className="border-b"><td>Clear Formatting</td><td><Kbd>Ctrl</Kbd>+<Kbd>Space</Kbd></td></tr>
                <tr className="border-b"><td>Copy Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>C</Kbd></td></tr>
                <tr className="border-b"><td>Paste Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>V</Kbd></td></tr>
            </tbody>
        </table>

        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Paragraph Formatting</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-green-50 text-green-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Center Align</td><td><Kbd>Ctrl</Kbd>+<Kbd>E</Kbd></td></tr>
                <tr className="border-b"><td>Left Align</td><td><Kbd>Ctrl</Kbd>+<Kbd>L</Kbd></td></tr>
                <tr className="border-b"><td>Right Align</td><td><Kbd>Ctrl</Kbd>+<Kbd>R</Kbd></td></tr>
                <tr className="border-b"><td>Justify</td><td><Kbd>Ctrl</Kbd>+<Kbd>J</Kbd></td></tr>
                <tr className="border-b"><td>Single Spacing</td><td><Kbd>Ctrl</Kbd>+<Kbd>1</Kbd></td></tr>
                <tr className="border-b"><td>Double Spacing</td><td><Kbd>Ctrl</Kbd>+<Kbd>2</Kbd></td></tr>
                <tr className="border-b"><td>1.5 Line Spacing</td><td><Kbd>Ctrl</Kbd>+<Kbd>5</Kbd></td></tr>
                <tr className="border-b"><td>Indent Paragraph</td><td><Kbd>Ctrl</Kbd>+<Kbd>M</Kbd></td></tr>
                <tr className="border-b"><td>Remove Indent</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>M</Kbd></td></tr>
                <tr className="border-b"><td>Hanging Indent</td><td><Kbd>Ctrl</Kbd>+<Kbd>T</Kbd></td></tr>
                <tr className="border-b"><td>Add Space Before</td><td><Kbd>Ctrl</Kbd>+<Kbd>0</Kbd></td></tr>
                <tr className="border-b"><td>Apply Heading 1</td><td><Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>1</Kbd></td></tr>
                <tr className="border-b"><td>Apply Heading 2</td><td><Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>2</Kbd></td></tr>
                <tr className="border-b"><td>Apply Normal</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>N</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'word-shortcuts-nav',
    title: 'Navigation & Selection',
    parent: '10. Ultimate Shortcuts List',
    content: (
      <>
        <h3 className="text-md font-bold text-slate-800 mb-2">Navigation (Move Cursor)</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-orange-50 text-orange-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>One word right</td><td><Kbd>Ctrl</Kbd>+<Kbd>→</Kbd></td></tr>
                <tr className="border-b"><td>One word left</td><td><Kbd>Ctrl</Kbd>+<Kbd>←</Kbd></td></tr>
                <tr className="border-b"><td>One paragraph up</td><td><Kbd>Ctrl</Kbd>+<Kbd>↑</Kbd></td></tr>
                <tr className="border-b"><td>One paragraph down</td><td><Kbd>Ctrl</Kbd>+<Kbd>↓</Kbd></td></tr>
                <tr className="border-b"><td>Beginning of line</td><td><Kbd>Home</Kbd></td></tr>
                <tr className="border-b"><td>End of line</td><td><Kbd>End</Kbd></td></tr>
                <tr className="border-b"><td>Top of Document</td><td><Kbd>Ctrl</Kbd>+<Kbd>Home</Kbd></td></tr>
                <tr className="border-b"><td>End of Document</td><td><Kbd>Ctrl</Kbd>+<Kbd>End</Kbd></td></tr>
                <tr className="border-b"><td>Go to Page...</td><td><Kbd>Ctrl</Kbd>+<Kbd>G</Kbd></td></tr>
                <tr className="border-b"><td>Next Misspelling</td><td><Kbd>Alt</Kbd>+<Kbd>F7</Kbd></td></tr>
            </tbody>
        </table>

        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Selection (Highlight)</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-red-50 text-red-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Select All</td><td><Kbd>Ctrl</Kbd>+<Kbd>A</Kbd></td></tr>
                <tr className="border-b"><td>Select char right</td><td><Kbd>Shift</Kbd>+<Kbd>→</Kbd></td></tr>
                <tr className="border-b"><td>Select word right</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>→</Kbd></td></tr>
                <tr className="border-b"><td>Select to end of line</td><td><Kbd>Shift</Kbd>+<Kbd>End</Kbd></td></tr>
                <tr className="border-b"><td>Select to start of line</td><td><Kbd>Shift</Kbd>+<Kbd>Home</Kbd></td></tr>
                <tr className="border-b"><td>Select one line up</td><td><Kbd>Shift</Kbd>+<Kbd>↑</Kbd></td></tr>
                <tr className="border-b"><td>Select to end of doc</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>End</Kbd></td></tr>
                <tr className="border-b"><td>Select vertical block</td><td><Kbd>Alt</Kbd>+<Kbd>Drag Mouse</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'word-shortcuts-edit',
    title: 'Editing & Special',
    parent: '10. Ultimate Shortcuts List',
    content: (
      <>
        <h3 className="text-md font-bold text-slate-800 mb-2">Editing</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-teal-50 text-teal-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Cut</td><td><Kbd>Ctrl</Kbd>+<Kbd>X</Kbd></td></tr>
                <tr className="border-b"><td>Copy</td><td><Kbd>Ctrl</Kbd>+<Kbd>C</Kbd></td></tr>
                <tr className="border-b"><td>Paste</td><td><Kbd>Ctrl</Kbd>+<Kbd>V</Kbd></td></tr>
                <tr className="border-b"><td>Undo</td><td><Kbd>Ctrl</Kbd>+<Kbd>Z</Kbd></td></tr>
                <tr className="border-b"><td>Redo</td><td><Kbd>Ctrl</Kbd>+<Kbd>Y</Kbd></td></tr>
                <tr className="border-b"><td>Find</td><td><Kbd>Ctrl</Kbd>+<Kbd>F</Kbd></td></tr>
                <tr className="border-b"><td>Replace</td><td><Kbd>Ctrl</Kbd>+<Kbd>H</Kbd></td></tr>
                <tr className="border-b"><td>Delete word right</td><td><Kbd>Ctrl</Kbd>+<Kbd>Del</Kbd></td></tr>
                <tr className="border-b"><td>Delete word left</td><td><Kbd>Ctrl</Kbd>+<Kbd>Backspace</Kbd></td></tr>
                <tr className="border-b"><td>Insert Hyperlink</td><td><Kbd>Ctrl</Kbd>+<Kbd>K</Kbd></td></tr>
                <tr className="border-b"><td>Insert Comment</td><td><Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>M</Kbd></td></tr>
                <tr className="border-b"><td>Page Break</td><td><Kbd>Ctrl</Kbd>+<Kbd>Enter</Kbd></td></tr>
                <tr className="border-b"><td>Line Break</td><td><Kbd>Shift</Kbd>+<Kbd>Enter</Kbd></td></tr>
                <tr className="border-b"><td>Column Break</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>Enter</Kbd></td></tr>
            </tbody>
        </table>

        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Special Characters</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-gray-100 text-gray-800">
                <tr><th className="p-3 font-bold border-b">Symbol</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Copyright ©</td><td><Kbd>Alt</Kbd>+<Kbd>Ctrl</Kbd>+<Kbd>C</Kbd></td></tr>
                <tr className="border-b"><td>Trademark ™</td><td><Kbd>Alt</Kbd>+<Kbd>Ctrl</Kbd>+<Kbd>T</Kbd></td></tr>
                <tr className="border-b"><td>Registered ®</td><td><Kbd>Alt</Kbd>+<Kbd>Ctrl</Kbd>+<Kbd>R</Kbd></td></tr>
                <tr className="border-b"><td>Ellipsis …</td><td><Kbd>Alt</Kbd>+<Kbd>Ctrl</Kbd>+<Kbd>.</Kbd></td></tr>
                <tr className="border-b"><td>Em Dash —</td><td><Kbd>Alt</Kbd>+<Kbd>Ctrl</Kbd>+<Kbd>-</Kbd></td></tr>
                <tr className="border-b"><td>En Dash –</td><td><Kbd>Ctrl</Kbd>+<Kbd>-</Kbd> (NumPad)</td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'word-shortcuts-func',
    title: 'Function Keys (F1-F12)',
    parent: '10. Ultimate Shortcuts List',
    content: (
      <>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-indigo-50 text-indigo-900">
                <tr><th className="p-3 font-bold border-b w-24">Key</th><th className="p-3 font-bold border-b">Function</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td><Kbd>F1</Kbd></td><td>Help</td></tr>
                <tr className="border-b"><td><Kbd>F2</Kbd></td><td>Move text / graphic</td></tr>
                <tr className="border-b"><td><Kbd>F4</Kbd></td><td>Repeat last action</td></tr>
                <tr className="border-b"><td><Kbd>F5</Kbd></td><td>Go To</td></tr>
                <tr className="border-b"><td><Kbd>F7</Kbd></td><td>Spell Check</td></tr>
                <tr className="border-b"><td><Kbd>F12</Kbd></td><td>Save As</td></tr>
                <tr className="border-b"><td><Kbd>Shift</Kbd>+<Kbd>F3</Kbd></td><td>Change Case (Upper/Lower/Title)</td></tr>
                <tr className="border-b"><td><Kbd>Shift</Kbd>+<Kbd>F5</Kbd></td><td>Go to last edit location</td></tr>
                <tr className="border-b"><td><Kbd>Shift</Kbd>+<Kbd>F7</Kbd></td><td>Thesaurus</td></tr>
                <tr className="border-b"><td><Kbd>Ctrl</Kbd>+<Kbd>F9</Kbd></td><td>Insert Empty Field {}</td></tr>
            </tbody>
        </table>
      </>
    )
  }
];