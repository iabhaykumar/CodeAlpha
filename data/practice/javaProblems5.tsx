import React from 'react';
import { ProblemCategory } from './types';

export const JAVA_PROBLEMS_PART5: ProblemCategory[] = [
    {
        category: "SECTION 9 — ADVANCED / MIXED (Part 1)",
        problems: [
            {
                id: "java-s9-q1",
                title: "Thread-Safe LRU Cache",
                description: "Implement a thread-safe LRU cache using LinkedHashMap.",
                statement: "Implement a thread-safe LRU (Least Recently Used) cache. It must support a maximum size. When the cache is full and a new item is added, the least recently used item should be evicted. All `get` and `put` operations must be thread-safe.",
                inputFormat: "Class implementation. Test via method calls.",
                outputFormat: "The class should correctly retrieve and evict items under concurrent access.",
                testCases: [{ input: "Cache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);", output: "get(1)->1, get(2)->-1 (evicted)" }],
                solution: `import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;

    public LRUCache(int capacity) {
        // accessOrder = true is crucial for LRU behavior
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }

    // To make it thread-safe, we can wrap it or synchronize methods.
    // For simplicity, let's show synchronized method access.
    public synchronized V getCache(K key) {
        return super.get(key);
    }

    public synchronized void putCache(K key, V value) {
        super.put(key, value);
    }

    public static void main(String[] args) {
        LRUCache<Integer, Integer> cache = new LRUCache<>(2);
        cache.putCache(1, 1);
        cache.putCache(2, 2);
        System.out.println(cache.getCache(1));    // returns 1
        cache.putCache(3, 3);                      // evicts key 2
        System.out.println(cache.getCache(2));    // returns null
    }
}`,
                explanation: "`LinkedHashMap` is perfect for LRU caches. By calling the super constructor with `accessOrder = true`, it maintains order based on access, not insertion. Overriding `removeEldestEntry` allows the map to automatically remove the least recently accessed item when it exceeds its capacity. The `synchronized` keyword is added to `get` and `put` methods to ensure only one thread can modify the map at a time, providing simple thread safety."
            },
            {
                id: "java-s9-q2",
                title: "Concurrent Producer-Consumer",
                description: "Build a producer-consumer system using BlockingQueue.",
                statement: "Implement the producer-consumer pattern using `java.util.concurrent.BlockingQueue`. Create multiple producer threads that add items to the queue and multiple consumer threads that remove items from it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Console output showing items being produced and consumed by different threads.",
                testCases: [{ input: "", output: "Producer produces item. Consumer consumes item." }],
                solution: `import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ProducerConsumer {
    public static void main(String[] args) {
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Producer task
        Runnable producer = () -> {
            try {
                for (int i = 0; i < 20; i++) {
                    queue.put(i);
                    System.out.println(Thread.currentThread().getName() + " Produced: " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        // Consumer task
        Runnable consumer = () -> {
            try {
                while (true) {
                    Integer item = queue.take();
                    System.out.println(Thread.currentThread().getName() + " Consumed: " + item);
                    Thread.sleep(500);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        executor.submit(producer);
        executor.submit(producer);
        executor.submit(consumer);
        executor.submit(consumer);
        
        // In a real app, you'd manage shutdown.
        // executor.shutdown();
    }
}`,
                explanation: "`BlockingQueue` is a thread-safe queue. The `put()` method blocks if the queue is full, and the `take()` method blocks if the queue is empty. This automatically handles all the complex synchronization between producer and consumer threads. An `ExecutorService` is used to manage a pool of threads for running the tasks."
            },
            {
                id: "java-s9-q3",
                title: "Lock-Free Stack",
                description: "Implement a lock-free stack using AtomicReference.",
                statement: "Implement a simple lock-free stack using `java.util.concurrent.atomic.AtomicReference`. The stack should support `push` and `pop` operations that are non-blocking and thread-safe.",
                inputFormat: "Implementation-based.",
                outputFormat: "A stack that works correctly under concurrent access without using locks.",
                testCases: [{ input: "", output: "Concurrent pushes and pops succeed without data corruption." }],
                solution: `import java.util.concurrent.atomic.AtomicReference;

public class LockFreeStack<T> {
    private final AtomicReference<Node<T>> top = new AtomicReference<>(null);

    public void push(T item) {
        Node<T> newHead = new Node<>(item);
        Node<T> oldHead;
        do {
            oldHead = top.get();
            newHead.next = oldHead;
        } while (!top.compareAndSet(oldHead, newHead)); // Atomic operation
    }

    public T pop() {
        Node<T> oldHead;
        Node<T> newHead;
        do {
            oldHead = top.get();
            if (oldHead == null) {
                return null;
            }
            newHead = oldHead.next;
        } while (!top.compareAndSet(oldHead, newHead)); // Atomic operation
        return oldHead.item;
    }

    private static class Node<T> {
        final T item;
        Node<T> next;
        Node(T item) { this.item = item; }
    }
}`,
                explanation: "This implementation avoids locks by using `AtomicReference` and its `compareAndSet` (CAS) operation. CAS is an atomic instruction that compares the current value with an expected value, and if they are equal, updates it to a new value. Both `push` and `pop` operate in a loop: they read the current top of the stack, prepare the new state, and then try to atomically update the `top` reference. If another thread changed the `top` in the meantime, the CAS operation fails, and the loop retries."
            },
            {
                id: "java-s9-q4",
                title: "Thread Pool from Scratch",
                description: "Create a fixed-size thread pool from scratch.",
                statement: "Implement a basic fixed-size thread pool from scratch. It should have a queue to hold tasks and a fixed number of worker threads that continuously pull tasks from the queue and execute them. It must also support a graceful shutdown.",
                inputFormat: "Implementation-based.",
                outputFormat: "Tasks are executed by a pool of reusable threads.",
                testCases: [{ input: "", output: "Tasks submitted to the pool are executed concurrently." }],
                solution: `import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class MyThreadPool {
    private final BlockingQueue<Runnable> taskQueue;
    private final WorkerThread[] workers;
    private volatile boolean isShutdown = false;

    public MyThreadPool(int numThreads) {
        taskQueue = new LinkedBlockingQueue<>();
        workers = new WorkerThread[numThreads];
        for (int i = 0; i < numThreads; i++) {
            workers[i] = new WorkerThread();
            workers[i].start();
        }
    }

    public void execute(Runnable task) {
        if (!isShutdown) {
            try {
                taskQueue.put(task);
            } catch (InterruptedException e) { /* ... */ }
        }
    }

    public void shutdown() {
        isShutdown = true;
        for (WorkerThread worker : workers) {
            worker.interrupt(); // Interrupt blocked take() calls
        }
    }

    private class WorkerThread extends Thread {
        public void run() {
            while (!isShutdown) {
                try {
                    Runnable task = taskQueue.take();
                    task.run();
                } catch (InterruptedException e) {
                    // Allow thread to exit on shutdown
                }
            }
        }
    }
}`,
                explanation: "The core components are a `BlockingQueue` to hold `Runnable` tasks and an array of custom `WorkerThread`s. Each worker thread runs an infinite loop, continuously trying to `take()` a task from the queue. `take()` blocks until a task is available. The `execute` method simply `put()`s a new task onto the queue. The `shutdown` method sets a flag and interrupts the worker threads to unblock them from `take()` so they can terminate."
            },
            {
                id: "java-s9-q5",
                title: "Read-Write Lock",
                description: "Use ReentrantReadWriteLock to allow concurrent reads.",
                statement: "Implement a data structure (e.g., a map) that is protected by a `ReentrantReadWriteLock`. Demonstrate that multiple reader threads can access the data simultaneously, but a writer thread will have exclusive access.",
                inputFormat: "Implementation-based.",
                outputFormat: "Console output showing concurrent reads and exclusive writes.",
                testCases: [{ input: "", output: "Multiple readers can enter the critical section at once." }],
                solution: `import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReadWriteLockExample {
    private final Map<String, String> map = new HashMap<>();
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

    public void put(String key, String value) {
        lock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " acquired write lock.");
            map.put(key, value);
            Thread.sleep(500);
        } catch(InterruptedException e) {
            // handle
        } finally {
            System.out.println(Thread.currentThread().getName() + " released write lock.");
            lock.writeLock().unlock();
        }
    }

    public String get(String key) {
        lock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + " acquired read lock.");
            Thread.sleep(500);

            return map.get(key);
        } catch(InterruptedException e) {
            return null;
        } finally {
            System.out.println(Thread.currentThread().getName() + " released read lock.");
            lock.readLock().unlock();
        }
    }
}`,
                explanation: "`ReentrantReadWriteLock` maintains a pair of associated locks, one for read-only operations and one for writing. The read lock may be held simultaneously by multiple reader threads, so long as there are no writers. The write lock is exclusive. This provides a significant performance improvement over a simple `synchronized` block in read-heavy scenarios."
            },
            {
                id: "java-s9-q6",
                title: "Custom ClassLoader",
                description: "Create a ClassLoader that loads classes from a ZIP file.",
                statement: "Implement a custom `ClassLoader`. This ClassLoader should be able to load class files from a specified ZIP or JAR file. It needs to override the `findClass` method to read the bytecode from the archive and define the class.",
                inputFormat: "Implementation-based.",
                outputFormat: "A class loaded from a ZIP file is successfully instantiated and used.",
                testCases: [{ input: "", output: "Class from ZIP loaded and executed." }],
                solution: `import java.net.URL;
import java.net.URLClassLoader;
import java.util.zip.ZipFile;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;

public class ZipClassLoader extends ClassLoader {
    private final ZipFile zipFile;

    public ZipClassLoader(String zipFileName) throws java.io.IOException {
        this.zipFile = new ZipFile(zipFileName);
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // Convert package name to path, e.g., com.example.MyClass -> com/example/MyClass.class
        String path = name.replace('.', '/') + ".class";
        var entry = zipFile.getEntry(path);
        
        if (entry == null) {
            throw new ClassNotFoundException(name);
        }

        try (InputStream is = zipFile.getInputStream(entry)) {
            ByteArrayOutputStream buffer = new ByteArrayOutputStream();
            int nRead;
            byte[] data = new byte[1024];
            while ((nRead = is.read(data, 0, data.length)) != -1) {
                buffer.write(data, 0, nRead);
            }
            byte[] classBytes = buffer.toByteArray();
            return defineClass(name, classBytes, 0, classBytes.length);
        } catch (java.io.IOException e) {
            throw new ClassNotFoundException(name, e);
        }
    }
}`,
                explanation: "A custom `ClassLoader` allows you to control how and where Java finds class bytecode. By extending `ClassLoader`, you can override the `findClass` method. Our implementation takes a ZIP file path. When asked to find a class, it constructs the expected path within the ZIP archive (e.g., `com/example/MyClass.class`), reads the bytecode for that entry, and then uses the `defineClass` method to turn that bytecode into a usable `Class` object in the JVM."
            },
            {
                id: "java-s9-q7",
                title: "In-Memory Key-Value Store with TTL",
                description: "Build an in-memory key-value store with Time-To-Live (TTL) functionality.",
                statement: "Create a thread-safe in-memory key-value store. Each entry should have a Time-To-Live (TTL). When an entry is accessed, if its TTL has expired, it should be removed and not returned. There should also be a background cleanup thread to periodically purge expired entries.",
                inputFormat: "Class implementation.",
                outputFormat: "A key-value store that automatically expires entries.",
                testCases: [{ input: "put('key', 'val', 1sec); sleep(2sec); get('key')", output: "null" }],
                solution: `import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.DelayQueue;
import java.util.concurrent.Delayed;
import java.util.concurrent.TimeUnit;

public class TtlCache<K, V> {
    private final ConcurrentHashMap<K, V> cache = new ConcurrentHashMap<>();
    private final DelayQueue<DelayedKey<K>> expiryQueue = new DelayQueue<>();

    public TtlCache() {
        Thread cleanupThread = new Thread(this::cleanup);
        cleanupThread.setDaemon(true);
        cleanupThread.start();
    }

    public void put(K key, V value, long ttl, TimeUnit unit) {
        cache.put(key, value);
        long expiryTime = System.currentTimeMillis() + unit.toMillis(ttl);
        expiryQueue.put(new DelayedKey<>(key, expiryTime));
    }

    public V get(K key) {
        // Note: This simple get doesn't check TTL. A full impl would.
        return cache.get(key);
    }
    
    private void cleanup() {
        while (true) {
            try {
                DelayedKey<K> expiredKey = expiryQueue.take();
                cache.remove(expiredKey.getKey());
                System.out.println("Expired and removed: " + expiredKey.getKey());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }

    private static class DelayedKey<K> implements Delayed {
        private final K key;
        private final long expiryTime;
        // ... constructor and compareTo, getDelay implementations ...
        public K getKey() { return key; }
        // ...
    }
}`,
                explanation: "This implementation uses a `ConcurrentHashMap` for thread-safe storage and a `DelayQueue` for efficient expiration handling. `DelayQueue` is a specialized `BlockingQueue` that only allows elements to be `take()`n when their delay has expired. When we `put` an item, we also add a key object with its expiration time to the queue. A single background thread continuously calls `take()` on the queue, which blocks until an item expires. Once an item is taken, its key is removed from the cache."
            },
            {
                id: "java-s9-q8",
                title: "Memory-Efficient Trie",
                description: "Implement a trie for storing millions of strings and support prefix search.",
                statement: "Implement a Trie (Prefix Tree) data structure. It should be memory-efficient and support `insert`, `search` (for a full word), and `startsWith` (for a prefix) methods.",
                inputFormat: "Class implementation.",
                outputFormat: "A data structure for efficient prefix searching.",
                testCases: [{ input: "insert('apple'); insert('apply'); startsWith('app')", output: "true" }],
                solution: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
}

public class Trie {
    private final TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }

    private TrieNode searchPrefix(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        return current;
    }
}`,
                explanation: "A Trie is a tree-like data structure where each node represents a character. Each node can have up to 26 children (for lowercase English letters). Words are stored by traversing the tree. For example, to insert 'cat', you traverse from the root to 'c', then to 'a', then to 't', marking the final 't' node as an end-of-word. This structure is very efficient for prefix searches because all words with the same prefix share the same path from the root."
            },
            {
                id: "java-s9-q9",
                title: "Top K Frequent Elements",
                description: "Find the top K frequent elements from a large stream.",
                statement: "Given a stream of elements, find the top K most frequent elements. The solution must be efficient and not require storing all elements in memory at once.",
                inputFormat: "A stream of elements and an integer K.",
                outputFormat: "The K most frequent elements.",
                testCases: [{ input: "[1,1,1,2,2,3], k=2", output: "[1, 2]" }],
                solution: `import java.util.*;

public class TopKFrequent {
    public List<Integer> findTopK(int[] nums, int k) {
        // 1. Count frequencies
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int n : nums) {
            freqMap.put(n, freqMap.getOrDefault(n, 0) + 1);
        }

        // 2. Use a min-heap of size k
        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> freqMap.get(n1) - freqMap.get(n2));

        for (int n : freqMap.keySet()) {
            heap.add(n);
            if (heap.size() > k) {
                heap.poll(); // Remove the element with the lowest frequency
            }
        }

        // 3. The heap now contains the top k elements
        List<Integer> topK = new LinkedList<>();
        while (!heap.isEmpty()) {
            topK.add(heap.poll());
        }
        Collections.reverse(topK);
        return topK;
    }
}`,
                explanation: "This is a classic problem often solved with a combination of a HashMap and a Min-Heap. First, we count the frequency of all elements and store them in a HashMap. Then, we iterate through the unique elements. For each element, we add it to a Min-Heap of size K. The heap is ordered by frequency. If the heap size exceeds K, we remove the smallest element (the one with the lowest frequency). At the end, the heap contains the K elements with the highest frequencies."
            },
            {
                id: "java-s9-q10",
                title: "Custom CompletableFuture Wrapper",
                description: "Convert a callback-based API to a CompletableFuture-based API.",
                statement: "Imagine you have an old, callback-based asynchronous API, e.g., `void doWork(Callback<T> callback)`. Write a wrapper function that converts this into a modern API returning a `CompletableFuture<T>`.",
                inputFormat: "Implementation-based.",
                outputFormat: "A function that returns a CompletableFuture.",
                testCases: [{ input: "", output: "The CompletableFuture completes when the callback is called." }],
                solution: `import java.util.concurrent.CompletableFuture;

