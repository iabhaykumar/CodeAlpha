
import React from 'react';
import { Topic } from './types';
import { LayoutTemplate, PlusSquare, Palette, Type } from 'lucide-react';

// UI Helper: PowerPoint Ribbon Mockup
const PptRibbonMockup = () => (
  <div className="bg-[#f3f2f1] border border-slate-300 rounded-lg overflow-hidden font-sans mb-6 shadow-sm select-none">
    {/* Window Title Bar */}
    <div className="bg-[#C43E1C] text-white px-4 py-1 text-xs flex justify-between items-center">
      <span>AutoSave <span className="opacity-50">On</span></span>
      <span className="font-semibold">Presentation1 - PowerPoint</span>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-white/20"></span>
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
      </div>
    </div>
    {/* Tabs */}
    <div className="bg-[#C43E1C] text-white flex px-2 pt-2 text-sm gap-1">
      <div className="px-3 py-1 bg-[#f3f2f1] text-[#C43E1C] rounded-t-md font-medium border-t border-x border-[#f3f2f1]">Home</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Insert</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Design</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Transitions</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Animations</div>
      <div className="px-3 py-1 hover:bg-white/10 rounded-t-md cursor-pointer">Slide Show</div>
    </div>
    {/* Ribbon Groups */}
    <div className="bg-[#f3f2f1] p-2 flex gap-2 h-24 border-b border-slate-300 overflow-x-auto">
      {/* Slides Group */}
      <div className="flex flex-col items-center justify-between px-2 border-r border-slate-300 min-w-[80px]">
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-slate-200 p-1 rounded">
          <div className="bg-white border border-slate-400 w-6 h-4 relative shadow-sm">
             <div className="absolute top-0 left-0 w-2 h-4 bg-orange-100 border-r border-slate-200"></div>
             <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-0.5"><PlusSquare size={8} color="white"/></div>
          </div>
          <span className="text-[10px] text-center leading-tight">New<br/>Slide</span>
        </div>
        <div className="flex gap-2 text-slate-600 text-[10px]">
            <span>Layout</span>
            <span>Reset</span>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto">Slides</span>
      </div>
      
      {/* Font Group */}
      <div className="flex flex-col px-2 border-r border-slate-300 min-w-[140px]">
        <div className="flex gap-2 mb-1">
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-24 flex justify-between items-center rounded-sm">Calibri Light <span className="text-[8px]">▼</span></div>
            <div className="bg-white border border-slate-300 px-2 py-0.5 text-xs w-10 flex justify-between items-center rounded-sm">60 <span className="text-[8px]">▼</span></div>
        </div>
        <div className="flex gap-1 mb-1">
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 font-bold">B</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 italic">I</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 underline">U</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-700 font-serif font-bold drop-shadow-sm">S</button>
            <div className="w-px h-4 bg-slate-300 mx-1"></div>
            <button className="p-1 hover:bg-slate-200 rounded text-red-600 font-bold border-b-4 border-red-600 leading-3 h-6 flex items-center">A</button>
        </div>
        <span className="text-[10px] text-slate-500 mt-auto text-center">Font</span>
      </div>

      {/* Drawing Group */}
      <div className="flex flex-col px-2 min-w-[150px]">
         <div className="flex gap-1 overflow-hidden h-14 bg-white border border-slate-200 p-1">
            <div className="w-8 h-8 border border-slate-300 flex items-center justify-center text-[10px]">A</div>
            <div className="w-8 h-8 border border-slate-300 rounded-full"></div>
            <div className="w-8 h-8 border border-slate-300"></div>
            <div className="w-8 h-8 border border-slate-300 transform rotate-45"></div>
         </div>
         <span className="text-[10px] text-slate-500 mt-auto text-center">Drawing</span>
      </div>
    </div>
  </div>
);

