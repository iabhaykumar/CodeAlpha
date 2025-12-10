import React from 'react';
import { Topic } from './types';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Search, Scissors, Copy, Clipboard, Type } from 'lucide-react';

// UI Helper Components
const RibbonMockup = () => (
  <div className="bg-[#f3f2f1] border border-slate-300 rounded-lg overflow-hidden font-sans mb-6 shadow-sm select-none">
    {/* Window Title Bar */}
    <div className="bg-[#2b579a] text-white px-4 py-1 text-xs flex justify-between items-center">
      <span>AutoSave <span className="opacity-50">Off</span></span>
      <span className="font-semibold">Document1 - Word</span>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
      </div>
    </div>
    {/* Tabs */}
    <div className="bg-[#2b579a] text-white flex px-2 pt-2 text-sm gap-1">
      <div className="px-3 py-1 bg-[#f3f2f1] text-[#2b579a] rounded-t-md font-medium border-t border-x border-[#f3f2f1]">Home</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Insert</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Layout</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">References</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Review</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">View</div>
    </div>
    {/* Ribbon Groups */}
    <div className="bg-[#f3f2f1] p-2 flex gap-2 h-24 border-b border-slate-300 overflow-x-auto">
      {/* Clipboard Group */}
      <div className="flex flex-col items-center justify-between px-2 border-r border-slate-300 min-w-[60px]">
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-200 p-1 rounded">
          <Clipboard size={24} className="text-slate-600" />
          <span className="text-[10px]">Paste</span>
        </div>
        <div className="flex gap-1 text-slate-600">
            <Scissors size={14} />
            <Copy size={14} />
        </div>
        <span className="text-[10px] text-slate-500 mt-auto">Clipboard</span>
      </div>
      
      {/* Font Group */}
      <div className="flex flex-col px-2 border-r border-slate-300 min-w-[140px]">
        <div className="flex gap-2 mb-1">
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-24 flex justify-between items-center rounded-sm">Calibri (Body) <span className="text-[8px]">▼</span></div>
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-10 flex justify-between items-center rounded-sm">11 <span className="text-[8px]">▼</span></div>
        </div>
        <div className="flex gap-1 mb-1">
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 font-bold bg-slate-300"><Bold size={14}/></button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 italic"><Italic size={14}/></button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 underline decoration-2"><Underline size={14}/></button>
            <div className="w-px h-4 bg-slate-300 mx-1"></div>
            <button className="p-1 hover:bg-slate-200 rounded text-red-600 font-bold border-b-4 border-red-600 leading-3 h-6 flex items-center">A</button>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto text-center">Font</span>
      </div>

      {/* Paragraph Group */}
      <div className="flex flex-col px-2 border-r border-slate-300 min-w-[120px]">
        <div className="flex gap-1 mb-2">
            <AlignLeft size={16} className="text-slate-700 p-0.5 bg-slate-300 rounded-sm" />
            <AlignCenter size={16} className="text-slate-700 p-0.5" />
            <AlignRight size={16} className="text-slate-700 p-0.5" />
            <AlignJustify size={16} className="text-slate-700 p-0.5" />
        </div>
        <span className="text-[10px] text-slate-500 mt-auto text-center">Paragraph</span>
      </div>
      
      {/* Styles Group */}
      <div className="flex flex-col px-2 min-w-[150px]">
         <div className="flex gap-1 overflow-hidden h-14">
            <div className="bg-white border border-slate-300 p-1 w-16 text-center shadow-sm">
                <span className="text-[10px] block font-bold">AaBbCc</span>
                <span className="text-[10px]">Normal</span>
            </div>
            <div className="bg-white border border-slate-300 p-1 w-16 text-center shadow-sm">
                <span className="text-[10px] block font-bold text-[#2b579a]">AaBbCc</span>
                <span className="text-[10px]">Heading 1</span>
            </div>
         </div>
         <span className="text-[10px] text-slate-500 mt-auto text-center">Styles</span>
      </div>
    </div>
  </div>
);

const FormattingToolbar = () => (
    <div className="bg-white p-3 rounded-lg shadow-md border border-slate-200 inline-flex items-center gap-2 mb-4">
        <select className="text-sm border border-slate-300 rounded px-1 py-0.5 bg-slate-50">
            <option>Calibri</option>
            <option>Arial</option>
            <option>Times New Roman</option>
        </select>
        <select className="text-sm border border-slate-300 rounded px-1 py-0.5 bg-slate-50 w-12">
            <option>11</option>
            <option>12</option>
            <option>14</option>
        </select>
        <div className="h-4 w-px bg-slate-300 mx-1"></div>
        <button className="p-1 hover:bg-slate-100 rounded font-bold">B</button>
        <button className="p-1 hover:bg-slate-100 rounded italic">I</button>
        <button className="p-1 hover:bg-slate-100 rounded underline">U</button>
        <div className="h-4 w-px bg-slate-300 mx-1"></div>
        <button className="p-1 hover:bg-slate-100 rounded flex items-center"><Type size={14}/></button>
    </div>
);

