import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART11: ProblemCategory[] = [
    {
        category: "SECTION 18 — Memory / Allocators / Low-level",
        problems: [
            // Problems 36-55 (20 problems total)
            {
                id: "c-s18-q1",
                title: "Implement malloc/free",
                description: "first-fit with free list coalescing.",
                statement: "Implement a simple version of `malloc` and `free`. Use a linked list to manage free blocks of memory. The `malloc` function should use a first-fit strategy to find a suitable block. `free` should add the block back to the list and coalesce (merge) it with adjacent free blocks.",
                inputFormat: "Implementation-based.",
                outputFormat: "Functions that can allocate and free memory.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual implementation
// struct BlockHeader { size_t size; struct BlockHeader* next; };
// static struct BlockHeader* free_list = NULL;

// malloc(size):
// 1. Iterate through free_list to find first block >= size.
// 2. If found:
//    - Maybe split the block if it's much larger.
//    - Remove it from free_list.
//    - Return pointer to user.
// 3. If not found, request more memory from OS (sbrk) and create a new block.

// free(ptr):
// 1. Get header from user pointer.
// 2. Add block back to free_list (sorted by address).
// 3. Check if next block in list is adjacent in memory -> coalesce.
// 4. Check if prev block in list is adjacent in memory -> coalesce.
`,
                explanation: "A basic allocator manages a heap. It keeps a linked list of free memory blocks. `malloc` searches this list for a block that's large enough. `free` returns a block to the list. Coalescing (merging adjacent free blocks) is crucial to combat fragmentation, where you have many small free blocks but none are large enough for a new request."
            },
            {
                id: "c-s18-q2",
                title: "Segregated-Fit Allocator",
                description: "Implement an allocator with buckets by size.",
                statement: "Implement a segregated-fit allocator. Maintain separate free lists for different size classes (e.g., a list for 8-byte blocks, a list for 16-byte blocks, etc.). This speeds up allocation by reducing search time.",
                inputFormat: "Implementation-based.",
                outputFormat: "A faster allocator for common sizes.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Design
// #define NUM_BUCKETS 8
// struct BlockHeader* free_lists[NUM_BUCKETS]; // An array of free lists

// malloc(size):
// 1. Determine the correct bucket for the requested size.
// 2. Check if the free list for that bucket is non-empty.
// 3. If yes, pop a block from that list and return it.
// 4. If no, get memory from a larger bucket or the OS.

// free(ptr):
// 1. Determine the bucket for the pointer's size.
// 2. Add the block to the corresponding free list.`,
                explanation: "A segregated-fit allocator improves on a simple free list by creating separate lists for different object sizes. To allocate an object of size X, you only need to look in the free list for size X (or the next size up). This makes finding a suitable block an O(1) operation on average."
            },
            {
                id: "c-s18-q3",
                title: "Slab Allocator",
                description: "Implement a slab allocator with per-CPU caches (simulated).",
                statement: "Simulate a slab allocator. A 'slab' is a contiguous chunk of memory pre-divided into fixed-size slots for a specific object type. A central cache manages slabs, and each thread (simulated) has a small local cache of free objects to reduce lock contention.",
                inputFormat: "Implementation-based.",
                outputFormat: "Very fast allocation/deallocation for a specific object size.",
                testCases: [{ input: "", output: "" }],
                solution: `// See solution for c-s17-q9. The concept is identical.`,
                explanation: "The slab allocator is a memory allocation mechanism intended for the efficient allocation of kernel objects. It eliminates fragmentation caused by allocations and deallocations. The technique is to cache freed objects in a 'slab' of same-sized objects, so that future allocations of the same size can be satisfied without overhead."
            },
            {
                id: "c-s18-q4",
                title: "Memory Pool",
                description: "Implement a memory pool with O(1) alloc/free.",
                statement: "Implement a simple memory pool for a fixed-size object. Pre-allocate a large array of objects. The `alloc` function should return a pointer to an unused object from the pool, and `free` should return it to the pool. Use a linked list of free objects for O(1) operations.",
                inputFormat: "Implementation-based.",
                outputFormat: "O(1) allocation and deallocation.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual pool for 'struct MyObject'
// struct MyObject { struct MyObject* next_free; ... };
// struct MyObject* free_list_head;

// pool_alloc():
//   if (free_list_head == NULL) return NULL; // Pool empty
//   struct MyObject* obj = free_list_head;
//   free_list_head = obj->next_free;
//   return obj;

// pool_free(obj):
//   obj->next_free = free_list_head;
//   free_list_head = obj;
`,
                explanation: "A memory pool improves performance by avoiding system calls (`malloc`/`free`). We pre-allocate a large block of memory. The free objects in the pool are linked together to form a free list. `alloc` simply takes the head of the free list. `free` adds the object back to the head of the free list. Both are O(1) operations."
            },
            {
                id: "c-s18-q5",
                title: "Compacting Garbage Collector",
                description: "Implement a stop-the-world compacting GC.",
                statement: "Simulate a simple compacting garbage collector. Given a heap with allocated objects and pointers between them, first, find all live objects (mark phase). Then, move all live objects to one end of the heap (compact phase), updating all pointers to reflect their new locations.",
                inputFormat: "Implementation-based.",
                outputFormat: "A compacted heap with no fragmentation.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Compaction
// 1. Mark Phase: Find all reachable objects from roots (same as Mark-and-Sweep).
// 2. Compute New Locations:
//    - Iterate through the heap.
//    - For each live object, calculate its new address at the beginning of the heap.
//    - Store the new address in the object's header.
// 3. Update Pointers:
//    - Iterate through all live objects again.
//    - For each pointer inside an object, update it to the new address stored in the pointed-to object's header.
// 4. Move Objects:
//    - Iterate through the heap and move all live objects to their new computed locations.
`,
                explanation: "Compaction is a strategy to eliminate memory fragmentation. After identifying live objects, they are all moved to one contiguous block at the start of the heap. The most complex part is updating all the pointers in the live objects to point to the new locations of the objects they reference."
            },
            {
                id: "c-s18-q6",
                title: "Mark-and-Sweep GC",
                description: "Implement a mark-and-sweep GC for a graph of objects.",
                statement: "Simulate a mark-and-sweep garbage collector. Represent the heap as a graph of objects. Start from a set of 'root' objects, traverse all reachable objects and 'mark' them. Then, 'sweep' through all objects on the heap, freeing any that are not marked.",
                inputFormat: "Implementation-based.",
                outputFormat: "Unreachable objects are identified and 'freed'.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual algorithm
// mark(obj):
//   if obj is not marked:
//     mark obj
//     for each pointer p in obj:
//       mark(*p)

// sweep():
//   for each object obj in heap:
//     if obj is marked:
//       unmark obj
//     else:
//       free obj`,
                explanation: "This is a fundamental garbage collection algorithm. The **Mark** phase is a graph traversal (like DFS or BFS) starting from root objects (globals, stack variables) to find all live objects. The **Sweep** phase iterates through the entire heap and reclaims any memory belonging to objects that were not marked."
            },
            {
                id: "c-s18-q7",
                title: "Pointer Tagging",
                description: "Pack metadata into low bits of a pointer.",
                statement: "On a 64-bit system, pointers to aligned memory (e.g., aligned to 8 bytes) have their lowest 3 bits as zero. Write functions to 'tag' a pointer by storing a small integer in these unused bits and to 'untag' it to retrieve the original pointer and the tag.",
                inputFormat: "Implementation-based.",
                outputFormat: "Data is packed into and unpacked from a pointer.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdint.h>
// #define TAG_MASK 0x7
// #define PTR_MASK (~TAG_MASK)

// uintptr_t tag_pointer(void* ptr, uint8_t tag) {
//     return ((uintptr_t)ptr & PTR_MASK) | (tag & TAG_MASK);
// }

// void* untag_pointer(uintptr_t tagged_ptr) {
//     return (void*)(tagged_ptr & PTR_MASK);
// }

// uint8_t get_tag(uintptr_t tagged_ptr) {
//     return tagged_ptr & TAG_MASK;
// }`,
                explanation: "Pointer tagging is a memory optimization. Since `malloc` often returns memory addresses that are aligned to 8 or 16 bytes, the last 3 or 4 bits of the address are always zero. We can use bitwise operations to store small pieces of data (tags) in these unused bits, avoiding the need for an extra field in a struct."
            },
             {
                id: "c-s18-q8",
                title: "Heap Profiler",
                description: "Sample allocations and report hot allocation sites.",
                statement: "Create a simple heap profiler by overriding `malloc` and `free` using `LD_PRELOAD`. Your custom `malloc` should record the size of the allocation and the call stack (using `backtrace()`) and store this information in a global data structure.",
                inputFormat: "Implementation-based.",
                outputFormat: "A summary of memory allocation hotspots.",
                testCases: [{ input: "", output: "" }],
                solution: `// This requires creating a shared library and using LD_PRELOAD.
// profiler.c:
// #define _GNU_SOURCE
// #include <dlfcn.h>
//
// void* malloc(size_t size) {
//     static void* (*real_malloc)(size_t) = NULL;
//     if (!real_malloc) {
//         real_malloc = dlsym(RTLD_NEXT, "malloc");
//     }
//     // 1. Get backtrace to find who called malloc.
//     // 2. Log the size and the backtrace.
//     // 3. Call the real malloc and return the result.
//     return real_malloc(size);
// }
//
// Compile with: gcc -shared -fPIC profiler.c -o profiler.so -ldl
// Run with: LD_PRELOAD=./profiler.so ./my_app`,
                explanation: "`LD_PRELOAD` is a powerful Linux feature that allows you to intercept function calls. By creating a shared library with our own `malloc` function and preloading it, all calls to `malloc` from the main application will go to our function first. We can then perform our profiling and call the original `malloc` using `dlsym`."
            },
            {
                id: "c-s18-q9",
                title: "Memory Sanitizer",
                description: "Detect use-after-free with redzones and poisoning.",
                statement: "Simulate a basic memory sanitizer. When allocating memory, allocate extra space before and after the requested block (redzones). When freeing memory, 'poison' it by filling it with a specific pattern (e.g., `0xDEADBEEF`). Check the redzones for corruption and the main block for poisoning on subsequent operations.",
                inputFormat: "Implementation-based.",
                outputFormat: "Detects and reports memory errors.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual custom malloc
// my_malloc(size):
//   alloc_size = REDZONE_SIZE + size + REDZONE_SIZE;
//   mem = malloc(alloc_size);
//   fill(mem, REDZONE_PATTERN, REDZONE_SIZE); // Poison left redzone
//   fill(mem + REDZONE_SIZE + size, REDZONE_PATTERN, REDZONE_SIZE); // Poison right
//   return mem + REDZONE_SIZE; // Return pointer to user area
//
// my_free(ptr):
//   mem = ptr - REDZONE_SIZE;
//   // Check if redzones have been corrupted.
//   fill(mem, FREED_PATTERN, size); // Poison freed area
//   free(mem);`,
                explanation: "This simulates how tools like AddressSanitizer work. **Redzones** are areas of memory placed around an allocation to detect buffer overflows. **Poisoning** memory after it's freed helps detect use-after-free bugs, because the program will likely crash or read a recognizable garbage value if it tries to access the poisoned memory."
            },
            {
                id: "c-s18-q10",
                title: "Virtual Memory Simulator",
                description: "Simulate virtual->physical mapping and page faults.",
                statement: "Implement a simple virtual memory simulator. Create a page table data structure. When a virtual address is accessed, the simulator should translate it to a physical address using the page table. If the page is not in 'memory' (a simulated physical RAM), it should trigger a 'page fault' and 'load' it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Correctly translates addresses and handles page faults.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// // Page Table Entry
// struct PTE { bool present; int frame_number; };
//
// PTE page_table[NUM_PAGES];
// char physical_memory[PHYSICAL_MEM_SIZE];
//
// read_memory(virtual_addr):
//   page_num = virtual_addr / PAGE_SIZE;
//   offset = virtual_addr % PAGE_SIZE;
//   if (!page_table[page_num].present) {
//     handle_page_fault(page_num);
//   }
//   frame_num = page_table[page_num].frame_number;
//   physical_addr = frame_num * PAGE_SIZE + offset;
//   return physical_memory[physical_addr];`,
                explanation: "This simulates how an OS and MMU (Memory Management Unit) work. A page table maps virtual pages to physical frames. When the 'present' bit in a page table entry is false, it means the data is not in RAM (it's on disk). This triggers a page fault, an exception handled by the OS to load the required data from disk into a free physical frame and update the page table."
            },
            {
                id: "c-s18-q11",
                title: "Small-Object Allocator with Bitmaps",
                description: "Use bitmaps to track slots for fast allocation.",
                statement: "Implement an allocator for small, fixed-size objects. Use a bitmap where each bit corresponds to an object slot. `alloc` involves finding the first zero bit in the bitmap. `free` involves clearing the corresponding bit. This is faster than a linked list for finding a free slot.",
                inputFormat: "Implementation-based.",
                outputFormat: "An efficient small-object allocator.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual alloc
// unsigned long bitmap[...];
//
// alloc():
//   for i in range(num_bitmap_words):
//     if bitmap[i] != ULONG_MAX: // If there is at least one zero bit
//       // Find the index of the first zero bit
//       int bit_index = find_first_zero(bitmap[i]);
//       // Set the bit to 1
//       bitmap[i] |= (1UL << bit_index);
//       // Return pointer to the corresponding object slot
//       return &slots[i * 64 + bit_index];
//   return NULL; // Full`,
                explanation: "A bitmap provides a very compact way to track the status of many items. Finding the first zero bit can be done very quickly with CPU instructions like `ffs` (find first set) on the bitwise NOT of the bitmap word. This makes it an O(1) or very fast operation to find a free slot."
            },
            {
                id: "c-s18-q12",
                title: "Bump-Pointer Allocator",
                description: "Implement a simple linear bump-pointer allocator.",
                statement: "Implement a bump-pointer allocator. It works with a large, contiguous region of memory. It maintains a single pointer to the next available address. Allocation is simply incrementing (bumping) this pointer. It's extremely fast but freeing individual objects is not possible; the entire region must be reset.",
                inputFormat: "Implementation-based.",
                outputFormat: "A very fast but limited allocator.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// char* heap_start;
// char* next_free;
//
// init_allocator(size):
//   heap_start = malloc(size);
//   next_free = heap_start;
//
// alloc(size):
//   // Check alignment
//   ptr = next_free;
//   next_free += size;
//   // Check for out of memory
//   return ptr;
//
// reset():
//   next_free = heap_start;
`,
                explanation: "A bump-pointer allocator is the fastest possible allocator. Each allocation is just a pointer increment. It has zero fragmentation. Its major limitation is that you cannot free individual objects. It's only suitable for use cases where many objects are allocated and then all are freed at once by resetting the entire region."
            },
            {
                id: "c-s18-q13",
                title: "Arena Allocator",
                description: "Implement an arena allocator with destructors support.",
                statement: "Implement an arena (or region-based) allocator. It allocates objects from a large block of memory. When the arena is destroyed, all objects within it are freed at once. Add support for calling destructors for C++-like objects stored in the arena upon destruction.",
                inputFormat: "Implementation-based.",
                outputFormat: "Efficient allocation and bulk deallocation.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Arena Allocator (C++)
// class Arena {
//   private:
//     char* memory_block;
//     // ... other state ...
//     std::vector<void(*) (void*)> destructors;
//
//   public:
//     template<typename T> T* alloc() {
//       // ... bump pointer allocation ...
//       // Register destructor if T has one
//       if (has_destructor<T>()) {
//         destructors.push_back([](void* ptr){ static_cast<T*>(ptr)->~T(); });
//       }
//       return ptr;
//     }
//
//     ~Arena() {
//       for (auto dtor : destructors) { dtor(); }
//       free(memory_block);
//     }
// }`,
                explanation: "An Arena allocator is similar to a bump-pointer allocator. It's designed for bulk allocation and deallocation. To support destructors, the arena needs to maintain a list of pointers to destructor functions for the objects it has allocated. When the arena itself is destroyed, it iterates through this list and calls the destructors before freeing the main memory block."
            },
            {
                id: "c-s18-q14",
                title: "Safe realloc",
                description: "Implement a safe realloc that minimizes copying.",
                statement: "Implement a `realloc`-like function. It should first check if the existing memory block can be expanded in-place (if there is free space immediately after it). Only if it can't be expanded in-place should it allocate a new block and copy the data.",
                inputFormat: "Implementation-based.",
                outputFormat: "An efficient realloc function.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is what the real realloc() tries to do.
// Implementing it requires access to the allocator's internal metadata.

// Conceptual my_realloc(ptr, new_size):
// 1. Get header of 'ptr' to find its current size.
// 2. If new_size <= current_size, return ptr (or maybe shrink).
// 3. Look at the next block in the free list. Is it adjacent to our block
//    and large enough to cover the extra space needed?
// 4. If yes:
//    - Merge the two blocks.
//    - Update the header with the new, larger size.
//    - Return the original pointer.
// 5. If no:
//    - malloc(new_size).
//    - memcpy(new_ptr, ptr, old_size).
//    - free(ptr).
//    - Return new_ptr.
`,
                explanation: "A naive `realloc` always allocates new memory, copies, and frees the old block. An optimized `realloc` can be much faster if it can expand the current allocation in-place. This requires the allocator to know about the layout of memory and what block is physically adjacent to the current one."
            },
            {
                id: "c-s18-q15",
                title: "Allocation Tracing with LD_PRELOAD",
                description: "Hook malloc/free to log stack traces.",
                statement: "This is a duplicate of a problem in this section. See c-s18-q8.",
                inputFormat: "Implementation-based.",
                outputFormat: "A summary of memory allocation hotspots.",
                testCases: [{ input: "", output: "" }],
                solution: "// See solution for c-s18-q8.",
                explanation: "By preloading a shared library with custom `malloc` and `free` implementations, you can intercept all memory allocation calls from an application. Inside your custom functions, you can record information (like allocation size and the call stack obtained via `backtrace()`) before calling the real functions using `dlsym`."
            },
            {
                id: "c-s18-q16",
                title: "Memory-Mapped Slab Store",
                description: "Create a persistent cache using mmap.",
                statement: "Implement a slab allocator where the main memory block is backed by a memory-mapped file instead of the heap. This allows the cache of fixed-size objects to persist across application restarts.",
                inputFormat: "Implementation-based.",
                outputFormat: "A persistent, fast cache.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// 1. On startup, open a file and mmap it into memory.
// 2. The first part of the mapped region is a header containing metadata,
//    e.g., a pointer/offset to the head of the free list.
// 3. The rest of the region is the slab of object slots.
// 4. alloc() and free() operations now manipulate pointers/offsets within
//    this memory-mapped region.
// 5. Use msync() to ensure metadata changes (like the free list head) are
//    persistently written to the file.
`,
                explanation: "This combines a slab allocator with memory-mapped files. The entire state of the allocator, including the free list and the objects themselves, resides in the mapped file. This makes the data structure persistent. When the application restarts, it just needs to `mmap` the same file to instantly restore the allocator's state."
            },
            {
                id: "c-s18-q17",
                title: "Avoid False Sharing",
                description: "Use cache-line padding.",
                statement: "Demonstrate false sharing. Create a struct with two integers. Create two threads, one that only modifies the first integer and one that only modifies the second. Show the performance impact. Then, fix it by adding padding between the integers to place them on separate cache lines.",
                inputFormat: "Implementation-based.",
                outputFormat: "The padded version runs significantly faster.",
                testCases: [{ input: "", output: "" }],
                solution: `// Problematic struct
// struct Counters { long a; long b; };

// Thread 1: for (i=0..N) counters->a++;
// Thread 2: for (i=0..N) counters->b++;

// Fixed struct (assuming 64-byte cache line)
// struct PaddedCounters {
//     long a;
//     char padding[56]; // 64 - sizeof(long)
//     long b;
// };
`,
                explanation: "False sharing is a performance killer. When two variables are on the same cache line, and two different CPU cores try to modify them, the cache coherence protocol forces the cache line to be shuttled back and forth between the cores, even though the threads are modifying independent variables. By adding padding, we ensure the variables are on different cache lines, eliminating this contention."
            },
            {
                id: "c-s18-q18",
                title: "Generational Allocator Simulation",
                description: "Simulate a generational garbage collector.",
                statement: "Simulate a simple two-generation garbage collector. New objects are allocated in a 'young' generation space. When this space is full, a 'minor GC' runs, moving surviving objects to an 'old' generation space. When the old space fills, a 'major GC' (like mark-and-sweep) runs on it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Demonstration of object promotion from young to old space.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual 'minor GC' (Copying Collector)
// 1. Young generation has two spaces: 'from-space' and 'to-space'.
// 2. New objects are allocated in 'from-space'.
// 3. When from-space is full:
//    a. Traverse live objects from roots.
//    b. Copy any live object found in 'from-space' to 'to-space'.
//    c. Update pointers to point to the new location in 'to-space'.
//    d. Any object with a high 'age' is promoted (copied) to the old generation space instead.
// 4. Swap the roles of 'from-space' and 'to-space'.
`,
                explanation: "The generational hypothesis states that most objects die young. A generational GC exploits this by focusing its efforts on the 'young generation', where garbage is most likely to be found. This makes collections very fast on average. Long-lived objects are promoted to an 'old generation' which is collected much less frequently."
            },
            {
                id: "c-s18-q19",
                title: "Custom Aligned Allocation",
                description: "Implement `posix_memalign`-like functionality.",
                statement: "Write a function `aligned_malloc(size, alignment)` that returns a pointer to memory that is aligned to a specified boundary. The alignment must be a power of two.",
                inputFormat: "Implementation-based.",
                outputFormat: "A pointer to aligned memory.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual implementation
// void* aligned_malloc(size_t size, size_t alignment) {
//   // 1. Allocate more memory than needed: size + alignment + sizeof(void*).
//   void* p1 = malloc(size + alignment + sizeof(void*));
//   if (!p1) return NULL;
//
//   // 2. Find the next aligned address inside the block.
//   uintptr_t addr = (uintptr_t)p1 + alignment + sizeof(void*);
//   void* p2 = (void*)(addr - (addr % alignment));
//
//   // 3. Store the original pointer just before the aligned address.
//   *((void**)p2 - 1) = p1;
//
//   return p2;
// }
//
// void aligned_free(void *p2) {
//   // Retrieve the original pointer and free it.
//   void* p1 = *((void**)p2 - 1);
//   free(p1);
// }`,
                explanation: "The trick is to allocate more memory than requested. Within this larger block, we find the first memory address that meets the alignment requirement. We then store a pointer to the *original* `malloc`'d block right before our aligned address so that `aligned_free` can retrieve it and free the entire original block."
            },
            {
                id: "c-s18-q20",
                title: "Tiny malloc",
                description: "Create a tiny malloc and compare performance.",
                statement: "This is a duplicate of problem c-s18-q1.",
                inputFormat: "N/A",
                outputFormat: "N/A",
                testCases: [{ input: "", output: "" }],
                solution: "// See problem c-s18-q1.",
                explanation: "Implementing a custom memory allocator involves managing a heap, keeping track of free blocks, and handling allocation and deallocation requests. Performance can be compared against the standard library's `malloc` by timing a large number of allocation/deallocation cycles."
            },
        ]
    }
];