
import React from 'react';
import { Topic } from './types';

// FIX: Made children prop optional to resolve TypeScript errors.
const Kbd = ({ children }: { children?: React.ReactNode }) => (
    <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded-md text-xs font-sans text-slate-700 shadow-sm mx-1 min-w-[24px] inline-block text-center">
        {children}
    </kbd>
);

const PresenterViewMockup = () => (
    <div className="bg-black p-4 rounded-xl my-6 border border-slate-700 shadow-2xl">
        <div className="flex gap-4">
            {/* Main Slide */}
            <div className="flex-1">
                <div className="bg-white aspect-video flex items-center justify-center text-black font-bold text-xl rounded">
                    Current Slide
                </div>
                <div className="flex gap-2 mt-4 text-slate-400 text-xs justify-center">
                    <span className="p-2 border border-slate-600 rounded hover:bg-slate-800 cursor-pointer">🖊️</span>
                    <span className="p-2 border border-slate-600 rounded hover:bg-slate-800 cursor-pointer">🔍</span>
                    <span className="p-2 border border-slate-600 rounded hover:bg-slate-800 cursor-pointer">⬛</span>
                </div>
            </div>
            
            {/* Right Panel */}
            <div className="w-1/3 flex flex-col gap-4">
                <div className="bg-white/10 aspect-video flex items-center justify-center text-white text-xs rounded border border-slate-600">
                    Next Slide Preview
                </div>
                <div className="bg-white/5 flex-1 rounded border border-slate-600 p-2">
                    <p className="text-slate-300 text-xs font-bold mb-2">Notes:</p>
                    <p className="text-slate-400 text-[10px] leading-relaxed">
                        Don't forget to mention the Q3 revenue growth stats here. Smile at the audience.
                    </p>
                </div>
            </div>
        </div>
        <div className="text-slate-500 text-xs mt-2 text-center">Presenter View (Audience sees only the left slide)</div>
    </div>
);

export const PPT_PART4_TOPICS: Topic[] = [
  // 6. Delivery
  {
    id: 'ppt-slideshow',
    title: 'Running a Slide Show',
    parent: '4. Delivery',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          It's showtime!
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>From Beginning:</strong> Press <Kbd>F5</Kbd>.</li>
            <li><strong>From Current Slide:</strong> Press <Kbd>Shift</Kbd> + <Kbd>F5</Kbd>.</li>
            <li><strong>Jump to Slide:</strong> Type the slide number (e.g., "5") and press <Kbd>Enter</Kbd>.</li>
            <li><strong>Black Screen:</strong> Press <Kbd>B</Kbd> to pause/blackout screen. Press any key to resume.</li>
            <li><strong>White Screen:</strong> Press <Kbd>W</Kbd> to whiteout screen.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ppt-presenter-view',
    title: 'Presenter View',
    parent: '4. Delivery',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Presenter View is your dashboard. It requires two screens (your laptop + a projector).
        </p>
        <PresenterViewMockup />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Timer:</strong> Shows elapsed time.</li>
            <li><strong>Notes:</strong> Read your script without the audience seeing.</li>
            <li><strong>Laser Pointer:</strong> Hold <Kbd>Ctrl</Kbd> + Left Click to turn mouse into a laser dot.</li>
            <li><strong>Pen Tool:</strong> Press <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd> to draw on slides.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ppt-export',
    title: 'Export & Handouts',
    parent: '4. Delivery',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Sharing your presentation.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Create PDF:</strong> File &gt; Export &gt; Create PDF/XPS. Good for emailing.</li>
            <li><strong>Create Video:</strong> File &gt; Export &gt; Create a Video. Records timings, narrations, and laser pointer movements into an MP4 file.</li>
            <li><strong>Print Handouts:</strong> File &gt; Print. Under settings, choose "3 Slides". This prints 3 slides per page with lines for audience notes.</li>
        </ul>
      </>
    )
  },

  // 7. Shortcuts
  {
    id: 'ppt-shortcuts',
    title: 'Essential Shortcuts',
    parent: '5. Reference',
    content: (
      <>
        <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-slate-100">
                <tr>
                    <th className="p-3 font-bold border-b text-slate-700">Action</th>
                    <th className="p-3 font-bold border-b text-slate-700">Shortcut</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b border-slate-100"><td>New Slide</td><td><Kbd>Ctrl</Kbd>+<Kbd>M</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Duplicate Slide</td><td><Kbd>Ctrl</Kbd>+<Kbd>D</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Start Show</td><td><Kbd>F5</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Show from Current</td><td><Kbd>Shift</Kbd>+<Kbd>F5</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Pen Tool</td><td><Kbd>Ctrl</Kbd>+<Kbd>P</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Arrow Pointer</td><td><Kbd>Ctrl</Kbd>+<Kbd>A</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Laser Pointer</td><td><Kbd>Ctrl</Kbd>+<Kbd>L</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>Black Screen</td><td><Kbd>B</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>White Screen</td><td><Kbd>W</Kbd></td></tr>
                <tr className="border-b border-slate-100"><td>End Show</td><td><Kbd>Esc</Kbd></td></tr>
            </tbody>
        </table>
      </>
    )
  }
];