export const WORD_PART1_TOPICS: Topic[] = [
  // 1. Getting Started
  {
    id: 'word-intro-interface',
    title: 'Interface & Backstage View',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Microsoft Word 2021 introduces a cleaner, more modern look. Understanding the interface is the first step to mastery.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The Ribbon Interface</h3>
        <p className="mb-4">The Ribbon is the command center of Word. It organizes tools into Tabs and Groups.</p>
        <RibbonMockup />
        
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Tabs:</strong> (e.g., Home, Insert) sit at the top.</li>
            <li><strong>Groups:</strong> (e.g., Clipboard, Font) organize related commands.</li>
            <li><strong>Dialog Launcher:</strong> Tiny arrow in the bottom-right of some groups (opens advanced options).</li>
        </ul>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">File Tab (Backstage View)</h3>
        <p className="mb-4">Clicking <strong>File</strong> takes you to the Backstage View. This is where you manage the <em>file</em> itself, not the content.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#2b579a] text-white p-6 rounded-l-xl flex flex-col gap-4">
                <div className="font-bold text-xl mb-2">File</div>
                <div className="p-2 bg-white/10 rounded cursor-pointer">Home</div>
                <div className="p-2 hover:bg-white/10 rounded cursor-pointer">New</div>
                <div className="p-2 hover:bg-white/10 rounded cursor-pointer">Open</div>
                <div className="h-px bg-white/20 my-1"></div>
                <div className="p-2 hover:bg-white/10 rounded cursor-pointer">Save / Save As</div>
                <div className="p-2 hover:bg-white/10 rounded cursor-pointer">Print</div>
                <div className="p-2 hover:bg-white/10 rounded cursor-pointer">Export (PDF)</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-r-xl border border-slate-200 flex flex-col justify-center items-center text-slate-500">
                <div className="text-4xl mb-2">📄</div>
                <p>Recent Documents List</p>
                <p className="text-xs mt-2">Open recently edited files quickly.</p>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'word-text-basics',
    title: 'Text Basics & Selection',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Entering and selecting text efficiently is crucial for speed.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
            <h4 className="font-bold text-yellow-900 mb-2">Visual Selection Guide</h4>
            <div className="font-mono text-sm space-y-2 bg-white p-3 rounded border border-yellow-200 text-slate-700">
                <p><span className="bg-blue-200">Double-Click</span> selects a <span className="bg-blue-200">word</span>.</p>
                <p><span className="bg-blue-200">Triple-Click</span> selects an entire <span className="bg-blue-200">paragraph</span>.</p>
                <p><span className="bg-blue-200">Ctrl + Click</span> anywhere in a sentence <span className="bg-blue-200">selects the whole sentence.</span></p>
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Selection Bar</h3>
        <p className="mb-4">The white space in the left margin is the "Selection Bar".</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Click once:</strong> Selects the line.</li>
            <li><strong>Click twice:</strong> Selects the paragraph.</li>
            <li><strong>Click thrice:</strong> Selects the entire document.</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-editing-basics',
    title: 'Cut, Copy, Paste & Find',
    parent: '1. Getting Started',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Clipboard Operations</h3>
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Scissors className="mx-auto mb-2 text-slate-600" size={24} />
                <div className="font-bold text-slate-800">Cut</div>
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Ctrl + X</code>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Copy className="mx-auto mb-2 text-slate-600" size={24} />
                <div className="font-bold text-slate-800">Copy</div>
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Ctrl + C</code>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Clipboard className="mx-auto mb-2 text-slate-600" size={24} />
                <div className="font-bold text-slate-800">Paste</div>
                <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Ctrl + V</code>
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Find and Replace</h3>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
                <Search size={16} className="text-slate-500" />
                <span className="font-semibold text-slate-700">Find what:</span>
                <input type="text" value="CodeAlpha" readOnly className="border border-slate-300 rounded px-2 py-1 text-sm bg-white text-slate-600" />
            </div>
            <div className="flex items-center gap-2">
                <Type size={16} className="text-slate-500" />
                <span className="font-semibold text-slate-700">Replace with:</span>
                <input type="text" value="Best Internship" readOnly className="border border-slate-300 rounded px-2 py-1 text-sm bg-white text-slate-600" />
            </div>
            <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm text-xs font-medium">Replace</button>
                <button className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm text-xs font-medium">Replace All</button>
            </div>
        </div>
      </>
    )
  },

  // 2. Formatting
  {
    id: 'word-font-formatting',
    title: 'Formatting Text',
    parent: '2. Formatting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The <strong>Mini Toolbar</strong> appears when you select text, but the main tools are in the Home tab.
        </p>
        <FormattingToolbar />
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>Font Face & Size:</strong> Change the typeface (e.g., Calibri) and size (e.g., 11pt).</li>
            <li><strong>Styles:</strong> <strong>B</strong> (Bold), <em>I</em> (Italic), <u>U</u> (Underline).</li>
            <li><strong>Strikethrough:</strong> <span className="line-through">Crosses out text</span>.</li>
            <li><strong>Subscript (x₂):</strong> H₂O.</li>
            <li><strong>Superscript (x²):</strong> E=mc².</li>
            <li><strong>Text Effects:</strong> Adds shadow, glow, or reflection.</li>
            <li><strong>Highlight Color:</strong> <span className="bg-yellow-200 px-1">Adds a background color.</span></li>
            <li><strong>Font Color:</strong> <span className="text-red-500">Changes the text color.</span></li>
        </ul>
      </>
    )
  },
  {
    id: 'word-paragraph-formatting',
    title: 'Paragraph Formatting',
    parent: '2. Formatting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Control alignment, spacing, and indentation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <div className="bg-white border p-3 rounded text-center">
                <AlignLeft className="mx-auto mb-1" />
                <span className="text-xs">Left Align</span>
            </div>
            <div className="bg-white border p-3 rounded text-center">
                <AlignCenter className="mx-auto mb-1" />
                <span className="text-xs">Center</span>
            </div>
            <div className="bg-white border p-3 rounded text-center">
                <AlignRight className="mx-auto mb-1" />
                <span className="text-xs">Right Align</span>
            </div>
            <div className="bg-white border p-3 rounded text-center">
                <AlignJustify className="mx-auto mb-1" />
                <span className="text-xs">Justify</span>
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Line Spacing</h3>
        <p className="mb-4">Use the line spacing tool to switch between 1.0 (Single), 1.5, or 2.0 (Double) spacing. Adding "Space After Paragraph" makes text easier to read without hitting Enter twice.</p>
      </>
    )
  },
  {
    id: 'word-lists',
    title: 'Bullets & Numbering',
    parent: '2. Formatting',
    content: (
      <>
        <div className="flex gap-8 my-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div>
                <h4 className="font-bold text-sm mb-2 text-slate-500 uppercase">Unordered List</h4>
                <ul className="list-disc pl-5 text-slate-700">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Oranges</li>
                </ul>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div>
                <h4 className="font-bold text-sm mb-2 text-slate-500 uppercase">Ordered List</h4>
                <ol className="list-decimal pl-5 text-slate-700">
                    <li>Wake up</li>
                    <li>Brush teeth</li>
                    <li>Code</li>
                </ol>
            </div>
        </div>
        <p className="mb-4 text-slate-700">
            <strong>Multilevel List:</strong> Use the <strong>Tab</strong> key to indent (move to next level) and <strong>Shift + Tab</strong> to outdent (move back).
        </p>
      </>
    )
  },
  {
    id: 'word-styles',
    title: 'Using Styles (Crucial)',
    parent: '2. Formatting',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Styles</strong> are the most powerful formatting tool in Word. Located in the <strong>Home</strong> tab &gt; <strong>Styles</strong> gallery.
        </p>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 my-4 flex items-center gap-4">
            <div className="text-4xl text-blue-500 font-serif font-bold">Aa</div>
            <div>
                <h4 className="font-bold text-blue-900">Why Styles?</h4>
                <ul className="text-sm text-blue-800 list-disc pl-4 mt-1">
                    <li>One-click formatting for Headings.</li>
                    <li>Automatically generates Table of Contents.</li>
                    <li>Change document "Theme" instantly.</li>
                </ul>
            </div>
        </div>
        <p className="text-slate-700"><strong>Pro Tip:</strong> Right-click "Heading 1" in the styles gallery and choose "Modify" to change the font/color for ALL Heading 1s in your document at once.</p>
      </>
    )
  }
];