import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const JAVASCRIPT_PART5_TOPICS: Topic[] = [
    // 19. Modern / Latest Topics
    {
        id: 'js-latest-await',
        title: 'Top-Level Await',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <>
                <p className="mb-4">Top-level `await` allows you to use the `await` keyword in modules without needing an enclosing `async` function. This is useful for initializing resources or fetching data when a module is first loaded.</p>
                <CodeBlock language="javascript" code={`// file: data-fetcher.js
const response = await fetch('https://api.example.com/data');
const data = await response.json();

export default data;

// file: main.js
// The main module will wait for data-fetcher.js to resolve before executing.
import myData from './data-fetcher.js';
console.log(myData);`} />
            </>
        )
    },
    {
        id: 'js-latest-optional-chaining',
        title: 'Optional Chaining (?.)',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <>
                <p className="mb-4">The optional chaining operator (`?.`) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. If a reference is `null` or `undefined`, the expression short-circuits and returns `undefined` instead of throwing an error.</p>
                <CodeBlock language="javascript" code={`const user = {
  name: "Alex",
  // address is missing
};

// Without optional chaining (throws a TypeError)
// const street = user.address.street; 

// With optional chaining
const street = user?.address?.street;
console.log(street); // undefined`} />
            </>
        )
    },
    {
        id: 'js-latest-nullish-coalescing',
        title: 'Nullish Coalescing (??)',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <>
                <p className="mb-4">The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. This is a safer alternative to the `||` operator, which would also trigger on falsy values like `0`, `""`, or `false`.</p>
                <CodeBlock language="javascript" code={`const count = 0;

// Using OR operator (||) - incorrect result
const quantity_or = count || 10;
console.log(quantity_or); // 10 (because 0 is falsy)

// Using nullish coalescing (??) - correct result
const quantity_nullish = count ?? 10;
console.log(quantity_nullish); // 0 (because 0 is not null or undefined)`} />
            </>
        )
    },
    {
        id: 'js-latest-private-fields',
        title: 'Private Class Fields (#)',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: <p>Covered in "OOP in JavaScript". Modern classes allow for truly private fields and methods using a `#` prefix, ensuring they cannot be accessed from outside the class instance, which strengthens encapsulation.</p>
    },
    {
        id: 'js-latest-promise-any',
        title: 'Promise.any()',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p className="mb-4">`Promise.any()` takes an iterable of Promises and returns a single Promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of that promise. If all promises reject, it rejects with an `AggregateError`.</p>
        )
    },
    {
        id: 'js-latest-memory',
        title: 'WeakRef & FinalizationRegistry',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>These are advanced features for managing memory. `WeakRef` holds a "weak" reference to an object, which doesn't prevent it from being garbage collected. `FinalizationRegistry` lets you register a callback to be invoked when an object is garbage collected.</p>
        )
    },
    {
        id: 'js-latest-web-workers',
        title: 'Web Workers',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>Web Workers provide a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface, making the main page more responsive.</p>
        )
    },
    {
        id: 'js-latest-service-workers',
        title: 'Service Workers (PWA)',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>A service worker is a script that your browser runs in the background, separate from a web page. It enables features that don't need a web page or user interaction, like push notifications and background sync. It's a core component of Progressive Web Apps (PWAs), allowing for offline capabilities by intercepting network requests.</p>
        )
    },
    {
        id: 'js-latest-webrtc',
        title: 'WebRTC Basics',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>WebRTC (Web Real-Time Communication) is an open-source project providing browsers and mobile applications with real-time communication capabilities via simple APIs. It enables peer-to-peer audio, video, and data sharing directly between browsers without needing an intermediary server for the data itself.</p>
        )
    },
    {
        id: 'js-latest-websockets',
        title: 'WebSockets (real-time apps)',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>The WebSocket API is an advanced technology that makes it possible to open an interactive, two-way communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply. It's essential for real-time applications like live chats and online gaming.</p>
        )
    },
    {
        id: 'js-latest-fetch-streams',
        title: 'Fetch Streams',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>The `body` of a `fetch()` response is a `ReadableStream`. This allows you to start processing the response data chunk by chunk as it arrives from the server, instead of waiting for the entire response to download. This is useful for handling large files or streaming video.</p>
        )
    },
    {
        id: 'js-latest-temporal',
        title: 'Temporal API',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>The Temporal API is a new, modern proposal for working with dates and times in JavaScript. It aims to fix the many long-standing issues with the old `Date` object by providing a simpler, more powerful, and immutable API for date and time manipulations. It is an upcoming feature and not yet available in all browsers.</p>
        )
    },
    {
        id: 'js-latest-edge-functions',
        title: 'Edge Functions',
        parent: '19. Modern / Latest Topics (2023–2025 Updates)',
        content: (
            <p>Edge Functions are a new trend in web development where you run server-side code on a CDN (Content Delivery Network) "edge" location, which is physically close to the user. This reduces latency and improves performance. Platforms like Vercel, Netlify, and Cloudflare Workers offer this capability.</p>
        )
    },
    // 20. Framework Basics
    {
        id: 'js-framework-react',
        title: 'React.js Basics',
        parent: '20. Framework Basics',
        content: (
            <>
                <p className="mb-4">React is a JavaScript library for building user interfaces. It lets you create reusable UI components.</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Components:</strong> Reusable pieces of UI (e.g., a button, a form).</li>
                    <li><strong>JSX:</strong> A syntax extension that lets you write HTML-like code in JavaScript.</li>
                    <li><strong>Props:</strong> Data passed down from a parent component to a child component.</li>
                    <li><strong>State:</strong> Data that is managed within a component. When state changes, the component re-renders.</li>
                </ul>
            </>
        )
    },
    {
        id: 'js-framework-next',
        title: 'Next.js Basics',
        parent: '20. Framework Basics',
        content: (
            <p>Next.js is a popular framework built on top of React. It provides production-ready features out of the box, such as file-based routing, server-side rendering (SSR), static site generation (SSG), and API routes, making it easier to build fast and SEO-friendly applications.</p>
        )
    },
    {
        id: 'js-framework-typescript',
        title: 'TypeScript',
        parent: '20. Framework Basics',
        content: (
            <>
                <p className="mb-4">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's a "superset" of JavaScript, meaning any valid JS code is also valid TS code. It adds static types to the language.</p>
                <CodeBlock language="typescript" code={`// TypeScript adds static types with annotations
function greet(name: string): string {
  return "Hello, " + name;
}

// This would cause a compile-time error, catching bugs early!
// greet(123); `} />
            </>
        )
    },
];