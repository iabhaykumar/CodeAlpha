import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART12: ProblemCategory[] = [
    {
        category: "SECTION 19 — Files / I/O / Performance",
        problems: [
            // Problems 56-75 (20 problems total)
            {
                id: "c-s19-q1",
                title: "High-Performance File Copy",
                description: "Use sendfile and fallback read/write.",
                statement: "Implement a file copy function that uses the `sendfile` system call for zero-copy transfer on Linux. It should fall back to a standard read/write loop if `sendfile` is not available or fails.",
                inputFormat: "Implementation-based.",
                outputFormat: "A file is copied efficiently.",
                testCases: [{ input: "", output: "" }],
                solution: `// Linux-specific conceptual solution
#include <sys/sendfile.h>
// ... other headers ...

// off_t offset = 0;
// sendfile(out_fd, in_fd, &offset, stat_buf.st_size);`,
                explanation: "`sendfile` is a system call that provides a 'zero-copy' way of transferring data from one file descriptor to another. The data is moved directly from the kernel's read buffer to the socket buffer, without being copied into user-space memory, which significantly improves performance for tasks like serving static files from a web server."
            },
            {
                id: "c-s19-q2",
                title: "Async Logger",
                description: "Batch writes to minimize syscalls.",
                statement: "Implement an asynchronous logger. The main application thread should write log messages to an in-memory queue. A separate background thread should be responsible for reading from the queue, batching messages, and writing them to a file in larger chunks to reduce the number of `write` system calls.",
                inputFormat: "Implementation-based.",
                outputFormat: "Logs are written to a file with low latency for the main thread.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// // A thread-safe queue for log messages
// BlockingQueue log_queue;
// // A background writer thread
// pthread_t writer_thread;

// log_message(msg):
//   // This is fast, just adds to a queue in memory
//   queue_put(log_queue, msg);

// writer_thread_func():
//   while(true):
//     // Block until queue has messages
//     batch = get_batch_from_queue(log_queue);
//     // Write the entire batch to the file in one go
//     write_batch_to_file(batch);`,
                explanation: "System calls like `write` are expensive. By batching multiple log messages together and writing them in a single operation, an asynchronous logger minimizes the number of syscalls and reduces I/O overhead. This decouples the application's performance from the disk's write speed."
            },
            {
                id: "c-s19-q3",
                title: "File Tail Utility (tail -f)",
                description: "Handle log rotation.",
                statement: "Implement a utility similar to `tail -f`. It should print the end of a file and then continuously watch for and print new lines as they are appended. The implementation must correctly handle log rotation (when the original file is renamed and a new one is created with the same name).",
                inputFormat: "A filename.",
                outputFormat: "Continuous output of new lines from the file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual logic
// 1. Open the file and seek to the end.
// 2. Get the inode number of the file using stat().
// 3. Loop:
//    a. Read and print any new lines.
//    b. sleep() for a short interval.
//    c. stat() the file path again. If the inode has changed,
//       the file was rotated.
//    d. If rotated, close the old file descriptor, open the new
//       file, and continue from the beginning of the new file.`,
                explanation: "A simple `tail -f` can be implemented by repeatedly seeking to the end and checking the file size. To handle log rotation, you must track the file's inode number. When a log file is rotated, a new file is created with the same name but a different inode. By periodically checking `stat()` on the filename, you can detect this inode change and correctly switch to reading the new file."
            },
            {
                id: "c-s19-q4",
                title: "Optimized Grep (Boyer-Moore)",
                description: "Implement grep with Boyer-Moore for patterns.",
                statement: "Implement a simplified version of `grep` that uses the Boyer-Moore string search algorithm for fast pattern matching. The program should read from a file line by line and print lines that contain the pattern.",
                inputFormat: "A pattern and a filename.",
                outputFormat: "Lines from the file that match the pattern.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual algorithm
// 1. Pre-computation Phase (for the pattern):
//    - Create a 'bad character' table: For each character in the alphabet,
//      store the index of its last occurrence in the pattern.
//    - Create a 'good suffix' table.
// 2. Search Phase:
//    - Align pattern with text.
//    - Compare from RIGHT to LEFT.
//    - On mismatch:
//      - Use the bad character rule and good suffix rule to determine
//        the maximum possible shift forward. This often allows skipping
//        large parts of the text.`,
                explanation: "Boyer-Moore is a highly efficient string searching algorithm. Its key innovation is that it starts matching from the end of the pattern, not the beginning. When a mismatch occurs, it can often make very large jumps forward in the text, making it much faster than naive searching for longer patterns."
            },
            {
                id: "c-s19-q5",
                title: "Buffered File Reader",
                description: "Implement an efficient buffered file reader.",
                statement: "Implement a custom buffered reader from scratch. It should have a function like `read_line` that reads from the file into a large internal buffer and then serves lines from this buffer, only going back to the disk when the buffer is exhausted. This minimizes `read()` syscalls.",
                inputFormat: "Implementation-based.",
                outputFormat: "A function to read lines efficiently.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual design
// struct Buffered Reader {
//   int fd;
//   char buffer[BUFFER_SIZE];
//   int current_pos;
//   int bytes_in_buffer;
// };
//
// read_line(br, user_buf):
//   loop:
//     - Search for '\\n' in br->buffer from current_pos.
//     - If found: copy line to user_buf, update current_pos, return.
//     - If not found:
//       - Copy remaining part of br->buffer to user_buf.
//       - Refill br->buffer from file with read(fd, ...).
//       - If read returns 0 (EOF), break.
//       - Reset current_pos.
`,
                explanation: "The standard library's `FILE*` functions are already buffered. This exercise is about re-implementing that logic. By reading a large block of data (e.g., 4KB) from the disk into a buffer at once, you reduce the number of expensive system calls. Subsequent requests for data are then served directly from this fast in-memory buffer."
            },
            {
                id: "c-s19-q6",
                title: "Streaming CSV Parser",
                description: "Build a memory-efficient CSV parser.",
                statement: "Implement a simple, streaming CSV parser that can handle large files without loading them into memory. It should correctly handle quoted fields that may contain commas or newlines.",
                inputFormat: "Implementation-based.",
                outputFormat: "A function that yields rows one by one.",
                testCases: [{ input: "", output: "" }],
                solution: `// This requires a state machine.
// Conceptual states: IN_FIELD, IN_QUOTED_FIELD, AFTER_QUOTE
//
// loop char by char:
//   switch(state):
//     case IN_FIELD:
//       if char is ',': end of field
//       if char is '"': state = IN_QUOTED_FIELD
//       else: append to field
//     case IN_QUOTED_FIELD:
//       if char is '"': state = AFTER_QUOTE
//       else: append to field
//     case AFTER_QUOTE:
//       if char is '"': it's an escaped quote, append '"'
//       if char is ',': end of field
`,
                explanation: "Parsing CSV correctly is complex due to quoted fields. A state machine is a robust way to handle this. The parser reads character by character, and its behavior depends on its current state (e.g., whether it is inside a quoted field or not). This allows it to process the file in a streaming fashion with minimal memory."
            },
            {
                id: "c-s19-q7",
                title: "Indexed Binary Storage",
                description: "Implement a simple B-tree index on disk.",
                statement: "Implement a basic on-disk indexed storage system. Data records are stored in one file. A separate index file, structured as a simple B-tree, maps keys to byte offsets in the data file. Implement `put` and `get` operations.",
                inputFormat: "Implementation-based.",
                outputFormat: "A persistent key-value store with an index.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a major project, the core of a database.
// Conceptual 'get(key)':
// 1. Start at the root page of the B-tree index file.
// 2. Read the root page into memory.
// 3. Search for the key within the page's keys to find which child pointer to follow.
// 4. If it's an internal node, read the child page from disk and repeat.
// 5. If it's a leaf node, the pointer will be the byte offset in the data file.
// 6. Seek to that offset in the data file and read the record.
`,
                explanation: "A B-tree is a self-balancing tree structure optimized for disk-based storage. It minimizes disk I/O by having a high branching factor (many keys/children per node), making the tree very wide and shallow. This allows finding any record with only a few disk reads."
            },
            {
                id: "c-s19-q8",
                title: "Memory-Map Large Datasets",
                description: "Use mmap to serve range queries.",
                statement: "This is a duplicate of a problem in the System/Process section. See c-s16-q6.",
                inputFormat: "Implementation-based.",
                outputFormat: "The file is modified.",
                testCases: [{ input: "", output: "" }],
                solution: "// See solution for c-s16-q6.",
                explanation: "`mmap` maps a file into the process's virtual address space. This allows the OS to handle loading pages of the file into physical RAM on demand (when you access that memory). It's an extremely efficient way to access large files, as you don't need to manually manage read buffers."
            },
            {
                id: "c-s19-q9",
                title: "I/O Throughput Benchmarker",
                description: "Measure I/O latencies for different block sizes.",
                statement: "Write a benchmarking tool that measures file I/O performance. It should write and read a large file using different block sizes (e.g., 512B, 4KB, 1MB) and report the throughput (MB/s) and average latency for each.",
                inputFormat: "Implementation-based.",
                outputFormat: "A report of I/O performance metrics.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual benchmark loop for a given block size
// start_time = now();
// while (bytes_written < total_size) {
//     write(fd, buffer, block_size);
//     bytes_written += block_size;
// }
// end_time = now();
// throughput = total_size / (end_time - start_time);`,
                explanation: "This tool helps understand how block size affects I/O performance. Small block sizes often lead to more system calls and lower throughput. Larger block sizes can improve throughput but may have higher latency for individual operations. This is important for tuning database and storage system performance."
            },
            {
                id: "c-s19-q10",
                title: "Resumable File Downloader",
                description: "Resume partial downloads.",
                statement: "Implement a file downloader that supports resuming. It should check if a partial file exists, and if so, use the HTTP `Range` header to request the remaining part of the file instead of starting from the beginning.",
                inputFormat: "A URL and an output filename.",
                outputFormat: "A completely downloaded file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual logic
// 1. Check if "output.part" exists.
// 2. If yes, get its size 'current_size'.
// 3. Set HTTP header: "Range: bytes=current_size-"
// 4. Open "output.part" in append mode.
// 5. If no, open "output.part" in write mode.
// 6. Make HTTP GET request.
// 7. Write response body to the file.
// 8. On success, rename "output.part" to "output.final".`,
                explanation: "Resumable downloads rely on the server supporting the `Range` HTTP header. The client checks how much data it has already downloaded and tells the server, 'Please send me the content starting from byte X'. This saves bandwidth and time if a large download is interrupted."
            },
             {
                id: "c-s19-q11",
                title: "Write-Ahead Log (WAL)",
                description: "Implement a WAL and recover from crash.",
                statement: "Implement a simple write-ahead log. Before modifying a data file, the intended change is first written to an append-only log file and flushed to disk. Then the data file is modified. Write a recovery function that reads the WAL on startup to replay any changes that might not have made it to the data file before a crash.",
                inputFormat: "Implementation-based.",
                outputFormat: "A durable data store.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual write operation
// 1. write_to_wal("UPDATE record 5 SET value = 'new'");
// 2. fsync(wal_fd); // CRITICAL: ensure log is on disk
// 3. write_to_data_file("record 5", "new");

// Conceptual recovery on startup
// 1. Read the WAL from the last known checkpoint.
// 2. For each operation in the log, re-apply it to the data file.
// 3. This ensures the data file is consistent with the logged intentions.`,
                explanation: "A WAL is a standard technique for providing atomicity and durability in databases. The log is the source of truth. By writing to the log first, even if the system crashes while updating the main data file, the recovery process can use the log to bring the data file back to a consistent state."
            },
            {
                id: "c-s19-q12",
                title: "Sparse File Inspector",
                description: "Verify holes vs allocated blocks.",
                statement: "Create a sparse file (a file with unallocated 'holes'). Then, write a utility that uses `lseek` with `SEEK_DATA` and `SEEK_HOLE` (on supported filesystems like XFS/ext4) to inspect the file and report the locations of allocated data segments and unallocated holes.",
                inputFormat: "Implementation-based.",
                outputFormat: "A map of the file's data and hole regions.",
                testCases: [{ input: "", output: "" }],
                solution: `// Linux-specific conceptual code
// off_t data_start = 0, hole_start = 0;
// while (true) {
//   data_start = lseek(fd, hole_start, SEEK_HOLE);
//   if (data_start == -1) break;
//   printf("Data from %ld to %ld\\n", hole_start, data_start);
//
//   hole_start = lseek(fd, data_start, SEEK_DATA);
//   if (hole_start == -1) break;
//   printf("Hole from %ld to %ld\\n", data_start, hole_start);
// }`,
                explanation: "Sparse files are useful for things like disk images, where large parts of the file may be empty. `SEEK_HOLE` and `SEEK_DATA` are special `lseek` operations that allow a program to efficiently find the next region of allocated data or the next unallocated hole without having to read the entire file."
            },
            {
                id: "c-s19-q13",
                title: "Fast Endian-Safe Serializer",
                description: "Implement a serializer and test against struct padding.",
                statement: "Write custom serialization functions (`pack`, `unpack`) for a simple struct. The functions should handle endianness explicitly (e.g., by converting all fields to network byte order using `htons`/`htonl`). Compare the size of the serialized data with `sizeof(struct)` to see the effect of struct padding.",
                inputFormat: "Implementation-based.",
                outputFormat: "Endian-safe serialized data.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual pack function
// void pack_struct(uint8_t* buffer, MyStruct* s) {
//   uint32_t val_n = htonl(s->val); // convert to network byte order
//   memcpy(buffer, &val_n, sizeof(val_n));
//   // ... repeat for other fields ...
// }`,
                explanation: "Different computer architectures may store multi-byte integers in different orders (big-endian vs. little-endian). To ensure data can be exchanged between different systems, a standard 'network byte order' (big-endian) is used. Functions like `htonl` (host to network long) convert a 32-bit integer to this standard order. Struct padding can also add extra bytes, which manual serialization can remove."
            },
            {
                id: "c-s19-q14",
                title: "CSV to Binary Converter",
                description: "Convert CSV to a binary format with schema.",
                statement: "Write a program that converts a CSV file into a more efficient binary format. The binary file should start with a header that defines the schema (column names and types). Each subsequent row should be a fixed-size binary record.",
                inputFormat: "A CSV file.",
                outputFormat: "A compact binary file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual flow
// 1. Read CSV header.
// 2. Write a binary file header:
//    - Magic number (to identify file type)
//    - Version number
//    - Number of columns
//    - For each column: name length, name, type enum
// 3. For each row in the CSV:
//    - Parse values.
//    - Convert them to their binary representation (e.g., string to int).
//    - Write the fixed-size binary record to the file.`,
                explanation: "Binary formats are much faster to read and more compact than text-based formats like CSV. A schema in the header makes the file self-describing, so a reader program knows how to interpret the binary data for each row without prior knowledge."
            },
            {
                id: "c-s19-q15",
                title: "File-based Key-Value Store",
                description: "Implement a key-value store with fixed-size records.",
                statement: "Implement a simple key-value store in a single file. Use a hash function to map a key to a fixed byte offset in the file. Handle hash collisions using linear probing (checking the next available slot). Maintain a free-list for deleted records.",
                inputFormat: "Implementation-based.",
                outputFormat: "A simple on-disk hash table.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is an on-disk hash table.
// put(key, value):
//   offset = hash(key) % file_size;
//   // seek to offset
//   // loop (linear probing):
//     // read record at current position
//     // if empty or same key, write new record here and return
//     // else, move to next slot

// get(key):
//   // similar logic, probe until key is found or an empty slot is hit
`,
                explanation: "This implements a simple hash table directly on a file. Hashing provides O(1) average time complexity for lookups by directly calculating the likely position of the data on disk, avoiding a full file scan. Linear probing is a simple collision resolution strategy."
            },
            {
                id: "c-s19-q16",
                title: "Rotating Log Writer",
                description: "Compress old logs in the background.",
                statement: "Implement a logging utility that writes to a log file. When the file reaches a certain size, it should be 'rotated': renamed (e.g., `app.log` -> `app.log.1`) and a new `app.log` is started. The utility should also launch a background thread or process to compress the rotated log files (`app.log.1` -> `app.log.1.gz`).",
                inputFormat: "Implementation-based.",
                outputFormat: "A set of rotated and compressed log files.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual log_write():
// lock();
// check file size.
// if (size > MAX_SIZE) {
//   fclose(current_log);
//   rename("app.log", "app.log.1");
//   // signal background thread to compress "app.log.1"
//   current_log = fopen("app.log", "w");
// }
// fprintf(current_log, ...);
// unlock();`,
                explanation: "Log rotation is essential for managing disk space. By moving old logs to a separate file and compressing them, you can keep extensive historical logs without consuming excessive disk space. Offloading the compression to a background thread ensures that the main application's logging performance is not impacted."
            },
            {
                id: "c-s19-q17",
                title: "Tiny Grep with PCRE",
                description: "Implement grep using `regex.h`.",
                statement: "Implement a simplified version of `grep` that supports basic regular expressions by using the standard POSIX regex library (`regex.h`).",
                inputFormat: "A regex pattern and a filename.",
                outputFormat: "Matching lines from the file.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <regex.h>
// regex_t regex;
// regcomp(&regex, pattern, 0);
// while (getline(...) != -1) {
//   if (regexec(&regex, line, 0, NULL, 0) == 0) {
//     // Match found
//     printf("%s", line);
//   }
// }
// regfree(&regex);`,
                explanation: "The POSIX regex library involves three main steps: 1. `regcomp()` compiles the string pattern into an internal regex structure. 2. `regexec()` executes the compiled regex against a string to check for a match. 3. `regfree()` releases the memory used by the compiled regex."
            },
            {
                id: "c-s19-q18",
                title: "File Deduplication Tool",
                description: "Use chunking and SHA-256 to find duplicates.",
                statement: "Write an efficient tool to find duplicate files in a directory. It should first identify files of the same size, then compare a small hash of the first few KB, and only if those match, compute and compare the full file hash to avoid reading large files unnecessarily.",
                inputFormat: "A directory path.",
                outputFormat: "A list of groups of duplicate file paths.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual stages:
// 1. First pass: Group all files by size into a hash map.
//    Map<long, List<File>>
// 2. For each group with more than one file:
//    - Create a new hash map.
//    - For each file in the group, read and hash the first 4KB.
//    - Group the files by this partial hash.
// 3. For each sub-group with more than one file:
//    - Now do a full SHA-256 hash of the entire file.
//    - Any files with the same full hash are duplicates.`,
                explanation: "This multi-stage approach is an optimization to avoid the expensive operation of reading and hashing large files. Grouping by file size is a very fast initial filter. Hashing a small, initial chunk is the next fastest filter. Only the very few files that match in both size and initial hash need to have their full contents read and hashed for final confirmation."
            },
            {
                id: "c-s19-q19",
                title: "Direct I/O File Writer",
                description: "Use O_DIRECT with aligned buffers.",
                statement: "Write a program that writes to a file using Direct I/O (`O_DIRECT` flag), bypassing the OS page cache. This requires the memory buffer and file offsets to be aligned to the filesystem's block size. Use `posix_memalign` to create an aligned buffer.",
                inputFormat: "Implementation-based.",
                outputFormat: "Data is written directly to disk.",
                testCases: [{ input: "", output: "" }],
                solution: `// Linux-specific conceptual code
// #define _GNU_SOURCE
// #include <fcntl.h>
//
// char *buf;
// posix_memalign((void**)&buf, 512, 4096); // 512-byte alignment, 4KB size
//
// int fd = open("test.txt", O_WRONLY | O_CREAT | O_DIRECT, 0644);
//
// write(fd, buf, 4096);
// free(buf);
`,
                explanation: "Direct I/O gives an application more control over caching but is much more complex to use. It's used in high-performance applications like databases that implement their own caching logic. The key requirements are that the buffer in memory, the size of the write, and the file offset must all be multiples of the filesystem's block size."
            },
            {
                id: "c-s19-q20",
                title: "Fast Binary Diff (Delta)",
                description: "Implement a simple rsync-like binary diff algorithm.",
                statement: "Implement a simplified version of a delta algorithm (like rsync). Given a 'basis' file and a 'new' file, it should produce a small delta file. The delta file should contain instructions like 'copy X bytes from basis file at offset Y' and 'insert these new bytes'.",
                inputFormat: "Implementation-based.",
                outputFormat: "A small delta/patch file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual rsync algorithm
// 1. New File Sender:
//    - Divide the new file into fixed-size blocks.
//    - For each block, calculate a weak (rolling) and strong hash.
//    - Send these hashes to the receiver.
// 2. Basis File Receiver:
//    - Does the same for its basis file, creating a hash map.
//    - Compares the received hashes with its map.
//    - Tells the sender: "I have blocks 1, 2, 5. I need the raw data for blocks 3, 4."
// 3. Sender sends only the raw data for the missing blocks.
`,
                explanation: "Rsync's algorithm is designed to be efficient over a network. It avoids sending data that the receiver already has. The use of a fast rolling checksum allows the receiver to efficiently find matching blocks in its local file, even if they have been moved to a different offset."
            },
        ]
    }
];