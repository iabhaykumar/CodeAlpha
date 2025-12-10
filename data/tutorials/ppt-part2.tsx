
import React from 'react';
import { Topic } from './types';
import { Image, Shapes, Video, Music } from 'lucide-react';

const DesignIdeasMockup = () => (
    <div className="flex flex-col md:flex-row gap-4 my-6">
        <div className="flex-1 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-slate-700 mb-2">Original Slide</h4>
            <div className="bg-slate-100 h-32 flex flex-col items-center justify-center p-4 border border-slate-300">
                <div className="text-lg font-bold">Project Plan</div>
                <ul className="list-disc pl-4 text-xs mt-2">
                    <li>Phase 1</li>
                    <li>Phase 2</li>
                    <li>Phase 3</li>
                </ul>
            </div>
        </div>
        <div className="flex items-center justify-center text-slate-400">➜</div>
        <div className="flex-1 bg-white border border-blue-200 p-4 rounded-lg shadow-md ring-2 ring-blue-100">
            <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">✨ Designer AI</h4>
            <div className="bg-slate-800 h-32 flex flex-row items-center p-4 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-20 h-full bg-blue-500 skew-x-12 opacity-50"></div>
                <div className="z-10 flex-1">
                    <div className="text-lg font-bold text-blue-300">Project Plan</div>
                </div>
                <div className="z-10 text-xs text-right">
                    <div className="bg-white/20 p-1 mb-1 rounded">Phase 1</div>
                    <div className="bg-white/20 p-1 mb-1 rounded">Phase 2</div>
                    <div className="bg-white/20 p-1 rounded">Phase 3</div>
                </div>
            </div>
        </div>
    </div>
);

const SmartArtMockup = () => (
    <div className="my-6 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 justify-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">Step 1</div>
            <div className="h-1 w-8 bg-slate-300"></div>
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">Step 2</div>
            <div className="h-1 w-8 bg-slate-300"></div>
            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">Step 3</div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-4">Process SmartArt Graphic</p>
    </div>
);

export const PPT_PART2_TOPICS: Topic[] = [
  // 2. Design & Themes
  {
    id: 'ppt-design-themes',
    title: 'Themes & Designer (AI)',
    parent: '2. Design & Graphics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Make your slides look professional instantly.
        </p>
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Design Tab</h3>
        <p className="mb-4">Select a <strong>Theme</strong> to apply a consistent set of colors, fonts, and effects. Use <strong>Variants</strong> (to the right of Themes) to change the color palette of the selected theme.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Designer Pane (AI)</h3>
        <p className="mb-4">PowerPoint's best modern feature. Just add an image and some text, and the <strong>Designer</strong> pane will automatically generate professional layouts.</p>
        <DesignIdeasMockup />
        <p className="text-sm text-slate-600">Tip: Requires an internet connection.</p>
      </>
    )
  },
  
  // 3. Visuals
  {
    id: 'ppt-images-shapes',
    title: 'Images & Shapes',
    parent: '2. Design & Graphics',
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg">
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Image size={20}/> Images</h4>
                <p className="text-sm mb-2">Insert from Device or Online Pictures.</p>
                <ul className="list-disc pl-4 text-xs text-slate-600">
                    <li><strong>Remove Background:</strong> Picture Format &gt; Remove Background.</li>
                    <li><strong>Crop to Shape:</strong> Crop an image into a circle or arrow easily.</li>
                </ul>
            </div>
            <div className="p-4 border rounded-lg">
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2"><Shapes size={20}/> Shapes</h4>
                <p className="text-sm mb-2">Draw boxes, arrows, and icons.</p>
                <ul className="list-disc pl-4 text-xs text-slate-600">
                    <li><strong>Merge Shapes:</strong> Combine, Fragment, or Intersect multiple shapes to create custom graphics (Shape Format &gt; Merge Shapes).</li>
                </ul>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'ppt-smartart',
    title: 'SmartArt',
    parent: '2. Design & Graphics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          SmartArt converts boring bullet points into visual diagrams.
        </p>
        <SmartArtMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Convert to SmartArt</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li>Type your list (e.g., Step 1, Step 2, Step 3).</li>
            <li>Right-click the text box.</li>
            <li>Select <strong>Convert to SmartArt</strong>.</li>
            <li>Choose a layout (Process, Cycle, Hierarchy).</li>
        </ol>
      </>
    )
  },
  {
    id: 'ppt-media',
    title: 'Video & Audio',
    parent: '2. Design & Graphics',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Insert &gt; Video / Audio.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
            <li><strong>Video Formatting:</strong> You can add a border, shadow, or even crop a video just like an image.</li>
            <li><strong>Trim Video:</strong> Right-click &gt; Trim. Useful to show only a specific clip.</li>
            <li><strong>Playback Options:</strong> Set video to start "Automatically" or "When Clicked". Check "Loop until stopped" for background videos.</li>
            <li><strong>Screen Recording:</strong> Insert &gt; Screen Recording allows you to record your desktop and embed it directly into the slide.</li>
        </ul>
      </>
    )
  }
];
