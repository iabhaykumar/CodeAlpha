import React from 'react';
import { ProblemCategory } from './types';

export const PYTHON_PROBLEMS_PART13: ProblemCategory[] = [
  {
    category: "SECTION 23 — ADVANCED / MIXED (Part 3)",
    problems: [
      {
        id: "python-s23-q51",
        title: "Monotonic Queue",
        description: "Implement a monotonic queue for sliding-window max/min problems.",
        statement: "Implement a Monotonic Queue (specifically, a decreasing deque). Use it to solve the Sliding Window Maximum problem: given an array and a window size k, find the maximum value in each sliding window.",
        inputFormat: "An array of numbers and an integer k.",
        outputFormat: "A list of maximums for each window.",
        testCases: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3, 3, 5, 5, 6, 7]" }],
        solution: `from collections import deque

def sliding_window_max(nums, k):
    result = []
    # Deque will store indices, and the corresponding values will be decreasing
    q = deque() 
    
    for i, n in enumerate(nums):
        # Remove elements from the left of the deque that are no longer in the window
        if q and q[0] <= i - k:
            q.popleft()
            
        # Remove elements from the right that are smaller than the current element
        while q and nums[q[-1]] < n:
            q.pop()
            
        q.append(i)
        
        # The max for the current window is always at the front of the deque
        if i >= k - 1:
            result.append(nums[q[0]])
            
    return result
`,
        explanation: "A monotonic queue is a deque where elements are always sorted (either increasing or decreasing). For the sliding window maximum problem, we maintain a deque of indices whose corresponding values in the array are in decreasing order. This ensures that the maximum element in the current window is always at the front of the deque (`q[0]`), allowing us to find the max for each window in O(1) time. Overall complexity is O(n) because each element is added and removed from the deque at most once."
      },
      {
        id: "python-s23-q52",
        title: "Probabilistic Counting (HyperLogLog)",
        description: "Implement HyperLogLog to estimate unique elements.",
        statement: "Implement a simplified HyperLogLog algorithm to estimate the number of unique items in a stream. This involves hashing items to determine which bucket they fall into and tracking the maximum number of leading zeros in the hash for each bucket.",
        inputFormat: "Implementation-based.",
        outputFormat: "An estimate of the cardinality (number of unique items).",
        testCases: [{ input: "Stream of many items with few uniques", output: "An estimate close to the true unique count." }],
        solution: `import hashlib

class HyperLogLog:
    def __init__(self, p=10): # p determines the number of registers (2^p)
        self.p = p
        self.m = 1 << p # 2**p
        self.registers = [0] * self.m
        self.alpha = 0.7213 / (1 + 1.079 / self.m) # Constant

    def add(self, item):
        h = int(hashlib.sha256(str(item).encode()).hexdigest(), 16)
        
        # Use first p bits to select register
        j = h & (self.m - 1)
        
        # Use remaining bits to count leading zeros
        w = h >> self.p
        rho = self._count_leading_zeros(w) + 1
        
        self.registers[j] = max(self.registers[j], rho)

    def _count_leading_zeros(self, n):
        if n == 0: return 64 - self.p # Assuming 64-bit hash
        return (64 - self.p) - n.bit_length()

    def estimate(self):
        # Harmonic mean of 2^register_values
        Z = 1.0 / sum(2.0 ** -reg for reg in self.registers)
        return self.alpha * (self.m ** 2) * Z`,
        explanation: "HyperLogLog is a probabilistic algorithm that provides a very good approximation of cardinality using a very small amount of memory. It works by hashing each item, using some bits of the hash to select a 'register' (bucket), and observing the longest run of leading zeros in the remaining bits of the hash for items in that register. The final estimate is derived from the harmonic mean of these observed maximums."
      },
       {
        id: "python-s23-q53",
        title: "Image Tile Pyramid Generator",
        description: "Create a Deep Zoom image tile pyramid.",
        statement: "Write a script using the Pillow library that takes a large image and generates a multi-level image pyramid (Deep Zoom format). This involves creating tiles of a fixed size (e.g., 256x256) at different zoom levels (resolutions).",
        inputFormat: "A path to a large image file.",
        outputFormat: "A directory structure with tiled images.",
        testCases: [{ input: "large_image.jpg", output: "A folder 'tiles' with subfolders for each zoom level." }],
        solution: `from PIL import Image
import os

def create_deepzoom_tiles(image_path, output_dir, tile_size=256):
    img = Image.open(image_path)
    width, height = img.size
    
    # Determine the number of levels
    max_dim = max(width, height)
    level = 0
    while (1 << level) < max_dim:
        level += 1

    for l in range(level, -1, -1):
        level_width = width // (1 << (level - l))
        level_height = height // (1 << (level - l))
        level_img = img.resize((level_width, level_height), Image.Resampling.LANCZOS)
        
        level_dir = os.path.join(output_dir, str(l))
        os.makedirs(level_dir, exist_ok=True)
        
        for x in range(0, level_width, tile_size):
            for y in range(0, level_height, tile_size):
                box = (x, y, x + tile_size, y + tile_size)
                tile = level_img.crop(box)
                tile_path = os.path.join(level_dir, f"{x//tile_size}_{y//tile_size}.png")
                tile.save(tile_path)
`,
        explanation: "An image pyramid allows for efficient viewing of very large images online. Instead of downloading a huge file, the viewer only downloads the small tiles needed for the current zoom level and viewport. The script works by starting at the highest zoom level (full resolution) and iteratively resizing the image by half, cropping it into fixed-size tiles at each level and saving them into a structured directory."
      },
      {
        id: "python-s23-q54",
        title: "Exponential Backoff Decorator",
        description: "A decorator with exponential backoff, jitter, and circuit-breaker.",
        statement: "Write a decorator that automatically retries a function if it fails. The retry delay should increase exponentially. It should also include 'jitter' (randomness) to avoid thundering herd problems, and a basic circuit-breaker logic (stop retrying after N consecutive failures).",
        inputFormat: "Decorator implementation.",
        outputFormat: "The decorated function becomes resilient to transient failures.",
        testCases: [{ input: "", output: "Function eventually succeeds after a few retries." }],
        solution: `import time
import random
from functools import wraps

def retry_with_backoff(retries=3, backoff_in_seconds=1, circuit_breaker_threshold=5):
    def decorator(fn):
        consecutive_failures = 0
        @wraps(fn)
        def wrapper(*args, **kwargs):
            nonlocal consecutive_failures
            for i in range(retries):
                if consecutive_failures >= circuit_breaker_threshold:
                    raise Exception("Circuit breaker open!")
                try:
                    result = fn(*args, **kwargs)
                    consecutive_failures = 0 # Reset on success
                    return result
                except Exception as e:
                    consecutive_failures += 1
                    delay = backoff_in_seconds * (2 ** i) + random.uniform(0, 1)
                    print(f"Attempt {i+1} failed. Retrying in {delay:.2f}s...")
                    time.sleep(delay)
            # Last attempt, re-raise exception if it fails
            return fn(*args, **kwargs)
        return wrapper
    return decorator`,
        explanation: "This decorator wraps the function call in a `try...except` loop. On failure, it calculates a delay that doubles with each attempt (`exponential backoff`) and adds a random value (`jitter`). A `consecutive_failures` counter implements a simple circuit breaker; if it exceeds a threshold, the function stops retrying immediately to avoid overwhelming a failing service. The counter is reset on a successful call."
      },
       {
        id: "python-s23-q55",
        title: "Command-line Fuzzy Finder",
        description: "Build a fuzzy finder like fzf with efficient substring scoring.",
        statement: "Build a simple command-line fuzzy finder. It should read a list of items from stdin, allow the user to type a query, and display a ranked list of items that fuzzy-match the query. The ranking should be based on an efficient substring scoring algorithm.",
        inputFormat: "Implementation-based.",
        outputFormat: "A ranked list of fuzzy-matched items.",
        testCases: [{ input: "query='app', choices=['apple', 'application', 'banana']", output: "['apple', 'application']" }],
        solution: `# Conceptual solution for the scoring part

def fuzzy_score(query, choice):
    # A simple scoring algorithm could be:
    # - Bonus for consecutive matches
    # - Penalty for gaps
    # - Bonus for matches at word boundaries or after separators
    
    score = 0
    query_idx = 0
    choice_idx = 0
    consecutive_bonus = 10

    while query_idx < len(query) and choice_idx < len(choice):
        if query[query_idx].lower() == choice[choice_idx].lower():
            score += 1 + consecutive_bonus
            consecutive_bonus += 5 # Increase bonus for next consecutive match
            query_idx += 1
        else:
            consecutive_bonus = 0 # Reset bonus
            score -= 1 # Gap penalty
        choice_idx += 1
        
    # Penalty if not all of the query was found
    if query_idx != len(query):
        return -float('inf')
        
    return score

# Main logic would read lines, then for each user input,
# calculate score for all lines and show the top N results.`,
        explanation: "A fuzzy finder doesn't require an exact match. The core is the scoring algorithm. A good algorithm rewards matches that are consecutive, appear at the beginning of words, or are acronyms. The example provides a very basic scorer that gives bonuses for consecutive characters. More advanced libraries use complex dynamic programming or bit-parallel algorithms for extremely fast and accurate scoring."
      },
      {
        id: "python-s23-q56",
        title: "High-Performance CSV Parser",
        description: "Implement a fast and memory-efficient CSV parser.",
        statement: "Implement a CSV parser in pure Python that is faster and more memory-efficient than the standard `csv` module for simple cases. It should handle quoted fields and newlines within quotes, and yield rows as tuples.",
        inputFormat: "Implementation-based.",
        outputFormat: "A generator that yields rows.",
        testCases: [{ input: "", output: "Correctly parses a complex CSV." }],
        solution: `def fast_csv_parser(file_obj):
    # This is a highly complex problem to do correctly and fast.
    # Libraries like 'csv' are written in C for this reason.
    # A pure Python version would need to be a state machine.
    
    # State: IN_FIELD, IN_QUOTED_FIELD, AFTER_QUOTE
    
    # Conceptual loop:
    # for line in file_obj:
    #   row = []
    #   current_field = ""
    #   state = IN_FIELD
    #   for char in line:
    #       if state == IN_FIELD and char == ',':
    #           row.append(current_field)
    #           current_field = ""
    #       elif state == IN_FIELD and char == '"':
    #           state = IN_QUOTED_FIELD
    #       # ... dozens of other state transitions for quotes,
    #       # escaped quotes, newlines, etc.
    #   yield tuple(row)
    pass
`,
        explanation: "Parsing CSV correctly is surprisingly difficult due to edge cases like commas inside quoted fields, escaped quotes (`\"\"`), and multi-line fields. A performant implementation requires building a finite state machine that processes the file character by character. While possible in pure Python, it's a significant undertaking. For production use, libraries like the built-in `csv` or third-party `pandas` (which uses a C engine) are far more robust and faster."
      },
      {
        id: "python-s23-q57",
        title: "Python-to-JS Transpiler",
        description: "A toy transpiler that converts a subset of Python to JavaScript.",
        statement: "Create a minified transpiler that converts a small subset of Python syntax (variable assignment, `print`, `if/else`, simple arithmetic) into equivalent JavaScript code.",
        inputFormat: "A string of Python code.",
        outputFormat: "A string of JavaScript code.",
        testCases: [{ input: "print('hi')", output: "console.log('hi');" }],
        solution: `# Requires parsing Python into an AST first
import ast

class JSTranspiler(ast.NodeVisitor):
    def visit_Print(self, node): # Python 2 syntax for simplicity
        # In modern Python, you'd visit_Call for print()
        return f"console.log({self.visit(node.values[0])});"

    def visit_Num(self, node):
        return str(node.n)

    def visit_Str(self, node):
        return f'"{node.s}"'
    
    # ... and visitors for every other node type ...

def transpile(code):
    tree = ast.parse(code)
    transpiler = JSTranspiler()
    return transpiler.visit(tree.body[0]) # Simplified
`,
        explanation: "A transpiler works by parsing the source language (Python) into an Abstract Syntax Tree (AST) using Python's built-in `ast` module. It then 'walks' this tree. For each type of node in the tree (e.g., a function call, a variable assignment), it has a corresponding method that generates the equivalent syntax in the target language (JavaScript). This is a complex project that requires understanding the grammar of both languages."
      },
      {
        id: "python-s23-q58",
        title: "Memory-Mapped File Queue",
        description: "An inter-process queue using memory-mapped files.",
        statement: "Write a simple, file-based queue for inter-process communication using memory-mapped files (`mmap`). This allows different processes to share data through a file that is mapped to their virtual memory space, avoiding slower disk I/O.",
        inputFormat: "Implementation-based.",
        outputFormat: "A queue that works across processes.",
        testCases: [{ input: "", output: "Data written by one process is read by another." }],
        solution: `import mmap
import os

# Conceptual: This is a simplified SPSC (Single-Producer Single-Consumer) queue
# A real implementation needs shared counters for head/tail.

# Create a file of a fixed size
size = 1024
with open("mmap_queue.dat", "wb") as f:
    f.seek(size - 1)
    f.write(b'\\0')

with open("mmap_queue.dat", "r+b") as f:
    # Memory-map the file
    mm = mmap.mmap(f.fileno(), 0)

    # --- Producer Process ---
    message = b"Hello from process 1"
    mm[0:len(message)] = message
    
    # --- Consumer Process (would run separately) ---
    # It would map the same file and read from it.
    # A real queue needs head/tail pointers in shared memory.
    
    mm.close()`,
        explanation: "Memory-mapped files provide a high-performance way for multiple processes to share data. The `mmap` module maps a file on disk into the process's address space. When a process writes to that memory region, the OS automatically handles writing the changes back to the file, making them visible to other processes that have mapped the same file. A robust queue implementation would also need shared memory for head and tail pointers, likely using `multiprocessing.Value`."
      },
      {
        id: "python-s23-q59",
        title: "Suffix Automaton",
        description: "Implement a Suffix Automaton and count distinct substrings.",
        statement: "Implement a Suffix Automaton (a minimal DFA that accepts all substrings of a string). Use the constructed automaton to efficiently solve the problem of counting the number of distinct substrings in the string.",
        inputFormat: "A single string.",
        outputFormat: "The number of distinct substrings.",
        testCases: [{ input: "'aba'", output: "5 ('a', 'b', 'ab', 'ba', 'aba')" }],
        solution: `# A Suffix Automaton is a complex data structure.
# The number of distinct substrings is the sum of the lengths of all paths
# from the initial state. This can be calculated as:
# sum(state.len - state.link.len for state in all_states)

# Conceptual implementation of the online construction algorithm:
class SuffixAutomaton:
    def __init__(self):
        # state has: len, link, and transitions (next)
        self.states = [ {'len': 0, 'link': -1, 'next': {}} ]
        self.last = 0
    
    def extend(self, char):
        # 1. Create a new state 'cur'.
        # 2. Traverse back from 'last' via suffix links.
        # 3. If a transition for 'char' doesn't exist, add it to 'cur'.
        # 4. If we reach the root, 'cur.link' is 0.
        # 5. If we find a transition, there are two cases for cloning
        #    a state to maintain the automaton's properties.
        pass`,
        explanation: "A Suffix Automaton is the most efficient data structure for many substring-related problems. It can be built in O(n) time. The number of distinct substrings is equal to the sum of the lengths of the longest strings ending at each state. This can be calculated more simply by summing the difference in lengths between each state and its suffix link state: `sum(len(s) - len(s.link))`."
      },
       {
        id: "python-s23-q60",
        title: "LSTM Training Loop Scaffold",
        description: "Build a training loop for an LSTM without high-level frameworks.",
        statement: "Build a basic training loop scaffold for an LSTM-style network. This should include a data loader that yields batches, a forward pass, a backward pass (conceptual), and a gradient clipping step. Do not use high-level frameworks like Keras `fit` or PyTorch Lightning.",
        inputFormat: "Implementation-based.",
        outputFormat: "A functioning training loop.",
        testCases: [{ input: "", output: "Loss decreases over epochs." }],
        solution: `import torch
import torch.nn as nn

# Assume model, loss_fn, optimizer, and dataloader are defined

model = nn.LSTM(...)
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters())
# dataloader yields (inputs, labels) batches

num_epochs = 10
for epoch in range(num_epochs):
    for inputs, labels in dataloader:
        # 1. Zero gradients
        optimizer.zero_grad()

        # 2. Forward pass
        outputs = model(inputs)
        
        # 3. Calculate loss
        loss = loss_fn(outputs, labels)

        # 4. Backward pass (compute gradients)
        loss.backward()

        # 5. Gradient Clipping (prevents exploding gradients in RNNs)
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        
        # 6. Update weights
        optimizer.step()
        
    print(f"Epoch {epoch+1}, Loss: {loss.item()}")`,
        explanation: "This scaffold shows the fundamental steps of training a neural network in PyTorch. The loop iterates over epochs and batches. For each batch: gradients are cleared, a forward pass generates predictions, loss is calculated, `loss.backward()` computes gradients via backpropagation, gradients are optionally clipped to prevent instability, and `optimizer.step()` updates the model's weights."
      },
      {
        id: "python-s23-q61",
        title: "Dependency Resolver",
        description: "Create a resolver like pip for version constraints.",
        statement: "Create a simple dependency resolver. Given a set of packages and their version constraints (e.g., `A requires B >= 1.2`, `C requires B < 2.0`), find a set of package versions that satisfies all constraints. This is a type of constraint satisfaction problem (SAT).",
        inputFormat: "A dictionary of dependencies and constraints.",
        outputFormat: "A dictionary of resolved package versions or an error.",
        testCases: [{ input: "", output: "{'A': '1.0', 'B': '1.5'}" }],
        solution: `# Conceptual solution using backtracking search

available_packages = {'A': ['1.0', '1.1'], 'B': ['1.1', '1.5', '2.1']}
dependencies = {'A': {'B': '>=1.2, <2.0'}}

def resolve(packages_to_install, current_solution):
    if not packages_to_install:
        return current_solution # Success
    
    pkg = packages_to_install.pop()
    
    # Try each available version for this package
    for version in available_packages.get(pkg, []):
        new_solution = current_solution.copy()
        new_solution[pkg] = version
        
        # Check if this version is valid given all constraints so far
        if is_valid(new_solution, dependencies):
            # Recurse
            result = resolve(packages_to_install.copy(), new_solution)
            if result:
                return result
    
    return None # Backtrack
`,
        explanation: "Dependency resolution is a complex constraint satisfaction problem. A simplified approach is backtracking. You try to pick a version for the first package. Then, you recursively try to pick a version for the second package that is compatible with the first. If you hit a dead end (no compatible version can be found), you 'backtrack' and try the next version for the previous package. Real-world resolvers like pip's are much more complex, often converting the problem into a boolean satisfiability (SAT) problem."
      },
       {
        id: "python-s23-q62",
        title: "Lazy Merged Iterator",
        description: "Implement an iterator that merges multiple sorted streams.",
        statement: "Implement an iterator that takes multiple sorted streams (iterators) and yields their items in sorted order. The implementation should be 'lazy', meaning it only pulls items from the streams as needed, and it should handle duplicate suppression.",
        inputFormat: "A list of sorted iterators.",
        outputFormat: "A single sorted stream of unique items.",
        testCases: [{ input: "s1=[1,3,5], s2=[2,3,4]", output: "1, 2, 3, 4, 5" }],
        solution: `import heapq

def merge_sorted_iterators(iterators):
    # Use a min-heap to keep track of the smallest current item from each iterator
    heap = []
    
    for i, it in enumerate(iterators):
        try:
            first_val = next(it)
            # Push (value, iterator_index, iterator) to heap
            heapq.heappush(heap, (first_val, i, it))
        except StopIteration:
            pass
            
    last_yielded = None
    
    while heap:
        val, i, it = heapq.heappop(heap)
        
        # Suppress duplicates
        if val != last_yielded:
            yield val
            last_yielded = val

        # Pull the next item from the same iterator and push to heap
        try:
            next_val = next(it)
            heapq.heappush(heap, (next_val, i, it))
        except StopIteration:
            pass`,
        explanation: "This is a classic k-way merge problem, efficiently solved with a min-heap. We initialize the heap with the first element from each of the `k` input iterators. The main loop then repeatedly extracts the smallest item from the heap (`heappop`), yields it, and then pushes the *next* item from the same iterator that the smallest item came from back onto the heap. This ensures the heap always contains the next smallest candidates from across all streams."
      },
      {
        id: "python-s23-q63",
        title: "JSON Diff CLI",
        description: "Write a CLI to compute diffs of two JSON objects and produce a patch.",
        statement: "Write a command-line tool that takes two JSON files as input, computes the difference between them, and outputs a 'patch' file (e.g., in JSON Patch format, RFC 6902). A second command should be able to apply this patch to the original file to produce the second file.",
        inputFormat: "Two JSON files.",
        outputFormat: "A JSON Patch file.",
        testCases: [{ input: "file1.json, file2.json", output: "patch.json" }],
        solution: `import json
# There are libraries for this, but a conceptual implementation:

def create_json_diff(obj1, obj2, path=""):
    patch = []
    all_keys = set(obj1.keys()) | set(obj2.keys())
    
    for key in all_keys:
        new_path = f"{path}/{key}"
        if key not in obj1:
            patch.append({"op": "add", "path": new_path, "value": obj2[key]})
        elif key not in obj2:
            patch.append({"op": "remove", "path": new_path})
        elif obj1[key] != obj2[key]:
            # Could recurse for nested objects
            patch.append({"op": "replace", "path": new_path, "value": obj2[key]})
            
    return patch`,
        explanation: "A JSON diff tool recursively compares two JSON objects (dictionaries). For each key, it checks if it was added, removed, or changed. The result is a list of operations that conform to a standard like JSON Patch. An 'add' operation specifies a path and a value. A 'remove' specifies a path. A 'replace' specifies a path and the new value. The paths are typically formatted as JSON Pointers (e.g., `/user/address/city`)."
      },
       {
        id: "python-s23-q64",
        title: "High-Precision Decimal Calculator",
        description: "Implement a calculator with custom rounding modes.",
        statement: "Implement a high-precision calculator using Python's `decimal` module. It should handle floating-point arithmetic without the inaccuracies of standard binary floats and support custom rounding modes (e.g., `ROUND_HALF_UP`, `ROUND_FLOOR`).",
        inputFormat: "An expression and a rounding mode.",
        outputFormat: "The high-precision result.",
        testCases: [{ input: "'0.1 + 0.2'", output: "Decimal('0.3')" }],
        solution: `from decimal import Decimal, getcontext

def calculate_precise(expr, precision=28, rounding_mode='ROUND_HALF_UP'):
    # Set precision and rounding for the current context
    getcontext().prec = precision
    getcontext().rounding = rounding_mode
    
    # IMPORTANT: Create Decimals from strings to avoid float inaccuracy
    # Bad: Decimal(0.1) -> Decimal('0.1000000000000000055...')
    # Good: Decimal('0.1') -> Decimal('0.1')
    
    # A simple evaluator (a real one would be more robust)
    parts = expr.split()
    num1 = Decimal(parts[0])
    op = parts[1]
    num2 = Decimal(parts[2])

    if op == '+': return num1 + num2
    if op == '-': return num1 - num2
    # ... etc.

# Standard floats have issues:
print(0.1 + 0.2) # 0.30000000000000004

# Decimals are precise:
print(calculate_precise("0.1 + 0.2")) # 0.3`,
        explanation: "Standard binary floating-point numbers (`float`) cannot represent some decimal fractions (like 0.1) exactly, leading to small precision errors. Python's `decimal` module provides a Decimal data type for decimal floating-point arithmetic. It allows you to control the precision and rounding characteristics, making it essential for financial and scientific applications where exactness is required."
      },
      {
        id: "python-s23-q65",
        title: "Mini Blockchain Prototype",
        description: "Build a prototype with blocks, merkle trees, and proof-of-work.",
        statement: "Build a simplified blockchain prototype. Create a `Block` class containing a timestamp, a list of transactions, a hash of the previous block, and a nonce. Implement a proof-of-work system (e.g., finding a hash that starts with a certain number of zeros). Implement a simple Merkle Tree for transaction integrity.",
        inputFormat: "Implementation-based.",
        outputFormat: "A chain of valid, linked blocks.",
        testCases: [{ input: "", output: "A new block is successfully mined and added to the chain." }],
        solution: `import hashlib
import time

class Block:
    def __init__(self, timestamp, transactions, prev_hash=''):
        self.timestamp = timestamp
        self.transactions = transactions
        self.prev_hash = prev_hash
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_string = str(self.timestamp) + str(self.transactions) + str(self.prev_hash) + str(self.nonce)
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self, difficulty):
        target = '0' * difficulty
        while self.hash[:difficulty] != target:
            self.nonce += 1
            self.hash = self.calculate_hash()
        print("Block Mined:", self.hash)
`,
        explanation: "A blockchain is a chain of blocks linked by cryptography. Each block contains the hash of the previous block, creating an immutable chain. **Proof-of-work** is an algorithm that makes creating a new block difficult and time-consuming. 'Mining' is the process of finding a `nonce` (a random number) that, when included in the block's data, produces a hash meeting a certain difficulty requirement (e.g., starting with four zeros). This difficulty prevents malicious actors from easily rewriting the chain's history."
      },
      {
        id: "python-s23-q66",
        title: "Graph Isomorphism Checker",
        description: "Implement a practical heuristic for checking graph isomorphism.",
        statement: "Implement a practical heuristic-based algorithm to check if two graphs are isomorphic (structurally identical). Since the general problem is computationally hard (GI-complete), focus on a heuristic like comparing degree sequences or using a canonical labeling algorithm (like Nauty, conceptually).",
        inputFormat: "Two graphs as adjacency lists.",
        outputFormat: "`True` or `False`.",
        testCases: [{ input: "", output: "Correctly identifies isomorphic and non-isomorphic graphs." }],
        solution: `# A simple heuristic-based checker (not a full proof)

def are_isomorphic_heuristic(graph1, graph2):
    # 1. Invariant Check: Must have same number of vertices and edges
    if len(graph1) != len(graph2): return False
    
    # 2. Degree Sequence Check: The sorted list of degrees of all vertices
    #    must be identical for both graphs.
    deg1 = sorted([len(adj) for adj in graph1.values()])
    deg2 = sorted([len(adj) for adj in graph2.values()])
    
    if deg1 != deg2:
        return False
        
    # This is not a complete solution. A full solution requires
    # canonical labeling or recursive backtracking, which is very complex.
    # However, for many non-isomorphic graphs, these simple checks will fail quickly.
    
    return True # Might be isomorphic`,
        explanation: "Graph isomorphism is the problem of determining if two graphs have the exact same structure, just with different node labels. This is a very hard problem. A practical approach uses invariants—properties that must be the same for isomorphic graphs. We can quickly check simple invariants like the number of nodes, number of edges, and the degree sequence (the list of degrees of all nodes). If any of these differ, the graphs are not isomorphic. If they all match, the graphs *might* be isomorphic, and a more complex algorithm is needed."
      },
      {
        id: "python-s23-q67",
        title: "Dead-Letter Queue System",
        description: "Implement a DLQ for failed message processing.",
        statement: "Implement a simple Dead-Letter Queue (DLQ) system. A consumer tries to process a message from a main queue. If it fails after a certain number of retries (with backoff), the message is moved to a separate DLQ for manual inspection.",
        inputFormat: "Implementation-based.",
        outputFormat: "Failed messages are moved to the DLQ.",
        testCases: [{ input: "", output: "A consistently failing message ends up in the DLQ." }],
        solution: `import queue

main_queue = queue.Queue()
dlq = queue.Queue()
retry_counts = {}

def process_message(msg):
    # Simulate a process that sometimes fails
    if random.random() < 0.5:
        raise ValueError("Processing failed")
    print(f"Processed: {msg}")

# Worker logic
while True:
    msg = main_queue.get()
    msg_id = msg['id']
    
    try:
        process_message(msg)
        retry_counts.pop(msg_id, None) # Clear count on success
    except Exception:
        retries = retry_counts.get(msg_id, 0) + 1
        if retries >= 3:
            print(f"Moving msg {msg_id} to DLQ after 3 failed attempts.")
            dlq.put(msg)
            retry_counts.pop(msg_id, None)
        else:
            print(f"Retrying msg {msg_id}, attempt {retries}")
            retry_counts[msg_id] = retries
            main_queue.put(msg) # Re-queue for another try (with delay in real system)
`,
        explanation: "A Dead-Letter Queue is a critical pattern for building robust message-based systems. It prevents a single 'poison pill' message from blocking the entire processing queue. The worker attempts to process a message. If it fails, it increments a retry counter. If the number of retries exceeds a threshold, the message is moved from the main queue to the DLQ, and an alert can be raised for a developer to investigate the problematic message manually."
      },
      {
        id: "python-s23-q68",
        title: "Consistent Hashing Ring",
        description: "Implement a consistent hashing ring for key distribution.",
        statement: "Implement a consistent hashing ring. It should support adding and removing nodes (servers) and a `get_node(key)` method that maps a key to a node. When a node is added or removed, it should cause minimal re-mapping of keys.",
        inputFormat: "Class implementation.",
        outputFormat: "A `get_node` method that distributes keys.",
        testCases: [{ input: "Add/remove node", output: "Only a fraction of keys are re-mapped." }],
        solution: `import hashlib
import bisect

class ConsistentHashRing:
    def __init__(self, nodes=None, replicas=3):
        self.replicas = replicas
        self.ring = {} # hash -> node_id
        self.sorted_keys = []
        if nodes:
            for node in nodes:
                self.add_node(node)

    def add_node(self, node_id):
        for i in range(self.replicas):
            key = self._hash(f"{node_id}:{i}")
            self.ring[key] = node_id
            bisect.insort(self.sorted_keys, key)

    def get_node(self, key):
        if not self.ring: return None
        h = self._hash(key)
        # Find the first node on the ring clockwise from the key's hash
        idx = bisect.bisect_right(self.sorted_keys, h)
        # Wrap around if needed
        if idx == len(self.sorted_keys):
            idx = 0
        return self.ring[self.sorted_keys[idx]]

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)
`,
        explanation: "Consistent hashing solves the problem of load balancing when the set of servers can change. Instead of `hash(key) % num_servers`, it maps both keys and servers to points on a circle (the 'ring'). A key is assigned to the first server found by moving clockwise on the ring. This way, when a server is added or removed, only the keys in its immediate vicinity on the ring need to be re-mapped, minimizing disruption."
      },
       {
        id: "python-s23-q69",
        title: "Content-Addressable Storage (CAS)",
        description: "Build a CAS using SHA hashes and de-duplication.",
        statement: "Build a simple Content-Addressable Storage system. Instead of storing files by name, you store them by the hash of their content (e.g., SHA-256). This provides automatic de-duplication: if you try to store the same file twice, it only gets stored once.",
        inputFormat: "Implementation-based.",
        outputFormat: "Functions to `store` content and `retrieve` content by hash.",
        testCases: [{ input: "store('hello'); store('hello');", output: "Content is stored only once." }],
        solution: `import hashlib
import os

class CAS:
    def __init__(self, base_path):
        self.base_path = base_path
        os.makedirs(base_path, exist_ok=True)
        
    def store(self, content: bytes) -> str:
        # Calculate the SHA-256 hash of the content
        h = hashlib.sha256(content).hexdigest()
        
        # Use first 2 chars for a subdirectory to avoid huge directories
        dir_path = os.path.join(self.base_path, h[:2])
        os.makedirs(dir_path, exist_ok=True)
        
        file_path = os.path.join(dir_path, h[2:])
        
        # If the file doesn't exist, write it. De-duplication happens here.
        if not os.path.exists(file_path):
            with open(file_path, 'wb') as f:
                f.write(content)
        
        return h

    def retrieve(self, content_hash: str) -> bytes:
        file_path = os.path.join(self.base_path, content_hash[:2], content_hash[2:])
        if os.path.exists(file_path):
            with open(file_path, 'rb') as f:
                return f.read()
        return None`,
        explanation: "This system, used by Git and IPFS, stores data based on what it is, not where it is. The `store` function calculates the hash of the content. It uses this hash as the filename (often splitting it to create subdirectories for better filesystem performance). Before writing, it checks if a file with that hash already exists. If it does, no action is needed. The `retrieve` function simply reconstructs the file path from the hash and reads the data."
      },
      {
        id: "python-s23-q70",
        title: "Secure Token Generator/Validator",
        description: "Implement a JWT-like token with asymmetric signatures.",
        statement: "Implement a simplified version of a secure token system like JWT using asymmetric cryptography (e.g., RSA). A generator function should take a payload (dictionary), sign it with a private key, and produce a token. A validator function should take the token and a public key to verify its authenticity and extract the payload.",
        inputFormat: "Implementation-based.",
        outputFormat: "Functions to `generate_token` and `validate_token`.",
        testCases: [{ input: "", output: "Token created with private key is validated by public key." }],
        solution: `from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding
import json
import base64

# 1. Generate keys (done once)
# private_key = rsa.generate_private_key(...)
# public_key = private_key.public_key()

def generate_token(payload, private_key):
    payload_bytes = json.dumps(payload).encode('utf-8')
    signature = private_key.sign(
        payload_bytes,
        padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH),
        hashes.SHA256()
    )
    # Simple token: base64(payload).base64(signature)
    return base64.urlsafe_b64encode(payload_bytes) + b'.' + base64.urlsafe_b64encode(signature)

def validate_token(token, public_key):
    payload_b64, sig_b64 = token.split(b'.')
    payload_bytes = base64.urlsafe_b64decode(payload_b64)
    signature = base64.urlsafe_b64decode(sig_b64)
    try:
        public_key.verify(signature, payload_bytes, padding.PSS(...), hashes.SHA256())
        return json.loads(payload_bytes)
    except Exception: # InvalidSignature
        return None`,
        explanation: "This mimics JWT's JWS (JSON Web Signature) standard. The server signs the JSON payload with its **private key**. The resulting token is `payload.signature`. Anyone can receive this token. To verify it, a recipient uses the server's **public key**. The `verify` function will succeed only if the signature was generated by the corresponding private key, proving the token's authenticity and integrity without sharing any secrets."
      },
      {
        id: "python-s23-q71",
        title: "Dynamic Plugin Sandbox",
        description: "Run untrusted code in a restricted environment (simulated).",
        statement: "Create a system that can run untrusted Python code snippets (plugins) in a restricted sandbox. The sandbox should prevent access to the filesystem and network, and limit execution time and memory (conceptually).",
        inputFormat: "A string of Python code.",
        outputFormat: "The result of the code or an error message.",
        testCases: [{ input: "print('hi')", output: "hi" }, { input: "import os", output: "Import Error: os not allowed" }],
        solution: `def run_sandboxed(code_string):
    # Define a limited set of allowed built-ins and modules
    allowed_globals = {
        '__builtins__': {
            'print': print,
            'abs': abs,
            'len': len,
            # ... and other safe functions
        },
        'math': __import__('math')
    }
    
    # Run the code in a separate process with time limits
    # (using multiprocessing is a good way to do this)
    
    try:
        # The 'exec' function executes Python code from a string.
        # We provide a restricted global and local scope.
        exec(code_string, allowed_globals, {})
    except Exception as e:
        print(f"Sandbox Error: {e}")
`,
        explanation: "Safely sandboxing Python is extremely difficult. A basic approach involves using the `exec` function with a custom dictionary for global variables. By providing a custom `__builtins__` dictionary, you can control which built-in functions the untrusted code can access, effectively blocking dangerous ones like `open()` or `import`. For true isolation against resource exhaustion (e.g., infinite loops), the code must be run in a separate process (using `multiprocessing`) with time and memory limits enforced by the parent process."
      },
      {
        id: "python-s23-q72",
        title: "File Deduplicator",
        description: "Find duplicate files using block-level comparison and hashing.",
        statement: "Write an efficient tool to find duplicate files in a directory. It should first identify files of the same size, then compare a small hash of the first few KB, and only if those match, compute and compare the full file hash to avoid reading large files unnecessarily.",
        inputFormat: "A directory path.",
        outputFormat: "A list of groups of duplicate file paths.",
        testCases: [{ input: "", output: "Identifies duplicate files." }],
        solution: `# Conceptual stages of the algorithm

# 1. Group files by size.
#    files_by_size = {1024: ['a.txt', 'b.txt'], ...}
#    Any file with a unique size cannot be a duplicate.

# 2. For each group of same-sized files:
#    - Hash a small chunk (e.g., first 4KB) of each file.
#    - Sub-group them by this partial hash.
#    - files_by_partial_hash = {'abc...': ['a.txt'], 'def...': ['b.txt', 'c.txt']}

# 3. For each sub-group with more than one file:
#    - Now, compute the full SHA-256 hash for these few remaining candidates.
#    - Sub-group them by the full hash.
#    - files_by_full_hash = {'123...': ['b.txt', 'c.txt']}
#    - This final group contains the confirmed duplicates.
`,
        explanation: "This multi-stage approach is an optimization to avoid the expensive operation of reading and hashing large files. Grouping by size is a very fast initial filter. Hashing a small, initial chunk is the next fastest filter. Only the very few files that match in both size and initial hash need to have their full contents read and hashed, making the process efficient for large directories."
      },
       {
        id: "python-s23-q73",
        title: "Bidi-Text Reformatter",
        description: "Handle RTL/LTR correctness for mixed-language text.",
        statement: "Implement a function that correctly formats a string containing mixed right-to-left (RTL, e.g., Arabic, Hebrew) and left-to-right (LTR, e.g., English) text for display. This involves using Unicode control characters (like RLM, LRM) to ensure punctuation appears correctly.",
        inputFormat: "A string with mixed directionality.",
        outputFormat: "A correctly formatted string for display.",
        testCases: [{ input: "The word is C++ (language).", output: "Correctly handles the parens around 'language'." }],
        solution: `from bidi.algorithm import get_display

# You need to install the python-bidi library: pip install python-bidi

def format_bidi_text(text):
    # The get_display function from python-bidi handles the complex Unicode
    # Bidirectional Algorithm for you.
    return get_display(text)

# Example that often breaks without bidi logic:
# A filename with English and Hebrew parts.
# The .txt might appear on the left of the Hebrew part incorrectly.
mixed_text = "File: תשע (9).txt"
print(format_bidi_text(mixed_text))`,
        explanation: "Bidirectional text is complex. The Unicode standard includes an algorithm (the 'bidi algorithm') to determine the correct display order of mixed LTR and RTL characters. A naive implementation would fail to place neutral characters like parentheses, spaces, and punctuation correctly. The `python-bidi` library is a robust implementation of this algorithm, making it the correct tool for this job rather than manual string manipulation."
      },
      {
        id: "python-s23-q74",
        title: "Pareto-Optimal Skyline",
        description: "Build an efficient skyline of Pareto-optimal points.",
        statement: "Implement a divide-and-conquer algorithm to find the Pareto-optimal skyline for a large dataset of 2D points. A point (x, y) is on the skyline if no other point dominates it (i.e., is better or equal on all dimensions and strictly better on at least one).",
        inputFormat: "A list of (x, y) tuples, where higher is better.",
        outputFormat: "The list of points on the skyline.",
        testCases: [{ input: "", output: "Correctly identifies the Pareto frontier." }],
        solution: `def pareto_skyline_dc(points):
    if len(points) <= 1:
        return points

    mid = len(points) // 2
    left_skyline = pareto_skyline_dc(points[:mid])
    right_skyline = pareto_skyline_dc(points[mid:])

    # Merge step:
    # Any point in the right skyline that is dominated by a point
    # in the left skyline must be removed.
    
    # Find the point in the left skyline with the max y-value.
    max_y_left = -1
    if left_skyline:
        max_y_left = max(p[1] for p in left_skyline)

    # Filter the right skyline
    dominant_right = [p for p in right_skyline if p[1] > max_y_left]
    
    return left_skyline + dominant_right

# Note: This requires points to be pre-sorted by x-coordinate.`,
        explanation: "The divide-and-conquer approach is efficient for finding the Pareto frontier. First, you sort all points by one dimension (e.g., x-coordinate). Then, you recursively divide the list in half and find the skyline for each half. The crucial **merge** step combines the two skylines. Since the points are sorted by x, a point in the right half can only be dominated by a point in the left half if the left-half point is also better on the y-axis. We can thus filter the right skyline based on the maximum y-value found in the entire left skyline."
      },
      {
        id: "python-s23-q75",
        title: "Streaming PCA",
        description: "Implement streaming PCA for dimensionality reduction.",
        statement: "Implement an algorithm for streaming (or incremental) Principal Component Analysis (PCA). Unlike batch PCA, which requires the whole dataset, this algorithm should be able to update the principal components as new data points arrive one by one.",
        inputFormat: "Implementation-based.",
        outputFormat: "The principal components that update with each new data point.",
        testCases: [{ input: "", output: "Components converge towards the true PCA of the full dataset." }],
        solution: `# This uses an algorithm like Oja's rule or Candid Covariance-Free
# Incremental PCA. A full implementation is very complex.

# Conceptual using Oja's rule for a single component:
def streaming_pca_oja(stream, learning_rate=0.01):
    w = None # The principal component vector
    
    for x in stream: # x is a new data point (numpy array)
        if w is None:
            w = np.random.rand(len(x))
            w /= np.linalg.norm(w)
            
        # Oja's Rule update step
        y = np.dot(w, x)
        w = w + learning_rate * y * (x - y * w)
        
        # Optionally re-normalize w
        w /= np.linalg.norm(w)
        
        yield w # Yield the component as it updates
`,
        explanation: "Standard PCA requires computing the covariance matrix of the entire dataset, which is impossible for a stream. Streaming PCA algorithms update the principal components incrementally. Oja's rule is a simple neural network-like learning rule. For each new data point `x`, it calculates its projection `y` onto the current component `w`, and then updates `w` to be slightly more aligned with `x`, with a forgetting factor. Over time, `w` converges to the first principal component."
      }
    ]
  }
];
