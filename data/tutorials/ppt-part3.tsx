
import React from 'react';
import { Topic } from './types';
import { Move, PlayCircle, Layers } from 'lucide-react';

const MorphTransitionMockup = () => (
    <div className="my-6 border border-slate-200 rounded-xl p-4 bg-slate-50">
        <h4 className="text-center font-bold text-slate-700 mb-4">The Morph Effect</h4>
        <div className="flex justify-center items-center gap-8">
            {/* Slide 1 */}
            <div className="w-32 h-20 bg-white border border-slate-300 shadow-sm relative p-2">
                <div className="text-[10px] text-slate-400 mb-1">Slide 1</div>
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute top-8 left-4"></div>
            </div>
            
            <div className="text-slate-400 flex flex-col items-center">
                <span className="text-xs italic">Morph</span>
                ➜
            </div>

            {/* Slide 2 */}
            <div className="w-32 h-20 bg-white border border-slate-300 shadow-sm relative p-2">
                <div className="text-[10px] text-slate-400 mb-1">Slide 2</div>
                <div className="w-12 h-12 bg-blue-500 rounded-full absolute top-4 right-4 opacity-50 border-2 border-blue-600"></div>
            </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-4">PowerPoint automatically animates the circle moving and growing.</p>
    </div>
);

const AnimationPaneMockup = () => (
    <div className="my-6 w-64 bg-white border border-slate-300 rounded shadow-sm font-sans text-xs">
        <div className="bg-slate-100 p-2 border-b border-slate-300 font-bold text-slate-700 flex justify-between">
            <span>Animation Pane</span>
            <span>✕</span>
        </div>
        <div className="p-2 space-y-1">
            <div className="flex items-center gap-2 p-1 bg-orange-50 border border-orange-200 rounded">
                <span className="text-green-600 font-bold">1</span>
                <span className="flex-1">Title: Fade</span>
                <div className="w-8 h-1 bg-green-500 rounded"></div>
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-slate-50">
                <span className="text-green-600 font-bold">2</span>
                <span className="flex-1">Picture 4: Fly In</span>
                <div className="w-12 h-1 bg-green-500 rounded"></div>
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-slate-50 pl-6">
                <span className="text-green-600 font-bold"></span>
                <span className="flex-1">Text Box: Zoom</span>
                <div className="w-4 h-1 bg-green-500 rounded"></div>
            </div>
        </div>
    </div>
);

export const PPT_PART3_TOPICS: Topic[] = [
  // 4. Transitions
  {
    id: 'ppt-transitions',
    title: 'Slide Transitions',
    parent: '3. Movement & Life',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Transitions determine how one slide moves to the next.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Subtle:</strong> Fade, Push, Wipe (Professional).</li>
            <li><strong>Exciting:</strong> Curtain, Origami, Airplane (Use sparingly).</li>
            <li><strong>Timing:</strong> Use the "Duration" box to make it faster or slower.</li>
        </ul>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Morph Transition (Game Changer)</h3>
        <p className="mb-4">Morph allows you to animate smooth movement of objects from one slide to the next. It creates a video-like effect.</p>
        <MorphTransitionMockup />
        <p className="mb-4"><strong>How to use:</strong> Duplicate a slide. Move objects around on the second slide. Apply <strong>Morph</strong> transition to the second slide.</p>
      </>
    )
  },

  // 5. Animations
  {
    id: 'ppt-animations',
    title: 'Object Animations',
    parent: '3. Movement & Life',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Animations apply to objects <em>on</em> the slide (text, images, shapes).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-2 border-l-4 border-green-500 bg-green-50">
                <h4 className="font-bold text-green-900 text-sm">Entrance</h4>
                <p className="text-xs">Object appears (e.g., Fly In).</p>
            </div>
            <div className="p-2 border-l-4 border-yellow-500 bg-yellow-50">
                <h4 className="font-bold text-yellow-900 text-sm">Emphasis</h4>
                <p className="text-xs">Draw attention (e.g., Pulse).</p>
            </div>
            <div className="p-2 border-l-4 border-red-500 bg-red-50">
                <h4 className="font-bold text-red-900 text-sm">Exit</h4>
                <p className="text-xs">Object leaves (e.g., Fade Out).</p>
            </div>
            <div className="p-2 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-bold text-blue-900 text-sm">Motion Path</h4>
                <p className="text-xs">Moves A to B.</p>
            </div>
        </div>
      </>
    )
  },
  {
    id: 'ppt-animation-pane',
    title: 'The Animation Pane',
    parent: '3. Movement & Life',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          For complex animations, open the <strong>Animation Pane</strong>. It allows you to reorder and time effects.
        </p>
        <AnimationPaneMockup />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>On Click:</strong> Waits for mouse click.</li>
            <li><strong>With Previous:</strong> Happens at the same time as the item above it.</li>
            <li><strong>After Previous:</strong> Happens automatically after the item above finishes.</li>
        </ul>
        <p className="text-slate-700"><strong>Animation Painter:</strong> Double-click it to copy an animation from one object to many others quickly.</p>
      </>
    )
  }
];
