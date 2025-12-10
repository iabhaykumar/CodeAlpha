import React from 'react';
import { Topic } from './types';
import { FileText, Layout, Grid } from 'lucide-react';

const PageLayoutMockup = () => (
    <div className="flex gap-4 my-6 justify-center">
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-16 h-20 bg-white border-2 border-slate-300 group-hover:border-blue-500 shadow-sm relative">
                <div className="absolute top-2 left-2 right-2 h-1 bg-slate-200"></div>
                <div className="absolute top-4 left-2 right-2 bottom-2 bg-slate-100"></div>
            </div>
            <span className="text-xs font-medium text-slate-600 group-hover:text-blue-600">Portrait</span>
        </div>
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-16 bg-white border-2 border-slate-300 group-hover:border-blue-500 shadow-sm relative mt-2">
                <div className="absolute top-2 left-2 right-2 h-1 bg-slate-200"></div>
                <div className="absolute top-4 left-2 right-2 bottom-2 bg-slate-100"></div>
            </div>
            <span className="text-xs font-medium text-slate-600 group-hover:text-blue-600">Landscape</span>
        </div>
    </div>
);

const TableMockup = () => (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-300 shadow-sm">
        <table className="w-full text-sm text-left">
            <thead className="bg-[#2b579a] text-white">
                <tr>
                    <th className="px-4 py-2 border-r border-white/20">Name</th>
                    <th className="px-4 py-2 border-r border-white/20">Role</th>
                    <th className="px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b border-slate-200">
                    <td className="px-4 py-2 border-r border-slate-200">Alex Johnson</td>
                    <td className="px-4 py-2 border-r border-slate-200">Developer</td>
                    <td className="px-4 py-2 text-green-600 font-medium">Active</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                    <td className="px-4 py-2 border-r border-slate-200">Sam Smith</td>
                    <td className="px-4 py-2 border-r border-slate-200">Designer</td>
                    <td className="px-4 py-2 text-orange-500 font-medium">Away</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const WrappingMockup = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="p-3 bg-white border border-slate-200 rounded text-center text-xs">
            <div className="mb-2 mx-auto w-8 h-8 bg-slate-300 relative flex items-center justify-center">
                <FileText size={20} className="text-slate-500 absolute" />
                <div className="w-4 h-4 bg-blue-500 z-10 opacity-80"></div>
            </div>
            In Line
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded text-center text-xs">
            <div className="mb-2 mx-auto w-8 h-8 bg-slate-300 relative p-1">
                <div className="w-full h-0.5 bg-slate-500 mb-0.5"></div>
                <div className="w-full h-0.5 bg-slate-500 mb-0.5"></div>
                <div className="w-3 h-3 bg-blue-500 float-left mr-1"></div>
                <div className="w-full h-0.5 bg-slate-500 mb-0.5"></div>
            </div>
            Square
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded text-center text-xs">
            <div className="mb-2 mx-auto w-8 h-8 bg-slate-300 relative flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 z-0"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-1">
                    <div className="w-full h-px bg-slate-800"></div>
                    <div className="w-full h-px bg-slate-800"></div>
                    <div className="w-full h-px bg-slate-800"></div>
                </div>
            </div>
            Behind Text
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded text-center text-xs">
            <div className="mb-2 mx-auto w-8 h-8 bg-slate-300 relative flex items-center justify-center">
                <div className="absolute inset-0 flex flex-col justify-between p-1">
                    <div className="w-full h-px bg-slate-400"></div>
                    <div className="w-full h-px bg-slate-400"></div>
                    <div className="w-full h-px bg-slate-400"></div>
                </div>
                <div className="w-4 h-4 bg-blue-500 z-10 shadow-md"></div>
            </div>
            In Front
        </div>
    </div>
);

