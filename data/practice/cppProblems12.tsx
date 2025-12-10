import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "", inputFormat: "", outputFormat: "", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART12: ProblemCategory[] = [
    {
        category: "SECTION 22 — Templates, Generics & Modern C++ (C++11–20)",
        problems: [
            { id: "cpp-adv-s7-q1", title: "std::variant implementation", description: "Implement a std::variant-like class.", ...placeholderProblem },
            { id: "cpp-adv-s7-q2", title: "Serialization via SFINAE", description: "Use SFINAE for generic serialization.", ...placeholderProblem },
            { id: "cpp-adv-s7-q3", title: "CRTP pattern", description: "Use the Curiously Recurring Template Pattern.", ...placeholderProblem },
            { id: "cpp-adv-s7-q4", title: "Compile-time factorial / primes TMP", description: "Compute values at compile time.", ...placeholderProblem },
            { id: "cpp-adv-s7-q5", title: "Variadic template formatter", description: "Build a typesafe `printf`-like formatter.", ...placeholderProblem },
            { id: "cpp-adv-s7-q6", title: "Type traits library extension", description: "Create custom type traits.", ...placeholderProblem },
            { id: "cpp-adv-s7-q7", title: "C++20 coroutine-based pipeline", description: "Build a data processing pipeline with coroutines.", ...placeholderProblem },
            { id: "cpp-adv-s7-q8", title: "Generic retry with circuit breaker", description: "Implement a generic retry mechanism.", ...placeholderProblem },
            { id: "cpp-adv-s7-q9", title: "Generic plugin loader", description: "Create a type-safe plugin loader.", ...placeholderProblem },
            { id: "cpp-adv-s7-q10", title: "Config loader (env, CLI, file)", description: "Build a unified config loader.", ...placeholderProblem },
            { id: "cpp-adv-s7-q11", title: "Template-based fixed-point number", description: "A fixed-point number class using templates.", ...placeholderProblem },
            { id: "cpp-adv-s7-q12", title: "Metaprogramming-based benchmark harness", description: "A benchmark harness using TMP.", ...placeholderProblem },
        ]
    },
    {
        category: "SECTION 23 — Security, Cryptography & Safe Systems",
        problems: [
            { id: "cpp-adv-s8-q1", title: "AES-GCM encrypt/decrypt", description: "Implement AES-GCM encryption.", ...placeholderProblem },
            { id: "cpp-adv-s8-q2", title: "HMAC verification system", description: "Implement HMAC verification.", ...placeholderProblem },
            { id: "cpp-adv-s8-q3", title: "JWT-like token signer/verifier", description: "Create and verify secure tokens.", ...placeholderProblem },
            { id: "cpp-adv-s8-q4", title: "Sandbox runner (chroot + RLIMIT)", description: "Run code in a sandbox.", ...placeholderProblem },
            { id: "cpp-adv-s8-q5", title: "Malware-like memory scanner", description: "Build a simple memory scanner.", ...placeholderProblem },
            { id: "cpp-adv-s8-q6", title: "Secure temp file creator", description: "Create secure temporary files.", ...placeholderProblem },
            { id: "cpp-adv-s8-q7", title: "Password hashing (PBKDF2/BCrypt)", description: "Implement secure password hashing.", ...placeholderProblem },
            { id: "cpp-adv-s8-q8", title: "Memory sanitizer (use-after-free detect)", description: "Simulate a memory sanitizer.", ...placeholderProblem },
            { id: "cpp-adv-s8-q9", title: "ASLR-aware exploit mitigation demo", description: "Demonstrate ASLR.", ...placeholderProblem },
            { id: "cpp-adv-s8-q10", title: "Encrypted storage engine (AES + checksum)", description: "Build an encrypted storage engine.", ...placeholderProblem },
        ]
    }
];