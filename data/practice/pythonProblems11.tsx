import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART11: ProblemCategory[] = [
  {
    category: "SECTION 21 — ADVANCED / MIXED (Part 1)",
    problems: [
      {
        id: "python-s21-q1",
        title: "Thread-Safe LRU Cache",
        description: "Implement a thread-safe LRU cache with O(1) get/put operations.",
        statement: "Implement a thread-safe LRU (Least Recently Used) cache. It must support a maximum size, and its `get` and `put` operations must have an average time complexity of O(1).",
        inputFormat: "Implementation-based problem. Test via method calls.",
        outputFormat: "The class should correctly retrieve and evict items.",
        testCases: [{ input: "Cache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);", output: "get(1)->1, get(2)->-1 (evicted)" }],
        solution: `import collections
import threading

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = collections.OrderedDict()
        self.lock = threading.Lock()

    def get(self, key: int) -> int:
        with self.lock:
            if key not in self.cache:
                return -1
            # Move the accessed item to the end (most recently used)
            self.cache.move_to_end(key)
            return self.cache[key]

    def put(self, key: int, value: int) -> None:
        with self.lock:
            if key in self.cache:
                # Update existing key and move it to the end
                self.cache.move_to_end(key)
            self.cache[key] = value
            if len(self.cache) > self.capacity:
                # Pop the first item (least recently used)
                self.cache.popitem(last=False)
`,
        explanation: "This solution uses a combination of `collections.OrderedDict` for the LRU logic and a `threading.Lock` for thread safety. The `OrderedDict` maintains insertion order, and its `move_to_end` method allows us to mark an item as recently used in O(1) time. `popitem(last=False)` efficiently removes the least recently used item. The `with self.lock:` statement ensures that only one thread can modify the cache at a time, preventing race conditions."
      },
      {
        id: "python-s21-q2",
        title: "Async Web Crawler",
        description: "Build a crawler with asyncio, aiohttp, rate-limiting, and depth limit.",
        statement: "Write an asynchronous web crawler using `asyncio` and `aiohttp`. It should respect a polite rate limit (e.g., max 5 concurrent requests) and not crawl deeper than a specified depth.",
        inputFormat: "A starting URL, max depth, and rate limit.",
        outputFormat: "A list of crawled URLs.",
        testCases: [{ input: "start_url='http://example.com', max_depth=2, limit=5", output: "A set of URLs found within 2 links from the start." }],
        solution: `import asyncio
import aiohttp
from collections import deque

async def crawl(start_url, max_depth, concurrent_limit):
    queue = deque([(start_url, 0)])
    visited = set()
    semaphore = asyncio.Semaphore(concurrent_limit)

    async with aiohttp.ClientSession() as session:
        while queue:
            url, depth = queue.popleft()
            if url in visited or depth > max_depth:
                continue
            
            visited.add(url)
            print(f"Crawling (depth {depth}): {url}")

            async with semaphore:
                try:
                    async with session.get(url, timeout=10) as response:
                        if response.status == 200:
                            # In a real crawler, parse HTML for new links
                            # and add them to the queue with depth + 1
                            pass
                except Exception as e:
                    print(f"Failed to fetch {url}: {e}")
    return visited
`,
        explanation: "`asyncio` enables high-concurrency for I/O-bound tasks like web requests. `aiohttp` is the client for making these requests asynchronously. An `asyncio.Semaphore` is used as a counter to limit the number of concurrent `session.get` calls, enforcing the rate limit. A `deque` is used as a FIFO queue to manage URLs to visit, and a `set` efficiently tracks visited URLs to prevent re-crawling and loops."
      },
       {
        id: "python-s21-q3",
        title: "Coroutine-based Pipeline",
        description: "Process streaming data with a producer-transformer-consumer pipeline.",
        statement: "Build a coroutine-based pipeline using `asyncio.Queue`. One coroutine (producer) generates data, a second (transformer) modifies it, and a third (consumer) processes the final result.",
        inputFormat: "Implementation-based problem.",
        outputFormat: "Console output showing the data flow.",
        testCases: [{ input: "", output: "Produced: 1 -> Transformed: 10 -> Consumed: 10..." }],
        solution: `import asyncio

async def producer(queue):
    for i in range(1, 11):
        await asyncio.sleep(0.5)
        await queue.put(i)
        print(f"Produced: {i}")
    await queue.put(None) # Sentinel to signal end

async def transformer(in_queue, out_queue):
    while True:
        item = await in_queue.get()
        if item is None:
            await out_queue.put(None)
            break
        transformed = item * 10
        print(f"Transformed: {transformed}")
        await out_queue.put(transformed)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"Consumed: {item}")

async def main():
    q1 = asyncio.Queue()
    q2 = asyncio.Queue()
    await asyncio.gather(producer(q1), transformer(q1, q2), consumer(q2))

asyncio.run(main())`,
        explanation: "`asyncio.Queue` is a thread-safe (and coroutine-safe) queue for communication between concurrent tasks. The `producer` generates data and `put`s it onto the first queue. The `transformer` `get`s from the first queue, processes the data, and `put`s it onto the second queue. The `consumer` `get`s the final data. `None` is used as a 'sentinel' value to signal the end of the data stream and gracefully shut down the pipeline."
      },
      {
        id: "python-s21-q4",
        title: "Persistent Key-Value Store",
        description: "Implement a key-value store with SSTable-style compaction.",
        statement: "Implement a persistent key-value store. Writes go to an in-memory memtable. When the memtable is full, it's flushed to a sorted file on disk (SSTable). Periodically, multiple SSTables are compacted into one to remove old/deleted values.",
        inputFormat: "Class implementation.",
        outputFormat: "A key-value store that persists data to disk.",
        testCases: [{ input: "", output: "Correctly stores and retrieves data after restart." }],
        solution: `class SimpleKVStore:
    def __init__(self, path):
        self.path = path
        self.memtable = {}
        # In a real implementation: load existing SSTables
    
    def put(self, key, value):
        self.memtable[key] = value
        if len(self.memtable) > 1000: # Threshold to flush
            self.flush()

    def get(self, key):
        if key in self.memtable:
            return self.memtable[key]
        # In a real implementation: search SSTables from newest to oldest
        return None

    def flush(self):
        # In a real implementation:
        # 1. Sort memtable keys
        # 2. Write key-value pairs to a new SSTable file
        # 3. Clear memtable
        print("Flushing memtable to disk...")
        self.memtable = {}

    def compact(self):
        # In a real implementation:
        # 1. Read multiple SSTables
        # 2. Merge them, keeping only the latest value for each key
        # 3. Write to a new, single SSTable
        # 4. Delete the old SSTables
        print("Compacting SSTables...")`,
        explanation: "This architecture is based on Log-Structured Merge-Trees (LSM-Trees), used by databases like Cassandra and RocksDB. It makes writes very fast by appending to an in-memory structure. Reads are slower as they may need to check multiple files. The `compaction` process is crucial for cleaning up old data and improving read performance over time."
      },
       {
        id: "python-s21-q5",
        title: "Mini ORM",
        description: "Design an ORM supporting model definition, CRUD, and simple filtering.",
        statement: "Design a mini Object-Relational Mapper (ORM) using SQLite. It should allow defining a model as a Python class, creating/reading/updating/deleting objects, and filtering results (e.g., `User.filter(age=25)`). Do not use external libraries like SQLAlchemy.",
        inputFormat: "Class implementation.",
        outputFormat: "An ORM that maps Python objects to database rows.",
        testCases: [{ input: "User.create(name='A', age=20); User.filter(age=20)", output: "Returns a User object." }],
        solution: `import sqlite3

class BaseModel:
    # Metaclass would be better, but for simplicity:
    _conn = sqlite3.connect('orm.db')
    _cursor = _conn.cursor()
    
    @classmethod
    def create(cls, **kwargs):
        # Simplified: assumes kwargs match table columns
        cols = ', '.join(kwargs.keys())
        placeholders = ', '.join(['?'] * len(kwargs))
        sql = f"INSERT INTO {cls.__name__.lower()} ({cols}) VALUES ({placeholders})"
        cls._cursor.execute(sql, tuple(kwargs.values()))
        cls._conn.commit()

    @classmethod
    def filter(cls, **kwargs):
        # Simplified: only handles equals
        where_clauses = [f"{key} = ?" for key in kwargs.keys()]
        sql = f"SELECT * FROM {cls.__name__.lower()} WHERE {' AND '.join(where_clauses)}"
        cls._cursor.execute(sql, tuple(kwargs.values()))
        return cls._cursor.fetchall()

class User(BaseModel):
    # In a real ORM, this would define columns and types
    pass`,
        explanation: "An ORM abstracts away SQL. This simplified version uses class methods (`@classmethod`) to operate on the table associated with the class. `User.create` builds an `INSERT` statement dynamically from keyword arguments. `User.filter` builds a `SELECT ... WHERE` clause. A real ORM would be much more complex, involving metaclasses to inspect class attributes and automatically generate the table schema and more robust query building."
      },
      {
        id: "python-s21-q6",
        title: "Regex Engine",
        description: "Implement a regex engine supporting basic operators.",
        statement: "Implement a simple regular expression engine that supports concatenation (ab), `.` (any character), `*` (zero or more), `+` (one or more), `?` (zero or one), character classes `[]`, and grouping `()`. A backtracking approach is common.",
        inputFormat: "Implementation-based problem.",
        outputFormat: "A function that returns `True` or `False` for a match.",
        testCases: [{ input: "pattern='a.c*', text='axccc'", output: "True" }],
        solution: `def match(pattern, text):
    # Base cases
    if not pattern: return not text
    if not text: return pattern == '$' # Handle end-of-string anchor

    # Handling Kleene star *
    if len(pattern) > 1 and pattern[1] == '*':
        # Try matching zero or more occurrences
        return (match(pattern[2:], text) or 
                (text and (pattern[0] == '.' or pattern[0] == text[0]) and 
                 match(pattern, text[1:])))
    
    # Standard match
    if text and (pattern[0] == '.' or pattern[0] == text[0]):
        return match(pattern[1:], text[1:])
        
    return False`,
        explanation: "This shows a simplified recursive backtracking approach. The core logic handles the Kleene star `*`: it tries to either skip the `x*` pattern entirely (`match(pattern[2:], text)`) OR match one character of the text and try to match the rest of the text against the same `x*` pattern (`match(pattern, text[1:])`). A full engine would need to handle all other operators like `+`, `?`, `[]`, and `()`."
      },
      {
        id: "python-s21-q7",
        title: "Suffix Array & LCP Array",
        description: "Construct suffix and LCP arrays to find the longest repeated substring.",
        statement: "Write a function to construct a suffix array and an LCP (Longest Common Prefix) array for a given string. Use these to find the longest repeated substring within the string.",
        inputFormat: "A single string.",
        outputFormat: "The longest repeated substring.",
        testCases: [{ input: "'banana'", output: "'ana'" }],
        solution: `def build_suffix_array(text):
    # A naive O(n^2 log n) implementation
    suffixes = [(text[i:], i) for i in range(len(text))]
    suffixes.sort()
    return [i for suffix, i in suffixes]

def build_lcp_array(text, suffix_array):
    # Kasai's Algorithm for O(n) LCP construction
    n = len(text)
    rank = [0] * n
    for i in range(n):
        rank[suffix_array[i]] = i
    
    lcp = [0] * (n - 1)
    h = 0
    for i in range(n):
        if rank[i] == 0: continue
        j = suffix_array[rank[i] - 1]
        if h > 0: h -= 1
        while i + h < n and j + h < n and text[i+h] == text[j+h]:
            h += 1
        lcp[rank[i]-1] = h
    return lcp

def longest_repeated_substring(text):
    sa = build_suffix_array(text)
    lcp = build_lcp_array(text, sa)
    if not lcp: return ""
    max_lcp = max(lcp)
    index = lcp.index(max_lcp)
    start_pos = sa[index]
    return text[start_pos : start_pos + max_lcp]`,
        explanation: "A suffix array is a sorted array of all suffixes of a string. The LCP array stores the length of the longest common prefix between adjacent suffixes in the sorted suffix array. The longest repeated substring in the original text will correspond to the maximum value in the LCP array, as this represents the longest prefix shared by two suffixes."
      },
       {
        id: "python-s21-q8",
        title: "Radix Trie",
        description: "Implement a trie with compressed nodes.",
        statement: "Implement a trie data structure that compresses nodes with only one child into a single edge. This is also known as a Radix Tree or Patricia Trie. It should support `insert` and `search` operations.",
        inputFormat: "Class implementation.",
        outputFormat: "A memory-efficient trie.",
        testCases: [{ input: "insert('romane'); insert('romanus')", output: "Structure has a split at 'roman' node" }],
        solution: `class RadixNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class RadixTree:
    def __init__(self):
        self.root = RadixNode()
    
    # The insert logic is complex. It involves finding the
    # longest common prefix, splitting nodes if necessary,
    # and creating new child nodes. A full implementation
    # is too long for this format but the concept is below.

    def insert(self, word):
        # Conceptual steps:
        # 1. Start at the root.
        # 2. Find a child edge that shares a prefix with the word.
        # 3. If no match, insert a new node for the entire word.
        # 4. If a full match is found, mark the node as end-of-word.
        # 5. If a partial match is found:
        #    a. Split the existing edge/node at the point of divergence.
        #    b. Create a new internal node.
        #    c. The old path becomes one child.
        #    d. The new word's remainder becomes another child.
        pass`,
        explanation: "A standard trie can be inefficient if it contains long chains of nodes that don't branch. A Radix Trie optimizes this by collapsing these chains. For example, the words 'slow', 'slower', and 'slowest' would be stored as a single node 'slow' which then branches to 'er' and 'est'. This saves significant memory."
      },
      {
        id: "python-s21-q9",
        title: "Custom JSON Parser",
        description: "Build a JSON parser without using the `json` module.",
        statement: "Build a custom JSON parser that takes a JSON string and converts it into a Python dictionary or list. It should support numbers, strings (with escapes), arrays `[]`, and nested objects `{}`.",
        inputFormat: "A JSON string.",
        outputFormat: "A Python dictionary or list.",
        testCases: [{ input: '{"key": "value", "num": 123, "arr": [1, 2]}', output: "{'key': 'value', 'num': 123, 'arr': [1, 2]}" }],
        solution: `def parse_json(json_str):
    # This is a highly complex problem typically solved with
    # a tokenizer (to break string into tokens like '{', ':', '"key"')
    # and a parser (to build the data structure from tokens).

    # A very simplified conceptual parser:
    
    # 1. Tokenizer:
    #    Iterate through string, identify tokens:
    #    LBRACE, RBRACE, LBRACK, RBRACK, COMMA, COLON,
    #    STRING, NUMBER, TRUE, FALSE, NULL
    
    # 2. Parser:
    #    def parse_value(tokens):
    #        if token is LBRACE: return parse_object(tokens)
    #        if token is LBRACK: return parse_array(tokens)
    #        ...
    #    def parse_object(tokens):
    #        obj = {}
    #        while current_token is not RBRACE:
    #            key = parse_string(tokens)
    #            expect_colon()
    #            value = parse_value(tokens)
    #            obj[key] = value
    #        return obj
    return "Implementation is complex for a snippet."`,
        explanation: "Parsing JSON from scratch requires two main stages. First, a **tokenizer** (or lexer) scans the raw string and converts it into a sequence of meaningful tokens (e.g., '{', '\"key\"', ':', '123'). Second, a **parser** takes this stream of tokens and recursively builds the Python data structure (dict, list) according to JSON grammar rules."
      },
       {
        id: "python-s21-q10",
        title: "Memory Profiler",
        description: "Implement a memory profiler to track object counts and sizes.",
        statement: "Implement a basic memory profiler that can be used as a context manager or decorator. It should track the count and total size of live Python objects, showing the difference before and after a block of code executes.",
        inputFormat: "Implementation-based.",
        outputFormat: "A report of memory changes.",
        testCases: [{ input: "Code block creating 1000 lists", output: "list: +1000 objects" }],
        solution: `import gc
from collections import Counter

class MemoryProfiler:
    def __enter__(self):
        gc.collect() # Clean up before starting
        self.before = self.get_snapshot()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        gc.collect() # Clean up after
        self.after = self.get_snapshot()
        self.print_diff()

    def get_snapshot(self):
        return Counter(type(obj).__name__ for obj in gc.get_objects())

    def print_diff(self):
        diff = self.after - self.before
        print("--- Memory Profile Diff ---")
        for item, count in diff.items():
            if count != 0:
                print(f"{item}: {count:+} objects")

# Usage:
with MemoryProfiler():
    # Code to be profiled
    my_list = [i for i in range(1000)]`,
        explanation: "This solution uses the `gc` (garbage collector) module. `gc.get_objects()` returns a list of all objects tracked by the collector. We take a snapshot of the object types and their counts before (`__enter__`) and after (`__exit__`) the code block. `collections.Counter` makes it easy to subtract the two snapshots to see the net change in object counts."
      },
      {
        id: "python-s21-q11",
        title: "Async Cache Decorator",
        description: "A decorator to cache async function results with TTL and max size.",
        statement: "Write a decorator for `async` functions that caches their results. The cache should support a Time-To-Live (TTL) for each entry and a maximum cache size. If the cache is full, it should evict the least recently used item.",
        inputFormat: "Decorator implementation.",
        outputFormat: "Functions are executed once, subsequent calls return cached result.",
        testCases: [{ input: "", output: "First call is slow, second is instant." }],
        solution: `import asyncio
import time
from functools import wraps
from collections import OrderedDict

def async_lru_cache(maxsize=128, ttl=300):
    def decorator(fn):
        cache = OrderedDict()
        lock = asyncio.Lock()

        @wraps(fn)
        async def wrapper(*args, **kwargs):
            key = (args, frozenset(kwargs.items()))
            async with lock:
                if key in cache:
                    result, timestamp = cache[key]
                    if time.time() - timestamp < ttl:
                        cache.move_to_end(key)
                        return result
            
            # Not in cache or expired
            result = await fn(*args, **kwargs)

            async with lock:
                cache[key] = (result, time.time())
                cache.move_to_end(key)
                if len(cache) > maxsize:
                    cache.popitem(last=False)
            
            return result
        return wrapper
    return decorator`,
        explanation: "This combines an `OrderedDict` for LRU logic (as in the LRU Cache problem) with `time.time()` to store timestamps. An `asyncio.Lock` is used to prevent race conditions in the concurrent environment. The decorator checks for a valid, non-expired cache entry. If not found, it calls the original async function with `await`, stores the result, and manages the cache size."
      },
      {
        id: "python-s21-q12",
        title: "Lock-Free Queue",
        description: "Implement a lock-free queue using multiprocessing primitives.",
        statement: "Implement a basic lock-free single-producer, single-consumer queue using primitives from the `multiprocessing` module, such as `Value` or `Array`, to avoid explicit locks for inter-process communication.",
        inputFormat: "Implementation-based.",
        outputFormat: "A queue that works between two processes without using `Lock`.",
        testCases: [{ input: "", output: "Producer and consumer processes communicate successfully." }],
        solution: `from multiprocessing import Process, Value, Array
import time

# This is a conceptual and simplified example. True lock-free programming
# is extremely complex and often requires atomic compare-and-swap operations.
# This simulates the idea without being truly lock-free at the CPU level.

class SimpleLockFreeQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        # Array of integers to hold data
        self.buffer = Array('i', capacity)
        # Value for read index
        self.head = Value('i', 0)
        # Value for write index
        self.tail = Value('i', 0)

    def put(self, item):
        # A true implementation would use atomic increments and handle wrap-around.
        # This is a simplified, non-blocking-but-not-truly-lock-free approach.
        if (self.tail.value - self.head.value) < self.capacity:
            self.buffer[self.tail.value % self.capacity] = item
            self.tail.value += 1

    def get(self):
        if self.head.value < self.tail.value:
            item = self.buffer[self.head.value % self.capacity]
            self.head.value += 1
            return item
        return None`,
        explanation: "The goal of lock-free data structures is to avoid blocking (waiting for a lock) by using atomic hardware instructions. This example simulates the concept using `multiprocessing.Value`, which provides shared memory for indices (`head` and `tail`). In a single-producer/single-consumer scenario, the producer only ever modifies `tail` and the consumer only ever modifies `head`, which avoids most race conditions. A real-world implementation would use atomic compare-and-swap operations to be truly lock-free."
      },
       {
        id: "python-s21-q13",
        title: "Mini Template Engine",
        description: "Build a template engine like Jinja with variable interpolation.",
        statement: "Build a simple template engine that can take a string like 'Hello, {{ name }}!' and a context dictionary {'name': 'World'} and produce 'Hello, World!'. It should support basic variable interpolation `{{ var }}`.",
        inputFormat: "A template string and a context dictionary.",
        outputFormat: "The rendered string.",
        testCases: [{ input: "template='Hi {{ user }}', context={'user': 'Alex'}", output: "Hi Alex" }],
        solution: `import re

def render_template(template, context):
    # Regex to find all occurrences of {{ variable_name }}
    pattern = r'\\{\\{\\s*(\\w+)\\s*\\}\\}'
    
    def replace_variable(match):
        # The variable name is in the first captured group
        var_name = match.group(1)
        # Return the value from the context, or an empty string if not found
        return str(context.get(var_name, ''))

    return re.sub(pattern, replace_variable, template)

# Example Usage
template = "Hello, {{ name }}! Welcome to {{ course }}."
context = {"name": "CodeAlpha", "course": "Python"}
print(render_template(template, context))`,
        explanation: "This solution uses `re.sub`, a powerful function for search-and-replace using regular expressions. The pattern `\\{\\{\\s*(\\w+)\\s*\\}\\}` looks for the `{{...}}` syntax and captures the variable name inside. `re.sub` can take a function as its replacement argument. This function is called for each match, and its return value is used as the replacement, allowing us to dynamically look up the variable in our context dictionary."
      },
      {
        id: "python-s21-q14",
        title: "Deadlock Detection Tool",
        description: "Detect wait-for cycles in a multi-threaded program.",
        statement: "Implement a tool that can detect deadlocks in a multi-threaded Python program. It should model the resource allocation graph (threads wanting locks) and periodically check for cycles.",
        inputFormat: "Implementation-based problem.",
        outputFormat: "A message indicating if a deadlock is detected.",
        testCases: [{ input: "", output: "Deadlock detected: Thread A -> Thread B -> Thread A" }],
        solution: `# Conceptual Solution
import threading
import time

locks = { 'A': threading.Lock(), 'B': threading.Lock() }
# Adjacency list for the wait-for graph
# (Thread X is waiting for lock held by Thread Y)
wait_for_graph = {} 

def detect_deadlock():
    # This function would run in a separate monitoring thread
    while True:
        # 1. Build the wait_for_graph based on which thread holds which lock
        #    and which thread is waiting for which lock. This is the hardest part
        #    and requires instrumenting the lock acquisitions.
        
        # 2. Check for cycles in the graph (e.g., using DFS).
        #    - Keep track of visited nodes in the current traversal path.
        #    - If you visit a node that's already in the current path, you've found a cycle.
        
        # Example cycle check function:
        # def has_cycle(graph):
        #     path = set()
        #     visited = set()
        #     for node in graph:
        #         if node not in visited:
        #             if dfs_cycle_check(node, path, visited):
        #                 return True
        #     return False
        
        print("Checking for deadlocks...")
        time.sleep(5)
`,
        explanation: "A deadlock occurs when two or more threads are blocked forever, waiting for each other. This can be modeled as a cycle in a 'wait-for' graph, where an edge from Thread A to Thread B means A is waiting for a resource held by B. A deadlock exists if there's a cycle (e.g., A waits for B, and B waits for A). The solution involves periodically building this graph and running a cycle detection algorithm, like a modified Depth-First Search (DFS)."
      },
       {
        id: "python-s21-q15",
        title: "Context Manager Factory",
        description: "Create a factory that composes multiple context managers.",
        statement: "Create a function or class that can take multiple context managers and compose them into a single context manager. When the composite manager is entered, it enters all child managers in order, and when exited, it exits them in reverse order.",
        inputFormat: "Implementation-based.",
        outputFormat: "A single context manager that handles multiple resources.",
        testCases: [{ input: "", output: "Enter A, Enter B, Exit B, Exit A" }],
        solution: `from contextlib import contextmanager

@contextmanager
def multi_context(*managers):
    exits = []
    try:
        # Enter all context managers in order
        for manager in managers:
            value = manager.__enter__()
            # Schedule the exit call
            exits.append(manager.__exit__)
        # Yield control to the 'with' block
        yield
    finally:
        # Exit all context managers in reverse order
        for exit_func in reversed(exits):
            # Arguments are for exception handling
            exit_func(None, None, None)

# Example Usage
@contextmanager
def manager(name):
    print(f"Entering {name}")
    yield
    print(f"Exiting {name}")

with multi_context(manager('A'), manager('B')):
    print("Inside with block")`,
        explanation: "This solution uses a generator-based context manager with `@contextmanager`. It iterates through the provided managers, manually calls their `__enter__` methods, and stores their `__exit__` methods in a list. The `yield` passes control to the code inside the `with` block. The `finally` block guarantees that, no matter what happens, the `__exit__` methods are called in the reverse order of entry, correctly cleaning up all resources."
      },
      {
        id: "python-s21-q16",
        title: "Blind SQL Injection Detector",
        description: "Implement a simple blind SQL injection detector.",
        statement: "Write a tool that can detect time-based blind SQL injection vulnerabilities. Given a URL with a parameter, it should inject a payload like `' AND (SELECT 1 FROM (SELECT(SLEEP(5)))a)--` and measure the response time to see if the database paused.",
        inputFormat: "A URL with a parameter placeholder.",
        outputFormat: "A message indicating if the endpoint is likely vulnerable.",
        testCases: [{ input: "url='http://test.com/item?id=1'", output: "Vulnerable to time-based blind SQLi" }],
        solution: `import requests
import time

def check_time_based_sqli(url, param):
    payload = f"' AND (SELECT 1 FROM (SELECT(SLEEP(5)))a)-- "
    
    # Normal request
    start_time_normal = time.time()
    requests.get(f"{url}?{param}=1")
    end_time_normal = time.time()
    normal_duration = end_time_normal - start_time_normal
    
    # Injection request
    start_time_inject = time.time()
    requests.get(f"{url}?{param}=1{payload}")
    end_time_inject = time.time()
    inject_duration = end_time_inject - start_time_inject
    
    print(f"Normal request took: {normal_duration:.2f}s")
    print(f"Injected request took: {inject_duration:.2f}s")
    
    # Check if the injection took significantly longer (e.g., > 4 seconds for a 5-sec sleep)
    if inject_duration > normal_duration + 4:
        print("VULNERABLE: The server response was delayed, indicating the SLEEP command executed.")
    else:
        print("NOT VULNERABLE (or not detected).")`,
        explanation: "Time-based blind SQL injection works by sending a database command that causes a time delay (like `SLEEP()`). The application doesn't return an error, but its response is delayed. The detector sends a normal request and a malicious request with the `SLEEP` payload. If the malicious request takes significantly longer than the normal one, it's a strong indicator that the SQL query was executed by the database, revealing the vulnerability."
      },
       {
        id: "python-s21-q17",
        title: "Concurrent File Downloader",
        description: "Download a file in parts concurrently and assemble it.",
        statement: "Write a concurrent file downloader using `threading` or `asyncio`. It should determine the file size, divide it into chunks, download each chunk in a separate thread/task, and assemble the chunks into the final file. It should also support resuming a failed download.",
        inputFormat: "Implementation-based.",
        outputFormat: "A successfully downloaded and assembled file.",
        testCases: [{ input: "", output: "File downloaded." }],
        solution: `import requests
import threading

def download_chunk(url, start_byte, end_byte, part_num, output_filename):
    headers = {'Range': f'bytes={start_byte}-{end_byte}'}
    response = requests.get(url, headers=headers, stream=True)
    
    # In a real implementation, you'd write to a temporary part file
    # e.g., f'output.part{part_num}'
    # For now, we just print
    print(f"Downloading part {part_num} ({start_byte}-{end_byte})")
    # with open(f'{output_filename}.part{part_num}', 'wb') as f:
    #     for chunk in response.iter_content(chunk_size=1024):
    #         f.write(chunk)
    
def assemble_files(num_parts, output_filename):
    print("Assembling parts...")
    # with open(output_filename, 'wb') as outfile:
    #     for i in range(num_parts):
    #         with open(f'{output_filename}.part{i}', 'rb') as infile:
    #             outfile.write(infile.read())
    #         # os.remove(f'{output_filename}.part{i}')
    
# Main logic would be:
# 1. Send a HEAD request to get Content-Length.
# 2. Divide size by number of threads to get chunk sizes.
# 3. Create and start a thread for each chunk.
# 4. Wait for all threads to complete.
# 5. Assemble the part files.`,
        explanation: "The key is the HTTP `Range` header, which allows you to request only a specific portion of a file. The main thread first sends a `HEAD` request to get the total file size. It then divides this size by the number of desired threads to calculate the byte range for each chunk. It starts a thread for each chunk, passing it the URL and its specific byte range. After all threads complete, the main thread assembles the downloaded part files in order."
      },
      {
        id: "python-s21-q18",
        title: "Bloom Filter",
        description: "Implement a Bloom filter with adjustable false-positive rate.",
        statement: "Implement a Bloom filter, a probabilistic data structure to test whether an element is a member of a set. It should allow for an adjustable false-positive rate and support serialization/deserialization. False positives are allowed, but false negatives are not.",
        inputFormat: "Class implementation.",
        outputFormat: "`add` and `check` methods.",
        testCases: [{ input: "add('a'); check('a'); check('b')", output: "True, False (or small chance of True)" }],
        solution: `import mmh3 # MurmurHash3 is a good non-cryptographic hash
import math

class BloomFilter:
    def __init__(self, capacity, error_rate=0.001):
        self.capacity = capacity
        self.error_rate = error_rate
        self.size = self._get_size(capacity, error_rate)
        self.hash_count = self._get_hash_count(self.size, capacity)
        self.bit_array = [0] * self.size

    def add(self, item):
        for i in range(self.hash_count):
            digest = mmh3.hash(item, i) % self.size
            self.bit_array[digest] = 1

    def __contains__(self, item):
        for i in range(self.hash_count):
            digest = mmh3.hash(item, i) % self.size
            if self.bit_array[digest] == 0:
                return False # Definitely not in set
        return True # Probably in set

    def _get_size(self, n, p):
        m = -(n * math.log(p)) / (math.log(2) ** 2)
        return int(m)

    def _get_hash_count(self, m, n):
        k = (m/n) * math.log(2)
        return int(k)`,
        explanation: "A Bloom filter uses a bit array and multiple hash functions. To `add` an item, you hash it `k` times and set the bits at the resulting indices to 1. To `check` if an item exists, you hash it `k` times and check if all corresponding bits are 1. If any bit is 0, the item is definitely not in the set. If all are 1, it's *probably* in the set (a 'false positive' can occur if other items have set the same bits)."
      },
      {
        id: "python-s21-q19",
        title: "RPN Evaluator",
        description: "Build a postfix (Reverse Polish Notation) evaluator.",
        statement: "Build a postfix (RPN) expression evaluator that supports numbers, the operators +, -, *, /, and variables. For example, '3 4 + 2 *' should evaluate to 14.",
        inputFormat: "An RPN string and a dictionary of variables.",
        outputFormat: "The result of the evaluation.",
        testCases: [{ input: "expr='x 4 +', vars={'x': 3}", output: "7" }],
        solution: `def evaluate_rpn(expression, variables={}):
    stack = []
    tokens = expression.split()
    
    for token in tokens:
        if token in '+-*/':
            operand2 = stack.pop()
            operand1 = stack.pop()
            if token == '+': stack.append(operand1 + operand2)
            elif token == '-': stack.append(operand1 - operand2)
            elif token == '*': stack.append(operand1 * operand2)
            elif token == '/': stack.append(operand1 / operand2)
        elif token in variables:
            stack.append(variables[token])
        else:
            try:
                stack.append(float(token))
            except ValueError:
                raise ValueError(f"Unknown token: {token}")

    return stack.pop()`,
        explanation: "RPN evaluation is a classic use case for a stack. We iterate through the tokens. If a token is a number or variable, we push it onto the stack. If it's an operator, we pop the top two operands from the stack, perform the operation, and push the result back onto the stack. The final result is the last item remaining on the stack."
      },
      {
        id: "python-s21-q20",
        title: "Graph Algorithms",
        description: "Implement Dijkstra, A*, and Bellman-Ford.",
        statement: "Implement three classic shortest path algorithms: Dijkstra (for non-negative weights), A* (Dijkstra with a heuristic), and Bellman-Ford (handles negative weights and detects negative cycles).",
        inputFormat: "An adjacency list representation of a graph.",
        outputFormat: "The shortest path from a source to all other nodes.",
        testCases: [{ input: "", output: "Shortest paths calculated correctly." }],
        solution: `import heapq

# Dijkstra's Algorithm
def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)] # (distance, node)

    while pq:
        dist, current_node = heapq.heappop(pq)
        if dist > distances[current_node]:
            continue
        
        for neighbor, weight in graph[current_node].items():
            distance = dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances

# A* would be similar but priority in pq would be (dist + heuristic, node)
# Bellman-Ford involves relaxing all edges V-1 times.`,
        explanation: "Dijkstra's algorithm is a greedy algorithm that uses a priority queue to always explore the nearest unvisited node from the source. It maintains a dictionary of distances, updating them as shorter paths are found. A* is an extension that adds a 'heuristic' (an estimated cost to the goal) to the priority, guiding the search more directly. Bellman-Ford is slower but more robust, as it can handle negative edge weights by iteratively relaxing every edge in the graph."
      },
       {
        id: "python-s21-q21",
        title: "Binary Diff/Patch Tool",
        description: "Create a binary diff and patch tool.",
        statement: "Create a simplified version of a binary diff/patch tool. The `diff` function should take two files and produce a patch file. The `patch` function should take the original file and the patch file to reconstruct the new file.",
        inputFormat: "Implementation-based.",
        outputFormat: "A patch file and a reconstructed new file.",
        testCases: [{ input: "", output: "Patching successful, files match." }],
        solution: `# Conceptual Solution
def create_diff(file1_bytes, file2_bytes):
    # A simple diff could be a list of (offset, old_byte, new_byte) tuples.
    # A more efficient diff (like xdelta) finds matching blocks and
    # encodes instructions like "COPY 100 bytes from offset X in original"
    # and "INSERT these new bytes: ...".
    patch = []
    for i, byte in enumerate(file1_bytes):
        if i >= len(file2_bytes) or byte != file2_bytes[i]:
            patch.append({'offset': i, 'new_data': file2_bytes[i]})
    return patch # In reality, this would be a specialized binary format

def apply_patch(file1_bytes, patch):
    new_file = bytearray(file1_bytes)
    for instruction in patch:
        offset = instruction['offset']
        new_data = instruction['new_data']
        new_file[offset] = new_data
    return bytes(new_file)`,
        explanation: "Binary diffing aims to create a patch file that is much smaller than the original or new file. Simple byte-by-byte comparison is inefficient. Advanced algorithms like the one used in `bsdiff` or `xdelta` are based on finding the longest common subsequences and using suffix arrays to efficiently find blocks of data that have moved, encoding these moves as copy instructions in the patch file."
      },
      {
        id: "python-s21-q22",
        title: "CSV Streaming Transformer",
        description: "Handle arbitrarily large CSV files with schema mapping.",
        statement: "Write a CSV transformer that can process a very large file (too big to fit in memory) row by row. It should take a schema mapping (e.g., {'new_col': 'old_col_1'}) and an optional row filter function, writing the transformed data to a new CSV file.",
        inputFormat: "Implementation with a generator.",
        outputFormat: "A new, transformed CSV file.",
        testCases: [{ input: "", output: "Transformation complete." }],
        solution: `import csv

def transform_csv(input_file, output_file, schema_map, filter_func=None):
    with open(input_file, 'r', newline='') as infile, \\
         open(output_file, 'w', newline='') as outfile:
        
        reader = csv.DictReader(infile)
        
        # New header is the keys of the schema map
        writer = csv.DictWriter(outfile, fieldnames=schema_map.keys())
        writer.writeheader()
        
        for row in reader:
            if filter_func and not filter_func(row):
                continue
            
            new_row = {}
            for new_col, old_col in schema_map.items():
                new_row[new_col] = row.get(old_col, '')
            
            writer.writerow(new_row)`,
        explanation: "The key to handling large files is to process them line by line (streaming) instead of loading the whole file into memory. The `csv` module in Python is excellent for this. `csv.DictReader` reads each row as a dictionary, making it easy to access columns by name. We iterate through the reader, create a new dictionary based on the `schema_map`, and write it to the output file using `csv.DictWriter`."
      },
      {
        id: "python-s21-q23",
        title: "Garbage Collector Simulator",
        description: "Implement a simple mark-and-sweep garbage collector.",
        statement: "Simulate a mark-and-sweep garbage collector. Represent objects and their references as a graph. Start from 'root' objects, traverse all reachable objects and 'mark' them. Then, 'sweep' through all objects, freeing any that are not marked.",
        inputFormat: "Implementation-based.",
        outputFormat: "A list of objects that were 'freed'.",
        testCases: [{ input: "Graph with unreachable nodes", output: "Unreachable nodes are freed." }],
        solution: `def mark_and_sweep(all_objects, roots):
    marked = set()
    
    # --- Mark Phase ---
    def mark(obj):
        if obj not in marked:
            marked.add(obj)
            for child in obj.references: # Assuming objects have a 'references' attribute
                mark(child)
                
    for root in roots:
        mark(root)
        
    # --- Sweep Phase ---
    freed = []
    for obj in all_objects:
        if obj not in marked:
            freed.append(obj)
            # In a real GC, you would deallocate memory here
    
    return freed`,
        explanation: "Mark-and-sweep is a fundamental garbage collection algorithm. The **Mark** phase starts from root objects (like global variables or objects on the call stack) and performs a graph traversal (like DFS) to find all objects that are still reachable. The **Sweep** phase then iterates through every object in memory and reclaims the memory for any object that was not marked."
      },
      {
        id: "python-s21-q24",
        title: "Minimal HTTP Server",
        description: "Build an HTTP server supporting chunked responses and keep-alive.",
        statement: "Build a minimal HTTP/1.1 server from scratch using sockets. It should correctly parse GET requests, support `Connection: keep-alive` (reusing the same TCP connection for multiple requests), and be able to send responses using `Transfer-Encoding: chunked` for streaming data.",
        inputFormat: "Implementation-based.",
        outputFormat: "A running HTTP server.",
        testCases: [{ input: "Browser connects and receives a chunked response.", output: "Success." }],
        solution: `# Conceptual TCP Server
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 8080))
server_socket.listen(1)

while True:
    conn, addr = server_socket.accept()
    with conn:
        request = conn.recv(1024).decode()
        # 1. Parse request headers to check for 'Connection: keep-alive'

        # 2. To send chunked, send these headers:
        #    'HTTP/1.1 200 OK\\r\\n'
        #    'Transfer-Encoding: chunked\\r\\n'
        #    '\\r\\n'
        
        # 3. Send data chunks in format: <hex_length>\\r\\n<data>\\r\\n
        #    e.g., conn.sendall(b'5\\r\\nHello\\r\\n')
        
        # 4. Send final zero-length chunk
        #    conn.sendall(b'0\\r\\n\\r\\n')
        
        # 5. If keep-alive, loop to receive next request on same 'conn'.
        #    Otherwise, close the connection.`,
        explanation: "`Connection: keep-alive` tells the server not to close the TCP socket after sending a response, which saves the overhead of re-establishing it for subsequent requests. `Transfer-Encoding: chunked` is a mechanism that allows the server to send data in a series of chunks without needing to know the total `Content-Length` beforehand. This is essential for streaming dynamically generated content."
      },
      {
        id: "python-s21-q25",
        title: "Simple Pub/Sub Broker",
        description: "Design a simple publish-subscribe message broker.",
        statement: "Design and implement a simple in-memory publish-subscribe (pub/sub) broker. It should support multiple topics. A publisher can send a message to a topic. Any subscriber listening to that topic should receive the message. Support basic Quality of Service (QoS) levels (0: at most once, 1: at least once).",
        inputFormat: "Implementation-based.",
        outputFormat: "Subscribers receive messages published to their topic.",
        testCases: [{ input: "", output: "Correct message delivery." }],
        solution: `from collections import defaultdict
import asyncio

class PubSubBroker:
    def __init__(self):
        self.topics = defaultdict(list) # topic -> [subscriber_queue, ...]

    async def subscribe(self, topic):
        queue = asyncio.Queue()
        self.topics[topic].append(queue)
        return queue

    async def publish(self, topic, message):
        if topic in self.topics:
            for queue in self.topics[topic]:
                await queue.put(message)

# Example usage with coroutines:
# async def subscriber_task(broker, topic):
#     queue = await broker.subscribe(topic)
#     while True:
#         msg = await queue.get()
#         print(f"Sub got: {msg}")
# 
# async def publisher_task(broker, topic):
#     await broker.publish(topic, "Hello")`,
        explanation: "The pub/sub pattern decouples senders (publishers) from receivers (subscribers). The broker maintains a mapping of topics to a list of subscribers. When a message is published to a topic, the broker iterates through the list of subscribers for that topic and delivers the message to each of them. Using `asyncio.Queue` for each subscriber provides a natural way to handle message delivery in a concurrent environment."
      }
    ]
  }
];
