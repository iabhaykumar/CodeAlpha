import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART10: ProblemCategory[] = [
    {
        category: "SECTION 17 — Threads / Concurrency / Synchronization",
        problems: [
            // Problems 16-35 (20 problems total)
            {
                id: "c-s17-q1",
                title: "Implement a Thread Pool",
                description: "Task queue, dynamic scaling, graceful shutdown (pthreads).",
                statement: "Implement a thread pool using pthreads. It should maintain a queue of tasks. Worker threads should wait for tasks, execute them, and go back to waiting. Support adding new tasks and a graceful shutdown.",
                inputFormat: "Implementation-based.",
                outputFormat: "Tasks are executed concurrently by worker threads.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <pthread.h>
// struct TaskQueue { ... };
// struct ThreadPool { pthread_t* workers; TaskQueue* queue; };

// void* worker_function(void* arg) {
//     ThreadPool* pool = (ThreadPool*)arg;
//     while(true) {
//         Task* task = get_task_from_queue(pool->queue); // This blocks
//         if (task == NULL) break; // Shutdown signal
//         execute_task(task);
//     }
//     return NULL;
// }`,
                explanation: "A thread pool pre-creates a number of worker threads to avoid the overhead of creating a new thread for every task. A synchronized task queue (using a mutex and condition variable) is used to distribute work. Worker threads block on the queue until a new task is submitted."
            },
            {
                id: "c-s17-q2",
                title: "Build a Read-Write Lock",
                description: "Implement from mutexes and condition variables.",
                statement: "Implement a readers-writer lock from scratch using `pthread_mutex_t` and `pthread_cond_t`. It should allow multiple concurrent readers but only one exclusive writer.",
                inputFormat: "Implementation-based.",
                outputFormat: "A lock that allows concurrent reads.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual read lock
// pthread_mutex_lock(&rw->mutex);
// while (rw->writers_waiting > 0 || rw->active_writers > 0) {
//     pthread_cond_wait(&rw->readers_cond, &rw->mutex);
// }
// rw->active_readers++;
// pthread_mutex_unlock(&rw->mutex);

// Conceptual write lock
// pthread_mutex_lock(&rw->mutex);
// rw->writers_waiting++;
// while (rw->active_readers > 0 || rw->active_writers > 0) {
//     pthread_cond_wait(&rw->writers_cond, &rw->mutex);
// }
// rw->writers_waiting--;
// rw->active_writers++;
// pthread_mutex_unlock(&rw->mutex);
`,
                explanation: "The implementation tracks the number of active readers and writers. A read lock can be acquired if there are no active or waiting writers. A write lock can only be acquired if there are no active readers or writers. Condition variables are used to block threads until the lock becomes available."
            },
            {
                id: "c-s17-q3",
                title: "Lock-Free SPSC Queue",
                description: "Implement a lock-free single-producer/single-consumer queue.",
                statement: "This is a duplicate of a problem in the System/Process section. See c-s16-q11.",
                inputFormat: "Implementation-based.",
                outputFormat: "Data is passed between threads without locks.",
                testCases: [{ input: "", output: "" }],
                solution: `// See solution for c-s16-q11. Uses <stdatomic.h>.`,
                explanation: "For a Single-Producer/Single-Consumer (SPSC) queue, you can avoid locks. Only the producer modifies the 'tail' index and only the consumer modifies the 'head' index. Using atomic operations with appropriate memory ordering ensures that changes from one thread are correctly visible to the other."
            },
            {
                id: "c-s17-q4",
                title: "Create a Barrier Primitive",
                description: "Implement a barrier for N threads using pthreads.",
                statement: "Implement a reusable barrier. N threads will call `barrier_wait()`. They will all block until the Nth thread arrives. Then, all threads are released simultaneously.",
                inputFormat: "Implementation-based.",
                outputFormat: "All threads wait at the barrier and are released together.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual barrier_wait
// pthread_mutex_lock(&b->mutex);
// b->count++;
// if (b->count == b->threshold) {
//     // I am the last one
//     pthread_cond_broadcast(&b->cond); // Wake up everyone
// } else {
//     while (b->count < b->threshold) {
//         pthread_cond_wait(&b->cond, &b->mutex); // Wait
//     }
// }
// pthread_mutex_unlock(&b->mutex);`,
                explanation: "A barrier uses a mutex, a condition variable, and a counter. Each thread acquires the mutex, increments the counter, and then waits on the condition variable. The last thread to arrive broadcasts the condition, waking up all the waiting threads."
            },
            {
                id: "c-s17-q5",
                title: "Simulate Priority Inversion",
                description: "Demonstrate and fix priority inversion.",
                statement: "Create a scenario with three threads (High, Medium, Low priority) that demonstrates priority inversion. Then, show how this can be addressed using priority inheritance (`PTHREAD_PRIO_INHERIT`).",
                inputFormat: "Implementation-based.",
                outputFormat: "Demonstration of the high-priority thread being starved and then fixed.",
                testCases: [{ input: "", output: "" }],
                solution: `// Scenario:
// 1. Thread L (low prio) acquires mutex M.
// 2. Thread M (medium prio) starts and runs, preempting L.
// 3. Thread H (high prio) starts and tries to acquire M, blocking.
// Result: H is starved because M keeps running, preventing L from releasing the lock.

// Fix:
// pthread_mutexattr_t attr;
// pthread_mutexattr_init(&attr);
// pthread_mutexattr_setprotocol(&attr, PTHREAD_PRIO_INHERIT);
// pthread_mutex_init(&mutex, &attr);`,
                explanation: "Priority inversion occurs when a high-priority task is blocked by a low-priority task, which is in turn preempted by a medium-priority task. The solution is priority inheritance: when Thread H blocks on the mutex held by L, the system temporarily boosts L's priority to H's level. This allows L to run, release the mutex, and unblock H."
            },
            {
                id: "c-s17-q6",
                title: "Fork-Safe Logging Library",
                description: "Implement a fork-safe async-signal-safe logging library.",
                statement: "Create a logging function that is safe to be called from a child process immediately after `fork()`. This means it cannot use functions that are not async-signal-safe (like `malloc` or `printf`). It should write directly to a file descriptor.",
                inputFormat: "Implementation-based.",
                outputFormat: "Logs are written correctly from both parent and child.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual safe logger
// void safe_log(const char* msg) {
//     // write() is async-signal-safe
//     write(STDOUT_FILENO, msg, strlen(msg));
// }

// if (fork() == 0) {
//     // Child
//     safe_log("Hello from child\\n");
//     // DO NOT use printf() here before exec()
// }`,
                explanation: "After a `fork()`, the child process has a copy of the parent's memory, including locks. If the parent held a lock (e.g., inside `malloc`), the child also holds this lock. Calling `malloc` again in the child can cause a deadlock. Only a small subset of functions, called async-signal-safe functions (like `write()`), are safe to call in the child before `exec()`."
            },
            {
                id: "c-s17-q7",
                title: "Concurrent Hash Table",
                description: "Build a concurrent hash table with lock striping.",
                statement: "Implement a simplified hash table that supports concurrent `put` and `get` operations. Use lock striping (an array of locks) where each lock protects a subset of the hash buckets, instead of a single global lock.",
                inputFormat: "Implementation-based.",
                outputFormat: "A hash table that allows concurrent writes to different buckets.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual put operation
// #define NUM_LOCKS 16
// pthread_mutex_t locks[NUM_LOCKS];
// Node* buckets[NUM_BUCKETS];

// void put(Key k, Value v) {
//     int bucket_index = hash(k) % NUM_BUCKETS;
//     int lock_index = bucket_index % NUM_LOCKS;

//     pthread_mutex_lock(&locks[lock_index]);
//     // ... perform insertion into linked list at buckets[bucket_index] ...
//     pthread_mutex_unlock(&locks[lock_index]);
// }`,
                explanation: "Lock striping improves concurrency. Instead of one lock for the whole table, we have multiple locks. A key is mapped to a bucket, and the bucket is mapped to a lock. This allows two threads to modify the table simultaneously as long as their keys map to different locks."
            },
            {
                id: "c-s17-q8",
                title: "Work-Stealing Deque",
                description: "Implement a simplified work-stealing deque for threads.",
                statement: "Implement a work-stealing deque (double-ended queue) for a thread pool. A worker thread should be able to `push` and `pop` tasks from its own end, while a 'thief' thread can `steal` a task from the other end.",
                inputFormat: "Implementation-based.",
                outputFormat: "Efficient task distribution in a thread pool.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a complex lock-free or near lock-free data structure.
// Chase-Lev deque is a common algorithm.
// Owner thread: uses push/pop on one end (e.g., bottom).
// Thief threads: use steal on the other end (e.g., top).
// Requires careful use of atomic compare-and-swap operations to be efficient.`,
                explanation: "Work-stealing is an efficient load balancing strategy. Each worker thread has its own deque of tasks. When a thread's deque is empty, it can 'steal' work from another thread's deque. To minimize contention, the owner of the deque adds/removes from one end, while thieves steal from the other."
            },
            {
                id: "c-s17-q9",
                title: "Slab Allocator",
                description: "Create a thread-safe slab allocator for fixed-size objects.",
                statement: "Implement a simple slab allocator. Pre-allocate a large chunk of memory ('slab') and divide it into fixed-size slots. Maintain a free list of available slots. The `alloc` function should return a free slot, and `free` should add it back to the list. Implement per-thread caches to reduce lock contention.",
                inputFormat: "Implementation-based.",
                outputFormat: "Fast allocation and deallocation of fixed-size objects.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// // Global Slab Cache
// - List of full slabs
// - List of partial slabs
// - List of empty slabs
// - Global lock

// // Per-Thread Cache (_Thread_local)
// - A small list of free objects for this thread.

// alloc():
// 1. Try to get object from per-thread cache (no lock).
// 2. If empty, get a batch of objects from a partial slab (global lock).
// 3. If no partial slabs, get an empty slab or allocate a new one.

// free():
// 1. Add object to per-thread cache (no lock).
// 2. If per-thread cache is full, return batch of objects to a global partial slab.`,
                explanation: "A slab allocator is highly efficient for allocating many objects of the same size. By using per-thread caches, most `alloc` and `free` operations can be done without acquiring a global lock, significantly reducing contention in multi-threaded applications."
            },
            {
                id: "c-s17-q10",
                title: "Condition Variable Thundering Herd",
                description: "Avoid thundering herd with condition variables.",
                statement: "Demonstrate the 'thundering herd' problem where `pthread_cond_broadcast` wakes up many threads, but only one can proceed. Then, show how using `pthread_cond_signal` in a loop or re-checking conditions can mitigate this.",
                inputFormat: "Implementation-based.",
                outputFormat: "Demonstration of the problem and the solution.",
                testCases: [{ input: "", output: "" }],
                solution: `// Problem:
// A single producer calls pthread_cond_broadcast.
// 10 consumer threads wake up.
// All 10 try to acquire the mutex.
// Only 1 gets the work item.
// The other 9 go back to sleep. -> Wasted CPU cycles.

// Solution 1: Use signal instead of broadcast
// Producer: pthread_cond_signal(&cond); // Wakes up only one thread

// Solution 2: Re-check condition (ALWAYS do this)
// while (work_queue_is_empty) {
//     pthread_cond_wait(&cond, &mutex);
// }
// This prevents spurious wakeups and is necessary even with signal.`,
                explanation: "The thundering herd problem occurs when a broadcast wakes up many threads that cannot do any work. Using `pthread_cond_signal` to wake up just one thread is often more efficient. Regardless, threads waiting on a condition variable should always re-check their condition in a `while` loop, as they can wake up 'spuriously' without a signal."
            },
            {
                id: "c-s17-q11",
                title: "Bounded Semaphore",
                description: "Build a bounded semaphore from pthread primitives.",
                statement: "Implement a counting semaphore from scratch using a mutex and a condition variable. It should support `sem_wait` (decrement/block) and `sem_post` (increment/signal).",
                inputFormat: "Implementation-based.",
                outputFormat: "A working semaphore.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual sem_wait
// pthread_mutex_lock(&s->mutex);
// while (s->count == 0) {
//     pthread_cond_wait(&s->cond, &s->mutex);
// }
// s->count--;
// pthread_mutex_unlock(&s->mutex);

// Conceptual sem_post
// pthread_mutex_lock(&s->mutex);
// s->count++;
// pthread_cond_signal(&s->cond); // Wake up one waiter
// pthread_mutex_unlock(&s->mutex);`,
                explanation: "A semaphore is a counter protected by a mutex. The `wait` operation decrements the counter, but if the counter is zero, the thread blocks on a condition variable. The `post` operation increments the counter and signals one of the waiting threads to wake up."
            },
             {
                id: "c-s17-q12",
                title: "Timed Wait Queue (Timer Wheel)",
                description: "Implement a timer wheel for efficient task scheduling.",
                statement: "Implement a timer wheel, an efficient data structure for managing a large number of timers. It consists of a circular buffer (the 'wheel') and a pointer to the current 'tick'. Tasks are placed in the bucket corresponding to their expiry time.",
                inputFormat: "Implementation-based.",
                outputFormat: "Tasks are executed at their scheduled time.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Timer Wheel
// wheel = array of linked lists, size = N
// current_tick = 0

// schedule(task, delay):
//   expiry_tick = (current_tick + delay) % N;
//   add task to linked list at wheel[expiry_tick];

// Main loop (driven by a timer, e.g., every 1 second):
//   - Get list of tasks at wheel[current_tick].
//   - Execute all tasks in the list.
//   - Clear the list at wheel[current_tick].
//   - current_tick = (current_tick + 1) % N;`,
                explanation: "A timer wheel is more efficient than a sorted list or min-heap for managing timers. It provides O(1) complexity for scheduling and cancellation. A background thread advances the `current_tick` pointer at a fixed interval. When it lands on a bucket, it executes all timer tasks stored in that bucket."
            },
            {
                id: "c-s17-q13",
                title: "Concurrent Reference Counting",
                description: "Implement a reference-counted object with atomic operations.",
                statement: "Create a system for managing object lifetimes using reference counting. The reference count must be manipulated using atomic operations (`<stdatomic.h>`) to be thread-safe. When the count drops to zero, the object's memory should be freed.",
                inputFormat: "Implementation-based.",
                outputFormat: "Objects are freed when no longer referenced.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual smart pointer
// struct RefCountedObject {
//     _Atomic int ref_count;
//     ... data ...
// };
//
// acquire(obj):
//   atomic_fetch_add(&obj->ref_count, 1);
//
// release(obj):
//   if (atomic_fetch_sub(&obj->ref_count, 1) == 1) {
//     // We were the last reference
//     free(obj);
//   }
`,
                explanation: "Atomic operations are crucial for thread-safe reference counting. A simple `ref_count++` is not atomic and can lead to race conditions. `atomic_fetch_add` and `atomic_fetch_sub` perform the increment/decrement as a single, uninterruptible hardware instruction."
            },
            {
                id: "c-s17-q14",
                title: "Lock-Free Hash Set",
                description: "Implement a lock-free hash set with open addressing.",
                statement: "Implement a simple lock-free hash set using open addressing (linear probing). The `add` operation should use an atomic compare-and-swap (CAS) loop to insert elements without using locks.",
                inputFormat: "Implementation-based.",
                outputFormat: "A thread-safe hash set.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual add operation
// bool add(HashSet* set, int value) {
//     int index = hash(value) % set->capacity;
//     while (true) {
//         int current = atomic_load(&set->table[index]);
//         if (current == value) return false; // Already exists
//         if (current == EMPTY_SLOT) {
//             // Try to atomically change from EMPTY to our value
//             if (atomic_compare_exchange_weak(&set->table[index], &current, value)) {
//                 return true; // Success
//             }
//             // If it failed, another thread inserted here. Retry logic.
//         }
//         index = (index + 1) % set->capacity; // Linear probing
//     }
// }`,
                explanation: "Lock-free data structures are complex. This `add` operation uses a CAS loop. It reads the current value at a position. If the slot is empty, it attempts to atomically swap the empty marker with its own value. If this fails, it means another thread just inserted an element in the same spot, so the loop continues, either finding the value or the next empty slot."
            },
            {
                id: "c-s17-q15",
                title: "Parallel Map-Reduce",
                description: "Build a parallel map-reduce runner using pthreads.",
                statement: "Implement a simplified map-reduce framework for a single machine. Create multiple 'mapper' threads to process chunks of the input data and a set of 'reducer' threads to aggregate the intermediate results from the mappers.",
                inputFormat: "Implementation-based.",
                outputFormat: "Correctly aggregated results.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Flow
// 1. Main thread splits input data into N chunks for N mapper threads.
// 2. Main thread creates and starts N mapper threads.
// 3. Each mapper thread:
//    - Processes its chunk of data.
//    - Emits (key, value) pairs to an intermediate data structure.
//    - This intermediate structure must be synchronized.
// 4. Main thread waits for all mappers to finish.
// 5. 'Shuffle' phase: Group all intermediate values by key.
// 6. Main thread creates and starts M reducer threads.
// 7. Each reducer thread is assigned a subset of keys to process.
// 8. Main thread waits for all reducers to finish.`,
                explanation: "This pattern parallelizes data processing. The 'map' step, which is often the most computationally intensive part, is distributed across multiple threads. The 'reduce' step can also be parallelized by partitioning the keys among the reducer threads."
            },
            {
                id: "c-s17-q16",
                title: "Thread-Local Object Pools",
                description: "Implement object pools using `_Thread_local`.",
                statement: "Implement an object pool where each thread maintains its own private pool of objects. This avoids the need for locking when a thread allocates or frees an object, as it only accesses its own local pool. Use the C11 `_Thread_local` keyword.",
                inputFormat: "Implementation-based.",
                outputFormat: "A highly concurrent object pool.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// // Define the object pool structure
// struct ObjectPool { ... };

// // Declare a thread-local pointer to a pool
// _Thread_local struct ObjectPool* local_pool = NULL;

// void* alloc_obj() {
//     if (local_pool == NULL) {
//         local_pool = create_new_pool();
//     }
//     // Allocate from local_pool (no lock needed)
//     ...
// }`,
                explanation: "Thread-local storage provides each thread with its own private copy of a variable. By making the object pool thread-local, we eliminate lock contention entirely for `alloc` and `free` operations, as each thread is operating on its own separate data."
            },
            {
                id: "c-s17-q17",
                title: "Race Detection Toy",
                description: "Instrument read/write accesses to detect race conditions.",
                statement: "Create a toy race condition detector. This could involve creating wrapper functions for memory access that log the thread ID and memory address being accessed. A separate monitoring thread could then analyze this log to find instances where different threads access the same memory without a lock, with at least one access being a write.",
                inputFormat: "Implementation-based.",
                outputFormat: "Reports potential race conditions.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a concept behind tools like ThreadSanitizer.
// It's extremely complex to implement.

// // For each memory access (read or write) on address 'addr' by 'thread_id':
// // 1. Check a "shadow memory" map for 'addr'.
// // 2. Shadow memory stores the last thread to write to that address.
// // 3. If current access is a write:
// //    - If another thread last read or wrote, report a race.
// //    - Update shadow memory with current thread_id.
// // 4. If current access is a read:
// //    - If another thread last wrote, report a race.
// //    - Update shadow memory (optional, for write-read races).
`,
                explanation: "Race detectors instrument code to track memory accesses. Shadow memory is a technique where a separate memory region is used to store metadata about the application's main memory. This metadata can track which thread last accessed a memory location, allowing the detector to identify conflicting accesses."
            },
            {
                id: "c-s17-q18",
                title: "Concurrent Priority Queue",
                description: "Implement a priority queue using a heap with locks.",
                statement: "Implement a thread-safe priority queue. Use an array-based binary heap as the underlying data structure. All public methods (`add`, `poll`) must be protected by a single mutex to ensure thread safety.",
                inputFormat: "Implementation-based.",
                outputFormat: "A thread-safe priority queue.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual add operation
// void add(PQ* pq, int data) {
//     pthread_mutex_lock(&pq->mutex);
//     pq->heap[pq->size] = data;
//     sift_up(pq->heap, pq->size);
//     pq->size++;
//     pthread_mutex_unlock(&pq->mutex);
// }`,
                explanation: "A priority queue can be efficiently implemented with a binary heap. To make it thread-safe, all operations that modify the heap (like adding an element and sifting up, or removing the root and sifting down) must be performed within a critical section protected by a mutex."
            },
            {
                id: "c-s17-q19",
                title: "Asynchronous Task Scheduling",
                description: "Use `eventfd` and worker threads for scheduling.",
                statement: "Build a simple asynchronous task scheduler on Linux. The main thread submits tasks to a queue. It then uses `eventfd` to signal a pool of worker threads that new work is available. Workers block on `read()` from the `eventfd` descriptor.",
                inputFormat: "Implementation-based.",
                outputFormat: "Tasks are executed asynchronously by workers.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual worker thread
// int efd = ...; // eventfd descriptor shared with main thread
// while(1) {
//     uint64_t u;
//     read(efd, &u, sizeof(uint64_t)); // Blocks until signaled
//     // ... get task from shared queue and execute ...
// }

// Main thread (submit task)
// add_task_to_queue(task);
// uint64_t u = 1;
// write(efd, &u, sizeof(uint64_t)); // Signal the workers`,
                explanation: "`eventfd` is a Linux-specific mechanism for creating a simple event counter that can be used for signaling between threads or processes. A thread can block by reading from the `eventfd`. Another thread can signal it by writing to the `eventfd`. This is often used with `epoll` to build highly efficient event loops."
            },
            {
                id: "c-s17-q20",
                title: "Futex-like Primitive",
                description: "Simulate a futex for fast user-space waits.",
                statement: "Simulate the behavior of a Futex (Fast Userspace Mutex). Implement `lock` and `unlock` functions. The `lock` function should first try to acquire the lock by spinning on an atomic variable in user-space for a short time. Only if the lock is still contended should it make a system call to sleep.",
                inputFormat: "Implementation-based.",
                outputFormat: "A hybrid spin-then-sleep lock.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual lock
// void lock(atomic_int* lock_val) {
//     // First, try to acquire in user-space
//     for (int i=0; i < SPIN_COUNT; i++) {
//         if (atomic_compare_exchange_weak(lock_val, 0, 1)) {
//             return; // Acquired lock
//         }
//     }
//     // Lock is still contended, so make syscall to sleep
//     // In a real futex, this would be futex_wait().
//     // We can simulate with a pthread_cond_wait().
// }`,
                explanation: "A Futex is a performance optimization. The idea is that lock contention is rare. Most of the time, a lock is free. Making a system call to acquire a lock is expensive. A futex first tries to acquire the lock using atomic operations entirely in user-space. Only if it fails (i.e., there is contention) does it make a system call to the kernel to be put to sleep."
            },
        ]
    }
];