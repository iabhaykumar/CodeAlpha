import React from 'react';
import { Topic } from './types';
import { Table2, ShieldCheck, Zap } from 'lucide-react';

// FIX: Made children prop optional to resolve TypeScript errors.
const Kbd = ({ children }: { children?: React.ReactNode }) => (
    <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] sm:text-xs font-sans text-slate-700 shadow-sm mx-0.5 min-w-[20px] inline-block text-center font-semibold">
        {children}
    </kbd>
);

const PivotMockup = () => (
    <div className="flex flex-col md:flex-row gap-4 my-6 font-sans text-xs">
        <div className="border border-slate-300 bg-white p-2 rounded shadow-sm flex-1">
            <p className="font-bold border-b pb-1 mb-2 text-slate-700">Raw Data</p>
            <div className="grid grid-cols-3 gap-1 opacity-60">
                <span>Date</span><span>Item</span><span>Amt</span>
                <span>Jan</span><span>Apple</span><span>10</span>
                <span>Jan</span><span>Pen</span><span>5</span>
                <span>Feb</span><span>Apple</span><span>10</span>
            </div>
        </div>
        <div className="flex items-center justify-center text-slate-400">➜</div>
        <div className="border border-blue-300 bg-blue-50 p-2 rounded shadow-sm flex-1">
            <p className="font-bold border-b border-blue-200 pb-1 mb-2 text-blue-900">Pivot Table</p>
            <div className="grid grid-cols-2 gap-2">
                <span className="font-semibold text-blue-800">Row Labels</span><span className="font-semibold text-blue-800">Sum of Amt</span>
                <span>Apple</span><span>20</span>
                <span>Pen</span><span>5</span>
                <span className="font-bold border-t border-blue-300 pt-1">Grand Total</span><span className="font-bold border-t border-blue-300 pt-1">25</span>
            </div>
        </div>
    </div>
);

