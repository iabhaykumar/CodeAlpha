import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "", inputFormat: "", outputFormat: "", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART9: ProblemCategory[] = [
    {
        category: "SECTION 16 — Concurrency, Multithreading & Synchronization",
        problems: [
            { id: "cpp-adv-s1-q1", title: "Thread-safe LRU cache", description: "Implement a thread-safe LRU cache.", ...placeholderProblem },
            { id: "cpp-adv-s1-q2", title: "Fixed-size thread pool", description: "Create a thread pool with a fixed number of workers.", ...placeholderProblem },
            { id: "cpp-adv-s1-q3", title: "Lock-free SPSC queue", description: "Single-producer, single-consumer queue without locks.", ...placeholderProblem },
            { id: "cpp-adv-s1-q4", title: "Custom shared_ptr & weak_ptr", description: "Implement custom smart pointers.", ...placeholderProblem },
            { id: "cpp-adv-s1-q5", title: "Concurrent hashmap (stripe locks)", description: "Use lock striping for a concurrent hashmap.", ...placeholderProblem },
            { id: "cpp-adv-s1-q6", title: "Work-stealing deque", description: "Implement a deque for work-stealing.", ...placeholderProblem },
            { id: "cpp-adv-s1-q7", title: "Lock-free ref counting", description: "Thread-safe reference counting.", ...placeholderProblem },
            { id: "cpp-adv-s1-q8", title: "Lock-free stack", description: "Implement a stack without locks.", ...placeholderProblem },
            { id: "cpp-adv-s1-q9", title: "Thread-safe priority executor", description: "An executor that respects task priorities.", ...placeholderProblem },
            { id: "cpp-adv-s1-q10", title: "Concurrent bounded buffer", description: "A bounded buffer for producer-consumer.", ...placeholderProblem },
            { id: "cpp-adv-s1-q11", title: "MPMC queue", description: "Multi-producer, multi-consumer queue.", ...placeholderProblem },
            { id: "cpp-adv-s1-q12", title: "Thread affinity helper", description: "Pin threads to specific CPU cores.", ...placeholderProblem },
            { id: "cpp-adv-s1-q13", title: "Futex-like synchronization", description: "Simulate a fast userspace mutex.", ...placeholderProblem },
            { id: "cpp-adv-s1-q14", title: "Starvation-free work queue", description: "Implement a fair work queue.", ...placeholderProblem },
            { id: "cpp-adv-s1-q15", title: "Parallel prefix-sum", description: "Implement a parallel prefix-sum algorithm.", ...placeholderProblem },
            { id: "cpp-adv-s1-q16", title: "Parallel BFS", description: "Implement a parallel Breadth-First Search.", ...placeholderProblem },
            { id: "cpp-adv-s1-q17", title: "Parallel Quicksort", description: "Implement Quicksort in parallel.", ...placeholderProblem },
            { id: "cpp-adv-s1-q18", title: "Parallel external merge sort", description: "Sort large files in parallel.", ...placeholderProblem },
            { id: "cpp-adv-s1-q19", title: "Concurrency testing harness", description: "Create a tool to test concurrent code.", ...placeholderProblem },
            { id: "cpp-adv-s1-q20", title: "Time-series downsampler (concurrent)", description: "Downsample time-series data concurrently.", ...placeholderProblem },
        ]
    },
    {
        category: "SECTION 17 — Networking, Protocols & Distributed Systems",
        problems: [
            { id: "cpp-adv-s2-q1", title: "epoll/kqueue event-driven server", description: "Build a high-performance event-driven server.", ...placeholderProblem },
            { id: "cpp-adv-s2-q2", title: "HTTP server with chunked response", description: "Support chunked transfer encoding.", ...placeholderProblem },
            { id: "cpp-adv-s2-q3", title: "HTTP client with pooling", description: "Implement connection pooling.", ...placeholderProblem },
            { id: "cpp-adv-s2-q4", title: "WebSocket server", description: "Handle WebSocket connections.", ...placeholderProblem },
            { id: "cpp-adv-s2-q5", title: "DNS resolver", description: "Implement a DNS resolver.", ...placeholderProblem },
            { id: "cpp-adv-s2-q6", title: "TLS client (OpenSSL)", description: "Make secure requests with OpenSSL.", ...placeholderProblem },
            { id: "cpp-adv-s2-q7", title: "TCP proxy with rate limiting", description: "Throttle bandwidth with a TCP proxy.", ...placeholderProblem },
            { id: "cpp-adv-s2-q8", title: "UDP reliable transport", description: "Implement reliability over UDP.", ...placeholderProblem },
            { id: "cpp-adv-s2-q9", title: "Port scanner", description: "Build a TCP port scanner.", ...placeholderProblem },
            { id: "cpp-adv-s2-q10", title: "Reverse proxy with health checks", description: "Implement a reverse proxy.", ...placeholderProblem },
            { id: "cpp-adv-s2-q11", title: "SMTP client", description: "Send emails with attachments.", ...placeholderProblem },
            { id: "cpp-adv-s2-q12", title: "Multi-protocol server (TCP + WS)", description: "Handle TCP and WebSocket on one port.", ...placeholderProblem },
            { id: "cpp-adv-s2-q13", title: "QUIC-like handshake simulator", description: "Simulate a QUIC handshake.", ...placeholderProblem },
            { id: "cpp-adv-s2-q14", title: "OAuth2 client simulator", description: "Simulate an OAuth2 flow.", ...placeholderProblem },
            { id: "cpp-adv-s2-q15", title: "DoH (DNS-over-HTTPS) client", description: "Implement a DoH client.", ...placeholderProblem },
            { id: "cpp-adv-s2-q16", title: "RPC framework over TCP", description: "Build a simple RPC framework.", ...placeholderProblem },
            { id: "cpp-adv-s2-q17", title: "HTTP content negotiation engine", description: "Implement content negotiation.", ...placeholderProblem },
            { id: "cpp-adv-s2-q18", title: "Image thumbnailer (network ingest)", description: "Create thumbnails from network streams.", ...placeholderProblem },
        ]
    }
];