export const WORD_PART2_TOPICS: Topic[] = [
  // 3. Page Layout & Design
  {
    id: 'word-page-setup',
    title: 'Page Setup',
    parent: '3. Page Layout & Design',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Located in the <strong>Layout</strong> tab. This controls the physical appearance of your document.
        </p>
        <PageLayoutMockup />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Margins:</strong> White space around the edges (Normal, Narrow, Wide).</li>
            <li><strong>Orientation:</strong> Portrait (Vertical) vs Landscape (Horizontal).</li>
            <li><strong>Size:</strong> Paper size (Letter, A4, Legal).</li>
            <li><strong>Columns:</strong> Split text into 2 or more columns (Newspaper style).</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-breaks',
    title: 'Page & Section Breaks',
    parent: '3. Page Layout & Design',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Breaks allow you to separate content logic.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Page Breaks (Ctrl + Enter)</h3>
        <p className="mb-4">Forces text to jump to the next page immediately. <span className="bg-red-100 text-red-800 px-1 rounded">Do not press "Enter" repeatedly</span> to move to a new page, as editing text above will mess up your layout.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Section Breaks</h3>
        <p className="mb-4">Allows you to have different formatting in the same document.</p>
        <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 text-sm font-mono text-slate-600">
            [ Page 1: Portrait ] <br/>
            --- Section Break (Next Page) --- <br/>
            [ Page 2: Landscape ]
        </div>
      </>
    )
  },
  {
    id: 'word-headers-footers',
    title: 'Headers & Footers',
    parent: '3. Page Layout & Design',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Double-click the very top or bottom of a page to open the <strong>Header & Footer</strong> editing mode.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Page Numbers:</strong> Can be automated (Page X of Y).</li>
            <li><strong>Different First Page:</strong> Removes header/footer from the Cover Page.</li>
            <li><strong>Link to Previous:</strong> Turn this OFF if you want Chapter 2 header to be different from Chapter 1.</li>
        </ul>
      </>
    )
  },
  
  // 4. Tables
  {
    id: 'word-tables-create',
    title: 'Creating Tables',
    parent: '4. Tables',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Tables are great for organizing data. Go to <strong>Insert &gt; Table</strong>.
        </p>
        <TableMockup />
        <p className="mb-4">Once a table is created, you get two new tabs: <strong>Table Design</strong> (Colors, Borders) and <strong>Layout</strong> (Merge cells, Alignment, Sort).</p>
      </>
    )
  },
  {
    id: 'word-tables-layout',
    title: 'Table Design & Layout',
    parent: '4. Tables',
    content: (
      <>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Table Design</h3>
        <p className="mb-4">Use "Table Styles" to instantly color your table. Check "Header Row" or "Banded Rows" to toggle specific formatting.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Layout Tab</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Merge Cells:</strong> Combine multiple cells into one (for headers).</li>
            <li><strong>Split Cells:</strong> Divide a cell.</li>
            <li><strong>Repeat Header Rows:</strong> If a table spans multiple pages, this repeats the top row on every page automatically.</li>
            <li><strong>Convert to Text:</strong> Turns a table back into normal paragraphs.</li>
        </ul>
      </>
    )
  },

  // 5. Illustrations & Graphics
  {
    id: 'word-images',
    title: 'Pictures & Text Wrapping',
    parent: '5. Graphics & Media',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Insert &gt; Pictures</strong>. The most important concept with images in Word is <strong>Wrapping</strong>.
        </p>
        <WrappingMockup />
        <p className="mb-4">By default, images are "In Line with Text" (stuck). Switch to <strong>Square</strong> or <strong>Tight</strong> to move them freely around the page.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Picture Format Tab</h3>
        <p className="mb-4">Use this tab to:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Remove Background</li>
            <li>Crop</li>
            <li>Add Borders or Shadows</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-shapes-smartart',
    title: 'Shapes & SmartArt',
    parent: '5. Graphics & Media',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
            <li><strong>Shapes:</strong> Draw arrows, boxes, callouts. You can type text directly inside any shape.</li>
            <li><strong>SmartArt:</strong> Pre-made diagrams for processes, hierarchies (Org Charts), and lists. They auto-resize text and shapes.</li>
            <li><strong>Icons:</strong> Insert SVG icons from Microsoft's library (Insert &gt; Icons).</li>
        </ul>
      </>
    )
  }
];