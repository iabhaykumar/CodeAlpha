import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART13: ProblemCategory[] = [
    {
        category: "SECTION 20 — Networking / Sockets / Protocols",
        problems: [
            // Problems 76-95 (20 problems total)
            {
                id: "c-s20-q1",
                title: "Multi-threaded HTTP/1.0 Server",
                description: "Serves static files.",
                statement: "Implement a basic multi-threaded HTTP/1.0 server. It should listen on a port, and for each incoming connection, create a new thread to handle the request. It should be able to parse a simple GET request and serve a static file from the local directory.",
                inputFormat: "Implementation-based.",
                outputFormat: "A running HTTP server.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual thread-per-connection server
// main():
//   - setup socket, bind, listen
//   - while(1):
//     - conn_fd = accept(...)
//     - pthread_create(&thread_id, NULL, handle_connection, &conn_fd)

// handle_connection(void* arg):
//   - read HTTP request from socket
//   - parse GET path
//   - open and read the requested local file
//   - write HTTP headers ("HTTP/1.0 200 OK\\r\\n...") and file content to socket
//   - close socket
`,
                explanation: "This is a simple but inefficient server model. The main thread's only job is to accept new connections. For each connection, it spawns a new thread to do the work of parsing the request and sending the response. This model doesn't scale well due to the overhead of creating a new thread for every single request."
            },
            {
                id: "c-s20-q2",
                title: "Non-blocking TCP Echo Server",
                description: "Use select/poll/epoll.",
                statement: "Implement a non-blocking TCP echo server that can handle multiple clients concurrently in a single thread. Use `epoll` (or `select`/`poll` for portability) to monitor multiple sockets for I/O events.",
                inputFormat: "Implementation-based.",
                outputFormat: "A single-threaded server that handles multiple clients.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual epoll event loop
// 1. create epoll instance: epoll_create1()
// 2. add server socket to epoll set for read events: epoll_ctl(ADD)
// 3. while(1):
//    a. wait for events: epoll_wait(...)
//    b. for each event:
//       i. if it's the server socket -> new connection:
//          - accept() the new client socket
//          - add client socket to epoll set for read events
//       ii. if it's a client socket -> data to read:
//           - read() data from client
//           - write() data back to client
`,
                explanation: "`epoll` (on Linux) is a highly scalable I/O event notification mechanism. A single thread can efficiently monitor thousands of sockets. The `epoll_wait` system call blocks until one or more sockets are ready for I/O, avoiding the need for one thread per connection and eliminating CPU-intensive polling."
            },
            {
                id: "c-s20-q3",
                title: "HTTP Client with Chunked Encoding",
                description: "Support chunked transfer encoding and redirects.",
                statement: "Write an HTTP client that can correctly parse a response with `Transfer-Encoding: chunked`. It should also handle HTTP redirects (status codes 301, 302) by making a new request to the `Location` header URL.",
                inputFormat: "Implementation-based.",
                outputFormat: "Correctly downloads chunked or redirected content.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual parsing for chunked encoding
// while(1):
//   - read line to get hex chunk size
//   - if chunk size is 0, break
//   - read 'chunk size' bytes of data
//   - read the trailing CRLF (\\r\\n)
`,
                explanation: "Chunked encoding is a streaming mechanism in HTTP. The response body is sent in a series of chunks. Each chunk is prefixed with its size in hexadecimal. The stream ends with a chunk of size 0. The client must parse these sizes to correctly reassemble the body."
            },
            {
                id: "c-s20-q4",
                title: "Simple FTP Client",
                description: "Download files using FTP (active/passive).",
                statement: "Implement a basic FTP client that can connect to a server, log in, and download a file. It should support passive mode, which is more firewall-friendly.",
                inputFormat: "Implementation-based.",
                outputFormat: "A file is downloaded from an FTP server.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual FTP Passive Mode Flow
// 1. Connect to server on port 21 (Control Channel).
// 2. Send USER/PASS commands.
// 3. Send PASV command.
// 4. Server replies with an IP and port (e.g., "227 Entering Passive Mode (h1,h2,h3,h4,p1,p2)").
// 5. Client opens a NEW TCP connection to that IP and port (Data Channel).
// 6. Send RETR <filename> command on the Control Channel.
// 7. Server sends the file data over the Data Channel.
// 8. Close Data Channel.
`,
                explanation: "FTP is an old protocol that uses two separate TCP connections: a 'Control Channel' for commands and a 'Data Channel' for file transfers. In passive mode, the client initiates both connections, which is easier for traversing NATs and firewalls."
            },
            {
                id: "c-s20-q5",
                title: "Concurrent WebSocket Server",
                description: "Handle handshake and frame parsing.",
                statement: "Build a multi-client WebSocket server. It must correctly handle the HTTP Upgrade handshake and then parse incoming WebSocket frames to read messages. It should support broadcasting messages to all connected clients.",
                inputFormat: "Implementation-based.",
                outputFormat: "A running WebSocket server.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Handshake
// Client sends HTTP GET with "Upgrade: websocket" and "Sec-WebSocket-Key" headers.
// Server responds with HTTP 101 Switching Protocols.
// Server calculates "Sec-WebSocket-Accept" header by SHA1 hashing the client key
// with a magic string "258EAFA5-E914-47DA-95CA-C5AB0DC85B11".

// Conceptual Frame Parsing
// - Read first 2 bytes to get FIN bit, opcode, and payload length.
// - If payload length is 126/127, read more bytes to get the full length.
// - Read masking key (if from client).
// - Read payload data.
// - Unmask payload by XORing with masking key.
`,
                explanation: "A WebSocket connection starts as a standard HTTP request. The handshake is a cryptographic challenge-response to confirm both ends support the protocol. After the handshake, the connection is upgraded, and both sides can send data frames. Frames from the client must be masked, so the server needs to unmask the payload."
            },
            {
                id: "c-s20-q6",
                title: "DNS Resolver",
                description: "Perform iterative DNS queries.",
                statement: "Implement a simple DNS resolver that performs iterative queries. Starting with a root server, it should query for a domain name (e.g., `www.example.com`). If the server doesn't have the answer, it will refer to another (more authoritative) server. Your resolver must follow these referrals until it finds the IP address.",
                inputFormat: "A domain name.",
                outputFormat: "The corresponding IP address.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual iterative query for 'www.example.com'
// 1. Send query for 'www.example.com' to a Root Server.
// 2. Root server replies: "I don't know, but here is the IP for the .com TLD server".
// 3. Send query for 'www.example.com' to the .com TLD Server.
// 4. .com TLD server replies: "I don't know, but here is the IP for the example.com authoritative server".
// 5. Send query for 'www.example.com' to the example.com Server.
// 6. example.com server replies: "The IP is 93.184.216.34".
`,
                explanation: "This contrasts with a recursive query, where the resolver asks its local DNS server to do all the work. An iterative resolver does the work itself, talking directly to the root, TLD (Top-Level Domain), and authoritative nameservers in sequence. This requires parsing DNS protocol messages, which are typically sent over UDP."
            },
            {
                id: "c-s20-q7",
                title: "TLS Client with OpenSSL",
                description: "Make secure requests using OpenSSL APIs.",
                statement: "Write a simple TLS client using the OpenSSL library (`libssl`, `libcrypto`). It should connect to a secure server (e.g., `google.com:443`), perform the TLS handshake, send an HTTP GET request over the encrypted channel, and print the response.",
                inputFormat: "Implementation-based.",
                outputFormat: "The HTML content of a secure website.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual OpenSSL flow
// 1. SSL_library_init(), SSL_load_error_strings()
// 2. SSL_CTX* ctx = SSL_CTX_new(TLS_client_method())
// 3. Create TCP socket and connect() to server:443
// 4. SSL* ssl = SSL_new(ctx)
// 5. SSL_set_fd(ssl, socket_fd)
// 6. SSL_connect(ssl) // Perform TLS handshake
// 7. Verify server certificate: SSL_get_verify_result()
// 8. Send/Receive data: SSL_write(ssl, ...), SSL_read(ssl, ...)
// 9. Shutdown: SSL_shutdown(ssl), SSL_free(ssl), SSL_CTX_free(ctx)
`,
                explanation: "Using OpenSSL is complex. It involves creating a context (`SSL_CTX`), creating an SSL structure for the connection, associating it with a standard TCP socket, and then performing the handshake with `SSL_connect`. After that, `SSL_write` and `SSL_read` are used instead of `write` and `read` to send/receive data over the encrypted connection."
            },
            {
                id: "c-s20-q8",
                title: "Rate-Limited TCP Proxy",
                description: "Throttle per-client bandwidth.",
                statement: "Implement a simple TCP proxy server. For each client connection, it should also connect to a destination server. It should forward data between the client and server, but implement a token bucket algorithm to limit the data transfer rate for each client.",
                inputFormat: "Implementation-based.",
                outputFormat: "A running proxy that throttles traffic.",
                testCases: [{ input: "", output: "" }],
                solution: `// See Token Bucket algorithm from previous sections.
// Conceptual Proxy Logic:
// In the data-forwarding loop (e.g., inside an epoll loop):
// while (data_to_send > 0):
//   // Get tokens for this client from its token bucket
//   tokens = get_tokens(client_id);
//   bytes_to_write = min(data_to_send, tokens);
//   if (bytes_to_write > 0):
//     write(dest_socket, buffer, bytes_to_write);
//     consume_tokens(client_id, bytes_to_write);
//   else:
//     // No tokens available, wait before trying again
//     // (In a non-blocking server, you'd stop reading from the source
//     // until tokens are available again).
`,
                explanation: "The token bucket algorithm is used to control bandwidth. The proxy maintains a separate bucket for each client. When forwarding data for a client, it can only send as many bytes as there are 'tokens' in that client's bucket. This allows for fine-grained control over each client's bandwidth usage."
            },
            {
                id: "c-s20-q9",
                title: "Reliable UDP Transport",
                description: "Implement ACKs, retransmits, and sequence numbers over UDP.",
                statement: "Implement a simple reliable transport layer on top of UDP. Create a custom packet header that includes a sequence number. The sender should retransmit packets if an ACK is not received within a certain timeout. The receiver should send ACKs for received packets and handle out-of-order or duplicate packets.",
                inputFormat: "Implementation-based.",
                outputFormat: "Data is transferred reliably over UDP.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is essentially re-implementing a simplified TCP.
// Sender Logic:
//   - Maintain a 'window' of un-ACK'd packets.
//   - Have a retransmission timer.
//   - When timer expires, re-send all packets in the window.
//   - When an ACK is received, slide the window forward.

// Receiver Logic:
//   - On receiving a packet:
//     - If it's the expected sequence number, deliver to application and send ACK.
//     - If it's a future packet, buffer it.
//     - If it's a past packet, re-send ACK.
`,
                explanation: "UDP itself is unreliable. To make it reliable, you must implement mechanisms from TCP, like sequence numbers to detect loss and reorder packets, acknowledgments (ACKs) to confirm receipt, and retransmission timers to handle lost packets. A sliding window protocol is used to allow multiple packets to be in flight at once for better performance."
            },
            {
                id: "c-s20-q10",
                title: "Port Scanner",
                description: "Implement TCP SYN/connect scanning.",
                statement: "Write a basic port scanner. It should take a target IP and a range of ports. For each port, it should try to establish a TCP connection. If the connection succeeds, the port is open.",
                inputFormat: "An IP address and a port range.",
                outputFormat: "A list of open ports.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual connect scan for a single port
// int sock = socket(AF_INET, SOCK_STREAM, 0);
// struct sockaddr_in serv_addr;
// serv_addr.sin_family = AF_INET;
// serv_addr.sin_port = htons(port);
// inet_pton(AF_INET, ip, &serv_addr.sin_addr);

// if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
//     // Port is likely closed
// } else {
//     // Port is open
// }
// close(sock);`,
                explanation: "A `connect` scan is the simplest type of port scan. It attempts to complete the full three-way TCP handshake. If `connect()` returns successfully, the port is open. If it returns an error (like `ECONNREFUSED`), the port is closed. A SYN scan is stealthier as it doesn't complete the handshake, but it requires raw sockets and root privileges."
            },
            {
                id: "c-s20-q11",
                title: "HTTP/2 Framing Demo",
                description: "Implement frame parsing only.",
                statement: "Write a program that can parse HTTP/2 frames. It does not need to handle the full protocol logic, but it should be able to read a stream of bytes, identify the 9-byte frame header, and determine the frame's length, type (e.g., DATA, HEADERS), and flags.",
                inputFormat: "A byte stream of HTTP/2 frames.",
                outputFormat: "A description of each parsed frame.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual frame parsing
// struct FrameHeader { uint32_t length; uint8_t type; ... };
//
// while(can_read_9_bytes):
//   read 9 bytes into header struct
//   // Remember to handle endianness (ntohl)
//   len = get_length(header);
//   type = get_type(header);
//   read 'len' bytes of payload
//   process_payload(type, payload)
`,
                explanation: "HTTP/2 is a binary protocol, unlike the text-based HTTP/1.1. All communication is done through 'frames'. Each frame has a fixed-size 9-byte header that specifies its length, type, flags, and stream identifier. A parser needs to read this header to know how many more bytes to read for the frame's payload."
            },
            {
                id: "c-s20-q12",
                title: "SOCKS5 Proxy Server",
                description: "Support username/password authentication.",
                statement: "Implement a simple SOCKS5 proxy server. It should handle the SOCKS5 handshake, including the method selection (supporting 'no authentication' and 'username/password') and the connect request, before relaying TCP traffic.",
                inputFormat: "Implementation-based.",
                outputFormat: "A running SOCKS5 proxy.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual SOCKS5 Handshake
// 1. Client connects, sends: [Version(0x05), NumMethods, Methods[]]
// 2. Server replies: [Version(0x05), ChosenMethod]
// 3. If ChosenMethod is Username/Password:
//    a. Client sends auth request.
//    b. Server validates, replies with status.
// 4. Client sends connect request: [Version, Command(CONNECT), ..., DestAddr, DestPort]
// 5. Server connects to destination, replies to client with status.
// 6. If successful, server starts relaying data between client and destination.
`,
                explanation: "SOCKS5 is a versatile proxy protocol that works at the transport layer. The handshake is a multi-step process where the client and server negotiate the authentication method to be used, and then the client sends a request specifying the destination it wants to connect to. Once established, the proxy transparently relays TCP data."
            },
            {
                id: "c-s20-q13",
                title: "Multicast Listener",
                description: "Join a multicast group and print messages.",
                statement: "Write a program that uses UDP sockets to join a multicast group. It should then listen for and print any messages sent to that group address.",
                inputFormat: "Implementation-based.",
                outputFormat: "Prints messages sent to the multicast group.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual setup
// 1. Create a UDP socket.
// 2. Bind the socket to a local port.
// 3. Set up a 'struct ip_mreq' with the multicast group address.
// 4. Use setsockopt() with the IP_ADD_MEMBERSHIP option to join the group.
// 5. Loop, calling recvfrom() to receive multicast messages.
`,
                explanation: "Multicast is an efficient way to send a single packet to multiple recipients who have 'subscribed' to a multicast group address. It's handled at the network layer by routers. The program needs to use special socket options to tell the OS kernel that it is interested in receiving packets sent to a specific multicast address."
            },
            {
                id: "c-s20-q14",
                title: "HTTP Reverse Proxy",
                description: "Implement with health checks and backend selection.",
                statement: "Implement a simple HTTP reverse proxy. It should listen for incoming requests and forward them to one of several backend servers. Implement a simple load balancing strategy (e.g., round-robin) and basic health checks (periodically pinging backends to see if they are alive).",
                inputFormat: "Implementation-based.",
                outputFormat: "A running reverse proxy.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual request handling
// 1. Accept client connection.
// 2. Read HTTP request.
// 3. Select a healthy backend server (e.g., round-robin).
//    - Backend selection needs a separate health-checking thread
//      that periodically updates a list of 'alive' backends.
// 4. Create a NEW connection to the chosen backend.
// 5. Forward the client's request to the backend.
// 6. Read the backend's response.
// 7. Forward the backend's response to the client.
// 8. Close both connections.
`,
                explanation: "A reverse proxy acts as a single gateway to multiple backend services. It provides load balancing, can handle SSL termination, and can hide the internal network structure. A key component is the health check mechanism, which ensures that traffic is only sent to backend servers that are currently operational."
            },
            {
                id: "c-s20-q15",
                title: "Tiny SMTP Client",
                description: "Send emails with attachments (MIME).",
                statement: "Implement a simple SMTP client that can connect to an SMTP server, authenticate, and send an email with a simple text body and a file attachment. This requires constructing a multipart MIME message.",
                inputFormat: "Implementation-based.",
                outputFormat: "An email is sent.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual MIME structure for an email with an attachment
// From: ...
// To: ...
// Subject: ...
// MIME-Version: 1.0
// Content-Type: multipart/mixed; boundary="boundary-string"
//
// --boundary-string
// Content-Type: text/plain
//
// This is the email body.
//
// --boundary-string
// Content-Type: application/octet-stream
// Content-Disposition: attachment; filename="file.txt"
//
// [Base64 encoded content of the file]
//
// --boundary-string--
`,
                explanation: "SMTP is the protocol for sending email. It's a text-based, command-response protocol. To send attachments, the email body must be formatted as a multipart MIME message. A unique 'boundary' string is used to separate the different parts of the message (the text body, the attachment, etc.)."
            },
            {
                id: "c-s20-q16",
                title: "Networked Key-Value Store",
                description: "Build with custom binary protocol and replication.",
                statement: "Build a simple client-server key-value store. Define a custom binary protocol for `GET`, `SET`, and `DELETE` commands. Implement a simple primary-backup replication scheme: all writes go to the primary, which then forwards them to the backup before acknowledging the client.",
                inputFormat: "Implementation-based.",
                outputFormat: "A distributed key-value store.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual Binary Protocol for SET("key", "val")
// [ Command(1 byte) | KeyLen(4 bytes) | ValLen(4 bytes) | Key... | Value... ]
// [ 0x01            | 3               | 3               | "key"  | "val"    ]

// Primary Server 'SET' logic:
// 1. Receive SET command from client.
// 2. Forward the same command to the Backup server.
// 3. Wait for ACK from Backup server.
// 4. Write to its own local data store.
// 5. Send ACK back to the client.
`,
                explanation: "A custom binary protocol is more efficient than a text-based one. Primary-backup replication is a simple way to achieve fault tolerance. The primary server handles all writes and ensures they are replicated to the backup before confirming success to the client. If the primary fails, the backup can be promoted to become the new primary."
            },
            {
                id: "c-s20-q17",
                title: "TCP Connection Pool",
                description: "Implement a connection reuse pool for clients.",
                statement: "For a client that needs to make many short-lived requests to the same server, implement a connection pool. The pool should maintain a set of already-established TCP connections. When a request needs to be made, it borrows a connection from the pool. After the request is done, it returns the connection to the pool instead of closing it.",
                inputFormat: "Implementation-based.",
                outputFormat: "Reduced latency for subsequent requests.",
                testCases: [{ input: "", output: "" }],
                solution: `// See Object Pool Pattern (c-s10-q30). The concept is identical.
// The 'objects' being pooled are TCP socket file descriptors.
// The 'factory' function would create a new socket and connect() to the server.
// An optional 'validator' function could check if a connection is still alive before
// lending it out (e.g., by sending a keep-alive probe).
`,
                explanation: "Establishing a TCP connection (the three-way handshake) has significant overhead. A connection pool avoids this cost by reusing existing connections. This is a critical performance optimization for applications that communicate frequently with a database or another service."
            },
            {
                id: "c-s20-q18",
                title: "ICMP Ping Tool",
                description: "Implement with raw sockets and RTT measurement.",
                statement: "Create a simple `ping` utility. This requires creating a raw socket (which needs root privileges), constructing an ICMP Echo Request packet, sending it to a destination, and listening for the ICMP Echo Reply. Calculate the Round-Trip Time (RTT).",
                inputFormat: "An IP address.",
                outputFormat: "Ping statistics.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual flow
// 1. Create a raw socket: sock = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP);
// 2. Construct ICMP header:
//    - type = 8 (Echo Request)
//    - code = 0
//    - checksum = 0 (initially)
//    - id = process ID
//    - sequence number
// 3. Calculate checksum over the ICMP header and data.
// 4. sendto() the packet.
// 5. Record start time.
// 6. recvfrom() to get the reply.
// 7. Record end time. RTT = end - start.
// 8. Validate reply (type=0, id/seq match).
`,
                explanation: "Raw sockets allow a program to construct and send network packets with custom IP and transport headers. This is necessary for protocols like ICMP that operate at the network layer. The program must manually build the entire ICMP packet, including calculating the checksum."
            },
            {
                id: "c-s20-q19",
                title: "WebSocket Chat Server",
                description: "Implement a chat server with rooms.",
                statement: "This is a duplicate of a problem in this section. See c-s20-q5.",
                inputFormat: "N/A",
                outputFormat: "N/A",
                testCases: [{ input: "", output: "" }],
                solution: "// See c-s20-q5 and combine with a data structure to map room names to sets of connections.",
                explanation: "To add 'rooms' to a WebSocket server, the server needs to maintain a data structure (like a hash map) that maps a room name (string) to a list or set of connected client sockets. When a message for a specific room arrives, the server looks up the room in its map and forwards the message to all clients in the corresponding list."
            },
            {
                id: "c-s20-q20",
                title: "QUIC Handshake Simulator",
                description: "Simulate the QUIC handshake.",
                statement: "Simulate the handshake of the QUIC protocol. This involves demonstrating the initial packet exchange that combines the transport handshake (setting up connection IDs) and the cryptographic handshake (TLS 1.3) to achieve a 0-RTT or 1-RTT connection setup over UDP.",
                inputFormat: "Implementation-based.",
                outputFormat: "Demonstration of the handshake flow.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual 1-RTT Handshake
// Client -> Server:
//   - UDP Packet containing:
//     - QUIC Header (Connection IDs)
//     - TLS ClientHello
//
// Server -> Client:
//   - UDP Packet containing:
//     - QUIC Header
//     - TLS ServerHello
//     - TLS EncryptedExtensions
//     - TLS Certificate
//     - TLS CertificateVerify
//     - TLS Finished
//
// Client -> Server:
//   - UDP Packet containing:
//     - TLS Finished
//
// Connection is now established. Application data can be sent.
`,
                explanation: "QUIC (built on UDP) is designed to be much faster to set up than TCP+TLS. It merges the transport and cryptographic handshakes. In a 1-RTT handshake, the client sends its TLS 'hello' in the very first packet. The server can reply with its own 'hello' and all its TLS certificates and be ready to receive encrypted data. This avoids the multiple round trips required by the TCP handshake followed by the TLS handshake."
            },
        ]
    }
];