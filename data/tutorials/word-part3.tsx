import React from 'react';
import { Topic } from './types';
import { List, CheckSquare, Edit3 } from 'lucide-react';

const TOCMockup = () => (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm font-serif my-6 max-w-md mx-auto">
        <h3 className="text-center font-bold text-lg mb-4 uppercase">Table of Contents</h3>
        <div className="space-y-2 text-sm">
            <div className="flex justify-between items-baseline group cursor-pointer hover:bg-slate-50">
                <span className="font-bold">1. Introduction</span>
                <span className="flex-1 border-b border-dotted border-slate-400 mx-1"></span>
                <span>1</span>
            </div>
            <div className="flex justify-between items-baseline pl-4 group cursor-pointer hover:bg-slate-50">
                <span>1.1 Background</span>
                <span className="flex-1 border-b border-dotted border-slate-400 mx-1"></span>
                <span>1</span>
            </div>
            <div className="flex justify-between items-baseline group cursor-pointer hover:bg-slate-50">
                <span className="font-bold">2. Methodology</span>
                <span className="flex-1 border-b border-dotted border-slate-400 mx-1"></span>
                <span>3</span>
            </div>
            <div className="flex justify-between items-baseline pl-4 group cursor-pointer hover:bg-slate-50">
                <span>2.1 Data Collection</span>
                <span className="flex-1 border-b border-dotted border-slate-400 mx-1"></span>
                <span>4</span>
            </div>
        </div>
    </div>
);

const TrackChangesMockup = () => (
    <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm font-sans text-lg my-6 leading-relaxed">
        <p>
            The project was <span className="line-through text-red-500 decoration-red-500">completed</span> <span className="underline decoration-blue-500 text-blue-600">finished</span> on time. 
            However, we need to <span className="underline decoration-blue-500 text-blue-600">review</span> the budget.
        </p>
        <div className="mt-4 flex gap-4 text-xs">
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full opacity-50"></span> Deletion</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-full opacity-50"></span> Insertion</div>
        </div>
    </div>
);

export const WORD_PART3_TOPICS: Topic[] = [
  // 6. References
  {
    id: 'word-toc',
    title: 'Table of Contents',
    parent: '6. References',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Located in the <strong>References</strong> tab. The TOC is the best way to navigate long documents.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-sm text-blue-900"><strong>Requirement:</strong> You MUST use Heading Styles (Heading 1, Heading 2) for your titles. Word builds the TOC based on these styles.</p>
        </div>
        
        <TOCMockup />

        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Insert TOC:</strong> Choose Automatic Table 1 or 2.</li>
            <li><strong>Update Table:</strong> If you add pages or change headings, always click "Update Table" &gt; "Update entire table" to refresh the TOC.</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-citations',
    title: 'Citations & Bibliography',
    parent: '6. References',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Word has a built-in citation manager supporting APA, MLA, IEEE, and more.
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Manage Sources:</strong> Enter book/website details once.</li>
            <li><strong>Insert Citation:</strong> Adds <em>(Smith, 2023)</em> at your cursor.</li>
            <li><strong>Bibliography:</strong> Generates the full reference list at the end of your doc.</li>
        </ol>
      </>
    )
  },
  {
    id: 'word-footnotes',
    title: 'Footnotes & Captions',
    parent: '6. References',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Footnote (Ctrl+Alt+F):</strong> Adds a note at the bottom of the <em>current page</em>.</li>
            <li><strong>Endnote (Ctrl+Alt+D):</strong> Adds a note at the <em>end of the document</em>.</li>
            <li><strong>Captions:</strong> Adds labels like "Figure 1" below images. Essential for generating a "Table of Figures".</li>
        </ul>
      </>
    )
  },

  // 7. Review & Collaboration
  {
    id: 'word-proofing',
    title: 'Spelling & Thesaurus',
    parent: '7. Review',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          <strong>Review</strong> tab tools help polish your document.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Editor (F7):</strong> The advanced spell-checker. Checks grammar, clarity, and conciseness.</li>
            <li><strong>Thesaurus (Shift+F7):</strong> Right-click a word &gt; Synonyms to find alternatives.</li>
            <li><strong>Word Count:</strong> Click the word count in the status bar (bottom left) for detailed stats (characters, lines).</li>
        </ul>
      </>
    )
  },
  {
    id: 'word-track-changes',
    title: 'Track Changes & Comments',
    parent: '7. Review',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Essential for teams. <strong>Turn on Track Changes</strong> (Ctrl+Shift+E) before editing someone else's work.
        </p>
        <TrackChangesMockup />
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Accept/Reject:</strong> Navigate through edits and approve/deny them.</li>
            <li><strong>Comments:</strong> Highlight text and click "New Comment" to ask questions without changing the document content.</li>
        </ul>
      </>
    )
  },

  // 8. Mailings
  {
    id: 'word-mail-merge',
    title: 'Mail Merge',
    parent: '8. Mailings',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Creates personalized copies of a document (e.g., certificates, letters) for a list of people.
        </p>
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm my-4">
            <p className="font-mono text-sm">Dear <strong>«FirstName»</strong>,</p>
            <p className="font-mono text-sm mt-2">We are pleased to inform you that your application for <strong>«Role»</strong> has been accepted.</p>
        </div>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Start Mail Merge:</strong> Select "Letters" or "E-mail messages".</li>
            <li><strong>Select Recipients:</strong> Use an Excel sheet or Outlook contacts.</li>
            <li><strong>Insert Merge Field:</strong> Add placeholders like «Name».</li>
            <li><strong>Finish & Merge:</strong> "Edit Individual Documents" generates a massive file with all custom letters.</li>
        </ol>
      </>
    )
  }
];