// Represents the old API
interface Callback<T> {
    void onComplete(T result);
    void onError(Exception e);
}

public class LegacyApiWrapper {
    // The old async method we need to wrap
    public void oldAsyncMethod(Callback<String> callback) {
        new Thread(() -> {
            try {
                Thread.sleep(1000);
                callback.onComplete("Work Done");
            } catch (InterruptedException e) {
                callback.onError(e);
            }
        }).start();
    }

    // The new wrapper method
    public CompletableFuture<String> newAsyncMethod() {
        CompletableFuture<String> future = new CompletableFuture<>();
        
        oldAsyncMethod(new Callback<>() {
            @Override
            public void onComplete(String result) {
                future.complete(result);
            }

            @Override
            public void onError(Exception e) {
                future.completeExceptionally(e);
            }
        });
        
        return future;
    }
}`,
                explanation: "`CompletableFuture` is a powerful tool for modern asynchronous programming in Java. To wrap a callback API, we create a new `CompletableFuture` instance. We then call the old API, providing a custom callback implementation. Inside our `onComplete` implementation, we call `future.complete(result)`, and inside `onError`, we call `future.completeExceptionally(e)`. This bridges the old and new patterns, allowing the caller to use modern async patterns like `.thenApply()` and `.exceptionally()`."
            },
            {
                id: "java-s9-q11",
                title: "Event-Driven NIO Server",
                description: "Implement a non-blocking IO server using nio.channels.Selector.",
                statement: "Build a simple, single-threaded, event-driven echo server using the `java.nio` package. It should be able to handle multiple concurrent clients without creating a thread per client, using a `Selector` to monitor sockets for I/O readiness.",
                inputFormat: "Implementation-based.",
                outputFormat: "A server that echoes back any message from any client.",
                testCases: [{ input: "", output: "Multiple clients can connect and receive echoes concurrently." }],
                solution: `import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Iterator;

