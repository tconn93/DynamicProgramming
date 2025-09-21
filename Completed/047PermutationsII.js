/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 

Constraints:

    1 <= nums.length <= 8
    -10 <= nums[i] <= 10

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let solve = function (nums, ans, curr, i) {
    if (i === nums.length - 1) {
        ans.push([...nums]);
        return;
    }
    let set = new Set();

    for (let j = i; j < nums.length; j++) {
        if(set.has(nums[j])) continue;
        set.add(nums[j]);

        swap(nums, i, j);
        solve(nums, ans, curr, i + 1);
        swap(nums, i, j);
    }
}

var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let curr = [];
    solve(nums, ans, curr, 0);
    return ans;
};


/*
Intuition

When generating permutations for an array with possible duplicate elements, simply swapping elements at each position will produce repeated permutations.
To avoid duplicates, we must ensure that at each recursion depth, we do not place the same number more than once in the current position.
Approach
Sort the array so that duplicate elements are grouped together.
Use backtracking with swapping:
Fix one element at the current position (i) by swapping it with every possible candidate (j ≥ i).
Recurse for the next position (i + 1).
At each recursion depth, use a Set to track which numbers have already been placed at the current position to avoid exploring duplicate branches.
Swap back after recursion to restore the array (backtracking).

Complexity

    Time complexity:
    The worst case is O(n⋅n!) for generating all permutations, but duplicate elimination reduces the actual count. The set-checking adds O(n) per recursion depth.
    Overall: O(n⋅n!) in worst case.

    Space complexity:
    O(n) for recursion stack and O(n) for the Set used at each depth (not counting output storage).
    Overall: O(n) auxiliary space.
*/