// UI Helper: Normal View Mockup
const NormalViewMockup = () => (
    <div className="flex h-64 border border-slate-300 rounded-lg overflow-hidden bg-slate-100 font-sans text-xs mb-6 shadow-sm">
        {/* Thumbnails */}
        <div className="w-32 bg-slate-200 border-r border-slate-300 p-2 flex flex-col gap-3 overflow-y-auto">
            <div className="flex gap-2">
                <span className="text-slate-500 font-bold">1</span>
                <div className="w-20 h-12 bg-white border-2 border-[#C43E1C] shadow-sm flex flex-col items-center justify-center p-1">
                    <div className="w-10 h-1 bg-slate-800 mb-1"></div>
                    <div className="w-14 h-0.5 bg-slate-400"></div>
                </div>
            </div>
            <div className="flex gap-2">
                <span className="text-slate-500 font-bold">2</span>
                <div className="w-20 h-12 bg-white border border-slate-300 shadow-sm flex flex-col p-1">
                    <div className="w-16 h-1 bg-slate-800 mb-1"></div>
                    <div className="flex gap-1 mt-1">
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <div className="w-10 h-0.5 bg-slate-300"></div>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        <div className="w-10 h-0.5 bg-slate-300"></div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Main Slide */}
        <div className="flex-1 bg-slate-100 flex items-center justify-center p-8">
            <div className="bg-white w-full h-full shadow-lg p-8 flex flex-col items-center justify-center border border-slate-200">
                <div className="border-2 border-dashed border-slate-300 p-2 mb-4 w-3/4 text-center">
                    <h1 className="text-2xl font-bold text-slate-800">Click to add title</h1>
                </div>
                <div className="border-2 border-dashed border-slate-300 p-2 w-1/2 text-center">
                    <p className="text-slate-400">Click to add subtitle</p>
                </div>
            </div>
        </div>
    </div>
);

export const PPT_PART1_TOPICS: Topic[] = [
  // 1. Introduction
  {
    id: 'ppt-intro-interface',
    title: 'Interface & Views',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Microsoft PowerPoint is the industry standard for creating presentations.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">The PowerPoint Interface</h3>
        <PptRibbonMockup />
        
        <p className="mb-4">The layout is divided into three main areas:</p>
        <NormalViewMockup />
        
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Thumbnails Pane (Left):</strong> Quick navigation and reordering of slides.</li>
            <li><strong>Slide Pane (Center):</strong> The main workspace where you edit content.</li>
            <li><strong>Notes Pane (Bottom):</strong> Add speaker notes that only you can see during presentation.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ppt-slides-layouts',
    title: 'Adding Slides & Layouts',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Not all slides are the same. PowerPoint provides layouts for different purposes.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">New Slide (<kbd className="bg-slate-100 border border-slate-300 rounded px-1 text-xs">Ctrl</kbd> + <kbd className="bg-slate-100 border border-slate-300 rounded px-1 text-xs">M</kbd>)</h3>
        <p className="mb-4">Click the bottom half of the <strong>New Slide</strong> button to choose a specific layout immediately.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="p-3 bg-white border border-slate-200 rounded text-center hover:shadow-md cursor-pointer">
                <div className="h-16 bg-slate-50 border border-slate-100 mb-2 flex flex-col justify-center items-center p-2 gap-2">
                    <div className="w-10 h-1 bg-slate-800"></div>
                    <div className="w-8 h-0.5 bg-slate-400"></div>
                </div>
                <span className="text-xs font-bold text-slate-600">Title Slide</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded text-center hover:shadow-md cursor-pointer">
                <div className="h-16 bg-slate-50 border border-slate-100 mb-2 flex flex-col p-2 gap-1">
                    <div className="w-8 h-1 bg-slate-800 mx-auto"></div>
                    <div className="w-full h-full border border-dashed border-slate-300"></div>
                </div>
                <span className="text-xs font-bold text-slate-600">Title & Content</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded text-center hover:shadow-md cursor-pointer">
                <div className="h-16 bg-slate-50 border border-slate-100 mb-2 flex flex-col p-2 gap-1">
                    <div className="w-8 h-1 bg-slate-800 mx-auto"></div>
                    <div className="flex gap-1 h-full">
                        <div className="w-1/2 border border-dashed border-slate-300"></div>
                        <div className="w-1/2 border border-dashed border-slate-300"></div>
                    </div>
                </div>
                <span className="text-xs font-bold text-slate-600">Two Content</span>
            </div>
        </div>
        <p className="text-slate-700"><strong>Reset Button:</strong> If you've messed up the position of text boxes, click <strong>Reset</strong> in the Home tab to snap everything back to the default layout.</p>
      </>
    )
  },
  {
    id: 'ppt-text-formatting',
    title: 'Working with Text',
    parent: '1. Getting Started',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          PowerPoint uses "Text Boxes" and "Placeholders". You cannot type directly on the slide background.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-6 text-slate-700">
            <li><strong>AutoFit:</strong> If you type too much text, PowerPoint automatically shrinks the font size to fit the box. You can turn this off in the bottom-left icon that appears.</li>
            <li><strong>Lists:</strong> Use Bullets or Numbering for clarity. Don't write paragraphs on slides!</li>
            <li><strong>Format Painter:</strong> Double-click the Format Painter icon to apply the same style to multiple text boxes in a row.</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <h4 className="font-bold text-yellow-900 mb-1">The 6x6 Rule</h4>
            <p className="text-yellow-800 text-sm">For better presentations, aim for no more than 6 bullet points per slide, and no more than 6 words per bullet point.</p>
        </div>
      </>
    )
  }
];
