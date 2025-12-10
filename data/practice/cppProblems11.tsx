import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "", inputFormat: "", outputFormat: "", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART11: ProblemCategory[] = [
    {
        category: "SECTION 20 — Parsing, Compilers, DSLs & Serialization",
        problems: [
            { id: "cpp-adv-s5-q1", title: "Recursive descent parser", description: "Implement a recursive descent parser.", ...placeholderProblem },
            { id: "cpp-adv-s5-q2", title: "Mini interpreter REPL", description: "Build a simple REPL.", ...placeholderProblem },
            { id: "cpp-adv-s5-q3", title: "DFA generator", description: "Generate a DFA from a regex.", ...placeholderProblem },
            { id: "cpp-adv-s5-q4", title: "JSON streaming parser", description: "Implement a streaming JSON parser.", ...placeholderProblem },
            { id: "cpp-adv-s5-q5", title: "DOM-builder JSON parser", description: "Build a DOM-style JSON parser.", ...placeholderProblem },
            { id: "cpp-adv-s5-q6", title: "JSON Pointer evaluator", description: "Evaluate JSON Pointer expressions.", ...placeholderProblem },
            { id: "cpp-adv-s5-q7", title: "Incremental JSON diff + patch", description: "Create and apply JSON diffs.", ...placeholderProblem },
            { id: "cpp-adv-s5-q8", title: "Template metaprogramming primes", description: "Find primes at compile time.", ...placeholderProblem },
            { id: "cpp-adv-s5-q9", title: "Parser combinator library", description: "Build a simple parser combinator library.", ...placeholderProblem },
            { id: "cpp-adv-s5-q10", title: "Rule engine compiler", description: "Compile rules into an efficient format.", ...placeholderProblem },
            { id: "cpp-adv-s5-q11", title: "Delta compression (diff-patch)", description: "Implement a delta compression algorithm.", ...placeholderProblem },
            { id: "cpp-adv-s5-q12", title: "Bytecode VM interpreter", description: "Interpret a simple bytecode.", ...placeholderProblem },
            { id: "cpp-adv-s5-q13", title: "Expression evaluator JIT-like", description: "A simple JIT-like evaluator.", ...placeholderProblem },
            { id: "cpp-adv-s5-q14", title: "CSV streaming parser", description: "Build a fast streaming CSV parser.", ...placeholderProblem },
            { id: "cpp-adv-s5-q15", title: "Schema-aware binary serializer", description: "Implement a binary serializer.", ...placeholderProblem },
        ]
    },
    {
        category: "SECTION 21 — File Systems, I/O & Databases",
        problems: [
            { id: "cpp-adv-s6-q1", title: "Zero-copy file sender", description: "Implement a zero-copy file sender.", ...placeholderProblem },
            { id: "cpp-adv-s6-q2", title: "Async batched logger", description: "Build an asynchronous batched logger.", ...placeholderProblem },
            { id: "cpp-adv-s6-q3", title: "tail -f with rotation handling", description: "Implement `tail -f` with log rotation.", ...placeholderProblem },
            { id: "cpp-adv-s6-q4", title: "Indexed binary format + B-tree index", description: "Build a simple indexed database.", ...placeholderProblem },
            { id: "cpp-adv-s6-q5", title: "Large file range queries (mmap)", description: "Query large files with mmap.", ...placeholderProblem },
            { id: "cpp-adv-s6-q6", title: "Write-ahead logging (WAL)", description: "Implement a WAL for durability.", ...placeholderProblem },
            { id: "cpp-adv-s6-q7", title: "File-based persistent queue", description: "A persistent queue on disk.", ...placeholderProblem },
            { id: "cpp-adv-s6-q8", title: "Sparse file inspector", description: "Inspect sparse files.", ...placeholderProblem },
            { id: "cpp-adv-s6-q9", title: "Direct I/O writer", description: "Write files with Direct I/O.", ...placeholderProblem },
            { id: "cpp-adv-s6-q10", title: "Inverted index (search engine)", description: "Build an inverted index.", ...placeholderProblem },
            { id: "cpp-adv-s6-q11", title: "External merge sort", description: "Sort files larger than memory.", ...placeholderProblem },
            { id: "cpp-adv-s6-q12", title: "CAS storage (content-addressable storage)", description: "Implement CAS.", ...placeholderProblem },
            { id: "cpp-adv-s6-q13", title: "Log compaction engine", description: "Implement a log compaction engine.", ...placeholderProblem },
            { id: "cpp-adv-s6-q14", title: "File diff/patch generator", description: "Generate diffs and patches for files.", ...placeholderProblem },
            { id: "cpp-adv-s6-q15", title: "Columnar in-memory DB engine", description: "Build a simple columnar DB engine.", ...placeholderProblem },
        ]
    }
];