import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART9: ProblemCategory[] = [
    {
        category: "SECTION 16 — System / Process / IPC",
        problems: [
            {
                id: "c-s16-q1",
                title: "Implement a daemon process",
                description: "create proper fork/setsid, signal handling, and pidfile.",
                statement: "Write a C program that correctly daemonizes itself. This involves forking, creating a new session with setsid(), changing the directory to root, closing standard file descriptors, and writing a PID file.",
                inputFormat: "No input. To be run from the command line.",
                outputFormat: "The process detaches from the terminal and runs in the background, periodically writing to a log file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <signal.h>

void handle_signal(int sig) { /* Clean up and exit */ }

int main() {
    pid_t pid = fork();
    if (pid < 0) exit(EXIT_FAILURE);
    if (pid > 0) exit(EXIT_SUCCESS); // Parent exits

    if (setsid() < 0) exit(EXIT_FAILURE); // Create new session

    signal(SIGTERM, handle_signal); // Handle termination signal
    
    pid = fork(); // Fork again to prevent re-acquiring a terminal
    if (pid < 0) exit(EXIT_FAILURE);
    if (pid > 0) exit(EXIT_SUCCESS);
    
    umask(0);
    chdir("/");

    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);
    
    // Main daemon loop
    while(1) {
        // write to log file...
        sleep(30);
    }
    return 0;
}`,
                explanation: "Daemonization is a multi-step process to detach a program from the controlling terminal. `fork()` creates a child process, the parent exits. `setsid()` creates a new session and process group, making the process a session leader. A second `fork()` ensures the process is not a session leader and cannot acquire a controlling terminal. Finally, file descriptors are closed and the working directory is changed."
            },
            {
                id: "c-s16-q2",
                title: "Producer-Consumer with Shared Memory",
                description: "Use POSIX shared memory and semaphores.",
                statement: "Implement a multi-process producer-consumer system. Use POSIX shared memory (`shm_open`, `mmap`) for a shared buffer and POSIX semaphores (`sem_open`, `sem_wait`, `sem_post`) for synchronization.",
                inputFormat: "Implementation-based.",
                outputFormat: "Producers create items and consumers process them concurrently.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <semaphore.h>
#include <sys/mman.h>
#include <fcntl.h>

// Shared buffer structure
// struct shm_buffer { sem_t empty, full, mutex; ... buffer_array ... };

// Producer
// sem_wait(&shm_buf->empty); // Wait if buffer is full
// sem_wait(&shm_buf->mutex); // Lock
// ... add item to buffer ...
// sem_post(&shm_buf->mutex); // Unlock
// sem_post(&shm_buf->full);  // Signal that buffer is not empty

// Consumer
// sem_wait(&shm_buf->full);  // Wait if buffer is empty
// sem_wait(&shm_buf->mutex); // Lock
// ... remove item from buffer ...
// sem_post(&shm_buf->mutex); // Unlock
// sem_post(&shm_buf->empty); // Signal that buffer is not full
`,
                explanation: "This pattern uses three semaphores: `full` counts filled slots, `empty` counts empty slots, and `mutex` provides mutual exclusion for accessing the buffer. Shared memory is created with `shm_open` and `ftruncate`, then mapped into each process's address space with `mmap`."
            },
            {
                id: "c-s16-q3",
                title: "System V Message Queue",
                description: "Implement IPC using System V message queues.",
                statement: "Write two programs, a sender and a receiver, that communicate using System V message queues (`msgget`, `msgsnd`, `msgrcv`). The sender sends a message with a specific type, and the receiver reads it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Message sent by one process is received by the other.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <sys/msg.h>

// key_t key = ftok("somefile", 65); // Generate a key
// int msgid = msgget(key, 0666 | IPC_CREAT); // Get/create queue

// Sender: msgsnd(msgid, &message_struct, sizeof(message), 0);
// Receiver: msgrcv(msgid, &message_struct, sizeof(message), 1, 0); // Receive msg type 1`,
                explanation: "System V message queues provide a way for processes to exchange messages in a structured way. `msgget` creates or accesses a queue. `msgsnd` sends a message, and `msgrcv` receives a message, optionally filtering by message type."
            },
            {
                id: "c-s16-q4",
                title: "Unix Domain Socket Server",
                description: "Create a client-server IPC using Unix domain sockets.",
                statement: "Implement a client-server application using Unix domain sockets. The server should be able to handle multiple concurrent clients by forking a new process for each connection.",
                inputFormat: "Implementation-based.",
                outputFormat: "Server handles multiple clients simultaneously.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <sys/socket.h>
#include <sys/un.h>

// Server:
// 1. socket(AF_UNIX, SOCK_STREAM, 0)
// 2. struct sockaddr_un addr;
// 3. bind() to a file path
// 4. listen()
// 5. In a loop, accept() new connections
// 6. fork() a child process to handle the connection

// Client:
// 1. socket(AF_UNIX, SOCK_STREAM, 0)
// 2. connect() to the server's file path`,
                explanation: "Unix domain sockets are similar to TCP sockets but communicate through a file on the filesystem instead of a network interface. This is a highly efficient form of Inter-Process Communication (IPC) on the same machine."
            },
            {
                id: "c-s16-q5",
                title: "Simple Shell with Piping",
                description: "Implement a shell with piping and redirection.",
                statement: "Implement a basic command-line shell that can parse commands, handle I/O redirection (`<`, `>`), and pipe the output of one command to the input of another (`|`).",
                inputFormat: "User commands like `ls -l | wc -l`.",
                outputFormat: "The result of the command execution.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution for piping 'cmd1 | cmd2'
#include <unistd.h>

int p[2];
pipe(p);

if (fork() == 0) { // Child 1 for cmd1
    dup2(p[1], STDOUT_FILENO); // Redirect stdout to pipe write end
    close(p[0]);
    execvp(cmd1_args[0], cmd1_args);
}

if (fork() == 0) { // Child 2 for cmd2
    dup2(p[0], STDIN_FILENO); // Redirect stdin to pipe read end
    close(p[1]);
    execvp(cmd2_args[0], cmd2_args);
}

close(p[0]);
close(p[1]);
wait(NULL);
wait(NULL);`,
                explanation: "The key is the `pipe()` system call, which creates a unidirectional data channel. The parent process forks two children. The first child uses `dup2()` to redirect its standard output to the write-end of the pipe. The second child redirects its standard input to the read-end of the pipe. This effectively chains them together."
            },
            {
                id: "c-s16-q6",
                title: "mmap for File Editing",
                description: "Edit a file using memory-mapped I/O.",
                statement: "Use `mmap` to map a file into memory. Modify the content of the file by writing directly to the memory-mapped region. Use `msync` to ensure changes are written to disk.",
                inputFormat: "A file to edit.",
                outputFormat: "The file is modified.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <sys/mman.h>

// 1. Open file with open()
// 2. Get file size with fstat()
// 3. Map file to memory:
//    char *addr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
// 4. Modify memory directly:
//    addr[0] = 'H';
// 5. Flush changes to disk:
//    msync(addr, size, MS_SYNC);
// 6. Unmap memory:
//    munmap(addr, size);`,
                explanation: "`mmap` is a powerful system call that maps a file directly into the process's virtual memory space. Instead of using `read()` and `write()`, you can interact with the file as if it were a large character array. This can be much more efficient for random access and small edits."
            },
            {
                id: "c-s16-q7",
                title: "File Locking with fcntl",
                description: "Use fcntl for advisory file locks.",
                statement: "Write two programs that try to access the same file. Use `fcntl` to acquire an exclusive lock (`F_WRLCK`). Demonstrate that one process must wait for the other to release the lock.",
                inputFormat: "Implementation-based.",
                outputFormat: "Processes access the file sequentially.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <fcntl.h>

// 1. Open the file
// 2. Define a flock struct: struct flock fl;
//    fl.l_type = F_WRLCK; (exclusive write lock)
//    fl.l_whence = SEEK_SET;
//    fl.l_start = 0;
//    fl.l_len = 0; (lock the whole file)
// 3. Acquire the lock (this will block if already locked)
//    fcntl(fd, F_SETLKW, &fl);
// 4. ... do critical section work ...
// 5. Release the lock
//    fl.l_type = F_UNLCK;
//    fcntl(fd, F_SETLK, &fl);`,
                explanation: "`fcntl` provides advisory locking, meaning processes must cooperate to use it. A process can attempt to acquire a read lock (`F_RDLCK`) or an exclusive write lock (`F_WRLCK`). The `F_SETLKW` command will block the process until the lock can be acquired."
            },
            {
                id: "c-s16-q8",
                title: "Journaled Append-Only Log",
                description: "Build a crash-recoverable log.",
                statement: "Implement a simplified journaled log. Writes are first appended to a temporary log file. `fsync` is used to ensure the write is on disk. Then, an atomic `rename` operation is used to make the write permanent. Implement a recovery function that checks for and completes partial writes on startup.",
                inputFormat: "Implementation-based.",
                outputFormat: "A log file that is consistent even after simulated crashes.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual write operation
// 1. Write data to "logfile.tmp"
// 2. Call fsync(fd_tmp) to flush to disk.
// 3. Call rename("logfile.tmp", "logfile.permanent") - this is atomic.

// Recovery on startup:
// 1. Check if "logfile.tmp" exists.
// 2. If it does, it means a crash happened after fsync but before rename.
// 3. Complete the operation by renaming it to "logfile.permanent".`,
                explanation: "This pattern ensures durability. Data is never written directly to the main file. The `fsync` call guarantees that the data is physically on the disk in the temporary file. The `rename` system call is atomic on most filesystems, meaning it either completes fully or not at all. This prevents a state where the main file is partially written."
            },
            {
                id: "c-s16-q9",
                title: "RPC with Pipes and Framing",
                description: "Implement a parent-child RPC using pipes.",
                statement: "Implement a simple Remote Procedure Call (RPC) between a parent and child process using `pipe()`. To handle variable-length messages, implement message framing (e.g., prefixing each message with its length).",
                inputFormat: "Implementation-based.",
                outputFormat: "Parent sends command, child executes and sends back result.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual message framing
// Sender:
// int len = strlen(message);
// write(pipe_fd, &len, sizeof(int)); // Send length prefix
// write(pipe_fd, message, len);     // Send message

// Receiver:
// read(pipe_fd, &len, sizeof(int)); // Read length prefix
// char* buf = malloc(len);
// read(pipe_fd, buf, len);         // Read exactly 'len' bytes`,
                explanation: "Pipes are a stream of bytes. To distinguish where one message ends and the next begins, we need framing. A common method is to prefix each message with a fixed-size header (e.g., 4 bytes) that contains the length of the upcoming message. The receiver reads the header first to know exactly how many more bytes to read for the complete message."
            },
            {
                id: "c-s16-q10",
                title: "Process Supervisor",
                description: "Restart a crashed child with exponential backoff.",
                statement: "Write a supervisor program that launches a child process. The supervisor monitors the child using `waitpid()`. If the child crashes, the supervisor relaunches it, but with an exponentially increasing delay between restarts to prevent rapid-fire crashes.",
                inputFormat: "Implementation-based.",
                outputFormat: "Supervisor logs child crashes and restart attempts with delays.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual supervisor loop
// int delay = 1;
// while(1) {
//     pid_t pid = fork();
//     if (pid == 0) { /* exec child program */ }
//
//     int status;
//     waitpid(pid, &status, 0); // Wait for child to exit
//
//     if (WIFEXITED(status) && WEXITSTATUS(status) == 0) {
//         // Normal exit, maybe stop supervising
//         break;
//     } else {
//         // It crashed
//         printf("Child crashed! Restarting in %d seconds...\\n", delay);
//         sleep(delay);
//         delay *= 2; // Exponential backoff
//     }
// }`,
                explanation: "A supervisor's main job is to ensure a process stays running. The `waitpid` call blocks until the child process changes state (e.g., exits). The macros `WIFEXITED` and `WEXITSTATUS` are used to check if the child exited normally or crashed. On a crash, the supervisor sleeps for an increasing delay before forking and exec-ing the child again."
            },
            {
                id: "c-s16-q11",
                title: "Lock-Free Ring Buffer",
                description: "Implement a shared-memory ring buffer with atomic operations.",
                statement: "Implement a single-producer, single-consumer ring buffer in shared memory. Use C11 atomic operations (`<stdatomic.h>`) for the head and tail pointers to achieve lock-free synchronization.",
                inputFormat: "Implementation-based.",
                outputFormat: "Data is passed between processes without using mutexes or semaphores.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
#include <stdatomic.h>
// struct RingBuffer {
//     _Atomic int head;
//     _Atomic int tail;
//     char buffer[SIZE];
// };

// Producer:
// int current_tail = atomic_load(&rb->tail);
// int next_tail = (current_tail + 1) % SIZE;
// if (next_tail != atomic_load(&rb->head)) {
//     // Not full
//     rb->buffer[current_tail] = data;
//     atomic_store(&rb->tail, next_tail);
// }

// Consumer:
// int current_head = atomic_load(&rb->head);
// if (current_head != atomic_load(&rb->tail)) {
//     // Not empty
//     data = rb->buffer[current_head];
//     atomic_store(&rb->head, (current_head + 1) % SIZE);
// }`,
                explanation: "In a single-producer, single-consumer scenario, only the producer modifies `tail` and only the consumer modifies `head`. Using atomic operations (`atomic_load`, `atomic_store`) ensures that these updates are visible to the other process without needing explicit locks, which can be more efficient."
            },
            {
                id: "c-s16-q12",
                title: "POSIX Message Queue Notification",
                description: "Use SIGEV_THREAD for asynchronous message notification.",
                statement: "Create a program that receives messages from a POSIX message queue (`mq_receive`). Instead of blocking on the receive call, register for asynchronous notification using `mq_notify` with `SIGEV_THREAD`. This will cause a new thread to be created to handle the message when it arrives.",
                inputFormat: "Implementation-based.",
                outputFormat: "A handler thread prints messages as they arrive.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual setup
#include <mqueue.h>
#include <signal.h>

// void handler_thread(union sigval sv) {
//     // Setup mq_notify again
//     // mq_receive the message
// }
//
// mqd_t mqdes = mq_open(...);
// struct sigevent sev;
// sev.sigev_notify = SIGEV_THREAD;
// sev.sigev_notify_function = handler_thread;
// mq_notify(mqdes, &sev);
//
// // Main thread can now do other work`,
                explanation: "`mq_notify` allows a process to be notified when a message arrives on an empty queue. By setting the notification type to `SIGEV_THREAD`, you instruct the kernel to invoke a specific function in a new thread when a message becomes available. This is a powerful pattern for event-driven architectures."
            },
            {
                id: "c-s16-q13",
                title: "Checkpoint/Restore Mechanism",
                description: "Save and restore process state to a file.",
                statement: "Implement a very basic checkpoint/restore system. A signal handler (e.g., for `SIGUSR1`) should trigger the checkpointing function, which saves the values of important global variables to a file. On startup, the program should check if a checkpoint file exists and restore its state from it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Program state is saved and can be restored after a restart.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual solution
// int global_counter = 0;

// void checkpoint() {
//   FILE* f = fopen("checkpoint.dat", "wb");
//   fwrite(&global_counter, sizeof(int), 1, f);
//   fclose(f);
// }
//
// void restore() {
//   FILE* f = fopen("checkpoint.dat", "rb");
//   if (f) {
//     fread(&global_counter, sizeof(int), 1, f);
//     fclose(f);
//   }
// }
//
// int main() {
//   restore();
//   signal(SIGUSR1, checkpoint);
//   // ... main loop ...
// }`,
                explanation: "Checkpointing allows long-running computations to be resumed after a crash. This simple version saves key state variables to a file. A real-world system like CRIU (Checkpoint/Restore In Userspace) is much more complex, as it needs to save the entire process memory, file descriptors, and other kernel state."
            },
            {
                id: "c-s16-q14",
                title: "Distributed Lock with NFS",
                description: "Implement a distributed lock using file locks on NFS.",
                statement: "Write a program that uses `fcntl` to acquire a lock on a file residing on an NFS (Network File System) mount. This acts as a simple distributed mutex. The program should handle stale locks (e.g., by storing the PID in the lock file and checking if that PID is still running).",
                inputFormat: "Implementation-based.",
                outputFormat: "Multiple instances of the program on different machines access a critical section sequentially.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual lock acquisition
// 1. Open a lock file on an NFS share.
// 2. Use fcntl(fd, F_SETLKW, &fl) to acquire an exclusive lock.
//    NFS protocols (v3+) translate this into a network lock request.
// 3. Stale lock handling:
//    a. Before locking, try to read a PID from the file.
//    b. If a PID exists, check if that process is still alive on its host.
//    c. If not, you may be able to 'break' the lock.
// 4. Critical section...
// 5. Release lock with fcntl.`,
                explanation: "NFS supports network file locking, which can be used as a simple (though often slow and tricky) distributed locking mechanism. When a process on one machine locks a file using `fcntl`, the NFS server ensures that processes on other machines cannot acquire a conflicting lock on the same file."
            },
            {
                id: "c-s16-q15",
                title: "List Open File Descriptors",
                description: "List open file descriptors of a process.",
                statement: "Write a C program that takes a PID as an argument and lists the open file descriptors for that process. On Linux, this is done by reading the contents of the `/proc/[PID]/fd/` directory.",
                inputFormat: "A process ID (PID).",
                outputFormat: "A list of open file descriptors and what they point to.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
#include <dirent.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    if (argc < 2) return 1;
    char path[256];
    sprintf(path, "/proc/%s/fd", argv[1]);

    DIR *d = opendir(path);
    if (!d) return 1;
    
    struct dirent *dir;
    while ((dir = readdir(d)) != NULL) {
        if (strcmp(dir->d_name, ".") == 0 || strcmp(dir->d_name, "..") == 0) continue;
        
        char fd_path[512], link_target[512] = {0};
        sprintf(fd_path, "%s/%s", path, dir->d_name);
        readlink(fd_path, link_target, sizeof(link_target) - 1);
        
        printf("FD %s -> %s\\n", dir->d_name, link_target);
    }
    closedir(d);
    return 0;
}`,
                explanation: "On Linux, the `/proc` filesystem provides a window into the kernel's process table. For each running process with PID, the directory `/proc/[PID]/fd/` contains symbolic links for each file descriptor that process has open. The name of the link is the file descriptor number, and the link points to the actual file or socket."
            },
        ]
    }
];