import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_H: ProblemCategory[] = [
    {
        category: "8. Backtracking",
        problems: [
            {
                id: "dsa-cpp-h1",
                title: "N-Queens",
                description: "Place N queens on an N×N chessboard so no two queens attack each other.",
                statement: "The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal. Find one such configuration.",
                inputFormat: "An integer N.",
                outputFormat: "An N x N board showing the placement of queens (e.g., 'Q' for queen, '.' for empty).",
                testCases: [{ input: "4", output: ". Q . .\n. . . Q\nQ . . .\n. . Q .\n" }],
                solution: `#include <iostream>
#include <vector>
#include <string>

class Solution {
public:
    std::vector<std::vector<std::string>> solveNQueens(int n) {
        std::vector<std::vector<std::string>> ans;
        std::vector<std::string> board(n, std::string(n, '.'));
        solve(0, board, ans, n);
        return ans;
    }

private:
    bool isSafe(int row, int col, std::vector<std::string>& board, int n) {
        // Check upper-left diagonal, left row, and lower-left diagonal
        int duprow = row, dupcol = col;
        while (row >= 0 && col >= 0) {
            if (board[row][col] == 'Q') return false;
            row--; col--;
        }
        row = duprow; col = dupcol;
        while (col >= 0) {
            if (board[row][col] == 'Q') return false;
            col--;
        }
        row = duprow; col = dupcol;
        while (row < n && col >= 0) {
            if (board[row][col] == 'Q') return false;
            row++; col--;
        }
        return true;
    }

    void solve(int col, std::vector<std::string>& board, std::vector<std::vector<std::string>>& ans, int n) {
        if (col == n) {
            ans.push_back(board);
            return;
        }
        for (int row = 0; row < n; row++) {
            if (isSafe(row, col, board, n)) {
                board[row][col] = 'Q';
                solve(col + 1, board, ans, n);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
};`,
                explanation: "Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally. The core idea is to explore a path, and as soon as we determine it cannot lead to a solution, we 'backtrack' (undo the last choice) and try another path. For N-Queens, we try to place a queen in each column, one by one. For a given column, we iterate through all rows. If placing a queen in `(row, col)` is safe, we place it and recursively call the function for the next column. If the recursion fails, we remove the queen (backtrack) and try the next row."
            },
            {
                id: "dsa-cpp-h2",
                title: "Knights Tour (Basic)",
                description: "Find a sequence of moves of a knight on a chessboard.",
                ...placeholderProblem,
                statement: "Given an N x N board, a knight starts at the top-left cell. The problem is to find a sequence of moves such that the knight visits every cell on the board exactly once. This is a classic backtracking problem.",
                solution: `// A full implementation is quite long. The core idea is:
//
// bool solveKnightTour(int x, int y, int move_count, int board[N][N]) {
//     if (move_count == N*N) {
//         return true; // All cells visited
//     }
//
//     // Try all 8 possible moves for a knight
//     for (int i = 0; i < 8; i++) {
//         int next_x = x + move_x[i];
//         int next_y = y + move_y[i];
//
//         if (isSafe(next_x, next_y, board)) {
//             board[next_x][next_y] = move_count;
//             if (solveKnightTour(next_x, next_y, move_count + 1, board)) {
//                 return true;
//             } else {
//                 board[next_x][next_y] = -1; // Backtrack
//             }
//         }
//     }
//     return false;
// }`,
                explanation: "We use a recursive function that takes the current position of the knight. The base case is when all cells have been visited. In the recursive step, we try all 8 possible moves from the current cell. For each valid move, we mark the new cell and recursively call the function. If the recursive call returns false (meaning it hit a dead end), we unmark the cell (backtrack) and try the next move."
            },
            {
                id: "dsa-cpp-h3",
                title: "Rat in a Maze",
                description: "Find a path for a rat from source to destination in a maze.",
                ...placeholderProblem,
                statement: "Given a maze as an N x N binary matrix where `1` means the cell is open and `0` means it's blocked, find a path for a rat from the top-left corner (0,0) to the bottom-right corner (N-1, N-1).",
                solution: `// Similar to Knight's Tour, but with different moves (e.g., Down, Right).
//
// bool solveMazeUtil(int x, int y, int maze[N][N], int sol[N][N]) {
//     if (x == N-1 && y == N-1 && maze[x][y] == 1) {
//         sol[x][y] = 1;
//         return true; // Reached destination
//     }
//
//     if (isSafe(x, y, maze)) {
//         sol[x][y] = 1; // Mark as part of path
//
//         // Try moving down
//         if (solveMazeUtil(x + 1, y, maze, sol)) return true;
//
//         // Try moving right
//         if (solveMazeUtil(x, y + 1, maze, sol)) return true;
//
//         sol[x][y] = 0; // Backtrack
//         return false;
//     }
//     return false;
// }`,
                explanation: "This backtracking algorithm explores possible paths. The function checks if the current cell is the destination. If not, it marks the current cell as part of the solution path. Then, it recursively tries to move in one direction (e.g., down). If that path leads to the solution, it returns true. If not, it tries another direction (e.g., right). If no path from the current cell leads to the solution, it unmarks the cell (backtracks) and returns false."
            },
            {
                id: "dsa-cpp-h4",
                title: "Sudoku Solver (Backtracking)",
                description: "Solve a Sudoku puzzle using backtracking.",
                ...placeholderProblem,
                statement: "Write a program to solve a Sudoku puzzle by filling the empty cells. A Sudoku solution must satisfy all of the following rules: 1. Each of the digits 1-9 must occur exactly once in each row. 2. Each of the digits 1-9 must occur exactly once in each column. 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.",
                solution: `bool solveSudoku(int grid[N][N]) {
    int row, col;
    if (!findUnassignedLocation(grid, row, col)) {
        return true; // All filled, solved!
    }

    for (int num = 1; num <= 9; num++) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) {
                return true;
            }
            grid[row][col] = 0; // Backtrack
        }
    }
    return false; // This triggers backtracking
}

bool isSafe(int grid[N][N], int row, int col, int num) {
    // Check row, column, and 3x3 box
    // ...
    return true;
}`,
                explanation: "The algorithm works by finding an empty cell. It then tries to place each digit from 1 to 9 in that cell. For each digit, it first checks if placing it there violates any Sudoku rules (`isSafe`). If it's safe, it places the digit and makes a recursive call to solve the rest of the board. If the recursive call returns `false` (meaning it hit a dead end), it 'backtracks' by resetting the cell to empty and trying the next digit."
            },
            {
                id: "dsa-cpp-h5",
                title: "Generate Balanced Parentheses",
                description: "Generate all combinations of well-formed parentheses.",
                ...placeholderProblem,
                statement: "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed (balanced) parentheses.",
                testCases: [{ input: "3", output: "((()))\n(()())\n(())()\n()(())\n()()()" }],
                solution: `#include <iostream>
#include <vector>
#include <string>

class Solution {
public:
    void generate(std::vector<std::string>& ans, std::string current, int open, int close, int n) {
        if (current.length() == 2 * n) {
            ans.push_back(current);
            return;
        }
        
        if (open < n) {
            generate(ans, current + "(", open + 1, close, n);
        }
        if (close < open) {
            generate(ans, current + ")", open, close + 1, n);
        }
    }

    std::vector<std::string> generateParenthesis(int n) {
        std::vector<std::string> ans;
        generate(ans, "", 0, 0, n);
        return ans;
    }
};`,
                explanation: "This recursive solution keeps track of the number of open and close parentheses used. There are two main conditions for building a valid string: 1. We can add an opening parenthesis `(` as long as we haven't used all `n` of them. 2. We can add a closing parenthesis `)` as long as the number of closing parentheses is less than the number of opening ones (to ensure it remains balanced). The recursion stops when the string reaches the total length of `2*n`."
            }
        ]
    }
];