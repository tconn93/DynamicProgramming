/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

 

Constraints:

    1 <= candidates.length <= 100
    1 <= candidates[i] <= 50
    1 <= target <= 30

 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];

    function dfs(target, start, comb) {
        if (target < 0) {
            return;
        }

        if (target === 0) {
            res.push(comb.slice());
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            dfs(target - candidates[i], i + 1, comb.concat(candidates[i]));
        }
    }

    dfs(target, 0, []);
    return res;
};

/*
Approach

This code is an algorithm to find all combinations from the given candidates list that sum up to target. 
First, the candidates list is sorted in non-decreasing order. An empty list res is initialized to store all valid combinations. 
The recursive function dfs takes parameters target (current total sum), start (starting index in candidates), and comb (current combination being built).
 As base cases, if target < 0, the function returns immediately, and if target == 0, comb is added to res. The dfs function iterates through the candidates 
 list from start, skipping duplicates and ensuring no reuse of values to avoid redundancy. It also terminates search paths if the current candidate exceeds target.
 The initial call dfs(target, 0, []) starts the exploration, and after all valid combinations are found, res is returned.
 
*/