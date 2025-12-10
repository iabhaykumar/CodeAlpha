
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ALGORITHMS_PART3_TOPICS: Topic[] = [
  // 11. Graph Algorithms
  { id: 'algo-graph-traversal', title: 'BFS & DFS', parent: '11. Graph Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Graph Traversals</h1>
      <p className="mb-4">The two primary ways to explore a graph.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-white border rounded-xl">
              <h3 className="font-bold mb-2">BFS (Breadth First)</h3>
              <p className="text-sm text-slate-600">Explores neighbors first (level by level). Uses a <strong>Queue</strong>. Good for shortest path in unweighted graphs.</p>
          </div>
          <div className="p-4 bg-white border rounded-xl">
              <h3 className="font-bold mb-2">DFS (Depth First)</h3>
              <p className="text-sm text-slate-600">Explores as deep as possible before backtracking. Uses a <strong>Stack</strong> (or recursion). Good for puzzles, topological sort.</p>
          </div>
      </div>
    </>
  )},
  { id: 'algo-graph-topo', title: 'Topological Sort', parent: '11. Graph Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Topological Sort</h1>
      <p className="mb-4">Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v. Used in build systems, task scheduling.</p>
      <p className="text-sm bg-slate-100 p-2 rounded"><strong>Kahn's Algorithm:</strong> Uses in-degrees. Repeatedly remove nodes with 0 in-degree.</p>
    </>
  )},
  { id: 'algo-graph-scc', title: 'Strongly Connected Components', parent: '11. Graph Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Strongly Connected Components (SCC)</h1>
      <p className="mb-4">A subgraph where every vertex is reachable from every other vertex within the subgraph.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Kosaraju's Algo:</strong> Two-pass DFS.</li>
          <li><strong>Tarjan's Algo:</strong> Single-pass DFS using discovery times.</li>
      </ul>
    </>
  )},

  // 12. Shortest Path Algorithms
  { id: 'algo-sp-dijkstra', title: 'Dijkstra & Bellman-Ford', parent: '12. Shortest Path Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Shortest Path Algorithms</h1>
      <h3 className="text-xl font-bold mt-4 mb-2">Dijkstra's Algorithm</h3>
      <p>Finds shortest paths from source to all vertices in a graph with non-negative edge weights. Uses a Min-Priority Queue. O(E log V).</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Bellman-Ford Algorithm</h3>
      <p>Can handle negative edge weights. Detects negative cycles. Slower than Dijkstra. O(VE).</p>
    </>
  )},
  { id: 'algo-sp-floyd', title: 'Floyd-Warshall', parent: '12. Shortest Path Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Floyd-Warshall Algorithm</h1>
      <p className="mb-4">All-Pairs Shortest Path algorithm. Computes shortest paths between every pair of vertices. Uses Dynamic Programming.</p>
      <CodeBlock language="cpp" code={`// dist[i][j] = shortest distance from i to j
for (int k = 0; k < V; k++) {
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dist[i][k] + dist[k][j] < dist[i][j])
                dist[i][j] = dist[i][k] + dist[k][j];
        }
    }
}`} />
    </>
  )},

  // 13. Minimum Spanning Tree
  { id: 'algo-mst-prim-kruskal', title: 'Prim & Kruskal', parent: '13. Minimum Spanning Tree', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Minimum Spanning Tree (MST)</h1>
      <p className="mb-4">A subset of edges that connects all vertices together, without any cycles and with the minimum possible total edge weight.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Prim's Algorithm:</strong> Grows tree from a starting vertex. Adds cheapest edge connecting tree to outside.</li>
          <li><strong>Kruskal's Algorithm:</strong> Sorts edges by weight. Adds edges if they don't form a cycle (using Union-Find).</li>
      </ul>
    </>
  )},

  // 14. Network Flow
  { id: 'algo-flow-max', title: 'Max Flow', parent: '14. Network Flow', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Max Flow Min Cut</h1>
      <p className="mb-4">Finds the maximum amount of flow possible from a source to a sink in a flow network.</p>
      <p><strong>Ford-Fulkerson Algorithm:</strong> Repeatedly finds augmenting paths in the residual graph and adds flow. <strong>Edmonds-Karp</strong> uses BFS to find paths.</p>
    </>
  )},

  // 15. Advanced Data Structures
  { id: 'algo-ds-dsu', title: 'Disjoint Set (Union-Find)', parent: '15. Advanced Data Structures', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Disjoint Set Union (DSU)</h1>
      <p className="mb-4">Keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. Supports <code>union</code> and <code>find</code> operations efficiently (nearly constant time).</p>
      <p>Crucial for Kruskal's Algorithm and Cycle Detection.</p>
    </>
  )},

  // 16. Bit Manipulation
  { id: 'algo-bit-tricks', title: 'Bitwise Tricks', parent: '16. Bit Manipulation', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Bit Manipulation</h1>
      <p className="mb-4">Fast, low-level operations on bits.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4 font-mono text-sm">
          <li>x & (x-1) : Clears the lowest set bit.</li>
          <li>x & -x : Extracts the lowest set bit.</li>
          <li>x ^ x = 0 : XORing same number results in 0.</li>
      </ul>
    </>
  )},
];