public class NioEchoServer {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();
        ServerSocketChannel serverSocket = ServerSocketChannel.open();
        serverSocket.bind(new InetSocketAddress("localhost", 5454));
        serverSocket.configureBlocking(false);
        serverSocket.register(selector, SelectionKey.OP_ACCEPT);
        ByteBuffer buffer = ByteBuffer.allocate(256);

        while (true) {
            selector.select(); // Blocks until an event happens
            Iterator<SelectionKey> keys = selector.selectedKeys().iterator();
            while (keys.hasNext()) {
                SelectionKey key = keys.next();
                if (key.isAcceptable()) {
                    // New connection
                    SocketChannel client = serverSocket.accept();
                    client.configureBlocking(false);
                    client.register(selector, SelectionKey.OP_READ);
                }
                if (key.isReadable()) {
                    // Data from existing connection
                    SocketChannel client = (SocketChannel) key.channel();
                    client.read(buffer);
                    buffer.flip();
                    client.write(buffer);
                    buffer.clear();
                }
                keys.remove();
            }
        }
    }
}`,
                explanation: "Java NIO (New I/O) provides a non-blocking I/O model. The core component is the `Selector`, which acts like a notification manager. We register channels (like `ServerSocketChannel` for accepting connections and `SocketChannel` for client communication) with the selector, telling it which events we're interested in (`OP_ACCEPT`, `OP_READ`). The `selector.select()` call blocks until one of the registered channels is ready. We can then handle all ready channels in a single thread, allowing for high concurrency."
            },
            {
                id: "java-s9-q12",
                title: "File Watcher with Debounce",
                description: "Use WatchService to monitor a directory and debounce rapid events.",
                statement: "Create a file watcher using `java.nio.file.WatchService` that monitors a directory for changes. If a file is modified many times in quick succession, the program should 'debounce' these events and only report the change once after a short period of inactivity.",
                inputFormat: "Implementation-based.",
                outputFormat: "Consolidated file system event notifications.",
                testCases: [{ input: "Save a file 3 times quickly", output: "File modified: ... (once)" }],
                solution: `import java.nio.file.*;
