
import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const ALGORITHMS_PART4_TOPICS: Topic[] = [
  // 17. String Algorithms
  { id: 'algo-str-adv', title: 'Advanced String Algos', parent: '17. String Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Advanced String Algorithms</h1>
      <p className="mb-4">Efficient techniques for string processing.</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>KMP (Knuth-Morris-Pratt):</strong> Linear time pattern searching using prefix function.</li>
          <li><strong>Rabin-Karp:</strong> Uses rolling hash. Good for multiple pattern search.</li>
          <li><strong>Z-Algorithm:</strong> Constructs Z-array for pattern matching.</li>
          <li><strong>Aho-Corasick:</strong> Builds an automata for searching multiple words simultaneously.</li>
          <li><strong>Suffix Automaton / Suffix Tree:</strong> Powerful structures for substring queries.</li>
      </ul>
    </>
  )},

  // 18. Geometric Algorithms
  { id: 'algo-geo-hull', title: 'Convex Hull', parent: '18. Geometric Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Computational Geometry</h1>
      <p className="mb-4"><strong>Convex Hull:</strong> The smallest convex polygon containing a set of points.</p>
      <p><strong>Algorithms:</strong> Jarvis March (Gift Wrapping), Graham Scan, Monotone Chain.</p>
      <p className="mt-4 mb-2"><strong>Line Intersection:</strong> Determining if two line segments intersect using cross products.</p>
    </>
  )},

  // 19. Game Theory
  { id: 'algo-game-minimax', title: 'Minimax & Nim', parent: '19. Game Theory', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Game Theory</h1>
      <h3 className="text-xl font-bold mt-4 mb-2">Minimax Algorithm</h3>
      <p className="mb-4">A recursive algorithm for choosing the next move in an n-player game, usually for two players (e.g., Chess, Tic-Tac-Toe). One player maximizes the score, the other minimizes it.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Nim Game</h3>
      <p>Solved using XOR sum (Grundy Numbers/Sprague-Grundy Theorem). If XOR sum of pile sizes is non-zero, first player wins (if playing optimally).</p>
    </>
  )},

  // 20. Machine Learning Specific Algorithms
  { id: 'algo-ml-basics', title: 'Gradient Descent & variants', parent: '20. ML Specific Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Optimization Algorithms</h1>
      <p className="mb-4 text-lg text-slate-700">Optimization is the heart of Machine Learning. It involves finding the parameters that minimize a Cost Function.</p>
      
      <div className="flex flex-col gap-4 my-6">
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
            <h4 className="font-bold text-blue-900">Gradient Descent (Batch)</h4>
            <p className="text-sm text-slate-700">Calculates error for the <strong>entire dataset</strong> before updating weights. Stable but slow.</p>
        </div>
        <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
            <h4 className="font-bold text-green-900">Stochastic Gradient Descent (SGD)</h4>
            <p className="text-sm text-slate-700">Updates weights after <strong>every single sample</strong>. Fast but noisy convergence.</p>
        </div>
        <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
            <h4 className="font-bold text-purple-900">Mini-Batch GD</h4>
            <p className="text-sm text-slate-700">Updates weights after a small batch (e.g., 32 samples). Best of both worlds.</p>
        </div>
      </div>

      <CodeBlock language="python" code={`# Gradient Descent Step
learning_rate = 0.01
# w = w - learning_rate * gradient
w = w - learning_rate * (2/n * sum(X * (y_pred - y)))`} />
    </>
  )},
  { id: 'algo-ml-backprop', title: 'Backpropagation', parent: '20. ML Specific Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Backpropagation</h1>
      <p className="mb-4">The algorithm used to train Neural Networks. It efficiently computes the gradient of the loss function with respect to the weights using the <strong>Chain Rule</strong>.</p>
      
      <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
         <div className="font-mono text-sm space-y-2">
            <div className="flex justify-center items-center gap-2">
                <span className="bg-white px-3 py-1 border rounded shadow-sm">Loss L</span>
                <span>←</span>
                <span className="bg-white px-3 py-1 border rounded shadow-sm">Activation a</span>
                <span>←</span>
                <span className="bg-white px-3 py-1 border rounded shadow-sm">Z (wx+b)</span>
                <span>←</span>
                <span className="bg-white px-3 py-1 border rounded shadow-sm">Weight w</span>
            </div>
            <p className="text-slate-500 pt-2">∂L/∂w = (∂L/∂a) * (∂a/∂z) * (∂z/∂w)</p>
         </div>
      </div>
    </>
  )},
  { id: 'algo-ml-kmeans', title: 'K-Means Clustering', parent: '20. ML Specific Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">K-Means Clustering</h1>
      <p className="mb-4">An iterative algorithm to partition n observations into k clusters. It minimizes the within-cluster sum of squares (variance).</p>
      <ul className="list-decimal pl-5 space-y-2 mb-4">
          <li>Initialize K centroids randomly.</li>
          <li>Assign each point to the nearest centroid.</li>
          <li>Recompute centroids (average of assigned points).</li>
          <li>Repeat until convergence.</li>
      </ul>
    </>
  )},
  { id: 'algo-ml-trees', title: 'Decision Trees & Random Forest', parent: '20. ML Specific Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Tree-Based Algorithms</h1>
      <h3 className="text-xl font-bold mt-4 mb-2">Decision Trees</h3>
      <p className="mb-4">Splits data based on feature values to maximize Information Gain (or minimize Gini Impurity). Prone to overfitting.</p>
      
      <h3 className="text-xl font-bold mt-4 mb-2">Random Forest</h3>
      <p className="mb-4">An ensemble method using <strong>Bagging</strong>. Builds multiple decision trees on random subsets of data and features, then averages their predictions to reduce variance.</p>
    </>
  )},
  { id: 'algo-ml-pca-svm', title: 'PCA & SVM', parent: '20. ML Specific Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Dimensionality & Margins</h1>
      
      <h3 className="text-xl font-bold mt-4 mb-2">PCA (Principal Component Analysis)</h3>
      <p className="mb-4">Reduces dimensionality by projecting data onto orthogonal axes (Principal Components) that maximize variance. Uses <strong>Eigenvalues and Eigenvectors</strong>.</p>
      
      <h3 className="text-xl font-bold mt-4 mb-2">SVM Optimization</h3>
      <p className="mb-4">Finds the optimal hyperplane that maximizes the <strong>Margin</strong> between classes. Uses Lagrange Multipliers and Kernel Trick for non-linear data.</p>
    </>
  )},

  // 21. Misc / Modern Algorithms
  { id: 'algo-misc-bloom', title: 'Bloom Filters', parent: '21. Misc / Modern Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Bloom Filters</h1>
      <p className="mb-4">A probabilistic data structure used to test whether an element is a member of a set. It returns either "possibly in set" or "definitely not in set". False positives are possible, but false negatives are not.</p>
      
      <div className="my-6 p-4 bg-slate-900 rounded-xl overflow-hidden">
        <div className="flex justify-center gap-1 mb-2">
            {[0, 0, 1, 0, 1, 0, 0, 1, 0, 0].map((bit, i) => (
                <div key={i} className={`w-8 h-8 flex items-center justify-center font-mono font-bold rounded ${bit ? 'bg-green-500 text-black' : 'bg-slate-700 text-slate-500'}`}>
                    {bit}
                </div>
            ))}
        </div>
        <p className="text-center text-slate-400 text-xs">Bit Array (Hashes map to indices)</p>
      </div>
      <p><strong>Use Case:</strong> Checking if a username is taken, CDN caching, database lookups.</p>
    </>
  )},
  { id: 'algo-misc-structures', title: 'Skip Lists & Ropes', parent: '21. Misc / Modern Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Modern Data Structures</h1>
      
      <h3 className="text-xl font-bold mt-4 mb-2">Skip Lists</h3>
      <p className="mb-4">A probabilistic alternative to balanced trees. It uses multiple layers of linked lists to allow fast O(log n) search.</p>
      <pre className="bg-slate-50 p-4 rounded text-xs font-mono mb-4 overflow-x-auto">
{`L3:  1 -------------------------> 10
L2:  1 ---------> 5 ------------> 10
L1:  1 -> 3 -> 4 -> 5 -> 7 -> 9 -> 10`}
      </pre>

      <h3 className="text-xl font-bold mt-4 mb-2">Rope Data Structure</h3>
      <p className="mb-4">A tree-based data structure used to store long strings. It allows efficient concatenation, insertion, and deletion operations compared to standard strings (arrays).</p>
      
      <h3 className="text-xl font-bold mt-4 mb-2">B-Trees</h3>
      <p className="mb-4">A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. Optimized for systems that read and write large blocks of data (Databases, File Systems).</p>
    </>
  )},
  { id: 'algo-misc-cache', title: 'LRU Cache', parent: '21. Misc / Modern Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">LRU Cache</h1>
      <p className="mb-4"><strong>Least Recently Used</strong> cache evicts the item that hasn't been used for the longest time when the cache is full.</p>
      <p className="mb-4"><strong>Implementation:</strong> Hash Map (for O(1) access) + Doubly Linked List (for O(1) reordering).</p>
      <CodeBlock language="cpp" code={`class LRUCache {
    list<int> dq;
    unordered_map<int, list<int>::iterator> ma;
    int c;
public:
    // When accessed, move to front of list.
    // When full, remove from back of list.
};`} />
    </>
  )},
  { id: 'algo-misc-sys-design', title: 'System Design Algos', parent: '21. Misc / Modern Algorithms', content: (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">System Design Algorithms</h1>
      
      <h3 className="text-xl font-bold mt-4 mb-2">Rate Limiting</h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Token Bucket:</strong> Tokens added at rate r. Bucket size b. Request costs 1 token.</li>
          <li><strong>Leaky Bucket:</strong> Requests enter queue. Processed at constant rate.</li>
          <li><strong>Sliding Window Log:</strong> Accurate but expensive memory usage.</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">Pagination Algorithms</h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Offset-based:</strong> <code>LIMIT 10 OFFSET 1000</code>. Slow for large offsets (Database must scan 1000 rows).</li>
          <li><strong>Cursor-based (Keyset):</strong> <code>WHERE id > last_seen_id LIMIT 10</code>. Much faster and consistent, but harder to jump to specific pages.</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-4 mb-2">Trie Optimizations</h3>
      <p className="mb-4"><strong>Radix Tree (Compact Trie):</strong> Compresses chains of single-child nodes into a single edge. Reduces space significantly for sparse data.</p>
    </>
  )},
];