export const EXCEL_PART4_TOPICS: Topic[] = [
  // 4. Advanced Features
  {
    id: 'excel-pivot-tables',
    title: 'Pivot Tables',
    parent: '4. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Pivot Tables</strong> are the most powerful feature in Excel. They allow you to summarize, analyze, explore, and present large amounts of data quickly without writing formulas.
        </p>
        <PivotMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">How to Create</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li>Select your data range.</li>
            <li>Go to <strong>Insert &gt; PivotTable</strong>.</li>
            <li>Drag fields into <strong>Rows</strong>, <strong>Columns</strong>, and <strong>Values</strong> areas.</li>
        </ol>
        <p className="mb-4"><strong>Slicers:</strong> Add visual buttons to filter Pivot Tables effortlessly (Insert &gt; Slicer).</p>
      </>
    )
  },
  {
    id: 'excel-data-validation',
    title: 'Data Validation (Dropdowns)',
    parent: '4. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Controls what a user can enter into a cell. Most commonly used to create <strong>Dropdown Lists</strong>.
        </p>
        <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm mb-4">
            <p className="text-sm font-bold text-slate-500 mb-2">Example Dropdown:</p>
            <div className="border border-blue-400 p-2 rounded w-48 flex justify-between items-center bg-white cursor-pointer relative shadow-sm ring-2 ring-blue-100">
                <span>Select Department</span>
                <span className="text-xs">▼</span>
                <div className="absolute top-full left-0 w-full border border-slate-300 bg-white mt-1 rounded shadow-lg z-10 hidden">
                    <div className="p-2 hover:bg-slate-100">HR</div>
                    <div className="p-2 hover:bg-slate-100">IT</div>
                    <div className="p-2 hover:bg-slate-100">Sales</div>
                </div>
            </div>
        </div>
        <p>Go to <strong>Data &gt; Data Validation</strong>. Set "Allow" to "List" and type your options separated by commas (e.g., <code>Yes,No,Maybe</code>).</p>
      </>
    )
  },
  {
    id: 'excel-macros-vba',
    title: 'Macros & VBA',
    parent: '4. Advanced Features',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Like Word, Excel supports <strong>Macros</strong> to automate repetitive tasks. They are written in <strong>VBA (Visual Basic for Applications)</strong>.
        </p>
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4 border-l-4 border-green-500">
            Sub HelloWorld()<br/>
            &nbsp;&nbsp;MsgBox "Hello from CodeAlpha!"<br/>
            &nbsp;&nbsp;Range("A1").Value = "Automated"<br/>
            End Sub
        </div>
        <p className="text-sm text-slate-600">Enable the <strong>Developer Tab</strong> (File &gt; Options &gt; Customize Ribbon) to record and edit macros.</p>
      </>
    )
  },

  // 5. Ultimate Shortcuts List
  {
    id: 'excel-shortcuts-general',
    title: 'General & Workbook',
    parent: '5. Ultimate Shortcuts List',
    content: (
      <>
        <p className="mb-4 text-slate-700">Essential shortcuts for file management.</p>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-blue-50 text-blue-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>New Workbook</td><td><Kbd>Ctrl</Kbd>+<Kbd>N</Kbd></td></tr>
                <tr className="border-b"><td>Open Workbook</td><td><Kbd>Ctrl</Kbd>+<Kbd>O</Kbd></td></tr>
                <tr className="border-b"><td>Save</td><td><Kbd>Ctrl</Kbd>+<Kbd>S</Kbd></td></tr>
                <tr className="border-b"><td>Save As</td><td><Kbd>F12</Kbd></td></tr>
                <tr className="border-b"><td>Print</td><td><Kbd>Ctrl</Kbd>+<Kbd>P</Kbd></td></tr>
                <tr className="border-b"><td>Close Workbook</td><td><Kbd>Ctrl</Kbd>+<Kbd>W</Kbd></td></tr>
                <tr className="border-b"><td>Close Excel</td><td><Kbd>Alt</Kbd>+<Kbd>F4</Kbd></td></tr>
                <tr className="border-b"><td>Help</td><td><Kbd>F1</Kbd></td></tr>
                <tr className="border-b"><td>Undo</td><td><Kbd>Ctrl</Kbd>+<Kbd>Z</Kbd></td></tr>
                <tr className="border-b"><td>Redo</td><td><Kbd>Ctrl</Kbd>+<Kbd>Y</Kbd></td></tr>
                <tr className="border-b"><td>Switch Workbook</td><td><Kbd>Ctrl</Kbd>+<Kbd>Tab</Kbd></td></tr>
                <tr className="border-b"><td>Minimize Ribbon</td><td><Kbd>Ctrl</Kbd>+<Kbd>F1</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'excel-shortcuts-entry',
    title: 'Data Entry & Editing',
    parent: '5. Ultimate Shortcuts List',
    content: (
      <>
        <p className="mb-4 text-slate-700">Speed up your data entry process.</p>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-green-50 text-green-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Edit Active Cell</td><td><Kbd>F2</Kbd></td></tr>
                <tr className="border-b"><td>Cancel Entry</td><td><Kbd>Esc</Kbd></td></tr>
                <tr className="border-b"><td>Start New Line in Cell</td><td><Kbd>Alt</Kbd>+<Kbd>Enter</Kbd></td></tr>
                <tr className="border-b"><td>Fill Down</td><td><Kbd>Ctrl</Kbd>+<Kbd>D</Kbd></td></tr>
                <tr className="border-b"><td>Fill Right</td><td><Kbd>Ctrl</Kbd>+<Kbd>R</Kbd></td></tr>
                <tr className="border-b"><td>Insert Current Date</td><td><Kbd>Ctrl</Kbd>+<Kbd>;</Kbd></td></tr>
                <tr className="border-b"><td>Insert Current Time</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>;</Kbd></td></tr>
                <tr className="border-b"><td>Flash Fill</td><td><Kbd>Ctrl</Kbd>+<Kbd>E</Kbd></td></tr>
                <tr className="border-b"><td>Create Table</td><td><Kbd>Ctrl</Kbd>+<Kbd>T</Kbd></td></tr>
                <tr className="border-b"><td>Insert Hyperlink</td><td><Kbd>Ctrl</Kbd>+<Kbd>K</Kbd></td></tr>
                <tr className="border-b"><td>Add Comment</td><td><Kbd>Shift</Kbd>+<Kbd>F2</Kbd></td></tr>
                <tr className="border-b"><td>Delete Cell Contents</td><td><Kbd>Del</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'excel-shortcuts-format',
    title: 'Formatting & Numbers',
    parent: '5. Ultimate Shortcuts List',
    content: (
      <>
        <p className="mb-4 text-slate-700">Format cells instantly.</p>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-purple-50 text-purple-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Format Cells Dialog</td><td><Kbd>Ctrl</Kbd>+<Kbd>1</Kbd></td></tr>
                <tr className="border-b"><td>Bold</td><td><Kbd>Ctrl</Kbd>+<Kbd>B</Kbd></td></tr>
                <tr className="border-b"><td>Italic</td><td><Kbd>Ctrl</Kbd>+<Kbd>I</Kbd></td></tr>
                <tr className="border-b"><td>Underline</td><td><Kbd>Ctrl</Kbd>+<Kbd>U</Kbd></td></tr>
                <tr className="border-b"><td>Strikethrough</td><td><Kbd>Ctrl</Kbd>+<Kbd>5</Kbd></td></tr>
                <tr className="border-b"><td>General Number Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>~</Kbd></td></tr>
                <tr className="border-b"><td>Currency Format ($)</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>$</Kbd></td></tr>
                <tr className="border-b"><td>Percentage Format (%)</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>%</Kbd></td></tr>
                <tr className="border-b"><td>Scientific Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>^</Kbd></td></tr>
                <tr className="border-b"><td>Date Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>#</Kbd></td></tr>
                <tr className="border-b"><td>Time Format</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>@</Kbd></td></tr>
                <tr className="border-b"><td>Outline Border</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>&amp;</Kbd></td></tr>
                <tr className="border-b"><td>Remove Borders</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>_</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'excel-shortcuts-nav',
    title: 'Navigation & Selection',
    parent: '5. Ultimate Shortcuts List',
    content: (
      <>
        <h3 className="text-md font-bold text-slate-800 mb-2">Navigation</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-orange-50 text-orange-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Move one cell</td><td><Kbd>Arrows</Kbd></td></tr>
                <tr className="border-b"><td>Jump to edge of data</td><td><Kbd>Ctrl</Kbd>+<Kbd>Arrows</Kbd></td></tr>
                <tr className="border-b"><td>Beginning of Row</td><td><Kbd>Home</Kbd></td></tr>
                <tr className="border-b"><td>Beginning of Sheet</td><td><Kbd>Ctrl</Kbd>+<Kbd>Home</Kbd></td></tr>
                <tr className="border-b"><td>Last Active Cell</td><td><Kbd>Ctrl</Kbd>+<Kbd>End</Kbd></td></tr>
                <tr className="border-b"><td>Next Sheet</td><td><Kbd>Ctrl</Kbd>+<Kbd>PageDown</Kbd></td></tr>
                <tr className="border-b"><td>Previous Sheet</td><td><Kbd>Ctrl</Kbd>+<Kbd>PageUp</Kbd></td></tr>
                <tr className="border-b"><td>Go To</td><td><Kbd>Ctrl</Kbd>+<Kbd>G</Kbd></td></tr>
            </tbody>
        </table>

        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Selection</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-red-50 text-red-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Select All</td><td><Kbd>Ctrl</Kbd>+<Kbd>A</Kbd></td></tr>
                <tr className="border-b"><td>Extend Selection</td><td><Kbd>Shift</Kbd>+<Kbd>Arrows</Kbd></td></tr>
                <tr className="border-b"><td>Extend to edge</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>Arrows</Kbd></td></tr>
                <tr className="border-b"><td>Select Entire Row</td><td><Kbd>Shift</Kbd>+<Kbd>Space</Kbd></td></tr>
                <tr className="border-b"><td>Select Entire Column</td><td><Kbd>Ctrl</Kbd>+<Kbd>Space</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  },
  {
    id: 'excel-shortcuts-formula',
    title: 'Formulas & Rows/Cols',
    parent: '5. Ultimate Shortcuts List',
    content: (
      <>
        <h3 className="text-md font-bold text-slate-800 mb-2">Formulas</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-teal-50 text-teal-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>AutoSum</td><td><Kbd>Alt</Kbd>+<Kbd>=</Kbd></td></tr>
                <tr className="border-b"><td>Toggle Absolute Ref ($)</td><td><Kbd>F4</Kbd></td></tr>
                <tr className="border-b"><td>Show Formulas</td><td><Kbd>Ctrl</Kbd>+<Kbd>`</Kbd></td></tr>
                <tr className="border-b"><td>Insert Function</td><td><Kbd>Shift</Kbd>+<Kbd>F3</Kbd></td></tr>
                <tr className="border-b"><td>Calculate Now</td><td><Kbd>F9</Kbd></td></tr>
                <tr className="border-b"><td>Define Name</td><td><Kbd>Ctrl</Kbd>+<Kbd>F3</Kbd></td></tr>
                <tr className="border-b"><td>Create Chart</td><td><Kbd>F11</Kbd></td></tr>
            </tbody>
        </table>

        <h3 className="text-md font-bold text-slate-800 mt-4 mb-2">Rows, Columns & Utility</h3>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden mb-6">
            <thead className="bg-indigo-50 text-indigo-900">
                <tr><th className="p-3 font-bold border-b">Action</th><th className="p-3 font-bold border-b">Shortcut</th></tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b"><td>Insert Row/Col</td><td><Kbd>Ctrl</Kbd>+<Kbd>+</Kbd></td></tr>
                <tr className="border-b"><td>Delete Row/Col</td><td><Kbd>Ctrl</Kbd>+<Kbd>-</Kbd></td></tr>
                <tr className="border-b"><td>Hide Row</td><td><Kbd>Ctrl</Kbd>+<Kbd>9</Kbd></td></tr>
                <tr className="border-b"><td>Unhide Row</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>9</Kbd></td></tr>
                <tr className="border-b"><td>Hide Column</td><td><Kbd>Ctrl</Kbd>+<Kbd>0</Kbd></td></tr>
                <tr className="border-b"><td>Unhide Column</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>0</Kbd></td></tr>
                <tr className="border-b"><td>Group Rows/Cols</td><td><Kbd>Alt</Kbd>+<Kbd>Shift</Kbd>+<Kbd>→</Kbd></td></tr>
                <tr className="border-b"><td>Ungroup</td><td><Kbd>Alt</Kbd>+<Kbd>Shift</Kbd>+<Kbd>←</Kbd></td></tr>
                <tr className="border-b"><td>Filter Toggle</td><td><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>L</Kbd></td></tr>
                <tr className="border-b"><td>Find</td><td><Kbd>Ctrl</Kbd>+<Kbd>F</Kbd></td></tr>
                <tr className="border-b"><td>Replace</td><td><Kbd>Ctrl</Kbd>+<Kbd>H</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  }
];