import java.util.concurrent.*;

public class DebouncedFileWatcher {
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    private final ConcurrentHashMap<Path, ScheduledFuture<?>> scheduledTasks = new ConcurrentHashMap<>();

    public void watch(Path path) throws Exception {
        WatchService watchService = FileSystems.getDefault().newWatchService();
        path.register(watchService, StandardWatchEventKinds.ENTRY_MODIFY);

        new Thread(() -> {
            WatchKey key;
            try {
                while ((key = watchService.take()) != null) {
                    for (WatchEvent<?> event : key.pollEvents()) {
                        Path changedFile = (Path) event.context();
                        debounce(path.resolve(changedFile));
                    }
                    key.reset();
                }
            } catch (InterruptedException e) { /* handle */ }
        }).start();
    }

    private void debounce(Path filePath) {
        ScheduledFuture<?> existingTask = scheduledTasks.get(filePath);
        if (existingTask != null) {
            existingTask.cancel(false);
        }
        
        ScheduledFuture<?> newTask = scheduler.schedule(() -> {
            System.out.println("File changed (debounced): " + filePath);
            scheduledTasks.remove(filePath);
        }, 500, TimeUnit.MILLISECONDS); // 500ms delay

        scheduledTasks.put(filePath, newTask);
    }
}`,
                explanation: "The `WatchService` API provides a mechanism to watch for file system changes. To debounce, we don't act on an event immediately. Instead, we use a `ScheduledExecutorService` to schedule the action (e.g., printing a message) to run after a delay. We store a reference to this scheduled task in a map. If another event for the same file arrives before the delay is over, we cancel the previously scheduled task and schedule a new one. This ensures only the last event in a rapid burst triggers the action."
            },
            {
                id: "java-s9-q13",
                title: "Simplified ConcurrentHashMap",
                description: "Implement a map with lock striping.",
                statement: "Implement a simplified version of a hash map that uses lock striping for better concurrency. Instead of one big lock for the whole map, use an array of smaller locks, where each lock protects a segment (a subset of hash buckets).",
                inputFormat: "Class implementation.",
                outputFormat: "A map that allows concurrent writes to different segments.",
                testCases: [{ input: "", output: "Concurrent writes by different threads succeed without blocking each other." }],
                solution: `import java.util.concurrent.locks.ReentrantLock;

