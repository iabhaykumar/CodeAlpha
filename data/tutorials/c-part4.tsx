import React from 'react';
import { Topic } from './types';
import CodeBlock from '../../components/CodeBlock';

export const C_PART4_TOPICS: Topic[] = [
  // 7. Structures & Unions
  {
    id: 'c-structs',
    title: 'Structures (struct)',
    parent: '7. Structs & Unions',
    content: (
      <>
        <p className="mb-4">Structures (also called structs) are a way to group several related variables into one place. Each variable in the structure is known as a <strong>member</strong> of the structure.</p>
        <CodeBlock language="c" code={`struct Student {
  int id;
  char name[50];
  float percentage;
};

int main() {
  struct Student s1;
  
  s1.id = 1;
  strcpy(s1.name, "CodeAlpha"); // Need string.h
  s1.percentage = 92.5;

  printf("Name: %s\n", s1.name);
  return 0;
}`} />
      </>
    )
  },
  {
    id: 'c-unions',
    title: 'Unions',
    parent: '7. Structs & Unions',
    content: (
      <>
        <p className="mb-4">A <strong>Union</strong> is a special data type available in C that allows to store different data types in the same memory location. You can define a union with many members, but only one member can contain a value at any given time.</p>
        <CodeBlock language="c" code={`union Data {
   int i;
   float f;
   char str[20];
};

int main() {
   union Data data;
   
   data.i = 10;
   printf("data.i : %d\n", data.i);
   
   data.f = 220.5;
   // data.i is now corrupted because memory is shared
   printf("data.f : %f\n", data.f); 
   
   return 0;
}`} />
      </>
    )
  },

  // 8. File Handling
  {
    id: 'c-file-handling',
    title: 'File I/O (fopen, fprintf)',
    parent: '8. File Handling',
    content: (
      <>
        <p className="mb-4">C provides a set of functions to handle files (create, open, read, write, close).</p>
        <CodeBlock language="c" code={`#include <stdio.h>

int main() {
   FILE *fptr;

   // Open file in write mode
   fptr = fopen("filename.txt", "w");

   // Write text
   fprintf(fptr, "Hello CodeAlpha!");

   // Close file
   fclose(fptr);
   
   return 0;
}`} />
      </>
    )
  },

  // 9. Data Structures Implementation (Requested Topic)
  {
    id: 'c-ds-linkedlist',
    title: 'Singly Linked List Implementation',
    parent: '9. Data Structures Implementation',
    content: (
      <>
        <p className="mb-4">A <strong>Singly Linked List</strong> is a linear data structure where elements are not stored in contiguous memory locations. Each element (node) contains data and a pointer to the next node.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Complete C Implementation</h3>
        <CodeBlock language="c" code={`#include <stdio.h>
#include <stdlib.h>

// Define the Node structure
struct Node {
    int data;
    struct Node* next;
};

// Function to print the linked list
void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d -> ", n->data);
        n = n->next;
    }
    printf("NULL\n");
}

// Function to insert a new node at the beginning
void push(struct Node** head_ref, int new_data) {
    // 1. Allocate node
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    
    // 2. Put in the data
    new_node->data = new_data;
    
    // 3. Make next of new node as head
    new_node->next = (*head_ref);
    
    // 4. Move the head to point to the new node
    (*head_ref) = new_node;
}

int main() {
    struct Node* head = NULL;

    push(&head, 30);
    push(&head, 20);
    push(&head, 10);

    printf("Created Linked List: \n");
    printList(head);

    return 0;
}`} />
        <h3 className="text-xl font-bold mt-6 mb-2">Advantages over Arrays</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Dynamic Size (No need to define size in advance).</li>
            <li>Ease of Insertion/Deletion (No need to shift elements).</li>
        </ul>
      </>
    )
  }
];