import { ProblemCategory } from './types';

const treeNodeDef = `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};`;

export const DSA_CPP_PROBLEMS_I: ProblemCategory[] = [
    {
        category: "9. Trees",
        problems: [
            {
                id: "dsa-cpp-i1",
                title: "Preorder Traversal",
                description: "Traverse a binary tree in Preorder (Root, Left, Right).",
                statement: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "A vector of integers representing the preorder traversal.",
                testCases: [{ input: "[1,null,2,3]", output: "[1, 2, 3]" }],
                solution: `${treeNodeDef}

#include <vector>
#include <stack>

class Solution {
public:
    // Recursive Solution
    void preorder(TreeNode* root, std::vector<int>& ans) {
        if (root == nullptr) return;
        ans.push_back(root->val);
        preorder(root->left, ans);
        preorder(root->right, ans);
    }
    
    std::vector<int> preorderTraversal(TreeNode* root) {
        std::vector<int> ans;
        preorder(root, ans);
        return ans;
    }
    
    // Iterative Solution
    std::vector<int> preorderTraversalIterative(TreeNode* root) {
        std::vector<int> ans;
        if (root == nullptr) return ans;
        std::stack<TreeNode*> s;
        s.push(root);
        while(!s.empty()){
            TreeNode* temp = s.top();
            s.pop();
            ans.push_back(temp->val);
            if(temp->right) s.push(temp->right);
            if(temp->left) s.push(temp->left);
        }
        return ans;
    }
};`,
                explanation: "Preorder traversal visits the current node first, then recursively traverses the left subtree, and finally recursively traverses the right subtree. The iterative solution uses a stack, which naturally mimics the LIFO (Last-In-First-Out) behavior of recursion. We push the right child first, then the left, so that the left child is processed first when popped."
            },
            {
                id: "dsa-cpp-i2",
                title: "Inorder Traversal",
                description: "Traverse a binary tree in Inorder (Left, Root, Right).",
                statement: "Given the root of a binary tree, return the inorder traversal of its nodes' values. In a Binary Search Tree, this traversal yields the nodes in sorted order.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "A vector of integers representing the inorder traversal.",
                testCases: [{ input: "[1,null,2,3]", output: "[1, 3, 2]" }],
                solution: `${treeNodeDef}

#include <vector>
#include <stack>

class Solution {
public:
    // Recursive Solution
    void inorder(TreeNode* root, std::vector<int>& ans) {
        if (root == nullptr) return;
        inorder(root->left, ans);
        ans.push_back(root->val);
        inorder(root->right, ans);
    }

    std::vector<int> inorderTraversal(TreeNode* root) {
        std::vector<int> ans;
        inorder(root, ans);
        return ans;
    }
};`,
                explanation: "Inorder traversal recursively traverses the left subtree, visits the current node, and then recursively traverses the right subtree. An iterative solution is more complex, typically involving a stack where you keep pushing left children until you can't anymore, then pop, visit the node, and move to its right child."
            },
            {
                id: "dsa-cpp-i3",
                title: "Postorder Traversal",
                description: "Traverse a binary tree in Postorder (Left, Right, Root).",
                statement: "Given the root of a binary tree, return the postorder traversal of its nodes' values. This is often used to delete a tree from memory.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "A vector of integers representing the postorder traversal.",
                testCases: [{ input: "[1,null,2,3]", output: "[3, 2, 1]" }],
                solution: `${treeNodeDef}

#include <vector>
#include <stack>
#include <algorithm>

class Solution {
public:
    // Recursive Solution
    void postorder(TreeNode* root, std::vector<int>& ans) {
        if (root == nullptr) return;
        postorder(root->left, ans);
        postorder(root->right, ans);
        ans.push_back(root->val);
    }
    
    // Iterative Solution using two stacks
    std::vector<int> postorderTraversal(TreeNode* root) {
        std::vector<int> ans;
        if(root == nullptr) return ans;
        std::stack<TreeNode*> s1, s2;
        s1.push(root);
        while(!s1.empty()){
            TreeNode* temp = s1.top();
            s1.pop();
            s2.push(temp);
            if(temp->left) s1.push(temp->left);
            if(temp->right) s1.push(temp->right);
        }
        while(!s2.empty()){
            ans.push_back(s2.top()->val);
            s2.pop();
        }
        return ans;
    }
};`,
                explanation: "Postorder traversal recursively traverses the left subtree, then the right subtree, and finally visits the current node. The iterative solution is less intuitive. A common method uses two stacks. It's a modification of preorder: instead of printing, we push nodes to a second stack. The order of processing (Root, Right, Left) results in the second stack having the correct postorder (Left, Right, Root) when popped."
            },
            {
                id: "dsa-cpp-i4",
                title: "Level Order Traversal",
                description: "Traverse a binary tree level by level.",
                statement: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
                inputFormat: "The root of a binary tree.",
                outputFormat: "A vector of vectors, where each inner vector is a level.",
                testCases: [{ input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }],
                solution: `${treeNodeDef}
#include <vector>
#include <queue>

class Solution {
public:
    std::vector<std::vector<int>> levelOrder(TreeNode* root) {
        std::vector<std::vector<int>> ans;
        if(root == nullptr) return ans;
        
        std::queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()){
            int levelSize = q.size();
            std::vector<int> currentLevel;
            for(int i = 0; i < levelSize; ++i) {
                TreeNode* temp = q.front();
                q.pop();
                currentLevel.push_back(temp->val);
                if(temp->left) q.push(temp->left);
                if(temp->right) q.push(temp->right);
            }
            ans.push_back(currentLevel);
        }
        return ans;
    }
};`,
                explanation: "Level order traversal uses a Queue, which follows a First-In-First-Out (FIFO) principle, perfect for exploring level by level. The algorithm pushes the root to a queue. Then, in a loop, it processes all nodes at the current level (determined by `q.size()` at the start of the loop), adds their values to a list, and enqueues their children for the next level."
            },
            {
                id: "dsa-cpp-i5",
                title: "Height of Tree",
                description: "Find the height or maximum depth of a binary tree.",
                statement: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "The height of the tree as an integer.",
                testCases: [{ input: "[3,9,20,null,null,15,7]", output: "3" }],
                solution: `${treeNodeDef}
#include <algorithm>

class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(root == nullptr) {
            return 0;
        }
        
        int leftHeight = maxDepth(root->left);
        int rightHeight = maxDepth(root->right);
        
        return 1 + std::max(leftHeight, rightHeight);
    }
};`,
                explanation: "This is a classic recursive problem. The height of a tree is 1 (for the current node) plus the maximum of the heights of its left and right subtrees. The base case for the recursion is an empty tree (a `nullptr` node), which has a height of 0."
            },
            {
                id: "dsa-cpp-i6",
                title: "Diameter of Binary Tree",
                description: "Find the longest path between any two nodes in a tree.",
                statement: "The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "The integer diameter.",
                testCases: [{ input: "[1,2,3,4,5]", output: "3" }],
                solution: `${treeNodeDef}
#include <algorithm>

class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int diameter = 0;
        height(root, diameter);
        return diameter;
    }
private:
    int height(TreeNode* node, int& diameter) {
        if (!node) {
            return 0;
        }
        int lh = height(node->left, diameter);
        int rh = height(node->right, diameter);
        diameter = std::max(diameter, lh + rh);
        return 1 + std::max(lh, rh);
    }
};`,
                explanation: "The diameter of a tree is the maximum of: 1) the diameter of the left subtree, 2) the diameter of the right subtree, or 3) the height of the left subtree + the height of the right subtree. This solution uses a modified height-calculating function. The function returns the height of the subtree, but it also updates a global `diameter` variable by reference whenever it calculates `lh + rh`, which represents the length of a path passing through the current node."
            },
            {
                id: "dsa-cpp-i7",
                title: "Mirror of a Binary Tree",
                description: "Convert a binary tree into its Mirror Tree.",
                statement: "Given a binary tree, convert it to its mirror image by swapping the left and right children of all nodes.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "The root of the mirrored tree.",
                testCases: [{ input: "[1,2,3]", output: "[1,3,2]" }],
                solution: `${treeNodeDef}
#include <algorithm>

class Solution {
public:
    TreeNode* mirrorTree(TreeNode* root) {
        if (root == nullptr) {
            return nullptr;
        }
        
        // Swap the children
        std::swap(root->left, root->right);
        
        // Recur for left and right subtrees
        mirrorTree(root->left);
        mirrorTree(root->right);
        
        return root;
    }
};`,
                explanation: "This is a recursive problem that can be solved with a traversal. At each node, we simply swap its left and right children. Then, we make recursive calls for the (now swapped) left and right subtrees to continue the process down the tree."
            },
            {
                id: "dsa-cpp-i8",
                title: "Left View / Right View of Binary Tree",
                description: "Print the left or right view of a binary tree.",
                statement: "Given a binary tree, imagine yourself standing on the left side of it. Return the sequence of nodes you can see from top to bottom.",
                inputFormat: "The root of a binary tree.",
                outputFormat: "A vector of the values of the nodes in the left view.",
                testCases: [{ input: "[1,2,3,null,5,null,4]", output: "[1, 2, 5]" }],
                solution: `${treeNodeDef}
#include <vector>
#include <queue>

class Solution {
public:
    std::vector<int> leftView(TreeNode* root) {
        std::vector<int> ans;
        if (!root) return ans;
        
        std::queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            // Add the first element of the current level
            ans.push_back(q.front()->val);
            
            for (int i = 0; i < levelSize; ++i) {
                TreeNode* temp = q.front();
                q.pop();
                
                // Add children for the next level
                if (temp->left) q.push(temp->left);
                if (temp->right) q.push(temp->right);
            }
        }
        return ans;
    }
};`,
                explanation: "The left view contains the first node of each level. We can find this using a Level Order Traversal (BFS). In each level of the traversal, we simply add the value of the very first node to our result list. To get the right view, you would add the last node of each level instead."
            }
        ]
    }
];