public class SegmentedMap<K, V> {
    private static final int SEGMENT_COUNT = 16;
    private final ReentrantLock[] locks = new ReentrantLock[SEGMENT_COUNT];
    // In a real impl, this would be an array of hashmaps or linked lists
    private final Object[] segments = new Object[SEGMENT_COUNT];

    public SegmentedMap() {
        for (int i = 0; i < SEGMENT_COUNT; i++) {
            locks[i] = new ReentrantLock();
            segments[i] = new java.util.HashMap<K,V>();
        }
    }

    private int getSegmentIndex(K key) {
        // Use hash code to determine which segment/lock to use
        return Math.abs(key.hashCode() % SEGMENT_COUNT);
    }

    public void put(K key, V value) {
        int index = getSegmentIndex(key);
        locks[index].lock();
        try {
            @SuppressWarnings("unchecked")
            java.util.Map<K, V> segment = (java.util.Map<K, V>) segments[index];
            segment.put(key, value);
        } finally {
            locks[index].unlock();
        }
    }
}`,
                explanation: "Lock striping is a technique to improve concurrency. Instead of a single lock guarding the entire data structure, we have multiple locks, each guarding a portion ('segment') of it. When a thread needs to access a key, it calculates the key's hash to determine which segment it belongs to and only acquires the lock for that specific segment. This allows other threads to simultaneously access keys that map to different segments, significantly improving write throughput."
            },
            {
                id: "java-s9-q14",
                title: "Simple HTTP Server (Chunked)",
                description: "Build an HTTP server that supports chunked transfer encoding.",
                statement: "Build a minimal HTTP/1.1 server from scratch using sockets. It should be able to send responses using `Transfer-Encoding: chunked` for streaming data where the total content length is not known in advance.",
                inputFormat: "Implementation-based.",
                outputFormat: "A server that streams a response to a browser.",
                testCases: [{ input: "", output: "Browser receives and displays the streamed content correctly." }],
                solution: `import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ChunkedServer {
    public static void main(String[] args) throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            while (true) {
                try (Socket client = serverSocket.accept()) {
                    OutputStream out = client.getOutputStream();
                    
                    // Send headers
                    out.write("HTTP/1.1 200 OK\\r\\n".getBytes());
                    out.write("Content-Type: text/plain\\r\\n".getBytes());
                    out.write("Transfer-Encoding: chunked\\r\\n".getBytes());
                    out.write("\\r\\n".getBytes()); // End of headers
                    
                    // Send chunk 1
                    String chunk1 = "Hello ";
                    out.write((Integer.toHexString(chunk1.length()) + "\\r\\n").getBytes());
                    out.write(chunk1.getBytes());
                    out.write("\\r\\n".getBytes());
                    
                    Thread.sleep(1000); // Simulate work

                    // Send chunk 2
                    String chunk2 = "World!";
                    out.write((Integer.toHexString(chunk2.length()) + "\\r\\n").getBytes());
                    out.write(chunk2.getBytes());
                    out.write("\\r\\n".getBytes());
                    
                    // Send final zero-length chunk
                    out.write("0\\r\\n\\r\\n".getBytes());
                    out.flush();
                }
            }
        }
    }
}`,
                explanation: "`Transfer-Encoding: chunked` is an HTTP/1.1 feature for streaming. The server sends the data in a series of 'chunks'. Each chunk is prefixed with its size in hexadecimal, followed by a newline, and then the chunk data itself. The stream is terminated by sending a final chunk of size 0 followed by two newlines. This allows the server to start sending a response before it knows the total size of the content."
            },
            {
                id: "java-s9-q15",
                title: "Token Bucket Rate Limiter",
                description: "Implement the token bucket algorithm for rate limiting.",
                statement: "Implement a thread-safe rate limiter using the Token Bucket algorithm. The bucket should have a fixed capacity and be refilled with tokens at a constant rate. A request can proceed only if it can take a token from the bucket.",
                inputFormat: "Class implementation.",
                outputFormat: "A `tryAcquire()` method that returns true or false.",
                testCases: [{ input: "Try to acquire 10 tokens from a bucket of size 5", output: "First 5 succeed, next 5 fail." }],
                solution: `public class TokenBucketRateLimiter {
    private final long capacity;
    private final double refillRate; // tokens per second
    private double currentTokens;
    private long lastRefillTimestamp;

    public TokenBucketRateLimiter(long capacity, double refillRate) {
        this.capacity = capacity;
        this.refillRate = refillRate;
        this.currentTokens = capacity;
        this.lastRefillTimestamp = System.nanoTime();
    }

    public synchronized boolean tryAcquire() {
        refill();
        if (currentTokens >= 1) {
            currentTokens--;
            return true;
        }
        return false;
    }

    private void refill() {
        long now = System.nanoTime();
        double elapsedSeconds = (now - lastRefillTimestamp) / 1.0e9;
        double tokensToAdd = elapsedSeconds * refillRate;
        currentTokens = Math.min(capacity, currentTokens + tokensToAdd);
        lastRefillTimestamp = now;
    }
}`,
                explanation: "The Token Bucket algorithm manages a bucket of tokens. The bucket is refilled at a fixed rate. When a request arrives, it tries to take a token. If a token is available, the request is allowed. If not, it's denied. Our `tryAcquire` method is `synchronized` for thread safety. It first calls `refill` to add tokens based on the time elapsed since the last refill, and then checks if a token is available to be consumed."
            },
            {
                id: "java-s9-q16",
                title: "Lock Ordering Deadlock Detection",
                description: "Detect deadlocks caused by inconsistent lock ordering.",
                statement: "Create a program that intentionally causes a deadlock between two threads by having them acquire two locks in opposite orders. Then, modify it to detect such deadlocks (conceptually) or prevent them by enforcing a strict lock acquisition order.",
                inputFormat: "Implementation-based.",
                outputFormat: "The program deadlocks.",
                testCases: [{ input: "", output: "Program hangs indefinitely." }],
                solution: `public class DeadlockExample {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock 1...");
                try { Thread.sleep(100); } catch (Exception e) {}
                System.out.println("Thread 1: Waiting for lock 2...");
                synchronized (lock2) {
                    System.out.println("Thread 1: Acquired lock 1 & 2.");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) { // Acquires locks in reverse order
                System.out.println("Thread 2: Holding lock 2...");
                try { Thread.sleep(100); } catch (Exception e) {}
                System.out.println("Thread 2: Waiting for lock 1...");
                synchronized (lock1) {
                    System.out.println("Thread 2: Acquired lock 2 & 1.");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}`,
                explanation: "A deadlock occurs when Thread 1 holds Lock A and waits for Lock B, while Thread 2 holds Lock B and waits for Lock A. Neither can proceed. The simplest way to prevent this is to enforce a global lock acquisition order. For example, all threads must acquire `lock1` before they are allowed to acquire `lock2`. This breaks the circular dependency."
            },
            {
                id: "java-s9-q17",
                title: "Reactive Stream Processor",
                description: "Use the Java 9+ Flow API for reactive programming.",
                statement: "Implement a simple reactive stream using the `java.util.concurrent.Flow` API. Create a `Publisher` that emits a sequence of numbers, a `Processor` that transforms them (e.g., squares them), and a `Subscriber` that prints the final result, respecting backpressure.",
                inputFormat: "Implementation-based.",
                outputFormat: "The processed numbers are printed as they are produced.",
                testCases: [{ input: "", output: "1, 4, 9, 16..." }],
                solution: `import java.util.concurrent.Flow;
import java.util.concurrent.SubmissionPublisher;

public class FlowApiExample {
    static class MySubscriber<T> implements Flow.Subscriber<T> {
        private Flow.Subscription subscription;
        @Override public void onSubscribe(Flow.Subscription subscription) {
            this.subscription = subscription;
            subscription.request(1); // Request first item
        }
        @Override public void onNext(T item) {
            System.out.println("Got: " + item);
            subscription.request(1); // Request next item
        }
        @Override public void onError(Throwable t) { t.printStackTrace(); }
        @Override public void onComplete() { System.out.println("Done"); }
    }
    public static void main(String[] args) {
        SubmissionPublisher<Integer> publisher = new SubmissionPublisher<>();
        publisher.subscribe(new MySubscriber<>());
        for (int i=1; i<=10; i++) publisher.submit(i);
        publisher.close();
    }
}`,
                explanation: "The `Flow` API models reactive streams. The `Publisher` produces items. A `Subscriber` `onSubscribe`s to it and receives a `Subscription`. It uses `subscription.request(n)` to signal to the publisher that it's ready for `n` more items (this is called **backpressure**). The publisher then calls `onNext(item)` to deliver the data. This prevents a fast publisher from overwhelming a slow subscriber."
            },
            {
                id: "java-s9-q18",
                title: "Merge Sort for Linked List",
                description: "Implement an in-place merge sort for a linked list.",
                statement: "Write a function to sort a singly linked list using the Merge Sort algorithm. The solution should be efficient in space, ideally O(1) extra space besides the recursion stack (in-place).",
                inputFormat: "A linked list.",
                outputFormat: "The head of the sorted linked list.",
                testCases: [{ input: "[4, 2, 1, 3]", output: "[1, 2, 3, 4]" }],
                solution: `class ListNode { int val; ListNode next; /* ... */ }

public class MergeSortLinkedList {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        
        // Step 1: Split the list into two halves
        ListNode mid = getMid(head);
        ListNode left = head;
        ListNode right = mid.next;
        mid.next = null;
        
        // Step 2: Sort each half recursively
        left = sortList(left);
        right = sortList(right);
        
        // Step 3: Merge the sorted halves
        return merge(left, right);
    }
    
    private ListNode merge(ListNode l1, ListNode l2) { /* ... implementation ... */ }
    private ListNode getMid(ListNode head) { /* ... fast/slow pointer ... */ }
}`,
                explanation: "Merge sort for linked lists follows the divide-and-conquer strategy. The key steps are: 1. Find the middle of the list using the fast and slow pointer technique. 2. Split the list into two halves at the middle. 3. Recursively call `sortList` on both halves. 4. Merge the two sorted halves into a single sorted list. This approach avoids the high space cost of creating new arrays that a typical merge sort would require."
            },
            {
                id: "java-s9-q19",
                title: "Custom JSON Serializer",
                description: "Build a JSON serializer using reflection and annotations.",
                statement: "Implement a simple JSON serializer that can convert a Java object (POJO) into a JSON string. Use reflection to inspect the object's fields. It should respect a custom annotation, e.g., `@JsonExclude`, to skip certain fields.",
                inputFormat: "Implementation-based.",
                outputFormat: "A JSON string representing the object.",
                testCases: [{ input: "", output: "Correct JSON string with excluded fields." }],
                solution: `import java.lang.reflect.Field;
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@interface JsonExclude {}

public class JsonSerializer {
    public String serialize(Object obj) throws IllegalAccessException {
        StringBuilder sb = new StringBuilder("{");
        Field[] fields = obj.getClass().getDeclaredFields();
        for (Field field : fields) {
            if (field.isAnnotationPresent(JsonExclude.class)) continue;
            field.setAccessible(true);
            sb.append("\\"").append(field.getName()).append("\\":\\"").append(field.get(obj)).append("\\",");
        }
        if (sb.length() > 1) sb.deleteCharAt(sb.length() - 1);
        sb.append("}");
        return sb.toString();
    }
}`,
                explanation: "This serializer uses Java Reflection (`obj.getClass().getDeclaredFields()`) to get a list of all fields in an object at runtime. It iterates through these fields, checking for our custom `@JsonExclude` annotation. If the annotation isn't present, it retrieves the field's name and value (`field.get(obj)`) and appends them to a JSON string. `field.setAccessible(true)` is needed to access private fields."
            },
            {
                id: "java-s9-q20",
                title: "Bloom Filter",
                description: "Implement a Bloom filter with a tunable false-positive rate.",
                statement: "Implement a Bloom Filter, a probabilistic data structure for testing set membership. It should allow for an adjustable capacity and false-positive rate. It must have `add` and `mightContain` methods.",
                inputFormat: "Implementation-based.",
                outputFormat: "A data structure that correctly identifies non-members and probable members.",
                testCases: [{ input: "add('a'); mightContain('a'); mightContain('b')", output: "true, false (or small chance of true)" }],
                solution: `import java.util.BitSet;
import com.google.common.hash.Hashing; // Using Guava for hashing

public class BloomFilter<T> {
    private final BitSet bitSet;
    private final int numHashFunctions;
    private final int size;

    public BloomFilter(int capacity, double fpp) { // fpp: false positive probability
        size = (int) (-capacity * Math.log(fpp) / (Math.log(2) * Math.log(2)));
        numHashFunctions = (int) ((size / capacity) * Math.log(2));
        bitSet = new BitSet(size);
    }
    
    public void add(T item) {
        for (int i = 0; i < numHashFunctions; i++) {
            int hash = Hashing.murmur3_128(i).hashString(item.toString(), java.nio.charset.StandardCharsets.UTF_8).asInt();
            bitSet.set(Math.abs(hash % size));
        }
    }

    public boolean mightContain(T item) {
        for (int i = 0; i < numHashFunctions; i++) {
            int hash = Hashing.murmur3_128(i).hashString(item.toString(), java.nio.charset.StandardCharsets.UTF_8).asInt();
            if (!bitSet.get(Math.abs(hash % size))) {
                return false; // Definitely not in set
            }
        }
        return true; // Probably in set
    }
}`,
                explanation: "A Bloom Filter uses a `BitSet` and multiple hash functions. To `add` an item, you hash it `k` times and set the bits at the resulting indices to 1. To check (`mightContain`), you hash the item `k` times and check if all corresponding bits are 1. If any bit is 0, the item is definitely not in the set. If all are 1, it's *probably* in the set, as other items might have set the same bits by chance (a false positive)."
            },
            {
                id: "java-s9-q21",
                title: "SQL-like CSV Query Evaluator",
                description: "Build a query evaluator for CSV files supporting SELECT and WHERE.",
                statement: "Write a program that can execute simple SQL-like queries on a CSV file. It should support `SELECT col1, col2 WHERE col3 = 'value'`. The program should parse the query, read the CSV, filter rows, select columns, and print the result.",
                inputFormat: "Implementation-based.",
                outputFormat: "The results of the query on the CSV data.",
                testCases: [{ input: "", output: "Correctly filtered and selected data is printed." }],
                solution: `import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;
import java.util.stream.Collectors;

public class CsvQuery {
    public void query(String filePath, String selectCols, String whereClause) throws Exception {
        // Simplified parsing logic
        List<String> select = List.of(selectCols.split(","));
        String[] where = whereClause.split("=");
        String whereCol = where[0].trim();
        String whereVal = where[1].trim().replace("'", "");
        
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String[] header = br.readLine().split(",");
            int whereIdx = List.of(header).indexOf(whereCol);
            List<Integer> selectIdx = select.stream().map(col -> List.of(header).indexOf(col)).collect(Collectors.toList());
            
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                if (values[whereIdx].equals(whereVal)) {
                    for (int idx : selectIdx) {
                        System.out.print(values[idx] + " ");
                    }
                    System.out.println();
                }
            }
        }
    }
}`,
                explanation: "This is a simplified implementation. A robust solution would require a proper query parser. This code manually parses a simple query to identify the columns to select and the filtering condition. It reads the CSV file line by line (to handle large files), finds the column indices from the header, and then iterates through the data rows. For each row, it checks if it matches the `WHERE` condition. If it does, it prints the values from the specified `SELECT` columns."
            },
            {
                id: "java-s9-q22",
                title: "Persistent Immutable Linked List",
                description: "Implement a linked list in a functional style with persistence.",
                statement: "Implement an immutable (persistent) singly linked list. Methods like `add` should not modify the existing list but instead return a new list with the added element. This makes the data structure inherently thread-safe and easier to reason about.",
                inputFormat: "Implementation-based.",
                outputFormat: "A functional-style linked list.",
                testCases: [{ input: "list1.add(1); list2 = list1.add(2);", output: "list1 remains unchanged, list2 is the new list." }],
                solution: `public final class PersistentList<T> {
    private final T head;
    private final PersistentList<T> tail;

    private PersistentList(T head, PersistentList<T> tail) {
        this.head = head;
        this.tail = tail;
    }

    public static <T> PersistentList<T> empty() {
        return new PersistentList<>(null, null);
    }
    
    public boolean isEmpty() {
        return head == null && tail == null;
    }
    
    // Returns a new list with the element added to the front
    public PersistentList<T> add(T value) {
        return new PersistentList<>(value, this);
    }

    @Override
    public String toString() {
        // ... recursive or iterative toString implementation ...
        return "";
    }
}`,
                explanation: "An immutable data structure never changes its state after creation. The `add` method doesn't modify the current list. Instead, it creates a *new* list node whose `tail` points to the *entire old list*. This is very memory-efficient as it reuses all the nodes from the previous version. This property is called structural sharing and is a cornerstone of functional programming."
            },
            {
                id: "java-s9-q23",
                title: "Concurrent Priority Queue",
                description: "Implement a priority queue with heap and fine-grained locking.",
                statement: "Implement a simplified concurrent priority queue. While Java's `PriorityBlockingQueue` is fully featured, this exercise involves using a standard heap (array-based) and implementing locking to make it thread-safe. A simple approach is a single lock, while a more advanced one would use more fine-grained locking.",
                inputFormat: "Implementation-based.",
                outputFormat: "A thread-safe priority queue.",
                testCases: [{ input: "", output: "Concurrent puts and takes respect priority order." }],
                solution: `import java.util.ArrayList;
