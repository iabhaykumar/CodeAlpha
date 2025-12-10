import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "", inputFormat: "", outputFormat: "", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const CPP_PROBLEMS_PART13: ProblemCategory[] = [
    {
        category: "SECTION 24 — AI/ML/Math/Scientific",
        problems: [
            { id: "cpp-adv-s9-q1", title: "K-means clustering", description: "Implement K-means clustering.", ...placeholderProblem },
            { id: "cpp-adv-s9-q2", title: "Logistic regression (SGD + hashing)", description: "Implement logistic regression.", ...placeholderProblem },
            { id: "cpp-adv-s9-q3", title: "PDE solver (heat equation)", description: "Solve the heat equation numerically.", ...placeholderProblem },
            { id: "cpp-adv-s9-q4", title: "Vectorized matrix multiplication", description: "Optimize matrix multiplication.", ...placeholderProblem },
            { id: "cpp-adv-s9-q5", title: "Skyline optimization (Pareto frontier)", description: "Find the Pareto-optimal skyline.", ...placeholderProblem },
            { id: "cpp-adv-s9-q6", title: "Multidimensional KD queries", description: "Implement multidimensional KD tree queries.", ...placeholderProblem },
            { id: "cpp-adv-s9-q7", title: "Approx streaming quantiles (GK)", description: "Estimate quantiles from a stream.", ...placeholderProblem },
            { id: "cpp-adv-s9-q8", title: "Histogram equalization (image)", description: "Implement histogram equalization.", ...placeholderProblem },
        ]
    },
    {
        category: "SECTION 25 — Full-System / Architecture / Tools",
        problems: [
            { id: "cpp-adv-s10-q1", title: "Mini microservice simulator", description: "Simulate a microservice architecture.", ...placeholderProblem },
            { id: "cpp-adv-s10-q2", title: "Config hot-reloader", description: "Reload configuration without restarting.", ...placeholderProblem },
            { id: "cpp-adv-s10-q3", title: "Dynamic code reloader", description: "Reload shared libraries live.", ...placeholderProblem },
            { id: "cpp-adv-s10-q4", title: "Profiling tool (stack sampling)", description: "Build a simple stack sampling profiler.", ...placeholderProblem },
            { id: "cpp-adv-s10-q5", title: "Dependency graph resolver", description: "Resolve a dependency graph.", ...placeholderProblem },
            { id: "cpp-adv-s10-q6", title: "Build-cache system", description: "Implement a build cache.", ...placeholderProblem },
            { id: "cpp-adv-s10-q7", title: "Actor-model runtime (mailbox)", description: "Implement a simple actor model.", ...placeholderProblem },
        ]
    }
];