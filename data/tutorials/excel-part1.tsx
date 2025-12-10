
import React from 'react';
import { Topic } from './types';
import { Grid, MousePointer2, Type, LayoutGrid } from 'lucide-react';

// UI Helper: Spreadsheet Interface Mockup
const ExcelRibbonMockup = () => (
  <div className="bg-[#f3f2f1] border border-slate-300 rounded-lg overflow-hidden font-sans mb-6 shadow-sm select-none">
    {/* Window Title Bar */}
    <div className="bg-[#1D6F42] text-white px-4 py-1 text-xs flex justify-between items-center">
      <span>AutoSave <span className="opacity-50">On</span></span>
      <span className="font-semibold">Book1 - Excel</span>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
      </div>
    </div>
    {/* Tabs */}
    <div className="bg-[#1D6F42] text-white flex px-2 pt-2 text-sm gap-1">
      <div className="px-3 py-1 bg-[#f3f2f1] text-[#1D6F42] rounded-t-md font-medium border-t border-x border-[#f3f2f1]">Home</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Insert</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Page Layout</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Formulas</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Data</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">View</div>
    </div>
    {/* Ribbon Groups */}
    <div className="bg-[#f3f2f1] p-2 flex gap-2 h-24 border-b border-slate-300 overflow-x-auto">
      {/* Clipboard */}
      <div className="flex flex-col items-center justify-between px-2 border-r border-slate-300 min-w-[60px]">
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-200 p-1 rounded">
          <div className="text-slate-600 font-bold text-lg">📋</div>
          <span className="text-[10px]">Paste</span>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto">Clipboard</span>
      </div>
      
      {/* Font */}
      <div className="flex flex-col px-2 border-r border-slate-300 min-w-[140px]">
        <div className="flex gap-2 mb-1">
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-24 flex justify-between items-center rounded-sm">Calibri <span className="text-[8px]">▼</span></div>
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-10 flex justify-between items-center rounded-sm">11 <span className="text-[8px]">▼</span></div>
        </div>
        <div className="flex gap-1 mb-1">
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 font-bold">B</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 italic">I</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 underline">U</button>
            <div className="w-px h-4 bg-slate-300 mx-1"></div>
            <button className="p-1 hover:bg-slate-200 rounded border border-slate-300 bg-yellow-300 h-5 w-5 flex items-center justify-center text-[10px]">🎨</button>
            <button className="p-1 hover:bg-slate-200 rounded text-red-600 font-bold">A</button>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto text-center">Font</span>
      </div>

      {/* Alignment */}
      <div className="flex flex-col px-2 border-r border-slate-300 min-w-[120px]">
        <div className="flex gap-1 mb-1 justify-center">
            <span className="text-xs text-slate-600">⬆</span>
            <span className="text-xs text-slate-600">⬇</span>
        </div>
        <div className="flex gap-1 mb-1 justify-center">
            <span className="text-xs text-slate-600">⬅</span>
            <span className="text-xs text-slate-600">➡</span>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto text-center">Alignment</span>
      </div>

      {/* Number */}
      <div className="flex flex-col px-2 min-w-[120px]">
         <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-full flex justify-between items-center rounded-sm mb-1">General <span className="text-[8px]">▼</span></div>
         <div className="flex gap-2 justify-center text-slate-600 text-xs">
            <span>$</span>
            <span>%</span>
            <span>,</span>
         </div>
         <span className="text-[10px] text-slate-500 mt-auto text-center">Number</span>
      </div>
    </div>
    {/* Formula Bar */}
    <div className="flex items-center gap-2 p-1 bg-white border-b border-slate-300 text-sm">
        <div className="w-10 text-center border border-slate-300 bg-slate-50 text-slate-600 rounded-sm font-medium">A1</div>
        <div className="text-slate-400">✕ ✓ ƒx</div>
        <div className="flex-1 border border-slate-300 h-6 rounded-sm px-2 bg-white"></div>
    </div>
  </div>
);

