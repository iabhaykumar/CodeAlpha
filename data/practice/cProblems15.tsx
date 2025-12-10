import React from 'react';
import { ProblemCategory } from './types';

export const C_PROBLEMS_PART15: ProblemCategory[] = [
    {
        category: "SECTION 22 — Security / Exploits / Hardening",
        problems: [
            // Problems 113-120 (8 problems total)
            {
                id: "c-s22-q1",
                title: "Demonstrate and Fix Buffer Overflow",
                description: "Use safe functions to fix a buffer overflow.",
                statement: "Write a C program with a function that uses the vulnerable `strcpy` function. Create an input that causes a buffer overflow to overwrite a variable on the stack. Then, fix the vulnerability by replacing `strcpy` with a safe alternative like `strncpy` or `snprintf`.",
                inputFormat: "Implementation-based.",
                outputFormat: "Demonstration of the overflow and the subsequent fix.",
                testCases: [{ input: "", output: "" }],
                solution: `// Vulnerable code
// void vulnerable_func(char* input) {
//     char buffer[10];
//     int secret = 1;
//     strcpy(buffer, input); // Overflow happens here if input > 10
//     if (secret == 1) printf("Success"); else printf("Hacked!");
// }
// main() { vulnerable_func("AAAAAAAAAAAAAAAAAAAA"); } // Will print "Hacked!"

// Fixed code
// strncpy(buffer, input, sizeof(buffer) - 1);
// buffer[sizeof(buffer) - 1] = '\\0'; // Ensure null termination
`,
                explanation: "A buffer overflow occurs when data is written past the boundary of a buffer. In this stack-based overflow, the oversized input overwrites adjacent memory on the stack, changing the value of the `secret` variable. `strncpy` is safer because it takes a size argument, preventing it from writing more bytes than the buffer can hold."
            },
            {
                id: "c-s22-q2",
                title: "Implement Stack Canaries",
                description: "Simulate stack canaries for a toy function call.",
                statement: "Simulate how a stack canary works. Before a function's main logic, place a known 'canary' value on the stack. Before the function returns, check if this value has been changed. If it has, a buffer overflow has likely occurred, and the program should terminate.",
                inputFormat: "Implementation-based.",
                outputFormat: "Detection of a stack buffer overflow.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual implementation
// #define CANARY 0xDEADBEEF
//
// void my_func(char* input) {
//     int canary = CANARY;
//     char buffer[10];
//     strcpy(buffer, input); // Potential overflow
//
//     if (canary != CANARY) {
//         printf("STACK SMASHING DETECTED!\\n");
//         exit(1);
//     }
//     // ... rest of function ...
// }`,
                explanation: "A stack canary is a security mechanism used by compilers. It places a secret, random value on the stack between the local variables and the return address. A buffer overflow that overwrites local variables will also overwrite the canary. Before the function returns, it checks the canary's value. If it has changed, the program aborts, preventing the attacker from hijacking the return address."
            },
            {
                id: "c-s22-q3",
                title: "ASLR-Aware Exploit Demo",
                description: "Show address randomization.",
                statement: "Demonstrate Address Space Layout Randomization (ASLR). Write a program that prints the address of a function and a stack variable. Run it multiple times and show that the addresses are different each time. Explain how this makes exploits harder.",
                inputFormat: "Implementation-based.",
                outputFormat: "Different memory addresses on each run.",
                testCases: [{ input: "", output: "" }],
                solution: `#include <stdio.h>
void my_func() { }

int main() {
    int stack_var;
    printf("Stack variable address: %p\\n", (void*)&stack_var);
    printf("Function address: %p\\n", (void*)my_func);
    return 0;
}`,
                explanation: "ASLR is an OS-level security feature that randomizes the memory locations of key areas of a process, including the base of the executable, stack, heap, and libraries. This makes it much harder for an attacker to predict target addresses for exploits like return-to-libc attacks, as the addresses change with every execution."
            },
            {
                id: "c-s22-q4",
                title: "Prevent Shell Injection",
                description: "Use safe exec usage instead of `system()`.",
                statement: "Write a program that takes a filename as a command-line argument and calls `ls` on it. First, implement it insecurely using `system()` and show how a malicious input like `file; rm -rf /` can cause a command injection. Then, fix it by using `execvp` with an argument array.",
                inputFormat: "A command-line argument.",
                outputFormat: "Demonstration of the vulnerability and the fix.",
                testCases: [{ input: "", output: "" }],
                solution: `// Vulnerable: system("ls " + user_input);
// Malicious input: "nonexistent; whoami" would run 'whoami'.

// Secure version:
// #include <unistd.h>
//
// int main(int argc, char* argv[]) {
//     char* args[] = {"/bin/ls", "-l", argv[1], NULL};
//     execvp(args[0], args);
//     return 0;
// }`,
                explanation: "The `system()` function passes its command string to a shell for parsing, which makes it vulnerable to command injection if it includes untrusted input. `exec` family functions are safer because they do not invoke a shell. You pass the command and its arguments as a distinct array of strings, so user input is treated as a single argument and not interpreted by the shell."
            },
            {
                id: "c-s22-q5",
                title: "Secure Temporary Files",
                description: "Use `mkstemp` for secure temp files.",
                statement: "Demonstrate the insecure way of creating a temporary file (e.g., using `tmpnam` or a fixed path), explaining the race condition. Then, show the secure way using `mkstemp`, which creates a unique file and opens it atomically.",
                inputFormat: "Implementation-based.",
                outputFormat: "A securely created temporary file.",
                testCases: [{ input: "", output: "" }],
                solution: `// Insecure:
// char* filename = "/tmp/myapp.tmp"; // Predictable!
// FILE* f = fopen(filename, "w");

// Secure:
// #include <stdlib.h>
//
// char template[] = "/tmp/myappXXXXXX";
// int fd = mkstemp(template);
// if (fd != -1) {
//     printf("Created temp file: %s\\n", template);
//     // You can now write to the file descriptor 'fd'.
//     close(fd);
// }`,
                explanation: "Using predictable temporary filenames creates a race condition where an attacker can create a symbolic link at that location before your program does, potentially causing your program to overwrite a critical system file. `mkstemp` avoids this by replacing the 'XXXXXX' with random characters to generate a unique filename and opens it atomically, ensuring you are the owner of the file."
            },
            {
                id: "c-s22-q6",
                title: "Simple Sandbox",
                description: "Use chroot, uid drop, and resource limits.",
                statement: "Write a program that demonstrates sandboxing principles. It should first use `chroot` to jail the process into a new root directory, then use `setuid` to drop from root privileges to a non-privileged user, and finally use `setrlimit` to limit resources like CPU time or memory.",
                inputFormat: "Implementation-based.",
                outputFormat: "A process running in a restricted environment.",
                testCases: [{ input: "", output: "" }],
                solution: `// Requires root to run.
// #include <unistd.h>
// #include <sys/resource.h>
//
// // 1. chroot to a safe, empty directory
// chroot("/safe/empty/dir");
//
// // 2. Drop privileges
// setgid(NOBODY_GID);
// setuid(NOBODY_UID);
//
// // 3. Set resource limits (e.g., max 5 seconds of CPU time)
// struct rlimit rl;
// rl.rlim_cur = 5;
// setrlimit(RLIMIT_CPU, &rl);
//
// // 4. Now exec the untrusted program
// execv(...)`,
                explanation: "This demonstrates defense-in-depth. `chroot` limits filesystem access. Dropping privileges with `setuid`/`setgid` ensures that even if the process is compromised, the attacker won't have root access. `setrlimit` prevents resource exhaustion attacks like fork bombs or infinite loops."
            },
            {
                id: "c-s22-q7",
                title: "HMAC Verification",
                description: "Implement HMAC verification for network messages.",
                statement: "Write two functions, `generate_hmac` and `verify_hmac`, using OpenSSL's `libcrypto`. The functions should use HMAC-SHA256 to create and verify a message authentication code for a given message and a secret key.",
                inputFormat: "Implementation-based.",
                outputFormat: "Correct HMAC generation and verification.",
                testCases: [{ input: "", output: "" }],
                solution: `// Conceptual using OpenSSL's EVP interface
// #include <openssl/hmac.h>
//
// // Generate HMAC
// HMAC(EVP_sha256(), key, key_len, msg, msg_len, hmac_buf, &hmac_len);
//
// // To verify, you generate the HMAC for the received message
// // with the same key and do a constant-time comparison
// // against the received HMAC.
`,
                explanation: "HMAC (Hash-based Message Authentication Code) is used to verify both the data integrity and authenticity of a message. It combines a cryptographic hash function with a secret key. A sender computes the HMAC for a message and sends both. The receiver recomputes the HMAC on the message with the same shared secret key and verifies that it matches the one received."
            },
            {
                id: "c-s22-q8",
                title: "Secure Password Store",
                description: "Encrypt entries with AES-GCM and store salt+nonce.",
                statement: "Create a simple secure storage mechanism. Implement functions to encrypt and decrypt a password using AES-256-GCM. The encryption function must generate a random salt (for key derivation) and a random nonce (IV) for each password. The final stored value should be `salt:nonce:ciphertext:tag`.",
                inputFormat: "Implementation-based.",
                outputFormat: "Securely encrypted and correctly decrypted passwords.",
                testCases: [{ input: "", output: "" }],
                solution: `// This is a very advanced crypto problem using OpenSSL's EVP APIs.
// Conceptual Flow:
// Encrypt:
// 1. Generate random salt.
// 2. Derive key from master password and salt using PBKDF2 (PKCS5_PBKDF2_HMAC).
// 3. Generate random nonce (IV).
// 4. Initialize AES-256-GCM cipher with key and IV.
// 5. Encrypt plaintext.
// 6. Get the authentication tag from the cipher.
// 7. Store salt, nonce, ciphertext, and tag together.

// Decrypt:
// 1. Parse the stored string to get salt, nonce, ciphertext, and tag.
// 2. Derive key from master password and the stored salt.
// 3. Initialize AES-256-GCM cipher with key and nonce.
// 4. Set the expected authentication tag on the cipher.
// 5. Decrypting will FAIL if the tag does not match, indicating tampering.
`,
                explanation: "AES-GCM is a modern Authenticated Encryption with Associated Data (AEAD) cipher. It provides both confidentiality (encryption) and integrity/authenticity (the authentication tag). Using a salt with PBKDF2 makes the key derivation robust against rainbow table attacks. Using a unique nonce for every encryption is a strict requirement for GCM to be secure."
            },
        ]
    }
];