import java.util.Collections;
import java.util.concurrent.locks.ReentrantLock;

public class ConcurrentPriorityQueue<T extends Comparable<T>> {
    private final ArrayList<T> heap = new ArrayList<>();
    private final ReentrantLock lock = new ReentrantLock();

    public void add(T item) {
        lock.lock();
        try {
            heap.add(item);
            // Sift-up logic (heapify up)
            int i = heap.size() - 1;
            while (i > 0 && heap.get((i - 1) / 2).compareTo(heap.get(i)) > 0) {
                Collections.swap(heap, i, (i - 1) / 2);
                i = (i - 1) / 2;
            }
        } finally {
            lock.unlock();
        }
    }

    public T poll() {
        lock.lock();
        try {
            // ... Sift-down logic (heapify down) ...
            return heap.get(0); // Simplified
        } finally {
            lock.unlock();
        }
    }
}`,
                explanation: "This implementation uses an `ArrayList` to represent a min-heap. A single `ReentrantLock` is used to guard all access (`add`, `poll`), ensuring thread safety. The `add` method adds the new element to the end of the list and then 'sifts up' to maintain the heap property. A full `poll` implementation would swap the first and last elements, remove the last, and then 'sift down' the new root to its correct position."
            },
            {
                id: "java-s9-q24",
                title: "KMP Substring Search",
                description: "Implement the KMP algorithm for efficient substring search.",
                statement: "Implement the Knuth-Morris-Pratt (KMP) algorithm for substring searching. This involves pre-computing a Longest Proper Prefix Suffix (LPS) array for the pattern, which allows skipping characters on a mismatch, achieving O(n+m) time complexity.",
                inputFormat: "A text string and a pattern string.",
                outputFormat: "The index of the first match, or -1.",
                testCases: [{ input: "text='ababcababa', pattern='ababa'", output: "6" }],
                solution: `public class KMP {
    public int search(String text, String pattern) {
        int[] lps = computeLPSArray(pattern);
        int i = 0, j = 0; // i for text, j for pattern
        while (i < text.length()) {
            if (pattern.charAt(j) == text.charAt(i)) {
                i++; j++;
            }
            if (j == pattern.length()) {
                return i - j; // Match found
            } else if (i < text.length() && pattern.charAt(j) != text.charAt(i)) {
                if (j != 0) j = lps[j - 1];
                else i++;
            }
        }
        return -1;
    }

    private int[] computeLPSArray(String pattern) {
        int[] lps = new int[pattern.length()];
        int length = 0, i = 1;
        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(length)) {
                length++; lps[i] = length; i++;
            } else {
                if (length != 0) length = lps[length - 1];
                else { lps[i] = 0; i++; }
            }
        }
        return lps;
    }
}`,
                explanation: "The KMP algorithm avoids re-checking characters in the text. The key is the LPS array. `lps[i]` stores the length of the longest proper prefix of `pattern[0...i]` which is also a suffix. When a mismatch occurs at `text[i]` and `pattern[j]`, the LPS array tells us how many characters in the pattern we can shift forward without losing a potential match."
            },
            {
                id: "java-s9-q25",
                title: "Distributed ID Generator",
                description: "Implement a generator like Twitter's Snowflake.",
                statement: "Implement a simplified version of a distributed unique ID generator like Twitter's Snowflake. The generated 64-bit ID should be composed of a timestamp, a worker ID, and a sequence number to ensure uniqueness across a distributed system.",
                inputFormat: "Implementation-based.",
                outputFormat: "A unique, time-sortable 64-bit long ID.",
                testCases: [{ input: "", output: "Generates a sequence of unique, increasing IDs." }],
                solution: `public class SnowflakeIdGenerator {
    private final long workerId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    // ... constants for bits, masks, etc. ...

    public SnowflakeIdGenerator(long workerId) {
        // ... validate workerId ...
        this.workerId = workerId;
    }

    public synchronized long nextId() {
        long timestamp = System.currentTimeMillis();

        if (timestamp < lastTimestamp) {
            throw new RuntimeException("Clock moved backwards!");
        }

        if (lastTimestamp == timestamp) {
            // Increment sequence for same millisecond
            sequence = (sequence + 1) & 4095; // 12-bit mask
            if (sequence == 0) {
                // Sequence overflow, wait for next millisecond
                timestamp = tilNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }

        lastTimestamp = timestamp;

        // Assemble the 64-bit ID
        return ((timestamp - 1288834974657L) << 22) // epoch start, timestamp bits
             | (workerId << 12)                       // worker id bits
             | sequence;                              // sequence bits
    }
    private long tilNextMillis(long lastTimestamp) { /* ... */ return 0;}
}`,
                explanation: "Snowflake IDs are time-sortable and unique across a distributed system. A 64-bit ID is composed of: 1 bit for sign, 41 bits for a custom epoch timestamp (in milliseconds), 10 bits for a worker/machine ID (allowing 1024 machines), and 12 bits for a sequence number (allowing 4096 IDs per millisecond per machine). The `synchronized` keyword ensures that ID generation is thread-safe within a single generator instance."
            }
        ]
    }
];