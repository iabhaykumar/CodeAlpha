import { ProblemCategory } from './types';

export const DSA_CPP_PROBLEMS_R: ProblemCategory[] = [
    {
        category: "18. Miscellaneous",
        problems: [
            {
                id: "dsa-cpp-r1",
                title: "Majority Element",
                description: "Find the element that appears more than n/2 times.",
                statement: "Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.",
                inputFormat: "N, then N integers.",
                outputFormat: "The majority element.",
                testCases: [{ input: "7\n2 2 1 1 1 2 2", output: "2" }],
                solution: `#include <iostream>
#include <vector>

int majorityElement(std::vector<int>& nums) {
    int count = 0;
    int candidate = 0;

    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
}

int main() {
    // ... read vector ...
    // std::cout << majorityElement(nums);
    return 0;
}`,
                explanation: "This solution uses Moore's Voting Algorithm, which solves the problem in O(n) time and O(1) space. The algorithm works by maintaining a `candidate` and a `count`. It iterates through the array. If the `count` is 0, it sets the current element as the new `candidate`. It increments the count if the current element is the same as the candidate and decrements it otherwise. Since the majority element appears more than n/2 times, it's guaranteed to be the final candidate."
            },
            {
                id: "dsa-cpp-r2",
                title: "Minimum Platform Problem",
                description: "Find the minimum number of platforms required for a railway station.",
                statement: "Given the arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits.",
                inputFormat: "N, then N arrival times, then N departure times.",
                outputFormat: "The minimum number of platforms.",
                testCases: [{ input: "6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000", output: "3" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

int findPlatform(std::vector<int>& arr, std::vector<int>& dep) {
    std::sort(arr.begin(), arr.end());
    std::sort(dep.begin(), dep.end());

    int platforms_needed = 1;
    int result = 1;
    int i = 1, j = 0;
    int n = arr.size();

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            platforms_needed++;
            i++;
        } else {
            platforms_needed--;
            j++;
        }
        result = std::max(result, platforms_needed);
    }
    return result;
}`,
                explanation: "The greedy approach sorts both arrival and departure times independently. We use two pointers, one for arrival (`i`) and one for departure (`j`). We iterate through the events in chronological order. If the next event is an arrival, we need one more platform. If it's a departure, one platform becomes free. We keep track of the maximum number of platforms needed at any point in time."
            },
            {
                id: "dsa-cpp-r3",
                title: "Celebrity Problem",
                description: "Find the celebrity in a party, if one exists.",
                statement: "In a party of N people, a celebrity is a person who is known by everyone but knows no one. You are given a matrix `knows[i][j] = 1` if person `i` knows person `j`. Find the celebrity.",
                inputFormat: "N, then an N x N matrix.",
                outputFormat: "The index of the celebrity or -1.",
                testCases: [{ input: "3\n0 1 0\n0 0 0\n0 1 0", output: "1" }],
                solution: `#include <vector>
#include <stack>

// A helper function to check if a knows b
// bool knows(const std::vector<std::vector<int>>& M, int a, int b);

int celebrity(const std::vector<std::vector<int>>& M, int n) {
    std::stack<int> s;
    for (int i = 0; i < n; i++) {
        s.push(i);
    }

    while (s.size() > 1) {
        int a = s.top(); s.pop();
        int b = s.top(); s.pop();
        if (knows(M, a, b)) {
            s.push(b); // a knows b, so a cannot be a celebrity
        } else {
            s.push(a); // a does not know b, so b cannot be a celebrity
        }
    }
    
    if (s.empty()) return -1;

    int candidate = s.top();
    for (int i = 0; i < n; i++) {
        if (i != candidate && (knows(M, candidate, i) || !knows(M, i, candidate))) {
            return -1;
        }
    }
    return candidate;
}`,
                explanation: "This O(n) solution first uses a stack to find a potential `candidate`. We push all people onto the stack. Then, we pop two people at a time, `a` and `b`. If `a` knows `b`, `a` cannot be a celebrity, so we push `b` back. If `a` does not know `b`, `b` cannot be a celebrity, so we push `a` back. We repeat until one person is left. This person is our only `candidate`. We then perform a final check to verify if this candidate is indeed known by everyone and knows no one."
            },
            {
                id: "dsa-cpp-r4",
                title: "Trapping Rainwater",
                description: "Compute how much water can be trapped between bars.",
                statement: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
                inputFormat: "N, then N integers for the elevation map.",
                outputFormat: "The total amount of trapped water.",
                testCases: [{ input: "12\n0 1 0 2 1 0 1 3 2 1 2 1", output: "6" }],
                solution: `#include <iostream>
#include <vector>
#include <algorithm>

int trap(const std::vector<int>& height) {
    int n = height.size();
    if (n == 0) return 0;

    int left = 0, right = n - 1;
    int left_max = 0, right_max = 0;
    int result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                result += (left_max - height[left]);
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                result += (right_max - height[right]);
            }
            right--;
        }
    }
    return result;
}`,
                explanation: "This is an efficient O(n) time and O(1) space two-pointer solution. The amount of water trapped above any bar is determined by the height of the shorter of the two highest bars to its left and right. We use two pointers, `left` and `right`, and two variables, `left_max` and `right_max`. We move the shorter of the two pointers inward. If `height[left]` is shorter, we know the water level is capped by `left_max`, so we can calculate the trapped water at that position. The same logic applies to the right side."
            },
            {
                id: "dsa-cpp-r5",
                title: "Implement a Timer Wheel",
                description: "Efficiently schedule many concurrent timers.",
                statement: "Implement a timer wheel data structure. It should have a method to schedule a task (e.g., a `std::function`) to run after a specified delay in 'ticks'. The `advance()` method should advance the wheel and trigger any expired timers. The goal is O(1) average time for adding a timer.",
                inputFormat: "Implementation-based problem. Test via method calls.",
                outputFormat: "Scheduled tasks should execute after their specified delay.",
                testCases: [{ input: "Schedule task A at tick 3, task B at tick 10 (wheel size 8).", output: "Task A executes at tick 3. Task B executes at tick 10." }],
                solution: `#include <iostream>
#include <vector>
#include <list>
#include <functional>
#include <chrono>
#include <thread>

// Simple task structure
struct TimerTask {
    int id;
    int rounds; // For delays larger than wheel size
    std::function<void()> callback;
};

class TimerWheel {
private:
    int wheel_size;
    int current_tick;
    std::vector<std::list<TimerTask>> wheel;

public:
    TimerWheel(int size) : wheel_size(size), current_tick(0) {
        wheel.resize(wheel_size);
    }

    void schedule(std::function<void()> callback, int delay_ticks, int task_id) {
        if (delay_ticks <= 0) {
            callback();
            return;
        }
        
        int rounds = (delay_ticks - 1) / wheel_size;
        int target_tick = (current_tick + delay_ticks) % wheel_size;
        
        TimerTask task = {task_id, rounds, callback};
        wheel[target_tick].push_back(task);
        std::cout << "Scheduled task " << task_id << " at tick " << target_tick << " with " << rounds << " rounds." << std::endl;
    }

    void advance() {
        current_tick = (current_tick + 1) % wheel_size;
        
        auto& tasks_to_run = wheel[current_tick];
        
        for (auto it = tasks_to_run.begin(); it != tasks_to_run.end(); ) {
            if (it->rounds > 0) {
                // This task is for a future revolution of the wheel
                it->rounds--;
                ++it;
            } else {
                // Time to run this task
                std::cout << "Executing task " << it->id << " at tick " << current_tick << std::endl;
                it->callback();
                // Erase the task and get iterator to the next element
                it = tasks_to_run.erase(it);
            }
        }
    }
    
    int getCurrentTick() {
        return current_tick;
    }
};

void my_task_1() {
    std::cout << "--- Task 1 executed! ---" << std::endl;
}

void my_task_2() {
    std::cout << "--- Task 2 executed! ---" << std::endl;
}

int main() {
    TimerWheel timer(8); // A wheel with 8 slots (ticks 0-7)

    timer.schedule(my_task_1, 3, 1);
    timer.schedule(my_task_2, 10, 2);

    for (int i = 0; i < 15; ++i) {
        std::cout << "\\nAdvancing... Current tick is " << timer.getCurrentTick() << std::endl;
        timer.advance();
        std::this_thread::sleep_for(std::chrono::milliseconds(200));
    }

    return 0;
}`,
                explanation: "A timer wheel is a data structure for managing timers efficiently. It's better than a min-heap, which is O(log n) for scheduling, as the timer wheel is O(1) on average. It consists of a circular array of 'buckets' (lists of tasks). A timer set to expire in `d` ticks is placed in the bucket at `(current_tick + d) % wheel_size`. A ticker process advances the `current_tick` and executes all tasks in that bucket. To handle delays larger than the wheel size, a `rounds` counter is stored with each task. A task only executes when its bucket is reached AND its `rounds` counter is zero."
            }
        ]
    }
];
