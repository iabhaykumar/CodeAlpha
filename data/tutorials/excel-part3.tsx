
import React from 'react';
import { Topic } from './types';
import { BarChart3, PieChart } from 'lucide-react';

const ChartMockup = () => (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm my-6 max-w-md mx-auto">
        <div className="flex justify-between items-end h-32 border-b-2 border-slate-300 pb-2 px-4 gap-4">
            <div className="w-8 bg-blue-500 h-[60%] rounded-t-sm relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">60</span>
            </div>
            <div className="w-8 bg-blue-500 h-[80%] rounded-t-sm relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">80</span>
            </div>
            <div className="w-8 bg-blue-500 h-[40%] rounded-t-sm relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">40</span>
            </div>
            <div className="w-8 bg-green-500 h-[95%] rounded-t-sm relative group shadow-md">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-green-700">95</span>
            </div>
        </div>
        <div className="flex justify-between px-4 mt-2 text-xs text-slate-500">
            <span className="w-8 text-center">Q1</span>
            <span className="w-8 text-center">Q2</span>
            <span className="w-8 text-center">Q3</span>
            <span className="w-8 text-center font-bold text-slate-700">Q4</span>
        </div>
        <p className="text-center font-bold text-slate-800 mt-4">Sales Performance</p>
    </div>
);

const ConditionalFormatMockup = () => (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-300 shadow-sm max-w-xs">
        <table className="w-full text-sm text-center">
            <thead className="bg-slate-100 font-bold text-slate-600">
                <tr><th className="py-2">Score</th><th className="py-2">Status</th></tr>
            </thead>
            <tbody>
                <tr className="border-t border-slate-200"><td className="py-2">95</td><td className="py-2 bg-green-200 text-green-900 font-bold rounded m-1 block mx-4">High</td></tr>
                <tr className="border-t border-slate-200"><td className="py-2">45</td><td className="py-2 bg-red-200 text-red-900 font-bold rounded m-1 block mx-4">Low</td></tr>
                <tr className="border-t border-slate-200"><td className="py-2">72</td><td className="py-2 bg-yellow-100 text-yellow-800 font-bold rounded m-1 block mx-4">Avg</td></tr>
            </tbody>
        </table>
    </div>
);

export const EXCEL_PART3_TOPICS: Topic[] = [
  // 3. Visualization & Formatting
  {
    id: 'excel-formatting',
    title: 'Cell Formatting',
    parent: '3. Data Visualization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Good formatting makes data readable.
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
            <li><strong>Number Formats:</strong> Change <code>0.5</code> to <code>50%</code> or <code>$0.50</code> via the Home tab. It changes how data <em>looks</em>, not the value itself.</li>
            <li><strong>Wrap Text:</strong> Forces long text to break into multiple lines within a single cell.</li>
            <li><strong>Merge & Center:</strong> Combines multiple cells into one large cell (often used for titles).</li>
        </ul>
      </>
    )
  },
  {
    id: 'excel-conditional-formatting',
    title: 'Conditional Formatting',
    parent: '3. Data Visualization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Automatically colors cells based on their values. Great for spotting trends or outliers.
        </p>
        <ConditionalFormatMockup />
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">Common Rules</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Highlight Cells Rules:</strong> "Greater Than 100", "Duplicate Values".</li>
            <li><strong>Data Bars:</strong> Adds a progress bar inside the cell.</li>
            <li><strong>Color Scales:</strong> Heatmap style (Green for high, Red for low).</li>
        </ul>
        <p>Go to <strong>Home &gt; Conditional Formatting</strong> to apply.</p>
      </>
    )
  },
  {
    id: 'excel-charts',
    title: 'Charts & Graphs',
    parent: '3. Data Visualization',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Visualizing data helps tell a story. Select your data and go to <strong>Insert &gt; Recommended Charts</strong>.
        </p>
        <ChartMockup />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 font-bold text-slate-700 mb-2"><BarChart3 size={20}/> Column/Bar</div>
                <p className="text-sm text-slate-600">Best for comparing categories (e.g., Sales by Month).</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 font-bold text-slate-700 mb-2"><PieChart size={20}/> Pie Chart</div>
                <p className="text-sm text-slate-600">Best for showing parts of a whole (e.g., Budget Split). Avoid if too many slices.</p>
            </div>
        </div>
        <p className="text-slate-700"><strong>Sparklines:</strong> Tiny charts that fit inside a single cell (Insert &gt; Sparklines).</p>
      </>
    )
  }
];
