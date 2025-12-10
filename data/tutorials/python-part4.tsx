import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

const Placeholder = () => <p>Content coming soon...</p>;

export const PYTHON_PART4_TOPICS: Topic[] = [
  // 16. DevOps + Deployment
  {
    id: 'py-devops-docker',
    title: 'Docker',
    parent: '16. DevOps + Deployment',
    content: (
      <>
        <p className="mb-4"><strong>Docker</strong> is a platform for developing, shipping, and running applications in containers. A container is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, system tools, libraries, and settings.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Example `Dockerfile` for a Python App</h3>
        <CodeBlock language="dockerfile" code={`# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]`} />
      </>
    )
  },
  {
    id: 'py-devops-cicd',
    title: 'CI/CD Basics',
    parent: '16. DevOps + Deployment',
    content: (
      <>
        <p className="mb-4"><strong>Continuous Integration (CI)</strong> is the practice of merging all developers' working copies to a shared mainline several times a day. <strong>Continuous Deployment (CD)</strong> is a software release process that uses automated testing to validate if changes to a codebase are correct and stable for immediate autonomous deployment to a production environment.</p>
        <p className="mb-4">Tools like <strong>GitHub Actions</strong> make it easy to set up CI/CD pipelines.</p>
      </>
    )
  },
  // 17. Python Testing
  {
    id: 'py-test-pytest',
    title: 'pytest',
    parent: '17. Python Testing',
    content: (
      <>
        <p className="mb-4"><strong>pytest</strong> is a popular framework that makes it easy to write small, readable tests, and can scale to support complex functional testing for applications and libraries.</p>
        <CodeBlock language="bash" code="pip install pytest" />
        <h3 className="text-xl font-bold mt-6 mb-2">Example Test</h3>
        <p>Create a file `test_example.py`:</p>
        <CodeBlock language="python" code={`# content of test_example.py

# A simple function to test
def add(a, b):
    return a + b

# A test function must start with 'test_'
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2

# Run tests from the terminal with the 'pytest' command.`} />
      </>
    )
  },
  // 18. Latest Python Topics
  {
    id: 'py-latest-type-hints',
    title: 'Type Hints & pydantic',
    parent: '18. Latest Python Topics (2024-2025)',
    content: (
      <>
        <p className="mb-4"><strong>Type Hints</strong> (introduced in Python 3.5) allow you to add static type information to your code. This doesn't affect runtime but helps linters, IDEs, and static analysis tools catch errors. <strong>pydantic</strong> is a library that uses type hints for data validation and settings management, and it's a core part of FastAPI.</p>
        <CodeBlock language="python" code={`from pydantic import BaseModel

# Standard Python type hints
def greet(name: str) -> str:
    return "Hello, " + name

# Using pydantic for data validation
class User(BaseModel):
    id: int
    name: str
    is_active: bool = True # with a default value

# This will automatically validate the input data
user_data = {"id": 123, "name": "CodeAlpha"}
user = User(**user_data)

print(user.model_dump_json(indent=2))`} />
      </>
    )
  },
  {
    id: 'py-latest-async',
    title: 'async/await & asyncio',
    parent: '18. Latest Python Topics (2024-2025)',
    content: (
      <>
        <p className="mb-4"><strong>`async` and `await`</strong> are keywords used for asynchronous programming. This allows Python to handle many I/O-bound tasks (like network requests or database queries) concurrently, without blocking the main thread. It's essential for building high-performance web servers and network applications.</p>
        <CodeBlock language="python" code={`import asyncio

async def fetch_data(delay, name):
    print(f"Fetching {name}...")
    await asyncio.sleep(delay) # Non-blocking sleep
    print(f"Finished fetching {name}")
    return {"data": name, "delay": delay}

async def main():
    # Run two tasks concurrently
    task1 = asyncio.create_task(fetch_data(2, "Task 1"))
    task2 = asyncio.create_task(fetch_data(1, "Task 2"))

    # Wait for both tasks to complete
    result1 = await task1
    result2 = await task2
    print(result1, result2)

asyncio.run(main())`} />
      </>
    )
  },
  {
    id: 'py-latest-match-case',
    title: 'Structural Pattern Matching (match-case)',
    parent: '18. Latest Python Topics (2024-2025)',
    content: (
      <>
        <p className="mb-4">Introduced in Python 3.10, the <strong>`match-case`</strong> statement provides a more powerful and readable alternative to complex `if/elif/else` chains, similar to a `switch` statement in other languages but with advanced pattern matching capabilities.</p>
        <CodeBlock language="python" code={`def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 418:
            return "I'm a teapot"
        case 400 | 401 | 403: # Or pattern
            return "Authentication/Client Error"
        case _: # Wildcard, default case
            return "Unknown status"

print(http_status(404)) # Not Found
print(http_status(401)) # Authentication/Client Error`} />
      </>
    )
  },
  {
    id: 'py-latest-llm',
    title: 'LLM Integrations (LangChain)',
    parent: '18. Latest Python Topics (2024-2025)',
    content: (
      <>
        <p className="mb-4">Integrating Large Language Models (LLMs) like those from OpenAI or HuggingFace is a major trend. Libraries like <strong>LangChain</strong> provide a framework for building applications powered by LLMs, allowing you to chain together different components like prompts, models, and external data sources.</p>
      </>
    )
  },
  // 19. Competitive Programming
  {
    id: 'py-cp-complexity',
    title: 'Time & Space Complexity',
    parent: '19. Competitive Programming',
    content: (
      <>
        <p className="mb-4">In competitive programming and interviews, understanding the efficiency of your algorithm is critical. <strong>Time Complexity</strong> measures how the runtime of an algorithm grows with the input size (n). <strong>Space Complexity</strong> measures the amount of memory it uses.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>O(1)</strong>: Constant time (e.g., accessing an array element).</li>
          <li><strong>O(log n)</strong>: Logarithmic time (e.g., binary search).</li>
          <li><strong>O(n)</strong>: Linear time (e.g., iterating through a list).</li>
          <li><strong>O(n log n)</strong>: Log-linear time (e.g., efficient sorting algorithms like merge sort).</li>
          <li><strong>O(n²)</strong>: Quadratic time (e.g., nested loops, bubble sort).</li>
        </ul>
      </>
    )
  },
  {
    id: 'py-cp-dp',
    title: 'Dynamic Programming (DP)',
    parent: '19. Competitive Programming',
    content: (
      <>
        <p className="mb-4"><strong>Dynamic Programming</strong> is an optimization technique for solving complex problems by breaking them down into simpler, overlapping subproblems and storing the results of these subproblems to avoid re-computation. There are two main approaches:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Memoization (Top-Down):</strong> Solve the problem recursively, but cache the results of subproblems.</li>
          <li><strong>Tabulation (Bottom-Up):</strong> Solve the problem iteratively, starting with the smallest subproblems and building up to the final solution.</li>
        </ul>
        <CodeBlock language="python" code={`# Fibonacci with Memoization (Top-Down DP)
memo = {}
def fib(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    result = fib(n - 1) + fib(n - 2)
    memo[n] = result
    return result

print(fib(50))`} />
      </>
    )
  },
  {
    id: 'py-cp-two-pointers',
    title: 'Two Pointers & Sliding Window',
    parent: '19. Competitive Programming',
    content: (
      <>
        <p className="mb-4">The <strong>Two Pointers</strong> technique is common for problems involving sorted arrays or linked lists. It uses two pointers that iterate through the data structure, often moving towards each other, away from each other, or in the same direction.</p>
        <p className="mb-4">The <strong>Sliding Window</strong> technique is used for problems on arrays/strings where you need to find a subarray or substring that satisfies certain conditions. A "window" of a certain size slides over the data.</p>
        <CodeBlock language="python" code={`# Two Pointers: Check for a pair with a given sum in a sorted array
def has_pair_with_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return False

print(has_pair_with_sum([1, 2, 4, 6, 9], 8)) # True (2 + 6)`} />
      </>
    )
  },
];