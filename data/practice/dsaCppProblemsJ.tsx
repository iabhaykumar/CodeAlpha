import { ProblemCategory } from './types';

const treeNodeDef = `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};`;

export const DSA_CPP_PROBLEMS_J: ProblemCategory[] = [
    {
        category: "10. Binary Search Tree – BST",
        problems: [
            {
                id: "dsa-cpp-j1",
                title: "Insert Node in BST",
                description: "Insert a new node into a Binary Search Tree.",
                statement: "Write a function to insert a new value into a Binary Search Tree (BST) while maintaining its properties (left child < parent < right child).",
                inputFormat: "The root of a BST and an integer value to insert.",
                outputFormat: "The root of the modified BST.",
                testCases: [{ input: "root = [4,2,7,1,3], val = 5", output: "[4,2,7,1,3,5]" }],
                solution: `${treeNodeDef}

class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (root == nullptr) {
            return new TreeNode(val);
        }
        if (val < root->val) {
            root->left = insertIntoBST(root->left, val);
        } else {
            root->right = insertIntoBST(root->right, val);
        }
        return root;
    }
};`,
                explanation: "Insertion in a BST is a recursive process. The base case is when we find an empty spot (`nullptr`), where we create the new node. In the recursive step, we compare the value to be inserted with the current node's value. If it's smaller, we recurse on the left subtree; otherwise, we recurse on the right subtree."
            },
            {
                id: "dsa-cpp-j2",
                title: "Delete Node in BST",
                description: "Delete a node from a Binary Search Tree.",
                statement: "Given a root node of a BST and a key, delete the node with the given key in the BST. Return the root node of the BST.",
                inputFormat: "The root of a BST and an integer key.",
                outputFormat: "The root of the modified BST.",
                testCases: [{ input: "root = [5,3,6,2,4,null,7], key = 3", output: "[5,4,6,2,null,null,7]" }],
                solution: `${treeNodeDef}

class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (!root) return nullptr;

        if (key < root->val) {
            root->left = deleteNode(root->left, key);
        } else if (key > root->val) {
            root->right = deleteNode(root->right, key);
        } else {
            // Case 1: Node with only one child or no child
            if (!root->left) {
                TreeNode* temp = root->right;
                delete root;
                return temp;
            } else if (!root->right) {
                TreeNode* temp = root->left;
                delete root;
                return temp;
            }
            // Case 2: Node with two children
            TreeNode* temp = findMin(root->right);
            root->val = temp->val;
            root->right = deleteNode(root->right, temp->val);
        }
        return root;
    }

    TreeNode* findMin(TreeNode* node) {
        while (node && node->left) {
            node = node->left;
        }
        return node;
    }
};`,
                explanation: "Deletion is the most complex BST operation. There are three cases: 1. The node is a leaf (no children): just delete it. 2. The node has one child: replace the node with its child. 3. The node has two children: find its inorder successor (the smallest node in its right subtree), copy the successor's value to the current node, and then recursively delete the successor."
            },
            {
                id: "dsa-cpp-j3",
                title: "Search Node in BST",
                description: "Search for a given value in a BST.",
                statement: "Given the root of a BST and a value, find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node.",
                inputFormat: "The root of a BST and an integer value.",
                outputFormat: "The node with the given value, or `nullptr` if not found.",
                testCases: [{ input: "root = [4,2,7,1,3], val = 2", output: "[2,1,3]" }],
                solution: `${treeNodeDef}

class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        while (root != nullptr && root->val != val) {
            if (val < root->val) {
                root = root->left;
            } else {
                root = root->right;
            }
        }
        return root;
    }
};`,
                explanation: "Searching in a BST is very efficient (O(log n) on average). We start at the root. If the target value is equal to the current node's value, we've found it. If the target is smaller, we know it must be in the left subtree. If it's larger, it must be in the right subtree. We repeat this process until we find the value or reach a `nullptr`."
            },
            {
                id: "dsa-cpp-j4",
                title: "Validate BST",
                description: "Check if a given binary tree is a valid BST.",
                statement: "Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "'true' or 'false'.",
                testCases: [{ input: "[5,1,4,null,null,3,6]", output: "false" }],
                solution: `${treeNodeDef}

class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, nullptr, nullptr);
    }
    
    bool validate(TreeNode* node, TreeNode* low, TreeNode* high) {
        if (!node) return true;
        
        if ((low && node->val <= low->val) || (high && node->val >= high->val)) {
            return false;
        }
        
        return validate(node->left, low, node) && validate(node->right, node, high);
    }
};`,
                explanation: "A common mistake is to only check if `node->left->val < node->val`. This is not sufficient. The correct approach is to perform a recursive traversal and pass down the valid range (min and max values) for each node. For a node's left child, the upper bound becomes the node's own value. For its right child, the lower bound becomes the node's value."
            },
            {
                id: "dsa-cpp-j5",
                title: "Lowest Common Ancestor in BST",
                description: "Find the lowest common ancestor of two nodes in a BST.",
                statement: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in the tree that has both `p` and `q` as descendants.",
                inputFormat: "The root of a BST and two nodes `p` and `q`.",
                outputFormat: "The LCA node.",
                testCases: [{ input: "root = [6,2,8,0,4,7,9], p = 2, q = 8", output: "6" }],
                solution: `${treeNodeDef}

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while (root) {
            if (p->val > root->val && q->val > root->val) {
                root = root->right;
            } else if (p->val < root->val && q->val < root->val) {
                root = root->left;
            } else {
                // This is the split point, so this is the LCA
                return root;
            }
        }
        return nullptr;
    }
};`,
                explanation: "The properties of a BST make finding the LCA very efficient. We start from the root. If both `p` and `q` are greater than the current node, the LCA must be in the right subtree. If both are smaller, it must be in the left subtree. If one is smaller and one is larger (or one is the current node), then the current node is the 'split point' and is therefore the LCA."
            }
        ]
    }
];
