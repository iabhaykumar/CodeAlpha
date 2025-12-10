import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_K: ProblemCategory[] = [
    {
        category: "11. Graphs",
        problems: [
            {
                id: "dsa-cpp-k1",
                title: "BFS Traversal",
                description: "Perform Breadth-First Search on a graph.",
                statement: "Given a directed graph and a starting vertex, perform a Breadth-First Search (BFS) traversal starting from that vertex.",
                inputFormat: "Number of vertices V, number of edges E, E lines of `u v` edges, and a starting vertex S.",
                outputFormat: "The BFS traversal order.",
                testCases: [{ input: "4 6\n0 1\n0 2\n1 2\n2 0\n2 3\n3 3\n2", output: "2 0 3 1" }],
                solution: `#include <iostream>
#include <vector>
#include <queue>
#include <list>

void bfs(int start, int V, const std::vector<std::list<int>>& adj) {
    std::vector<bool> visited(V, false);
    std::queue<int> q;

    visited[start] = true;
    q.push(start);

    while(!q.empty()) {
        int u = q.front();
        q.pop();
        std::cout << u << " ";

        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

int main() {
    int V = 4, E = 6, start_node = 2;
    std::vector<std::list<int>> adj(V);
    adj[0].push_back(1);
    adj[0].push_back(2);
    adj[1].push_back(2);
    adj[2].push_back(0);
    adj[2].push_back(3);
    adj[3].push_back(3);
    
    bfs(start_node, V, adj);
    
    return 0;
}`,
                explanation: "BFS explores a graph level by level. It uses a Queue to keep track of the next vertices to visit. It starts at the source, adds it to the queue, and marks it as visited. Then, it dequeues a vertex, prints it, and enqueues all its unvisited neighbors."
            },
            {
                id: "dsa-cpp-k2",
                title: "DFS Traversal",
                description: "Perform Depth-First Search on a graph.",
                statement: "Given a directed graph and a starting vertex, perform a Depth-First Search (DFS) traversal starting from that vertex.",
                inputFormat: "Number of vertices V, number of edges E, E lines of `u v` edges, and a starting vertex S.",
                outputFormat: "The DFS traversal order.",
                testCases: [{ input: "4 6\n0 1\n0 2\n1 2\n2 0\n2 3\n3 3\n2", output: "2 0 1 3" }],
                solution: `#include <iostream>
#include <vector>
#include <list>

void dfsUtil(int u, const std::vector<std::list<int>>& adj, std::vector<bool>& visited) {
    visited[u] = true;
    std::cout << u << " ";

    for (int v : adj[u]) {
        if (!visited[v]) {
            dfsUtil(v, adj, visited);
        }
    }
}

void dfs(int start, int V, const std::vector<std::list<int>>& adj) {
    std::vector<bool> visited(V, false);
    dfsUtil(start, adj, visited);
}

int main() {
    int V = 4, E = 6, start_node = 2;
    std::vector<std::list<int>> adj(V);
    adj[0].push_back(1);
    adj[0].push_back(2);
    adj[1].push_back(2);
    adj[2].push_back(0);
    adj[2].push_back(3);
    adj[3].push_back(3);
    
    dfs(start_node, V, adj);
    return 0;
}`,
                explanation: "DFS explores as far as possible along each branch before backtracking. This recursive implementation uses a `visited` array to avoid cycles. For a given vertex `u`, it marks it as visited, prints it, and then makes a recursive call for each of its unvisited neighbors."
            },
            {
                id: "dsa-cpp-k3",
                title: "Detect Cycle in Undirected Graph",
                description: "Detect a cycle in an undirected graph using DFS.",
                statement: "Given an undirected graph, determine if it contains a cycle.",
                inputFormat: "V, E, then E lines of edges.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "5 5\n0 1\n1 2\n2 3\n3 4\n4 1", output: "Yes" }],
                solution: `#include <iostream>
#include <vector>
#include <list>

class Solution {
public:
    bool isCyclicUtil(int u, std::vector<bool>& visited, int parent, const std::vector<std::list<int>>& adj) {
        visited[u] = true;
        for (int v : adj[u]) {
            if (!visited[v]) {
                if (isCyclicUtil(v, visited, u, adj))
                    return true;
            } else if (v != parent) {
                return true;
            }
        }
        return false;
    }

    bool isCycle(int V, const std::vector<std::list<int>>& adj) {
        std::vector<bool> visited(V, false);
        for (int u = 0; u < V; u++) {
            if (!visited[u])
                if (isCyclicUtil(u, visited, -1, adj))
                    return true;
        }
        return false;
    }
};

int main() {
    int V = 5, E = 5;
    std::vector<std::list<int>> adj(V);
    adj[0].push_back(1); adj[1].push_back(0);
    adj[1].push_back(2); adj[2].push_back(1);
    adj[2].push_back(3); adj[3].push_back(2);
    adj[3].push_back(4); adj[4].push_back(3);
    adj[4].push_back(1); adj[1].push_back(4);

    Solution sol;
    if (sol.isCycle(V, adj)) std::cout << "Yes";
    else std::cout << "No";

    return 0;
}`,
                explanation: "For an undirected graph, we can use DFS to detect cycles. For every visited vertex `v`, if there is an adjacent vertex `u` that is already visited and `u` is not the parent of `v` in the DFS tree, then there is a cycle in the graph."
            },
            {
                id: "dsa-cpp-k4",
                title: "Detect Cycle in Directed Graph",
                description: "Detect a cycle in a directed graph.",
                statement: "Given a directed graph, check whether the graph contains a cycle or not.",
                inputFormat: "V, E, then E lines of edges.",
                outputFormat: "'Yes' or 'No'.",
                testCases: [{ input: "4 4\n0 1\n1 2\n2 3\n3 1", output: "Yes" }],
                solution: `#include <iostream>
#include <vector>
#include <list>

class Solution {
public:
    bool isCyclicUtil(int u, std::vector<bool>& visited, std::vector<bool>& recStack, const std::vector<std::list<int>>& adj) {
        visited[u] = true;
        recStack[u] = true;

        for (int v : adj[u]) {
            if (!visited[v]) {
                if (isCyclicUtil(v, visited, recStack, adj))
                    return true;
            } else if (recStack[v]) {
                return true;
            }
        }
        recStack[u] = false;
        return false;
    }

    bool isCyclic(int V, const std::vector<std::list<int>>& adj) {
        std::vector<bool> visited(V, false);
        std::vector<bool> recStack(V, false);
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (isCyclicUtil(i, visited, recStack, adj)) {
                    return true;
                }
            }
        }
        return false;
    }
};

int main() {
    int V = 4, E = 4;
    std::vector<std::list<int>> adj(V);
    adj[0].push_back(1);
    adj[1].push_back(2);
    adj[2].push_back(3);
    adj[3].push_back(1);

    Solution sol;
    if (sol.isCyclic(V, adj)) std::cout << "Yes";
    else std::cout << "No";
    
    return 0;
}`,
                explanation: "For a directed graph, we need to check for a back edge. A back edge is an edge from a node `u` to one of its ancestors in the DFS tree. We can keep track of the nodes in the current recursion stack. If we find an adjacent node `v` that is already in the recursion stack, then there is a cycle."
            },
            {
                id: "dsa-cpp-k5",
                title: "Topological Sort",
                description: "Perform a topological sort on a Directed Acyclic Graph (DAG).",
                statement: "A topological sort of a DAG is a linear ordering of its vertices such that for every directed edge from vertex `u` to vertex `v`, `u` comes before `v` in the ordering. This is often used for scheduling tasks with dependencies.",
                inputFormat: "V, E, then E lines of edges.",
                outputFormat: "A valid topological sort order.",
                testCases: [{ input: "6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1", output: "5 4 2 3 1 0 " }],
                solution: `#include <iostream>
#include <vector>
#include <stack>
#include <list>

class Solution {
public:
    void topoSortUtil(int u, std::vector<bool>& visited, std::stack<int>& s, const std::vector<std::list<int>>& adj) {
        visited[u] = true;
        for (int v : adj[u]) {
            if (!visited[v]) {
                topoSortUtil(v, visited, s, adj);
            }
        }
        s.push(u);
    }

    std::vector<int> topoSort(int V, const std::vector<std::list<int>>& adj) {
        std::stack<int> s;
        std::vector<bool> visited(V, false);
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                topoSortUtil(i, visited, s, adj);
            }
        }
        std::vector<int> result;
        while (!s.empty()) {
            result.push_back(s.top());
            s.pop();
        }
        return result;
    }
};

int main() {
    int V = 6, E = 6;
    std::vector<std::list<int>> adj(V);
    adj[5].push_back(2);
    adj[5].push_back(0);
    adj[4].push_back(0);
    adj[4].push_back(1);
    adj[2].push_back(3);
    adj[3].push_back(1);
    
    Solution sol;
    std::vector<int> result = sol.topoSort(V, adj);
    for(int node : result) std::cout << node << " ";
    
    return 0;
}`,
                explanation: "Topological sort is based on DFS. We perform a DFS traversal. After the recursive call for all adjacent vertices of a vertex `u` is finished, we push `u` onto a stack. The final topological order is the content of the stack popped one by one. This works because a node is only pushed to the stack after all its dependencies have been pushed."
            },
            {
                id: "dsa-cpp-k6",
                title: "Shortest Path in Unweighted Graph",
                description: "Find the shortest path using BFS.",
                statement: "Given an unweighted graph, a source, and a destination, find the length of the shortest path from the source to the destination.",
                inputFormat: "V, E, edges, then source and destination.",
                outputFormat: "The length of the shortest path.",
                testCases: [{ input: "8 10\n0 1\n0 3\n1 2\n3 4\n3 7\n4 5\n4 6\n4 7\n5 6\n6 7\n0 7", output: "2" }],
                solution: `#include <iostream>
#include <vector>
#include <queue>
#include <list>

int shortestPath(int V, const std::vector<std::list<int>>& adj, int src, int dest) {
    std::vector<int> dist(V, -1);
    std::queue<int> q;

    dist[src] = 0;
    q.push(src);

    while (!q.empty()) {
        int u = q.front();
        q.pop();

        if (u == dest) return dist[u];

        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }
    return -1;
}

int main() {
    // Example graph from test case
    int V = 8, E = 10, src = 0, dest = 7;
    std::vector<std::list<int>> adj(V);
    adj[0].push_back(1); adj[0].push_back(3);
    adj[1].push_back(2);
    adj[3].push_back(4); adj[3].push_back(7);
    adj[4].push_back(5); adj[4].push_back(6); adj[4].push_back(7);
    adj[5].push_back(6);
    adj[6].push_back(7);

    std::cout << shortestPath(V, adj, src, dest);
    return 0;
}`,
                explanation: "BFS is guaranteed to find the shortest path in an unweighted graph because it explores the graph level by level. We use an array `dist` to store the distance from the source. When we visit a neighbor `v` of `u`, its distance is simply `dist[u] + 1`. The first time we reach the destination, we have found the shortest path."
            },
            {
                id: "dsa-cpp-k7",
                title: "Dijkstra’s Algorithm",
                description: "Find the shortest path in a weighted graph.",
                statement: "Given a weighted, directed graph with non-negative weights and a source vertex, find the shortest paths from the source to all other vertices in the graph.",
                inputFormat: "V, E, edges with weights, then source.",
                outputFormat: "Shortest distances to all vertices.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;
typedef pair<int, int> iPair; // {weight, vertex}

void dijkstra(int V, const vector<list<iPair>>& adj, int src) {
    priority_queue<iPair, vector<iPair>, greater<iPair>> pq;
    vector<int> dist(V, numeric_limits<int>::max());

    pq.push({0, src});
    dist[src] = 0;

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for (auto const& [v, weight] : adj[u]) {
            if (dist[u] != numeric_limits<int>::max() && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    cout << "Vertex distances from source " << src << endl;
    for (int i = 0; i < V; ++i)
        cout << i << "\t\t" << dist[i] << endl;
}

int main() {
    int V = 9, src = 0;
    vector<list<iPair>> adj(V);
    // Example graph...
    dijkstra(V, adj, src);
    return 0;
}`,
                explanation: "Dijkstra's algorithm is a greedy algorithm that finds the shortest paths. It uses a `priority_queue` (min-heap) to always select the unvisited vertex with the smallest distance from the source. It then 'relaxes' the edges of this vertex, which means it checks if the path through the current vertex to its neighbors is shorter than any previously known path."
            },
            {
                id: "dsa-cpp-k8",
                title: "Minimum Spanning Tree (Prim's)",
                description: "Find the Minimum Spanning Tree of a graph.",
                statement: "Given a connected, undirected, and weighted graph, find a Minimum Spanning Tree (MST). An MST is a subgraph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Implement Prim's algorithm.",
                inputFormat: "V, E, edges with weights.",
                outputFormat: "The sum of the weights of the MST.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;
typedef pair<int, int> iPair;

int primMST(int V, const vector<list<iPair>>& adj) {
    priority_queue<iPair, vector<iPair>, greater<iPair>> pq;
    vector<int> key(V, numeric_limits<int>::max());
    vector<bool> inMST(V, false);
    
    int src = 0;
    pq.push({0, src});
    key[src] = 0;
    int sum = 0;

    while(!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        if(inMST[u]) continue;
        
        inMST[u] = true;
        sum += key[u]; // We need to re-fetch the weight, pq top's weight is correct. Better to sum at the end from key array.

        for (auto const& [v, weight] : adj[u]) {
            if (!inMST[v] && key[v] > weight) {
                key[v] = weight;
                pq.push({key[v], v});
            }
        }
    }
    
    int mst_weight = 0;
    for(int k : key) mst_weight += k;
    return mst_weight;
}`,
                explanation: "Prim's algorithm is a greedy algorithm that finds an MST. It's very similar to Dijkstra's. It starts from an arbitrary vertex and grows the MST by adding the cheapest edge that connects a vertex in the MST to a vertex outside the MST. A priority queue is used to efficiently find this cheapest edge."
            }
        ]
    }
];