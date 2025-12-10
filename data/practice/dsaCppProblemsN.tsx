import { ProblemCategory } from './types';

// FIX: Added a placeholder TestCase object to the empty array to match the type definition.
const placeholderProblem = { statement: "...", inputFormat: "...", outputFormat: "...", testCases: [{input: "", output: ""}], solution: "", explanation: "" };

export const DSA_CPP_PROBLEMS_N: ProblemCategory[] = [
    {
        category: "14. Greedy",
        problems: [
            {
                id: "dsa-cpp-n1",
                title: "Activity Selection Problem",
                description: "Select the maximum number of non-overlapping activities.",
                statement: "You are given `n` activities with their start and finish times. Select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.",
                inputFormat: "N, then N pairs of start and finish times.",
                outputFormat: "The maximum number of activities.",
                testCases: [{ input: "6\n1 2\n3 4\n0 6\n5 7\n8 9\n5 9", output: "4" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

struct Activity {
    int start, finish;
};

bool activityCompare(Activity s1, Activity s2) {
    return (s1.finish < s2.finish);
}

void printMaxActivities(std::vector<Activity>& arr) {
    std::sort(arr.begin(), arr.end(), activityCompare);
    
    int i = 0;
    std::cout << "Selected: (" << arr[i].start << ", " << arr[i].finish << "), ";
    int count = 1;

    for (int j = 1; j < arr.size(); j++) {
        if (arr[j].start >= arr[i].finish) {
            std::cout << "(" << arr[j].start << ", " << arr[j].finish << "), ";
            i = j;
            count++;
        }
    }
    std::cout << "\\nTotal: " << count;
}`,
                explanation: "The greedy choice is to always pick the next activity whose finish time is earliest among the remaining activities. By sorting the activities based on their finish times, we can iterate through them. We pick the first activity. Then, for each subsequent activity, we select it if its start time is after or equal to the finish time of the previously selected activity."
            },
            {
                id: "dsa-cpp-n2",
                title: "Fractional Knapsack",
                description: "Solve the Fractional Knapsack problem using a greedy approach.",
                statement: "Given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value. In the Fractional Knapsack, we can break items for maximizing the total value.",
                inputFormat: "W, N, then N pairs of value and weight.",
                outputFormat: "The maximum value.",
                testCases: [{ input: "50\n3\n60 10\n100 20\n120 30", output: "240.0" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

struct Item {
    int value, weight;
};

bool cmp(struct Item a, struct Item b) {
    double r1 = (double)a.value / a.weight;
    double r2 = (double)b.value / b.weight;
    return r1 > r2;
}

double fractionalKnapsack(int W, std::vector<Item>& arr) {
    std::sort(arr.begin(), arr.end(), cmp);
    
    double final_value = 0.0;
    int current_weight = 0;
    
    for (const auto& item : arr) {
        if (current_weight + item.weight <= W) {
            current_weight += item.weight;
            final_value += item.value;
        } else {
            int remain = W - current_weight;
            final_value += item.value * ((double)remain / item.weight);
            break;
        }
    }
    return final_value;
}`,
                explanation: "The greedy approach is to pick the items with the highest value-to-weight ratio first. We sort the items in descending order of this ratio. Then, we iterate through the sorted items, adding them to the knapsack until it's full. If an item doesn't fit completely, we take a fraction of it that fills the remaining capacity."
            },
            { id: "dsa-cpp-n3", title: "Job Sequencing Problem", description: "Maximize profit by sequencing jobs.", ...placeholderProblem },
            { id: "dsa-cpp-n4", title: "Huffman Coding", description: "Generate Huffman codes for characters.", ...placeholderProblem },
            { id: "dsa-cpp-n5", title: "N meetings in one room", description: "Same as Activity Selection.", ...placeholderProblem }
        ]
    }
];