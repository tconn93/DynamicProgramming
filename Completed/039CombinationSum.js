/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 

Constraints:

    1 <= candidates.length <= 30
    2 <= candidates[i] <= 40
    All elements of candidates are distinct.
    1 <= target <= 40
*/
var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};

/*
Step-by-Step Execution

Let’s walk through the process using the input candidates = [2, 3, 6, 7] and target = 7:

    Start with an empty combination [] and total 0.
    At index 0, try adding 2. The combination becomes [2] with a total of 2.
    Recur with [2, 2] (total = 4), then [2, 2, 2] (total = 6), and finally [2, 2, 3] (total = 7). Store this result.
    Backtrack to explore other combinations, trying 3 and 7 in turn.
    The process continues until all valid combinations are found.

Visualization

Decision Tree for candidates = [2, 3, 6, 7] and target = 7:

                      []
                    /   \
                 [2]     []
                /   \      \
             [2,2]   [2]    [3]
            /   \       \     \
        [2,2,2]  [2,2,3]  [3,3] [7]

Valid combinations: [2, 2, 3], [7]
Complexity Analysis

    Time Complexity: O(2n) in the worst case, as we explore all subsets of candidates.
    Space Complexity: O(t/d), where t is the target and d is the smallest candidate, representing the depth of the recursion.
*/