import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART14: ProblemCategory[] = [
  {
    category: "SECTION 24 — ADVANCED / MIXED (Part 4)",
    problems: [
       {
        id: "python-s24-q76",
        title: "Multi-Protocol Server",
        description: "Implement a server that handles HTTP and WebSocket.",
        statement: "Implement a server using `asyncio` that can handle both standard HTTP requests and upgrade a connection to a WebSocket on the same port. The server should serve a simple HTML page on one endpoint and echo messages back on a WebSocket endpoint.",
        inputFormat: "Implementation-based.",
        outputFormat: "A server running on a local port.",
        testCases: [{ input: "", output: "Browser can view HTTP page and connect to WebSocket." }],
        solution: `import asyncio
# Need a library like 'websockets' for the WebSocket handshake
# pip install websockets

async def handler(websocket, path):
    async for message in websocket:
        await websocket.send(message)

# Conceptual combined server:
# async def main_handler(reader, writer):
#     # 1. Read the initial HTTP request line.
#     # 2. Parse headers. Check for "Upgrade: websocket" header.
#     # 3. If it's a WebSocket upgrade request:
#     #    - Perform the WebSocket handshake.
#     #    - Hand off the reader/writer to the WebSocket handler logic.
#     # 4. If it's a standard HTTP request:
#     #    - Write the HTTP response (e.g., "HTTP/1.1 200 OK...")
#     #    - Close the connection.

# A more practical approach is to use a web framework that supports both,
# like FastAPI or aiohttp.`,
        explanation: "Handling both protocols on one port requires parsing the initial HTTP request. A standard request gets a standard HTTP response. A WebSocket connection begins as an HTTP GET request containing an `Upgrade: websocket` header. The server must then perform a specific handshake (involving hashing a key from the client) to switch the protocol from HTTP to WebSocket for that specific connection."
      },
      {
        id: "python-s24-q77",
        title: "CSV Diff/Merge Utility",
        description: "A tool that diffs and merges CSV files with schema drift.",
        statement: "Write a utility that can 'diff' two CSV files, identifying added, deleted, and modified rows based on a primary key column. It should also handle 'schema drift' (added/removed columns). A 'merge' function should be able to apply these changes, potentially handling conflicts.",
        inputFormat: "Implementation-based.",
        outputFormat: "A diff report or a merged CSV file.",
        testCases: [{ input: "", output: "Correctly identifies row changes." }],
        solution: `import pandas as pd

def diff_csvs(file1, file2, key_column):
    df1 = pd.read_csv(file1).set_index(key_column)
    df2 = pd.read_csv(file2).set_index(key_column)
    
    # Use pandas index operations
    added_keys = df2.index.difference(df1.index)
    deleted_keys = df1.index.difference(df2.index)
    common_keys = df1.index.intersection(df2.index)
    
    # Find modified rows
    merged = df1.loc[common_keys].merge(df2.loc[common_keys], on=key_column, how='outer', indicator=True)
    modified = merged[merged['_merge'] != 'both']
    
    return {
        "added": added_keys.tolist(),
        "deleted": deleted_keys.tolist(),
        "modified": modified.index.tolist() # Simplified
    }`,
        explanation: "Using the `pandas` library is ideal for this task. By setting the primary key column as the DataFrame index, we can use efficient set operations (`.difference()`, `.intersection()`) on the indices to find added and deleted rows. To find modified rows, we can merge the two dataframes on their common keys and look for rows where the values don't match, which requires careful comparison."
      },
      {
        id: "python-s24-q78",
        title: "High-Performance Memoization Decorator",
        description: "A memoization decorator that supports unhashable arguments.",
        statement: "Implement a memoization (caching) decorator that can handle functions with unhashable arguments, such as dictionaries and lists. The standard `@functools.lru_cache` fails on these.",
        inputFormat: "Decorator implementation.",
        outputFormat: "The function is memoized correctly.",
        testCases: [{ input: "func({'a': 1})", output: "Function runs once, second call is cached." }],
        solution: `import functools
import json

def memoize_unhashable(func):
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Create a cache key by serializing all arguments to a JSON string
        # sort_keys=True ensures that {'a':1, 'b':2} and {'b':2, 'a':1} produce the same key
        key = json.dumps((args, kwargs), sort_keys=True)
        
        if key not in cache:
            cache[key] = func(*args, **kwargs)
            
        return cache[key]
        
    return wrapper`,
        explanation: "The core challenge is creating a consistent, hashable key from arguments that are not themselves hashable. JSON serialization is a good solution. We convert all positional and keyword arguments into a tuple `(args, kwargs)` and then serialize this tuple to a JSON string using `json.dumps`. Using `sort_keys=True` ensures that dictionaries with the same content but different key order produce the same key string. This string can then be used as a key in our cache dictionary."
      },
      {
        id: "python-s24-q79",
        title: "LFU Cache",
        description: "Implement a Least Frequently Used (LFU) cache with O(1) operations.",
        statement: "Implement an LFU cache. It should evict the item that has been accessed the least frequently. If there's a tie in frequency, the least recently used item among them should be evicted. All `get` and `put` operations must have O(1) complexity.",
        inputFormat: "Class implementation.",
        outputFormat: "A correct LFU cache.",
        testCases: [{ input: "", output: "Correctly evicts the least frequently used item." }],
        solution: `# This is a classic and complex O(1) problem.
# Requires two linked hash maps (or dicts + doubly linked lists).
# 1. A dict to map key -> (value, frequency, node_in_freq_list)
# 2. A dict of frequencies to Doubly Linked Lists of keys.
#    freq_map = {1: DLL([keyA, keyB]), 2: DLL([keyC])}

class LFUNode:
    # ...
class LFUCache:
    def __init__(self, capacity):
        # ...
    def get(self, key):
        # 1. Get node from main dict.
        # 2. Increase its frequency.
        # 3. Move the node from its current frequency list (e.g., freq=2)
        #    to the next frequency list (freq=3).
        # 4. Update min_freq if necessary.
        pass
    def put(self, key, value):
        # ... Similar logic involving moving nodes between frequency lists
        # and evicting from the min_freq list if at capacity.
        pass
`,
        explanation: "Achieving O(1) for LFU is tricky. The key is to group items by their access frequency. This is often done using a dictionary where keys are frequencies and values are Doubly Linked Lists of items with that frequency. Another dictionary maps item keys to their nodes in these lists. When an item is accessed, its frequency increases, and it is moved from its current frequency list to the next one in O(1) time. This allows for constant-time updates and eviction."
      },
       {
        id: "python-s24-q80",
        title: "Approximate Nearest Neighbor (ANN) Search",
        description: "Implement ANN using Locality-Sensitive Hashing.",
        statement: "Implement a simple Approximate Nearest Neighbor (ANN) search algorithm using Locality-Sensitive Hashing (LSH). For a set of high-dimensional vectors, LSH hashes them such that similar vectors are likely to have the same hash value (hash collisions). This allows for faster-than-linear-time search.",
        inputFormat: "Implementation-based.",
        outputFormat: "Finds approximate nearest neighbors quickly.",
        testCases: [{ input: "", output: "Returns a vector that is close to the query vector." }],
        solution: `# Conceptual solution for 2D vectors using random projections

def generate_random_planes(num_planes, dimensions):
    # Returns 'num_planes' random vectors
    return np.random.randn(num_planes, dimensions)

def lsh_hash(vectors, planes):
    # Project vectors onto planes
    projections = np.dot(vectors, planes.T)
    # Hash is the binary string of which side of the plane they fall on
    return (projections > 0).astype(int)

# 1. Preprocessing:
#    - Generate multiple sets of random planes (multiple hash tables).
#    - For each vector, compute its hash for each table.
#    - Store: hash_table[hash] -> [vector_id, ...]

# 2. Query:
#    - Compute hashes for the query vector.
#    - Look up candidate vectors from all hash tables that have the same hash.
#    - Perform exact distance calculation on this small candidate set.`,
        explanation: "Finding the exact nearest neighbor in high dimensions is slow (curse of dimensionality). LSH is a technique for ANN. It uses hash functions designed so that similar items have a high probability of ending up in the same hash bucket. A common LSH technique for cosine similarity is 'random projection'. It generates several random hyperplanes. A vector's hash is determined by which side of each plane it falls on. Similar vectors will likely fall on the same side of most planes, thus having the same hash."
      },
      {
        id: "python-s24-q81",
        title: "Prometheus Metrics Exporter",
        description: "Implement a metrics collector that exports in Prometheus text format.",
        statement: "Implement a simple metrics collector for a sample application (e.g., a web server). It should track metrics like `http_requests_total` (a Counter) and `http_request_duration_seconds` (a Histogram). Expose these metrics on a `/metrics` endpoint in the text-based format that a Prometheus server can scrape.",
        inputFormat: "Implementation-based.",
        outputFormat: "A `/metrics` endpoint serving text data.",
        testCases: [{ input: "", output: "Prometheus-compatible metrics are displayed." }],
        solution: `from http.server import BaseHTTPRequestHandler, HTTPServer

# In reality, you'd use the official 'prometheus_client' library.
# This is a conceptual implementation of the format.

REQUESTS_TOTAL = 0

def get_metrics_text():
    # HELP and TYPE lines are metadata for Prometheus
    lines = [
        '# HELP http_requests_total The total number of HTTP requests.',
        '# TYPE http_requests_total counter',
        f'http_requests_total{{method="GET",endpoint="/home"}} {REQUESTS_TOTAL}'
    ]
    return "\\n".join(lines)

class MetricsHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        global REQUESTS_TOTAL
        if self.path == '/metrics':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain; version=0.0.4')
            self.end_headers()
            self.wfile.write(get_metrics_text().encode())
        else:
            REQUESTS_TOTAL += 1 # Increment on other requests
            # ... handle normal request ...
`,
        explanation: "Prometheus works by 'scraping' (sending an HTTP GET request to) a `/metrics` endpoint on your application. The application is responsible for formatting its internal metrics into a specific, simple text-based format. Each metric includes its name, optional labels in curly braces (like `method=\"GET\"`), and its current value. The `# HELP` and `# TYPE` lines provide metadata for Prometheus to understand the metric."
      },
       {
        id: "python-s24-q82",
        title: "Reactive Bindings System",
        description: "Implement a signals/slots system for data change propagation.",
        statement: "Implement a simple reactive bindings system (also known as signals and slots or an observer pattern). Create a `Signal` class. Other functions ('slots') can connect to this signal. When the signal is 'emitted' (called), all connected slots are executed automatically.",
        inputFormat: "Implementation-based.",
        outputFormat: "Callbacks are triggered when the signal is emitted.",
        testCases: [{ input: "", output: "Both logger and alerter functions run." }],
        solution: `class Signal:
    def __init__(self):
        self.slots = []

    def connect(self, slot):
        self.slots.append(slot)

    def emit(self, *args, **kwargs):
        for slot in self.slots:
            slot(*args, **kwargs)

# Example Usage
def logger(message):
    print(f"LOG: {message}")

def alerter(message):
    print(f"ALERT: {message}")

# A signal for when a user logs in
user_loggedIn = Signal()

# Connect the slots
user_loggedIn.connect(logger)
user_loggedIn.connect(alerter)

# Emit the signal
user_loggedIn.emit("User 'alex' logged in from IP 1.2.3.4")`,
        explanation: "This is a core implementation of the Observer design pattern. The `Signal` object acts as the 'subject'. It maintains a list of 'observers' (the `slots`). The `connect` method allows observers to register themselves. The `emit` method iterates through all registered observers and notifies them, passing along any relevant data. This decouples the code that produces an event from the code that reacts to it."
      },
      {
        id: "python-s24-q83",
        title: "Simple SAT Solver",
        description: "Implement a simple SAT solver using the DPLL algorithm.",
        statement: "Implement a simplified version of the DPLL algorithm to solve the Boolean Satisfiability Problem (SAT). The input should be a boolean formula in Conjunctive Normal Form (CNF), and the output should be a satisfying assignment or 'UNSATISFIABLE'.",
        inputFormat: "A list of lists of integers representing CNF.",
        outputFormat: "A satisfying assignment or UNSATISFIABLE.",
        testCases: [{ input: "[[1, -2], [2, 3]]", output: "A valid assignment like {1:T, 2:T, 3:T}" }],
        solution: `# Conceptual DPLL algorithm
def dpll(clauses, assignment):
    # 1. Unit Propagation:
    # If a clause is a single literal (e.g., [-2]), then that literal must be true.
    # Assign it and simplify all other clauses. Repeat.
    # ...

    # 2. Check for completion or conflict
    if not clauses: return assignment # All clauses satisfied
    if any(not c for c in clauses): return None # Found an empty clause -> conflict
    
    # 3. Choose a literal to branch on
    literal = choose_literal(clauses)
    
    # 4. Recurse (Backtrack)
    # Try assigning the literal to True
    result = dpll(simplify(clauses, literal), assignment + {literal: True})
    if result:
        return result
    
    # If that failed, try assigning it to False
    return dpll(simplify(clauses, -literal), assignment + {-literal: True})`,
        explanation: "The DPLL algorithm is a backtracking-based algorithm for solving SAT. Its efficiency comes from two key heuristics: **Unit Propagation** (if a clause has only one unassigned literal left, that literal must be assigned a value to make the clause true) and **Pure Literal Elimination** (if a variable appears only in its positive or negative form, it can be assigned a value that satisfies all clauses it appears in). The algorithm recursively applies these rules and, if stuck, picks an unassigned variable and tries both `True` and `False` assignments."
      },
      {
        id: "python-s24-q84",
        title: "JSON Schema Validator",
        description: "Implement a validator for JSON schemas.",
        statement: "Implement a basic JSON Schema validator. It should take a JSON object and a schema (as a dictionary) and validate the object against the schema. Support basic validations like `type`, `required` properties, `pattern` for strings, and `minItems` for arrays.",
        inputFormat: "A schema and a JSON object.",
        outputFormat: "`True` or an error message.",
        testCases: [{ input: "", output: "Validation successful or failed with reason." }],
        solution: `def validate(instance, schema):
    if schema.get('type') == 'object':
        if not isinstance(instance, dict):
            raise ValueError("Not an object")
        for prop in schema.get('required', []):
            if prop not in instance:
                raise ValueError(f"Required property '{prop}' missing")
        # ... recurse into properties
    
    elif schema.get('type') == 'string':
        if not isinstance(instance, str):
            raise ValueError("Not a string")
        if 'pattern' in schema and not re.match(schema['pattern'], instance):
            raise ValueError("Pattern does not match")
            
    elif schema.get('type') == 'array':
        if not isinstance(instance, list):
            raise ValueError("Not an array")
        if 'minItems' in schema and len(instance) < schema['minItems']:
            raise ValueError("Array has too few items")
    # ... etc.
    return True`,
        explanation: "A JSON Schema validator works by recursively traversing the data instance and the schema simultaneously. At each level, it checks the type of the instance against the `type` specified in the schema. Depending on the type, it then applies further rules defined in the schema, such as checking for `required` keys in an object or validating a string against a regular expression `pattern`."
      },
      {
        id: "python-s24-q85",
        title: "Concurrent Web Scraper",
        description: "Build a scraper with retries and politeness that respects robots.txt.",
        statement: "Build a concurrent web scraper that can fetch multiple pages at once. It must be 'polite' by respecting the `robots.txt` file of the target website and implementing a delay between requests to the same domain. It should also include retries with exponential backoff for failed requests.",
        inputFormat: "Implementation-based.",
        outputFormat: "Scraped data is saved.",
        testCases: [{ input: "", output: "Data scraped successfully." }],
        solution: `import asyncio
import aiohttp
from urllib.robotparser import RobotFileParser

# 1. robots.txt parsing
#    - Before crawling a domain, fetch and parse its /robots.txt
#    - rp = RobotFileParser()
#    - rp.set_url('http://example.com/robots.txt'); rp.read()
#    - Before fetching a URL, check: rp.can_fetch('*', url)

# 2. Concurrency with Rate Limiting
#    - Use asyncio and aiohttp.
#    - Use a dictionary to track the last request time for each domain.
#    - Before making a request to a domain, check the last request time
#      and asyncio.sleep() if necessary to enforce politeness delay.

# 3. Retries with Backoff
#    - Wrap the aiohttp request in a loop with a try/except block.
#    - On failure, catch the exception, sleep for an exponentially
#      increasing delay, and retry up to N times.
`,
        explanation: "A responsible scraper is a polite one. **`robots.txt`** is a standard file websites use to tell bots which pages they are not allowed to crawl. Your scraper must fetch and respect this file. **Politeness delay** means waiting for a short period (e.g., 1-2 seconds) between requests to the same server to avoid overloading it. **Concurrency** (using `asyncio`) is used to work on other domains while waiting for the politeness delay on one domain to expire."
      },
      {
        id: "python-s24-q86",
        title: "PCFG Synthesizer",
        description: "Parse sentences with a probabilistic context-free grammar.",
        statement: "Implement a simple parser for a Probabilistic Context-Free Grammar (PCFG). Given a grammar with probabilities (e.g., `S -> NP VP [0.9]`) and a sentence, use an algorithm like CYK (Cocke-Younger-Kasami) to find the most probable parse tree for the sentence.",
        inputFormat: "A PCFG and a sentence.",
        outputFormat: "The most probable parse tree.",
        testCases: [{ input: "", output: "A valid parse tree with its probability." }],
        solution: `# Conceptual CYK Algorithm
# Requires grammar to be in Chomsky Normal Form (CNF)

def cyk_parser(words, grammar):
    n = len(words)
    # DP table: table[i][j] stores possible non-terminals for substring words[i..j]
    table = [[set() for _ in range(n)] for _ in range(n)]

    # 1. Fill the diagonal (length 1 substrings)
    for i, word in enumerate(words):
        for rule, prob in grammar.get_terminal_rules(word):
            table[i][i].add(rule)

    # 2. Fill the rest of the table for substrings of length 2 to n
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            for k in range(i, j):
                # For each split point k...
                B_rules = table[i][k]
                C_rules = table[k+1][j]
                # Check for rules like A -> B C
                for A, B, C, prob in grammar.get_binary_rules():
                    if B in B_rules and C in C_rules:
                        table[i][j].add(A)
    
    # If Start symbol 'S' is in table[0][n-1], the sentence is valid.
    # To get probabilities, the table would store (rule, prob) pairs.
`,
        explanation: "The CYK algorithm is a dynamic programming algorithm for parsing context-free grammars. It builds a table bottom-up. The entry `table[i][j]` contains the set of all non-terminal symbols that can generate the substring of the sentence from index `i` to `j`. To handle PCFGs, each entry in the table would store not just the symbol but also the probability of that derivation, and we would use `max` to find the most likely parse."
      },
      {
        id: "python-s24-q87",
        title: "Streaming Compression Tool",
        description: "Implement streaming compression using zlib.",
        statement: "Write a tool that can compress a large file in a streaming fashion using Python's `zlib` module. It should read the input file in chunks, compress each chunk, and write it to the output file without loading the entire file into memory.",
        inputFormat: "Implementation-based.",
        outputFormat: "A compressed output file.",
        testCases: [{ input: "", output: "File is compressed correctly." }],
        solution: `import zlib

def compress_stream(input_file, output_file, chunk_size=4096):
    compressor = zlib.compressobj()
    with open(input_file, 'rb') as infile, open(output_file, 'wb') as outfile:
        while True:
            chunk = infile.read(chunk_size)
            if not chunk:
                break
            outfile.write(compressor.compress(chunk))
        # Flush any remaining bytes in the compressor's buffer
        outfile.write(compressor.flush())
`,
        explanation: "The `zlib.compressobj()` creates a compression object that can process data incrementally. We read the input file in small `chunk_size` blocks. Each chunk is passed to `compressor.compress()`, and the result is written to the output file. This approach keeps memory usage low regardless of the input file size. The final `compressor.flush()` is crucial to write out any buffered compressed data at the end."
      },
       {
        id: "python-s24-q88",
        title: "Data Anonymizer",
        description: "Mask PII in structured text using regex and dictionaries.",
        statement: "Build a data anonymizer that can take a text and mask Personal Identifiable Information (PII) like names, emails, and phone numbers. Use regular expressions for patterns (emails, phones) and a dictionary/lookup for names.",
        inputFormat: "A string containing PII.",
        outputFormat: "The anonymized string.",
        testCases: [{ input: "'Contact Alice at alice@email.com'", output: "'Contact [NAME] at [EMAIL]'" }],
        solution: `import re

def anonymize(text, names_to_mask):
    # Mask emails
    text = re.sub(r'\\S+@\\S+', '[EMAIL]', text)
    # Mask phone numbers (simple example)
    text = re.sub(r'\\d{3}-\\d{3}-\\d{4}', '[PHONE]', text)
    
    # Mask names from a list
    for name in names_to_mask:
        # Use word boundaries (\\b) to avoid replacing 'Alice' in 'Malice'
        text = re.sub(f'\\\\b{name}\\\\b', '[NAME]', text, flags=re.IGNORECASE)
        
    return text

# Example
known_names = ["Alice", "Bob"]
original_text = "Contact Alice at alice@email.com or call 555-123-4567."
print(anonymize(original_text, known_names))
`,
        explanation: "This tool uses `re.sub` for pattern-based replacement. We define specific regex patterns to find emails and phone numbers. For names, we iterate through a provided list and use a dynamically created regex with word boundaries (`\\b`) to ensure we only replace whole words, preventing accidental replacement of substrings within other words."
      },
      {
        id: "python-s24-q89",
        title: "Incremental Checkpointing",
        description: "Implement checkpointing for a long-running job.",
        statement: "Implement a system for incremental checkpointing in a long-running batch job (e.g., processing millions of records). The job should periodically save its state (e.g., the ID of the last processed record) to a file. If the job is restarted, it should read the checkpoint and resume from where it left off, not from the beginning.",
        inputFormat: "Implementation-based.",
        outputFormat: "The job resumes correctly after a restart.",
        testCases: [{ input: "", output: "Job processes all records across multiple runs." }],
        solution: `CHECKPOINT_FILE = "checkpoint.txt"

def read_checkpoint():
    try:
        with open(CHECKPOINT_FILE, 'r') as f:
            return int(f.read().strip())
    except (FileNotFoundError, ValueError):
        return 0 # Start from the beginning

def write_checkpoint(last_id):
    with open(CHECKPOINT_FILE, 'w') as f:
        f.write(str(last_id))

def process_data(all_records):
    start_from_id = read_checkpoint()
    
    for record in all_records:
        if record['id'] <= start_from_id:
            continue # Skip already processed records
            
        # ... process the record ...
        print(f"Processing record {record['id']}")
        
        # Checkpoint every 100 records
        if record['id'] % 100 == 0:
            write_checkpoint(record['id'])

    # Final checkpoint at the end
    if all_records:
        write_checkpoint(all_records[-1]['id'])
`,
        explanation: "Checkpointing makes long jobs resilient to failure. Before starting, the program reads a checkpoint file to find the last successfully processed item ID. It then starts its work from the next item. During processing, it periodically overwrites the checkpoint file with the ID of the latest successfully processed item. This ensures that if the job fails and restarts, it will only have to re-do a small amount of work since the last checkpoint."
      },
       {
        id: "python-s24-q90",
        title: "Multi-threaded Matrix Multiplication",
        description: "Implement matrix multiplication with work partitioning.",
        statement: "Implement multi-threaded matrix multiplication. The task of calculating the result matrix should be partitioned among a pool of worker threads. For example, each thread could be responsible for calculating a specific set of rows in the result matrix.",
        inputFormat: "Implementation-based.",
        outputFormat: "The correct product matrix, computed faster.",
        testCases: [{ input: "", output: "Correct matrix product." }],
        solution: `import threading

def multiply_rows(A, B, result, start_row, end_row):
    for i in range(start_row, end_row):
        for j in range(len(B[0])):
            for k in range(len(B)):
                result[i][j] += A[i][k] * B[k][j]

def parallel_matrix_multiply(A, B, num_threads=4):
    result = [[0] * len(B[0]) for _ in range(len(A))]
    threads = []
    rows_per_thread = len(A) // num_threads
    
    for i in range(num_threads):
        start = i * rows_per_thread
        end = (i + 1) * rows_per_thread if i != num_threads - 1 else len(A)
        thread = threading.Thread(target=multiply_rows, args=(A, B, result, start, end))
        threads.append(thread)
        thread.start()
        
    for thread in threads:
        thread.join()
        
    return result`,
        explanation: "This solution partitions the work by rows. The main function divides the rows of the result matrix among the available threads. Each thread is created with a `target` function (`multiply_rows`) and given the range of rows it is responsible for. All threads are started, and the main thread then `join`s them, waiting for all calculations to complete before returning the final result matrix. Note that for numeric computation in Python, `multiprocessing` is often better due to the Global Interpreter Lock (GIL)."
      },
      {
        id: "python-s24-q91",
        title: "Bytecode VM Interpreter",
        description: "Write an interpreter for a tiny bytecode virtual machine.",
        statement: "Write an interpreter for a simple, stack-based bytecode VM. Define a few opcodes (e.g., `LOAD_CONST`, `ADD`, `STORE_VAR`, `LOAD_VAR`). The interpreter should execute a given list of bytecode instructions.",
        inputFormat: "A list of bytecode instructions.",
        outputFormat: "The result of the execution.",
        testCases: [{ input: "Bytecode for 'x=1; y=2; x+y'", output: "3" }],
        solution: `class Interpreter:
    def __init__(self):
        self.stack = []
        self.vars = {}

    def run(self, bytecode):
        for opcode, arg in bytecode:
            if opcode == 'LOAD_CONST':
                self.stack.append(arg)
            elif opcode == 'STORE_VAR':
                self.vars[arg] = self.stack.pop()
            elif opcode == 'LOAD_VAR':
                self.stack.append(self.vars[arg])
            elif opcode == 'ADD':
                right = self.stack.pop()
                left = self.stack.pop()
                self.stack.append(left + right)
        return self.stack.pop()

# Bytecode for: x = 5; x + 10
bytecode = [
    ('LOAD_CONST', 5),
    ('STORE_VAR', 'x'),
    ('LOAD_VAR', 'x'),
    ('LOAD_CONST', 10),
    ('ADD', None),
]
interp = Interpreter()
print(interp.run(bytecode))`,
        explanation: "A stack-based VM is a common architecture (used by the JVM and Python's CPython). The interpreter maintains a data stack. Instructions like `LOAD_CONST` push values onto the stack. Binary operators like `ADD` pop two values, compute the result, and push it back. `STORE_VAR` pops a value and saves it to a variable dictionary, while `LOAD_VAR` pushes a variable's value onto the stack. The program is just a loop that dispatches based on the current opcode."
      },
      {
        id: "python-s24-q92",
        title: "Probabilistic Topic Model (LDA)",
        description: "Implement a Gibbs sampler for LDA.",
        statement: "Implement a basic Gibbs sampler for Latent Dirichlet Allocation (LDA), a probabilistic topic model. Given a corpus of documents, the goal is to discover the latent 'topics' (distributions of words) and determine the topic mixture for each document.",
        inputFormat: "Implementation-based.",
        outputFormat: "The top words for each discovered topic.",
        testCases: [{ input: "", output: "Topic 0: [code, python, java], Topic 1: [data, science, model]" }],
        solution: `# LDA with Gibbs sampling is a complex algorithm.

# Conceptual Steps:
# 1. Preprocess text: tokenize, remove stopwords.
# 2. Initialization:
#    - Randomly assign each word in each document to one of K topics.
#    - Initialize count matrices:
#      - doc_topic_counts[doc][topic]
#      - topic_word_counts[topic][word]

# 3. Iterative Sampling (Main Loop):
#    For many iterations:
#      For each document:
#        For each word in the document:
#          - 'Un-assign' the word from its current topic (decrement counts).
#          - Calculate the probability of the word belonging to each of the K topics
#            based on the current state of the count matrices.
#            P(topic | doc, word) ~ P(word | topic) * P(topic | doc)
#          - Re-assign the word to a new topic by sampling from this probability distribution.
#          - 'Re-assign' the word (increment new counts).

# 4. Result:
#    The final topic_word_counts matrix gives you the distributions of words for each topic.`,
        explanation: "LDA is a generative statistical model. Gibbs sampling is a common algorithm for inferring the latent topics. It's an iterative process where, for every word in the corpus, we re-sample its topic assignment based on two factors: 1) how prevalent that topic is in the current document, and 2) how prevalent that word is in that topic across all documents. After many iterations, the assignments stabilize, revealing the underlying topic structure."
      },
       {
        id: "python-s24-q93",
        title: "Graph Query Language Evaluator",
        description: "Build a subset of a graph query language evaluator.",
        statement: "Build an evaluator for a simple graph query language. For example, a query like `(person)-[FRIENDS_WITH]->(person WHERE name='Bob')` should find all people who are friends with Bob. Use an in-memory graph representation.",
        inputFormat: "Implementation-based.",
        outputFormat: "The results of the graph query.",
        testCases: [{ input: "", output: "Correctly returns nodes matching the query." }],
        solution: `# Assuming the GraphDB from problem 31

def evaluate_query(graph: GraphDB, query: str):
    # This requires a parser for the query language first.
    # Let's assume the query is parsed into a structure:
    # {
    #   start_node_type: 'person',
    #   edge_type: 'FRIENDS_WITH',
    #   end_node: {type: 'person', filter: {'name': 'Bob'}}
    # }
    
    # 1. Find all nodes matching the end_node description
    target_nodes = []
    for node_id, props in graph.nodes.items():
        if props.get('type') == 'person' and props.get('name') == 'Bob':
            target_nodes.append(node_id)
            
    # 2. Find nodes that have the specified edge to any target node
    results = []
    for start_node_id, neighbors in graph.adj.items():
        # Check if this node is of the right type
        if graph.nodes.get(start_node_id, {}).get('type') != 'person':
            continue
        
        for neighbor_id, edge_props in neighbors.items():
            if neighbor_id in target_nodes and edge_props.get('type') == 'FRIENDS_WITH':
                results.append(start_node_id)
                break # Found a match for this start_node
                
    return results`,
        explanation: "A graph query engine first needs to parse the query string into a structured representation. The evaluation then proceeds by finding a set of nodes that match one part of the pattern (an 'anchor'), and then traversing the graph from those nodes to find other nodes that satisfy the relationships specified in the query. This often involves filtering nodes and edges based on their properties."
      },
      {
        id: "python-s24-q94",
        title: "Safe SQL Sandbox",
        description: "Create a sandbox for executing user-submitted SQL queries.",
        statement: "Create a safe sandbox for executing user-submitted SQL `SELECT` queries against a restricted, in-memory SQLite database. The sandbox must prevent any data modification (`INSERT`, `UPDATE`, `DELETE`, `DROP`), access to filesystem functions, or other potentially harmful queries.",
        inputFormat: "A SQL SELECT query string.",
        outputFormat: "The query result or a 'Query Rejected' message.",
        testCases: [{ input: "DROP TABLE users;", output: "Query Rejected" }],
        solution: `import sqlite3

def run_safe_sql(query):
    # 1. Basic check: Only allow SELECT statements.
    # This is a weak check and can be bypassed (e.g., with semicolons).
    if not query.strip().lower().startswith('select'):
        return "Query Rejected: Only SELECT statements are allowed."
        
    # 2. Use a read-only connection.
    # Connect to the in-memory database in read-only mode using a URI.
    # db = sqlite3.connect('file::memory:?mode=ro', uri=True)
    # This is better but might not prevent all attacks.
    
    # 3. A more robust approach is to parse the SQL first.
    # Use a library like 'sqlparse' to break the query into tokens.
    # Then, inspect the tokens to ensure there are no forbidden keywords
    # or structures before executing.
    # import sqlparse
    # parsed = sqlparse.parse(query)
    # for token in parsed[0].tokens:
    #     if token.ttype is sqlparse.tokens.Keyword.DML: # e.g., INSERT, UPDATE
    #         return "Query Rejected: DML not allowed."
            
    # If all checks pass, execute against the database.
    pass`,
        explanation: "Safely executing user-provided SQL is very hard. A multi-layered defense is needed. A simple string check for `SELECT` is insufficient. A better approach is to use a dedicated SQL parsing library like `sqlparse` to analyze the structure of the query and reject it if it contains any forbidden keywords or statement types (like DML or DDL). The most secure methods involve running the query with a database user that has read-only permissions, or using a verified query allowlist."
      },
       {
        id: "python-s24-q95",
        title: "Real-time Sliding Window Aggregator",
        description: "Implement a sliding-window aggregator for event streams.",
        statement: "Implement a real-time aggregator for an event stream. It should maintain a sliding window of a fixed time duration (e.g., the last 60 seconds) and compute an aggregate metric (e.g., the sum or average of event values) over that window as new events arrive.",
        inputFormat: "Implementation-based.",
        outputFormat: "The aggregate value, updated in real-time.",
        testCases: [{ input: "Stream of events", output: "Correctly calculated sliding window sum." }],
        solution: `from collections import deque
import time

class SlidingWindowAggregator:
    def __init__(self, window_size_seconds):
        self.window_size = window_size_seconds
        # Deque will store (timestamp, value) tuples
        self.window = deque()
        self.current_sum = 0

    def add_event(self, value):
        now = time.time()
        self.window.append((now, value))
        self.current_sum += value
        self.evict_old()

    def evict_old(self):
        now = time.time()
        while self.window and self.window[0][0] <= now - self.window_size:
            timestamp, value = self.window.popleft()
            self.current_sum -= value
    
    def get_sum(self):
        # Evict old events before returning the sum to ensure it's up-to-date
        self.evict_old()
        return self.current_sum`,
        explanation: "A `deque` (double-ended queue) is a perfect data structure for this. When a new event arrives, we add it to the right end of the deque and update our running aggregate (`current_sum`). We then check the left end of the deque. Any events with timestamps older than the window size are removed from the left, and their values are subtracted from the aggregate. This provides an efficient O(1) way to add new events and get the current aggregate value."
      },
      {
        id: "python-s24-q96",
        title: "Document Similarity with TF-IDF",
        description: "Compute document similarity using TF-IDF and cosine similarity.",
        statement: "Write a tool to compute the similarity between a query and a set of documents. It should represent each document as a TF-IDF vector and then use cosine similarity to find the most similar document to the query.",
        inputFormat: "A query string and a list of document strings.",
        outputFormat: "The most similar document.",
        testCases: [{ input: "", output: "The correct document is identified as most similar." }],
        solution: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def find_most_similar(query, documents):
    # Add the query to the list of documents to vectorize it with the same vocabulary
    all_texts = [query] + documents
    
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(all_texts)
    
    # The first vector is our query, the rest are the documents
    query_vector = tfidf_matrix[0]
    doc_vectors = tfidf_matrix[1:]
    
    # Calculate cosine similarity between the query and all documents
    similarities = cosine_similarity(query_vector, doc_vectors)
    
    # Find the index of the most similar document
    most_similar_idx = similarities.argmax()
    
    return documents[most_similar_idx]`,
        explanation: "This process has two steps. First, **TF-IDF** (Term Frequency-Inverse Document Frequency) converts text documents into numerical vectors. It gives higher weights to words that are frequent in a document but rare across all documents. Second, **Cosine Similarity** measures the cosine of the angle between two vectors. A similarity of 1 means the vectors (and thus the documents) are identical, while 0 means they are completely different. It's a very common technique in information retrieval and search."
      },
      {
        id: "python-s24-q97",
        title: "Modular CLI App Framework",
        description: "Build a CLI framework with subcommands and dynamic help.",
        statement: "Build a mini framework for creating command-line interface (CLI) applications, inspired by `git` or `docker`. It should support subcommands (e.g., `my-app user add`), arguments, and automatically generate a help message based on the defined commands.",
        inputFormat: "Implementation-based.",
        outputFormat: "A functioning CLI application.",
        testCases: [{ input: "my-app --help", output: "Shows available subcommands." }],
        solution: `# A simplified, conceptual framework
import sys

class CLIApp:
    def __init__(self):
        self.commands = {} # {'user': user_command_handler, ...}

    def command(self, name):
        def decorator(func):
            self.commands[name] = func
            return func
        return decorator

    def run(self):
        if len(sys.argv) < 2 or sys.argv[1] not in self.commands:
            print("Usage: my-app <command>")
            print("Available commands:", list(self.commands.keys()))
            return
        
        command = self.commands[sys.argv[1]]
        command(*sys.argv[2:])

# --- Usage ---
app = CLIApp()
@app.command("add")
def add_user(username, email):
    """Adds a new user."""
    print(f"Adding {username} with email {email}")

# app.run()`,
        explanation: "A common way to build modular CLIs is to use decorators. The main `CLIApp` class has a `command` decorator that registers a function as a handler for a specific subcommand. The `run` method parses the command-line arguments (`sys.argv`), finds the corresponding handler function in its registry, and calls it with the remaining arguments. Libraries like `Click` and `Typer` provide very powerful and polished versions of this concept."
      },
      {
        id: "python-s24-q98",
        title: "DFA Minimizer",
        description: "Implement a DFA minimizer and show the minimized automaton.",
        statement: "Implement an algorithm (like Hopcroft's or a table-filling algorithm) to minimize a Deterministic Finite Automaton (DFA). Given a DFA, the algorithm should produce an equivalent DFA with the minimum possible number of states.",
        inputFormat: "A DFA definition (states, alphabet, transitions, start, final).",
        outputFormat: "The definition of the minimized DFA.",
        testCases: [{ input: "", output: "A minimized DFA with fewer states." }],
        solution: `# Table-Filling Algorithm (Conceptual)
def minimize_dfa(dfa):
    # 1. Initialization:
    #    - Create a table of all pairs of states (p, q).
    #    - Mark all pairs where one state is final and the other is not.
    #    - These are "distinguishable".

    # 2. Iteration:
    #    - Repeat until no more marks can be made:
    #      - For each unmarked pair (p, q):
    #        - For each character 'c' in the alphabet:
    #          - Let p' = transition(p, c) and q' = transition(q, c).
    #          - If the pair (p', q') is already marked as distinguishable,
    #            then mark (p, q) as distinguishable.
    
    # 3. Merge:
    #    - All remaining unmarked pairs are "indistinguishable".
    #    - Merge each group of indistinguishable states into a single new state.
    #    - Create the new transition function for the minimized DFA.
    pass`,
        explanation: "DFA minimization works by finding and merging 'indistinguishable' states. Two states are indistinguishable if, for any input string, they both either end up in an accepting state or both end up in a non-accepting state. The table-filling algorithm is a bottom-up approach that systematically finds all 'distinguishable' pairs. Any pair not found to be distinguishable can be merged."
      },
       {
        id: "python-s24-q99",
        title: "Quantile Estimator",
        description: "Implement a streaming algorithm to estimate quantiles (t-digest/GK).",
        statement: "Implement a streaming algorithm to estimate quantiles (like the median, 95th percentile) from a stream of data of unknown size. A good choice is the Greenwald-Khanna (GK) algorithm or a simplified t-digest. It should process numbers one at a time and maintain a small summary structure.",
        inputFormat: "Implementation-based.",
        outputFormat: "A function to query quantiles from the summary.",
        testCases: [{ input: "Stream of numbers", output: "An approximate median." }],
        solution: `# Conceptual Greenwald-Khanna (GK) Algorithm

# The data structure is a list of tuples: (value, g, delta)
# g = number of items represented by this tuple
# delta = error bound

# 1. On receiving a new value 'v':
#    - Find the correct position to insert 'v' to keep the list sorted.
#    - Insert a new tuple (v, 1, 0).

# 2. Compression:
#    - Periodically, scan the list.
#    - If two adjacent tuples can be merged without violating the error bound 'epsilon',
#      merge them: new_tuple = (v_i+1, g_i + g_i+1, ...).
#    - This keeps the summary size small.

# 3. Querying for a quantile 'q':
#    - Scan the summary to find the tuple corresponding to the desired rank (q * N).`,
        explanation: "Calculating exact quantiles requires storing all data, which is impossible for a stream. Streaming quantile algorithms like GK or t-digest create a compressed summary of the data distribution. They work by keeping a small, sorted list of representative data points (centroids). As new data arrives, the algorithm either adds a new centroid or merges existing ones in a way that minimizes the loss of precision, allowing for accurate quantile estimates with a bounded error."
      },
      {
        id: "python-s24-q100",
        title: "Unit-Test Coverage Analyzer",
        description: "Implement a tool that instruments Python code to report uncovered lines.",
        statement: "Design and implement a simple unit-test coverage analyzer. It should be able to take a Python source file, 'instrument' it (e.g., add tracking code), run a test suite against it, and then generate a report showing which lines of the source file were executed ('covered') and which were not.",
        inputFormat: "A source file and a test file.",
        outputFormat: "A coverage report (e.g., % covered and list of uncovered lines).",
        testCases: [{ input: "", output: "Coverage report is generated." }],
        solution: `import sys
import inspect

# A very basic line-coverage tracer
# Real tools like 'coverage.py' are much more sophisticated.

covered_lines = set()

def tracer(frame, event, arg):
    if event == 'line':
        filename = frame.f_code.co_filename
        lineno = frame.f_lineno
        # We only care about our target file
        if 'my_source_file.py' in filename:
            covered_lines.add(lineno)
    return tracer

def analyze_coverage(source_file_path):
    with open(source_file_path, 'r') as f:
        source_lines = f.readlines()
        
    print("--- Coverage Report ---")
    for i, line in enumerate(source_lines, 1):
        marker = " "
        if i in covered_lines:
            marker = ">" # Covered
        elif line.strip() and not line.strip().startswith('#'):
            marker = "!" # Not covered
        
        print(f"{marker} {i:3d}| {line.rstrip()}")

# --- Main execution ---
# sys.settrace(tracer)
#
# # Run the test suite here
# # e.g., import and run functions from the test file
#
# sys.settrace(None)
# analyze_coverage('my_source_file.py')`,
        explanation: "Coverage analysis tools work through **tracing**. Python's `sys.settrace` function allows you to register a callback function that is executed by the interpreter for events like function calls, returns, and, most importantly, executing a new line of code (`event == 'line'`). The tracer function records the filename and line number of every line that is executed. After the tests run, we compare the set of covered lines against all executable lines in the source file to generate the final report."
      }
    ]
  }
];
