import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART12: ProblemCategory[] = [
  {
    category: "SECTION 22 — ADVANCED / MIXED (Part 2)",
    problems: [
        {
            id: "python-s22-q26",
            title: "Non-blocking TCP Proxy",
            description: "Implement a proxy that logs and modifies traffic.",
            statement: "Implement a non-blocking TCP proxy using `asyncio`. It should listen on a local port, forward all traffic to a remote server, and be able to log or modify the data as it passes through in both directions.",
            inputFormat: "Implementation-based.",
            outputFormat: "A running proxy server.",
            testCases: [{ input: "", output: "Traffic is successfully proxied and logged." }],
            solution: `import asyncio

async def handle_client(reader, writer, remote_host, remote_port):
    # Connect to the remote server
    remote_reader, remote_writer = await asyncio.open_connection(remote_host, remote_port)

    async def relay(src_reader, dest_writer, direction):
        while not src_reader.at_eof():
            data = await src_reader.read(4096)
            if not data:
                break
            
            # Here you can log or modify the 'data'
            print(f"{direction}: {data[:50]}...")
            
            dest_writer.write(data)
            await dest_writer.drain()
        dest_writer.close()

    # Create two relay tasks, one for each direction
    await asyncio.gather(
        relay(reader, remote_writer, "Client -> Server"),
        relay(remote_reader, writer, "Server -> Client")
    )
`,
            explanation: "This solution uses `asyncio`'s streams API (`open_connection`, `start_server`). For each client connection, it establishes a new connection to the remote server. Two `relay` coroutines are then started concurrently using `asyncio.gather`. One reads from the client and writes to the server, and the other reads from the server and writes to the client. This non-blocking approach allows the proxy to handle many connections efficiently."
        },
        {
            id: "python-s22-q27",
            title: "Skyline Algorithm",
            description: "Fast skyline algorithm for multi-dimensional points.",
            statement: "Implement a fast skyline (or Pareto frontier) algorithm. Given a set of 2D points, a point (x, y) is on the skyline if no other point (x', y') exists such that x' >= x and y' >= y. This is common in database queries.",
            inputFormat: "A list of (x, y) tuples.",
            outputFormat: "A list of points on the skyline.",
            testCases: [{ input: "[(1,4), (3,3), (4,1), (2,2)]", output: "[(1,4), (3,3), (4,1)]" }],
            solution: `def find_skyline(points):
    # Sort points primarily by x descending, then by y descending
    sorted_points = sorted(points, key=lambda p: (-p[0], -p[1]))
    
    skyline = []
    max_y = -1
    
    for x, y in sorted_points:
        # If this point's y is greater than the max_y seen so far,
        # it cannot be dominated by any point to its right (due to sorting).
        if y > max_y:
            skyline.append((x, y))
            max_y = y
            
    return sorted(skyline)
`,
            explanation: "This efficient O(n log n) algorithm works by sorting the points. By sorting x-coordinates in descending order, we ensure that as we iterate, we are always looking at points to the 'left' of those we've already processed. We maintain the maximum y-value seen so far (`max_y`). A new point is part of the skyline only if its y-value is greater than `max_y`, because if it weren't, it would be dominated by a previous point we've already added."
        },
         {
            id: "python-s22-q28",
            title: "DSL Parser & Interpreter",
            description: "Create a parser for a domain-specific language.",
            statement: "Create a simple Domain-Specific Language (DSL) for arithmetic. The DSL should support expressions like `let x = 5; x * (2 + 3)`. Write a parser to create an Abstract Syntax Tree (AST) and an interpreter to evaluate it.",
            inputFormat: "Implementation-based.",
            outputFormat: "The result of the DSL expression.",
            testCases: [{ input: "'let x = 10; x + 5'", output: "15" }],
            solution: `# This is a complex problem. A conceptual approach:

# 1. Tokenizer (Lexer)
# 'let x = 10; x + 5' -> [LET, ID('x'), EQ, NUM(10), SEMI, ID('x'), PLUS, NUM(5)]

# 2. Parser
# Takes tokens and builds an Abstract Syntax Tree (AST)
# AST might look like:
#   Program(
#     Assign(Var('x'), Num(10)),
#     BinOp(PLUS, Var('x'), Num(5))
#   )

# 3. Interpreter (Visitor Pattern)
class Interpreter:
    def __init__(self):
        self.vars = {}
    
    def visit(self, node):
        # Dispatch to the correct method, e.g., visit_Assign
        method_name = f'visit_{type(node).__name__}'
        visitor = getattr(self, method_name)
        return visitor(node)

    def visit_Assign(self, node):
        self.vars[node.var.name] = self.visit(node.value)
    
    def visit_BinOp(self, node):
        left = self.visit(node.left)
        right = self.visit(node.right)
        if node.op == 'PLUS': return left + right
        # ... other operators
`,
            explanation: "Creating a language involves three steps: **1. Lexing/Tokenizing:** Breaking the raw text into a stream of tokens. **2. Parsing:** Organizing the tokens into a hierarchical structure called an Abstract Syntax Tree (AST) that represents the code's grammar. **3. Interpretation/Evaluation:** 'Walking' the AST and executing the operations. The Visitor design pattern is commonly used for this last step, allowing you to separate the AST structure from the operations performed on it."
        },
        {
            id: "python-s22-q29",
            title: "Thread Pool with Work-Stealing",
            description: "Implement a thread pool for CPU-bound tasks with work-stealing.",
            statement: "Implement a thread pool where each worker thread has its own queue (deque) of tasks. If a worker's queue becomes empty, it attempts to 'steal' a task from the end of another worker's queue. This improves load balancing for tasks of varying duration.",
            inputFormat: "Implementation-based.",
            outputFormat: "Tasks are completed efficiently.",
            testCases: [{ input: "", output: "All tasks processed." }],
            solution: `from collections import deque
import threading
import random

# Conceptual implementation
class WorkStealingPool:
    def __init__(self, n_threads):
        self.tasks = [deque() for _ in range(n_threads)]
        self.threads = [threading.Thread(target=self.worker, args=(i,)) for i in range(n_threads)]
        # ... start threads ...

    def submit(self, task):
        # Simple load balancing: add to a random queue
        idx = random.randint(0, len(self.tasks) - 1)
        self.tasks[idx].append(task)
        
    def worker(self, thread_id):
        my_queue = self.tasks[thread_id]
        while True:
            try:
                # Get from own queue
                task = my_queue.popleft()
                task()
            except IndexError:
                # My queue is empty, try to steal
                stole = False
                for i in range(len(self.tasks)):
                    if i == thread_id: continue
                    try:
                        # Steal from the *end* of another queue
                        task = self.tasks[i].pop()
                        task()
                        stole = True
                        break
                    except IndexError:
                        continue
                if not stole:
                    # Could sleep or spin
                    pass
`,
            explanation: "In a simple thread pool, all workers pull from a single central queue, which can cause lock contention. In a work-stealing design, each thread has its own local task queue (a `deque`). A worker primarily takes tasks from the head of its own queue (`popleft`). If its queue is empty, it becomes a 'thief' and tries to steal a task from the tail (`pop`) of another, randomly chosen worker's queue. This reduces contention and improves efficiency."
        },
         {
            id: "python-s22-q30",
            title: "File-System Watcher",
            description: "Build a file-system watcher that coalesces events.",
            statement: "Build a file-system watcher that monitors a directory for changes (created, modified, deleted). It should 'coalesce' or 'debounce' events, meaning if a file is modified many times in a short period, it should only trigger a single 'modified' event after a short delay.",
            inputFormat: "Implementation-based.",
            outputFormat: "Prints consolidated file system events.",
            testCases: [{ input: "Save a file 3 times quickly", output: "File modified: ... (once)" }],
            solution: `import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class DebounceHandler(FileSystemEventHandler):
    def __init__(self, delay=1.0):
        self.delay = delay
        self.timers = {}
        self.lock = threading.Lock()

    def process_event(self, event):
        print(f"Coalesced event: {event.event_type} - {event.src_path}")
        
    def on_any_event(self, event):
        with self.lock:
            # If a timer for this file already exists, cancel it
            if event.src_path in self.timers:
                self.timers[event.src_path].cancel()
            
            # Start a new timer
            timer = threading.Timer(self.delay, self.process_event, [event])
            self.timers[event.src_path] = timer
            timer.start()

# Usage:
# path = "."
# observer = Observer()
# observer.schedule(DebounceHandler(), path, recursive=True)
# observer.start()`,
            explanation: "This solution uses the `watchdog` library. The key is the `DebounceHandler`. When any file system event occurs, instead of processing it immediately, it starts a `threading.Timer`. If another event for the same file happens before the timer finishes, the old timer is cancelled and a new one is started. This ensures that only the last event in a rapid sequence is actually processed, effectively 'debouncing' the notifications."
        },
        {
            id: "python-s22-q31",
            title: "In-Memory Graph Database",
            description: "Write a graph DB supporting property queries and traversal.",
            statement: "Write a simple in-memory graph database. It should support adding nodes with properties (e.g., `add_node('Alice', type='person')`), adding edges between them (`add_edge('Alice', 'Bob', type='friend')`), and a basic traversal/query API (e.g., `get_friends('Alice')`).",
            inputFormat: "Class implementation.",
            outputFormat: "A graph data structure with a query API.",
            testCases: [{ input: "", output: "Correctly returns neighbors and properties." }],
            solution: `from collections import defaultdict

class GraphDB:
    def __init__(self):
        self.nodes = {} # {node_id: {properties}}
        self.adj = defaultdict(dict) # {node1: {node2: {properties}}}

    def add_node(self, node_id, **properties):
        self.nodes[node_id] = properties
    
    def add_edge(self, u, v, **properties):
        if u in self.nodes and v in self.nodes:
            self.adj[u][v] = properties
            self.adj[v][u] = properties # Assuming undirected graph

    def get_neighbors(self, node_id, edge_type=None):
        neighbors = []
        if node_id in self.adj:
            for neighbor, properties in self.adj[node_id].items():
                if edge_type is None or properties.get('type') == edge_type:
                    neighbors.append(neighbor)
        return neighbors`,
            explanation: "This implementation uses two dictionaries. `self.nodes` stores each node's ID and its properties (like a table of nodes). `self.adj` (adjacency list) is a dictionary where each key is a node ID, and its value is another dictionary mapping its neighbors to the properties of the edge connecting them. This structure makes it efficient to look up a node's properties and to find all of its neighbors."
        },
        {
            id: "python-s22-q32",
            title: "Topological Sort with Cycle Reporting",
            description: "Implement topological sort and report the cycle if one exists.",
            statement: "Implement a topological sort algorithm for a directed graph. If the graph contains a cycle (which makes a topological sort impossible), the function should detect it and return the list of nodes that form the cycle.",
            inputFormat: "A graph as an adjacency list.",
            outputFormat: "The sorted list of nodes, or the list of nodes in a cycle.",
            testCases: [{ input: "A->B, B->C, C->A", output: "Cycle detected: ['A', 'B', 'C']" }],
            solution: `def topological_sort_with_cycle_detection(graph):
    # 0: unvisited, 1: visiting, 2: visited
    visiting_state = {node: 0 for node in graph}
    result = []

    def dfs(node):
        visiting_state[node] = 1 # Mark as visiting

        for neighbor in graph.get(node, []):
            if visiting_state[neighbor] == 1: # Cycle detected
                # In a full implementation, you'd trace back to find the cycle nodes
                raise ValueError(f"Cycle detected involving {neighbor}")
            if visiting_state[neighbor] == 0:
                if not dfs(neighbor):
                    return False
        
        visiting_state[node] = 2 # Mark as visited
        result.append(node)
        return True

    for node in graph:
        if visiting_state[node] == 0:
            try:
                if not dfs(node):
                    return "Cycle found (details require traceback)"
            except ValueError as e:
                return str(e)

    return result[::-1] # Return reversed post-order traversal`,
            explanation: "This algorithm is based on Depth-First Search (DFS). We use a three-state visiting system: unvisited (0), currently visiting (1), and finished visiting (2). A cycle is detected if the DFS encounters a node that is currently in the 'visiting' state. If no cycles are found, the topological sort is the reverse of the post-order traversal (the order in which nodes finish their DFS calls)."
        },
        {
            id: "python-s22-q33",
            title: "Adaptive Sampling (Reservoir Sampling)",
            description: "Implement Reservoir Sampling for streaming data.",
            statement: "Implement Reservoir Sampling, an algorithm for selecting `k` items at random from a list or stream containing `n` items, where `n` is either a very large or unknown number. You should only have to iterate through the items once.",
            inputFormat: "A stream (iterator) of items and an integer k.",
            outputFormat: "A list of k random items from the stream.",
            testCases: [{ input: "stream=range(100), k=5", output: "A list of 5 random numbers from 0-99." }],
            solution: `import random

def reservoir_sample(stream, k):
    reservoir = []
    
    # Fill the reservoir with the first k items
    for i, item in enumerate(stream):
        if i < k:
            reservoir.append(item)
        else:
            # For each subsequent item, decide whether to replace
            # an existing item in the reservoir.
            # The probability of replacement is k / (i+1)
            j = random.randint(0, i)
            if j < k:
                reservoir[j] = item
                
    return reservoir`,
            explanation: "Reservoir sampling is a clever probabilistic algorithm. It fills the 'reservoir' with the first `k` items from the stream. For every subsequent item `i` (where `i > k`), it generates a random integer `j` between 0 and `i`. If `j` is less than `k`, the item at index `j` in the reservoir is replaced with the current item from the stream. This ensures that at any point `i`, every item seen so far has an equal probability (`k/i`) of being in the reservoir."
        },
        {
            id: "python-s22-q34",
            title: "Numeric Stable Sort with NaN Handling",
            description: "Implement a stable sort for floats that handles NaNs correctly.",
            statement: "Implement a stable sorting algorithm (like Merge Sort or Timsort) for a list of floating-point numbers. The implementation must correctly handle `NaN` (Not a Number) values, typically by grouping them all at the beginning or end of the sorted list, while preserving the relative order of other elements.",
            inputFormat: "A list of floats, possibly containing `float('nan')`.",
            outputFormat: "A sorted list with NaNs grouped.",
            testCases: [{ input: "[1.0, float('nan'), 0.5, float('nan'), 2.0]", output: "[float('nan'), float('nan'), 0.5, 1.0, 2.0]" }],
            solution: `def stable_sort_with_nan(arr):
    # Python's built-in sort (Timsort) is stable. The challenge is handling NaNs,
    # which don't compare normally (e.g., nan == nan is False).
    # We can use a custom key function.

    def sort_key(x):
        # This tuple-based key places NaNs first, then sorts by number.
        # (0, value) for numbers, (1, 0) for NaNs (or vice-versa).
        # A simpler approach is to split, sort, and combine.
        pass

    # Simpler split-and-combine approach:
    nans = [x for x in arr if x != x] # A property of NaN
    numbers = [x for x in arr if x == x]
    
    numbers.sort() # Timsort is stable
    
    return nans + numbers`,
            explanation: "The main difficulty is that `NaN` values are not comparable. A robust way to handle this is to partition the list into two: one for `NaN`s and one for regular numbers. A unique property of `NaN` is that `x != x` is true only if `x` is `NaN`. After partitioning, we can sort the list of regular numbers (Python's built-in `sort()` is stable) and then concatenate the `NaN` list with the sorted numbers list."
        },
        {
            id: "python-s22-q35",
            title: "CSV to SQL Converter",
            description: "Convert CSV to SQL INSERT statements with type inference.",
            statement: "Write a tool that reads an arbitrary CSV file, infers the data type of each column (Integer, Float, String), creates a corresponding SQL `CREATE TABLE` statement, and generates `INSERT` statements for all the data.",
            inputFormat: "A path to a CSV file.",
            outputFormat: "A string containing SQL statements.",
            testCases: [{ input: "", output: "CREATE TABLE ...; INSERT INTO ...;" }],
            solution: `import csv

def csv_to_sql(filepath, table_name):
    with open(filepath, 'r') as f:
        reader = csv.reader(f)
        header = next(reader)
        
        # Simple type inference
        first_row = next(reader)
        types = []
        for val in first_row:
            try:
                int(val)
                types.append("INTEGER")
                continue
            except ValueError: pass
            try:
                float(val)
                types.append("REAL")
                continue
            except ValueError: pass
            types.append("TEXT")
        
        # Create Table Statement
        cols_with_types = ", ".join([f"{h} {t}" for h, t in zip(header, types)])
        create_sql = f"CREATE TABLE {table_name} ({cols_with_types});"
        print(create_sql)

        # Insert Statements (process first row, then rest)
        # ... logic to generate INSERT statements for first_row and remaining rows ...`,
        explanation: "This process involves multiple steps. First, read the CSV header. Second, perform type inference by inspecting the first few rows of data. For each column, try to convert values to `int`, then `float`; if both fail, default to `TEXT`. Third, use the header and inferred types to generate a `CREATE TABLE` SQL statement. Finally, iterate through all rows in the CSV and generate an `INSERT INTO ... VALUES ...` statement for each one, making sure to properly quote string values."
        },
        {
            id: "python-s22-q36",
            title: "Dynamic Plugin System",
            description: "Discover and load plugins with dependency isolation.",
            statement: "Implement a plugin system. The main application should scan a 'plugins' directory, dynamically import any Python files found, and register the plugins. Each plugin should define its own dependencies, and the system should handle loading them in the correct order (or report circular dependencies).",
            inputFormat: "Implementation-based.",
            outputFormat: "Plugins are loaded and executed.",
            testCases: [{ input: "", output: "Plugin A loaded. Plugin B loaded." }],
            solution: `import importlib
import os

# Conceptual structure
# plugins/
#   - plugin_a.py (depends on 'core')
#   - plugin_b.py (depends on 'plugin_a')

# In plugin_a.py:
#   DEPENDS_ON = ['core']
#   def register(app): ...

def load_plugins():
    # 1. Scan the plugins directory for .py files.
    # 2. For each file, import it using importlib.import_module().
    # 3. Inspect the module to find its dependencies (DEPENDS_ON) and its
    #    registration function (register).
    # 4. Build a dependency graph: {'plugin_b': ['plugin_a'], ...}
    # 5. Perform a topological sort on the graph to get the correct load order.
    # 6. If topological sort fails, there's a circular dependency.
    # 7. Call the 'register()' function for each plugin in the sorted order.
    pass
`,
            explanation: "A plugin system decouples core functionality from extensions. The key steps are: **Discovery:** Finding the plugin files. **Dynamic Loading:** Using `importlib` to load them at runtime. **Dependency Resolution:** Building a graph of dependencies between plugins. **Topological Sort:** Sorting this graph to determine the correct initialization order, ensuring that a plugin's dependencies are loaded before the plugin itself."
        },
         {
            id: "python-s22-q37",
            title: "Binary Serialization Format",
            description: "Build a self-describing binary serialization format.",
            statement: "Build a simple, self-describing binary serialization format. For example, a value could be preceded by a type tag (e.g., 1 byte for type) and a length (e.g., 4 bytes for length). Write a serializer to convert a Python dictionary to this byte format and a deserializer to convert it back.",
            inputFormat: "Implementation-based.",
            outputFormat: "Correct serialization and deserialization.",
            testCases: [{ input: "data = {'a': 1, 'b': 'hi'}", output: "serializer(data) -> bytes -> deserializer -> original data" }],
            solution: `import struct

# Simple Type Tags
TYPE_INT = 0x01
TYPE_STR = 0x02

def serialize(data: dict) -> bytes:
    # Conceptual: This is for a single value, not a full dict
    if isinstance(data, int):
        # Tag (1 byte) + Value (4 bytes, signed integer)
        return struct.pack('>Bi', TYPE_INT, data)
    elif isinstance(data, str):
        encoded = data.encode('utf-8')
        # Tag (1 byte) + Length (4 bytes) + String bytes
        return struct.pack(f'>BI{len(encoded)}s', TYPE_STR, len(encoded), encoded)
    # ... handle dicts by iterating and concatenating ...
    return b''

def deserialize(byte_stream):
    # Conceptual:
    # 1. Read the first byte to get the type tag.
    # 2. Based on the tag, read the appropriate number of bytes for length/value.
    # 3. Use struct.unpack() to convert bytes back to Python objects.
    pass
`,
            explanation: "Binary serialization is more compact and faster to parse than text-based formats like JSON. A 'self-describing' format includes metadata (like type and length) in the byte stream itself. The `struct` module is essential for converting Python data types into C-style packed bytes and back. The format string (e.g., `>Bi`) specifies the byte order (`>`), a byte (`B`), and an integer (`i`)."
        },
        {
            id: "python-s22-q38",
            title: "Interval Tree",
            description: "Design an efficient interval tree for overlap queries.",
            statement: "Implement an Interval Tree data structure. It should efficiently store intervals `[start, end]` and support a query function that finds all intervals in the tree that overlap with a given query interval.",
            inputFormat: "Class implementation.",
            outputFormat: "Correctly finds overlapping intervals.",
            testCases: [{ input: "query([14, 16]) on intervals [15,20], [10,30]", output: "Both intervals" }],
            solution: `# Conceptual: An interval tree is a red-black tree under the hood.
# Each node stores:
# - An interval [low, high]
# - A 'max' value: the maximum endpoint of any interval in its subtree.
# The tree is sorted by the 'low' value of the intervals.

class Node:
    def __init__(self, interval):
        self.interval = interval
        self.max = interval.high
        self.left = None
        self.right = None

def insert(node, interval):
    # Standard BST insertion based on interval.low
    # After insertion, update the 'max' values up the tree
    pass

def query(node, query_interval):
    # 1. If node's interval overlaps query_interval, add to results.
    # 2. If left child's 'max' is greater than query_interval.low,
    #    recursively search left subtree.
    # 3. If right child exists, search right subtree.
    pass
`,
            explanation: "An Interval Tree is a specialized data structure for finding overlaps. The key optimization is the `max` value stored in each node. When querying, if the `max` value in a node's left subtree is less than the query interval's start, we know that no interval in that entire subtree can possibly overlap, so we can prune that whole branch from the search, making it much faster than a linear scan (O(k + log n) vs O(n))."
        },
         {
            id: "python-s22-q39",
            title: "Regex-based Tokenizer",
            description: "Implement a fast regex-based tokenizer for a language.",
            statement: "Implement a tokenizer for a simple programming language using a single regular expression. The tokenizer should take a string of code and yield a stream of (token_type, value) tuples. It should identify numbers, identifiers, operators, and whitespace.",
            inputFormat: "A string of code.",
            outputFormat: "A stream of tokens.",
            testCases: [{ input: "'var x = 10;'", output: "[('KEYWORD', 'var'), ...]" }],
            solution: `import re

def tokenize(code):
    # Define token patterns with named capture groups
    token_specification = [
        ('NUMBER',   r'\\d+(\\.\\d*)?'),  # Integer or float
        ('ASSIGN',   r'='),             # Assignment operator
        ('END',      r';'),             # Statement terminator
        ('ID',       r'[A-Za-z_][A-Za-z0-9_]*'), # Identifiers
        ('OP',       r'[+\\-*/]'),      # Arithmetic operators
        ('NEWLINE',  r'\\n'),           # Line endings
        ('SKIP',     r'[ \\t]+'),      # Skip spaces and tabs
        ('MISMATCH', r'.'),             # Any other character
    ]
    
    # Combine all patterns into one master regex
    tok_regex = '|'.join('(?P<%s>%s)' % pair for pair in token_specification)
    
    for mo in re.finditer(tok_regex, code):
        kind = mo.lastgroup
        value = mo.group()
        if kind == 'SKIP' or kind == 'NEWLINE':
            continue
        elif kind == 'MISMATCH':
            raise RuntimeError(f'{value!r} unexpected')
        yield kind, value
`,
            explanation: "A regex-based tokenizer is highly efficient. The trick is to combine all individual token patterns into a single large regular expression using the OR `|` operator. Each sub-pattern is placed in a named capture group (`?P<NAME>...`). We can then iterate through all matches using `re.finditer` and check `match.lastgroup` to see which named group produced the match, telling us the token type."
        },
        {
            id: "python-s22-q40",
            title: "Minimal Container Simulator",
            description: "Simulate container process isolation conceptually.",
            statement: "Write a Python script that conceptually simulates how a container works. Use the `os` module to demonstrate changing the root directory (`os.chroot`) and creating a new process that sees a different filesystem view than the parent.",
            inputFormat: "Implementation-based.",
            outputFormat: "Demonstrates process isolation.",
            testCases: [{ input: "", output: "Child process sees a limited filesystem." }],
            solution: `# NOTE: This requires root privileges to run os.chroot
import os

# Create a minimal new root filesystem
new_root = '/tmp/new_root'
os.makedirs(f'{new_root}/bin', exist_ok=True)
# In a real scenario, you'd copy necessary binaries like 'ls', 'bash' here

pid = os.fork()

if pid == 0:
    # --- Child Process ---
    try:
        os.chroot(new_root)
        os.chdir('/')
        print("CHILD: Changed root! Current dir:", os.getcwd())
        print("CHILD: ls / ->", os.listdir('/'))
        # This will only show '/bin'
    except PermissionError:
        print("CHILD: chroot failed. Need to run as root.")
    os._exit(0)
else:
    # --- Parent Process ---
    os.waitpid(pid, 0)
    print("PARENT: Child finished.")
    print("PARENT: ls / ->", os.listdir('/')) # Shows the real root`,
            explanation: "Containers achieve isolation using two key Linux kernel features: **Namespaces** and **Cgroups**. This example simulates the **Mount Namespace** using `os.chroot`. When the child process calls `chroot`, its view of the filesystem root `/` is changed to `/tmp/new_root`. It is now 'jailed' and cannot see or access any files outside of that new root directory, demonstrating a basic form of filesystem isolation."
        },
        {
            id: "python-s22-q41",
            title: "Edit Distance & Alignment",
            description: "Compute edit distance (Needleman-Wunsch / Smith-Waterman).",
            statement: "Implement the Needleman-Wunsch algorithm to compute the edit distance (a specific type of Levenshtein distance) between two strings and find their optimal global alignment. This involves dynamic programming.",
            inputFormat: "Two strings.",
            outputFormat: "The edit distance and the aligned strings.",
            testCases: [{ input: "s1='saturday', s2='sunday'", output: "Distance: 3" }],
            solution: `def needleman_wunsch(s1, s2):
    n, m = len(s1), len(s2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    
    # Initialize DP table
    for i in range(n + 1): dp[i][0] = -i
    for j in range(m + 1): dp[0][j] = -j
    
    # Fill DP table
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            match = dp[i-1][j-1] + (1 if s1[i-1] == s2[j-1] else -1)
            delete = dp[i-1][j] - 1
            insert = dp[i][j-1] - 1
            dp[i][j] = max(match, delete, insert)
            
    # The score is in the bottom-right corner
    # To get the alignment, you would need to backtrack from this corner
    # following the path of max() choices.
    
    return dp[n][m]`,
            explanation: "This is a classic dynamic programming problem. We build a 2D DP table where `dp[i][j]` stores the optimal alignment score for the first `i` characters of `s1` and the first `j` characters of `s2`. Each cell is calculated by considering three possibilities: a match/mismatch (`dp[i-1][j-1]`), a deletion (`dp[i-1][j]`), or an insertion (`dp[i][j-1]`). The Smith-Waterman algorithm is a variation for finding the best *local* alignment."
        },
        {
            id: "python-s22-q42",
            title: "Cache with Write-Back/Write-Through",
            description: "Implement a cache with different write policies.",
            statement: "Implement a cache class that supports two write policies: **write-through** (data is written to cache and backend store simultaneously) and **write-back** (data is written only to cache; writes to backend are delayed until the item is evicted).",
            inputFormat: "Implementation-based.",
            outputFormat: "A cache demonstrating both write policies.",
            testCases: [{ input: "", output: "Correct write behavior for each policy." }],
            solution: `class Cache:
    def __init__(self, backend, policy='write-through'):
        self.cache = {}
        self.backend = backend # e.g., a dictionary simulating a database
        self.policy = policy
        self.dirty = set() # For write-back

    def put(self, key, value):
        self.cache[key] = value
        if self.policy == 'write-through':
            self.backend[key] = value
        elif self.policy == 'write-back':
            self.dirty.add(key)
    
    def evict(self, key):
        if self.policy == 'write-back' and key in self.dirty:
            print(f"Write-back: Flushing {key} to backend")
            self.backend[key] = self.cache[key]
            self.dirty.remove(key)
        del self.cache[key]`,
            explanation: "**Write-through** provides data consistency but has higher write latency as it waits for two writes. **Write-back** is faster for writes but risks data loss if the cache fails before the 'dirty' data is flushed to the backend store. The `dirty` set tracks which cache entries have been modified but not yet written to the backend."
        },
        {
            id: "python-s22-q43",
            title: "Distributed Rate Limiter",
            description: "Build a rate limiter using Redis (or simulate it).",
            statement: "Implement a rate limiter using the Token Bucket algorithm. The implementation should be suitable for a distributed system, using Redis to maintain the shared state of tokens and timestamps for each user.",
            inputFormat: "Implementation-based.",
            outputFormat: "A function that returns `True` (allow) or `False` (deny).",
            testCases: [{ input: "", output: "Correctly limits requests." }],
            solution: `# Conceptual solution with a mock Redis
mock_redis = {}

def is_rate_limited_token_bucket(user_id, capacity=10, refill_rate=1): # 1 token/sec
    now = time.time()
    key = f"ratelimit:{user_id}"
    
    # Get user's tokens and last timestamp from "Redis"
    tokens, last_refill = mock_redis.get(key, (capacity, now))
    
    # Refill tokens based on elapsed time
    elapsed = now - last_refill
    tokens_to_add = elapsed * refill_rate
    new_tokens = min(capacity, tokens + tokens_to_add)
    
    if new_tokens >= 1:
        # Allow request and consume one token
        new_tokens -= 1
        mock_redis[key] = (new_tokens, now)
        return False # Not limited
    else:
        # Deny request
        mock_redis[key] = (new_tokens, now)
        return True # Limited`,
            explanation: "The Token Bucket algorithm works like a bucket that is constantly refilled with tokens at a fixed rate. Each incoming request must take a token from the bucket to be processed. If the bucket is empty, the request is rejected. Using a centralized store like Redis is crucial for this to work in a distributed system, as all servers need to share the same token count for each user."
        },
        {
            id: "python-s22-q44",
            title: "Genetic Algorithm Framework",
            description: "Implement a genetic algorithm to solve a numeric optimization problem.",
            statement: "Implement a basic genetic algorithm framework. Use it to solve a simple optimization problem, like finding the maximum of a function `f(x) = -x^2 + 10x` in a given range. The framework should include selection, crossover, and mutation steps.",
            inputFormat: "Implementation-based.",
            outputFormat: "The best solution found after several generations.",
            testCases: [{ input: "", output: "Finds a value close to the function's maximum." }],
            solution: `import random

# 1. Initialization: Create a population of random solutions
population = [random.randint(0, 31) for _ in range(10)] # e.g., representing numbers as 5-bit integers

def fitness(individual): return -(individual**2) + 10*individual

# 2. Main Loop (Generations)
for gen in range(50):
    # 3. Selection: Choose parents based on fitness (e.g., Roulette wheel)
    # ...
    
    # 4. Crossover: Create offspring from parents
    # e.g., single-point crossover on the bit representation
    # parent1 = 10101, parent2 = 00110 -> child = 10110
    # ...

    # 5. Mutation: Apply random changes to offspring
    # e.g., flip a random bit
    # ...
    
    # 6. Replace old population with new generation
    # ...
`,
            explanation: "A genetic algorithm is a heuristic inspired by natural selection. It starts with a random population of candidate solutions ('individuals'). In each 'generation', the fittest individuals are selected to 'reproduce' (crossover). Their offspring are subject to random 'mutations'. Over many generations, the population evolves towards an optimal solution."
        },
         {
            id: "python-s22-q45",
            title: "Sudoku Solver",
            description: "Write a solver using constraint propagation and backtracking.",
            statement: "Write an efficient Sudoku solver. It should use backtracking to explore possibilities. For efficiency, it can incorporate constraint propagation techniques or heuristics like choosing the cell with the fewest remaining possibilities first.",
            inputFormat: "A 9x9 grid representing the puzzle (0 for empty cells).",
            outputFormat: "The solved 9x9 grid.",
            testCases: [{ input: "", output: "A valid, solved Sudoku board." }],
            solution: `def solve_sudoku(board):
    find = find_empty(board)
    if not find:
        return True # Solved
    else:
        row, col = find

    for num in range(1, 10):
        if is_valid(board, num, (row, col)):
            board[row][col] = num
            
            if solve_sudoku(board):
                return True
                
            # Backtrack
            board[row][col] = 0
            
    return False

def is_valid(board, num, pos):
    # Check row, column, and 3x3 box
    # ...
    return True

def find_empty(board):
    # Find the next empty cell (0)
    # ...
    return None
`,
            explanation: "The core of the solver is a recursive backtracking function. It finds an empty cell. It then tries placing each number from 1 to 9 in that cell. For each number, it first checks if placing it is valid (doesn't violate Sudoku rules). If it is, it makes a recursive call to solve the rest of the board. If that recursive call returns `False` (meaning it hit a dead end), it 'backtracks' by resetting the cell to 0 and trying the next number."
        },
        {
            id: "python-s22-q46",
            title: "Concurrency-Safe Priority Queue",
            description: "Implement a priority queue for multiple producers/consumers.",
            statement: "Implement a priority queue that is safe for use with multiple producer and multiple consumer threads. It should block consumers when the queue is empty.",
            inputFormat: "Class implementation.",
            outputFormat: "A thread-safe priority queue.",
            testCases: [{ input: "", output: "Consumers correctly process items by priority." }],
            solution: `import queue
import threading

# Python's queue.PriorityQueue is already thread-safe!
# This problem is about understanding its implementation.

# A conceptual re-implementation:
class ThreadSafePriorityQueue:
    def __init__(self):
        self._queue = []
        self._lock = threading.Lock()
        self._condition = threading.Condition(self._lock)

    def put(self, item, priority):
        with self._lock:
            # heapq.heappush(self._queue, (priority, item))
            self._queue.append((priority, item))
            self._queue.sort(key=lambda x: x[0], reverse=True) # Simplified
            # Notify a waiting consumer
            self._condition.notify()

    def get(self):
        with self._lock:
            while not self._queue:
                # Block until an item is available
                self._condition.wait()
            return self._queue.pop()`,
            explanation: "The built-in `queue.PriorityQueue` is the best solution as it's highly optimized and thread-safe. A manual implementation would involve a list (ideally a heap using the `heapq` module for efficiency), a `threading.Lock` to protect access to the list, and a `threading.Condition` variable. The condition variable allows consumer threads to `wait()` efficiently (without busy-looping) until a producer thread calls `notify()` after adding an item."
        },
        {
            id: "python-s22-q47",
            title: "Hot-Reloadable Configuration",
            description: "Create a system that safely updates app config on file change.",
            statement: "Create a configuration system that loads settings from a file (e.g., JSON or YAML). It should monitor the file for changes and, when a change is detected, safely reload the configuration into the running application without requiring a restart.",
            inputFormat: "Implementation-based.",
            outputFormat: "Application reflects config changes live.",
            testCases: [{ input: "Change config file", output: "App prints 'Config reloaded'" }],
            solution: `# Conceptual solution using a background thread and a lock

class ConfigManager:
    def __init__(self, filepath):
        self.filepath = filepath
        self.config = {}
        self.lock = threading.RLock()
        self.load()
        
        # Start a background thread to watch for file changes
        self.watcher_thread = threading.Thread(target=self._watch, daemon=True)
        self.watcher_thread.start()

    def load(self):
        with self.lock, open(self.filepath, 'r') as f:
            # new_config = json.load(f)
            # self.config = new_config
            print("Config loaded/reloaded.")
    
    def get(self, key):
        with self.lock:
            return self.config.get(key)
            
    def _watch(self):
        last_modified = os.path.getmtime(self.filepath)
        while True:
            time.sleep(2)
            current_modified = os.path.getmtime(self.filepath)
            if current_modified > last_modified:
                last_modified = current_modified
                self.load()`,
            explanation: "A common approach is to have a singleton `ConfigManager` class. It loads the configuration initially. It also starts a background daemon thread that periodically checks the file's last modified timestamp using `os.path.getmtime()`. If the timestamp has changed, it re-reads the file and updates the in-memory configuration. A `Lock` is crucial to prevent the application from reading the configuration while it's in the middle of being updated."
        },
        {
            id: "python-s22-q48",
            title: "Secure Password Hashing Utility",
            description: "Implement a secure password hasing wrapper (PBKDF2/Argon2).",
            statement: "Implement a wrapper around a secure password hashing function like PBKDF2 or Argon2. The utility should provide `hash_password` and `verify_password` functions. The hash function must include a randomly generated salt and store it with the hash.",
            inputFormat: "Implementation-based.",
            outputFormat: "Functions for hashing and verification.",
            testCases: [{ input: "", output: "`verify_password` returns True for correct password, False otherwise." }],
            solution: `import hashlib
import os

def hash_password(password):
    # Generate a random salt
    salt = os.urandom(16)
    
    # Hash the password with the salt using PBKDF2
    # The iteration count should be high (e.g., 100,000+)
    pwd_hash = hashlib.pbkdf2_hmac(
        'sha256', 
        password.encode('utf-8'), 
        salt, 
        100000
    )
    
    # Store the salt with the hash
    return salt + pwd_hash

def verify_password(stored_password_hash, provided_password):
    # Extract the salt from the stored hash
    salt = stored_password_hash[:16]
    stored_hash = stored_password_hash[16:]
    
    # Hash the provided password with the same salt
    pwd_hash = hashlib.pbkdf2_hmac(
        'sha256', 
        provided_password.encode('utf-8'), 
        salt, 
        100000
    )
    
    return pwd_hash == stored_hash`,
            explanation: "Never store passwords in plaintext. A secure hashing function must be **slow** (to resist brute-force attacks) and **salted** (to resist rainbow table attacks). The salt is a random value unique to each user. It's combined with the password before hashing. The salt is not a secret; it's stored alongside the hash in the database. When verifying, you retrieve the user's salt, re-hash the provided password with it, and compare the result to the stored hash."
        },
        {
            id: "python-s22-q49",
            title: "Strongly Connected Components",
            description: "Implement an algorithm to find SCCs in a graph.",
            statement: "Implement an algorithm to find the Strongly Connected Components (SCCs) of a directed graph. A common choice is Kosaraju's algorithm or Tarjan's algorithm.",
            inputFormat: "A graph as an adjacency list.",
            outputFormat: "A list of lists, where each inner list is an SCC.",
            testCases: [{ input: "", output: "Correctly identifies all SCCs." }],
            solution: `# Kosaraju's Algorithm
from collections import defaultdict

def find_sccs(graph):
    # 1. First DFS pass on the original graph to get post-order traversal
    visited = set()
    stack = []
    def dfs1(node):
        visited.add(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                dfs1(neighbor)
        stack.append(node)
    
    for node in graph:
        if node not in visited:
            dfs1(node)

    # 2. Reverse the graph
    reversed_graph = defaultdict(list)
    for node, neighbors in graph.items():
        for neighbor in neighbors:
            reversed_graph[neighbor].append(node)
            
    # 3. Second DFS pass on the reversed graph, in post-order from step 1
    visited.clear()
    sccs = []
    def dfs2(node, component):
        visited.add(node)
        component.append(node)
        for neighbor in reversed_graph.get(node, []):
            if neighbor not in visited:
                dfs2(neighbor, component)

    while stack:
        node = stack.pop()
        if node not in visited:
            scc = []
            dfs2(node, scc)
            sccs.append(scc)
    
    return sccs`,
            explanation: "Kosaraju's algorithm is an elegant two-pass algorithm. The first DFS pass on the original graph determines the order in which to explore nodes in the second pass. The second DFS pass is performed on the **reversed graph** (where all edge directions are flipped). Each DFS tree found during this second pass corresponds to exactly one Strongly Connected Component."
        },
        {
            id: "python-s22-q50",
            title: "Customizable Logging Handler",
            description: "Build a logging handler that writes to a remote store with fallback.",
            statement: "Build a custom logging handler for Python's `logging` module. This handler should attempt to send log records to a remote API endpoint. If the network request fails, it should fall back to writing the log message to a local file.",
            inputFormat: "Implementation-based.",
            outputFormat: "Logs are sent to API or written to a file on failure.",
            testCases: [{ input: "", output: "Logs correctly handled." }],
            solution: `import logging
import requests

class RemoteFallbackHandler(logging.Handler):
    def __init__(self, endpoint, fallback_file):
        super().__init__()
        self.endpoint = endpoint
        self.fallback_file = fallback_file

    def emit(self, record):
        log_entry = self.format(record)
        try:
            # Try to send to remote endpoint
            response = requests.post(self.endpoint, data=log_entry, timeout=2)
            response.raise_for_status() # Raise HTTPError for bad responses (4xx or 5xx)
        except (requests.exceptions.RequestException, IOError):
            # If it fails, fall back to writing to a local file
            with open(self.fallback_file, 'a') as f:
                f.write(log_entry + '\\n')
`,
            explanation: "Python's `logging` module is highly extensible. You can create a custom handler by subclassing `logging.Handler` and overriding the `emit` method. The `emit` method receives a `LogRecord` object. Inside, we format the log record and place the network request inside a `try...except` block. If any `requests`-related exception occurs (timeout, connection error, bad status code), the `except` block is triggered, which then writes the same log message to the specified local fallback file."
        }
    ]
  }
];
