
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

const FunctionMockup = ({ formula, result }: { formula: string, result: string }) => (
    <div className="my-6 border border-slate-300 rounded-lg shadow-sm font-sans bg-white">
        <div className="flex items-center gap-2 p-1 bg-slate-50 border-b border-slate-300 text-sm">
            <div className="w-8 text-center text-slate-500 font-serif italic font-bold">fx</div>
            <div className="flex-1 bg-white border border-slate-300 px-2 py-1 font-mono text-slate-800">{formula}</div>
        </div>
        <div className="p-4 flex justify-center items-center bg-white">
            <div className="text-center">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Cell Result</p>
                <p className="text-2xl font-bold text-green-600">{result}</p>
            </div>
        </div>
    </div>
);

export const EXCEL_PART2_TOPICS: Topic[] = [
  // 2. Formulas & Functions
  {
    id: 'excel-formulas-basics',
    title: 'Formula Basics',
    parent: '2. Formulas & Functions',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Formulas are the heart of Excel. Every formula <strong>MUST start with an equals sign (=)</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
            <li><strong>Arithmetic:</strong> <code>+</code> (Add), <code>-</code> (Subtract), <code>*</code> (Multiply), <code>/</code> (Divide), <code>^</code> (Exponent).</li>
            <li><strong>Cell Referencing:</strong> Use cell addresses (A1, B2) instead of hard numbers. This makes your sheet dynamic.</li>
        </ul>
        <FunctionMockup formula="=A1 + B1 * 5" result="Result updates if A1 or B1 changes" />
        <CodeBlock language="text" code={`=10 + 5       // Returns 15 (Static)
=A1 + B1      // Adds value in A1 to B1 (Dynamic)
=C5 * 0.18    // Calculates 18% of value in C5`} />
      </>
    )
  },
  {
    id: 'excel-functions-sum-avg',
    title: 'SUM, AVERAGE, COUNT',
    parent: '2. Formulas & Functions',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Functions are pre-built formulas. Instead of <code>=A1+A2+A3+A4...</code>, you use a function.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <code className="font-bold text-[#1D6F42]">=SUM(A1:A10)</code>
                <p className="text-sm text-slate-600">Adds all numbers in the range.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <code className="font-bold text-[#1D6F42]">=AVERAGE(B1:B5)</code>
                <p className="text-sm text-slate-600">Calculates the mean of the numbers.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <code className="font-bold text-[#1D6F42]">=COUNT(C1:C20)</code>
                <p className="text-sm text-slate-600">Counts cells that contain <strong>numbers</strong>.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <code className="font-bold text-[#1D6F42]">=COUNTA(C1:C20)</code>
                <p className="text-sm text-slate-600">Counts cells that are <strong>not empty</strong> (text or numbers).</p>
            </div>
        </div>
        <p className="mb-4"><strong>AutoSum Shortcut:</strong> Press <kbd className="bg-slate-100 border border-slate-300 rounded px-1 text-xs">Alt</kbd> + <kbd className="bg-slate-100 border border-slate-300 rounded px-1 text-xs">=</kbd> to automatically insert a SUM function.</p>
      </>
    )
  },
  {
    id: 'excel-functions-if',
    title: 'Logical Functions (IF)',
    parent: '2. Formulas & Functions',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          The <code>IF</code> function checks a condition and returns one value if TRUE, and another if FALSE.
        </p>
        <CodeBlock language="text" code={`Syntax: =IF(logical_test, value_if_true, value_if_false)`} />
        
        <FunctionMockup formula='=IF(C2 >= 50, "Pass", "Fail")' result="Pass" />
        
        <h4 className="font-bold text-slate-800 mt-4 mb-2">Nested IF</h4>
        <p className="mb-2">You can put an IF inside another IF for multiple conditions.</p>
        <CodeBlock language="text" code={`=IF(A1>90, "A", IF(A1>80, "B", "C"))`} />
      </>
    )
  },
  {
    id: 'excel-functions-lookup',
    title: 'VLOOKUP & XLOOKUP',
    parent: '2. Formulas & Functions',
    content: (
      <>
        <p className="mb-4 text-lg text-slate-700">
          Lookup functions search for a value in a table and return a corresponding value.
        </p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">VLOOKUP (Vertical Lookup)</h3>
        <CodeBlock language="text" code={`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])

Example: =VLOOKUP(102, A2:C10, 2, FALSE)
// Looks for ID '102' in Column A, returns value from Column B (2nd col).`} />
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p className="text-sm text-yellow-900"><strong>Note:</strong> VLOOKUP only looks to the <strong>right</strong>. The lookup value must be in the first column of the selected range.</p>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-4">XLOOKUP (Modern)</h3>
        <p className="mb-4">Available in Excel 2021/365. It replaces VLOOKUP and HLOOKUP. It can look left or right and doesn't break if you insert columns.</p>
        <CodeBlock language="text" code={`=XLOOKUP(lookup_value, lookup_array, return_array)

Example: =XLOOKUP(102, A:A, B:B)`} />
      </>
    )
  }
];