// UI Helper: Simple Grid
const SpreadsheetGrid = () => (
    <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-sm mb-6">
        <table className="w-full text-sm border-collapse bg-white cursor-cell">
            <thead>
                <tr>
                    <th className="bg-slate-100 border border-slate-300 w-10"></th>
                    <th className="bg-slate-100 border border-slate-300 w-24 text-slate-600 font-normal">A</th>
                    <th className="bg-slate-100 border border-slate-300 w-24 text-slate-600 font-normal">B</th>
                    <th className="bg-slate-100 border border-slate-300 w-24 text-slate-600 font-normal">C</th>
                    <th className="bg-slate-100 border border-slate-300 w-24 text-slate-600 font-normal">D</th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4].map(row => (
                    <tr key={row}>
                        <td className="bg-slate-100 border border-slate-300 text-center text-slate-600">{row}</td>
                        <td className={`border border-slate-200 p-1 ${row === 1 ? 'border-2 border-[#1D6F42] relative' : ''}`}>
                            {row === 1 && <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-[#1D6F42]"></div>}
                        </td>
                        <td className="border border-slate-200 p-1"></td>
                        <td className="border border-slate-200 p-1"></td>
                        <td className="border border-slate-200 p-1"></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const EXCEL_PART1_TOPICS: Topic[] = [
  // 1. Getting Started
  {
    id: 'excel-intro-interface',
    title: 'Interface & Workflow',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Microsoft Excel is a spreadsheet program used to store, organize, and analyze data.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Excel Interface</h3>
        <p className="mb-4">The interface is similar to Word but specialized for data.</p>
        <ExcelRibbonMockup />
        
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Ribbon:</strong> Top menu containing tools (Home, Insert, Data).</li>
            <li><strong>Name Box:</strong> Shows the address of the active cell (e.g., A1).</li>
            <li><strong>Formula Bar:</strong> Use this to enter or edit data, formulas, or functions.</li>
            <li><strong>Worksheet:</strong> The grid of cells where you work.</li>
            <li><strong>Status Bar:</strong> Bottom bar showing quick sums, zoom slider, and view shortcuts.</li>
        </ul>
      </>
    )
  },
  {
    id: 'excel-workbook-worksheet',
    title: 'Workbooks vs Worksheets',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Understanding the file structure is crucial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2"><BookOpen size={18}/> Workbook</h4>
                <p className="text-sm text-green-800">
                    The entire Excel file (<code>.xlsx</code>). Think of it as a physical notebook. It contains one or more pages.
                </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><LayoutGrid size={18}/> Worksheet</h4>
                <p className="text-sm text-blue-800">
                    A single page/tab within the workbook. By default, named "Sheet1". You can add more tabs at the bottom.
                </p>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'excel-cells-ranges',
    title: 'Cells, Rows & Columns',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The grid is made of <strong>Columns</strong> (Letters: A, B, C...) and <strong>Rows</strong> (Numbers: 1, 2, 3...).
        </p>
        <SpreadsheetGrid />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Cell Address:</strong> The intersection of a column and row (e.g., <strong>A1</strong>, <strong>C5</strong>).</li>
            <li><strong>Active Cell:</strong> The cell with the thick green border where you are currently typing.</li>
            <li><strong>Range:</strong> A group of cells (e.g., <strong>A1:B4</strong> means from A1 to B4).</li>
        </ul>
      </>
    )
  },
  {
    id: 'excel-data-entry',
    title: 'Data Entry & Types',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Excel automatically detects the type of data you type.
        </p>
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                        <th className="p-2">Data Type</th>
                        <th className="p-2">Example</th>
                        <th className="p-2">Default Alignment</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                        <td className="p-2 font-semibold">Text</td>
                        <td className="p-2">CodeAlpha, ID-123</td>
                        <td className="p-2 text-left">Left</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="p-2 font-semibold">Number</td>
                        <td className="p-2">100, 45.5, $50</td>
                        <td className="p-2 text-right">Right</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="p-2 font-semibold">Date/Time</td>
                        <td className="p-2">12/05/2024</td>
                        <td className="p-2 text-right">Right</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="mt-4 text-slate-700"><strong>Tip:</strong> If a number is aligned to the left, Excel thinks it's Text. This often happens when importing data.</p>
      </>
    )
  }
];

function BookOpen(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
}
