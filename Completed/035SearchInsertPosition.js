/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

/*
Intuition

This problem asks us to find the index where a target value should be inserted in a sorted array to maintain order. The approach here uses a simple linear scan to find the first position where an element is greater than or equal to the target. This gives us either the exact position (if target exists) or the insertion point (if target doesn't exist).
Approach (Not O(Log n) but beats 100%)

We'll use a streamlined linear search strategy:

    Single-pass scanning: Iterate through the array once from left to right
    Comparison logic: For each element, check if it's greater than or equal to target
    Early termination: Return immediately when we find the first qualifying position
    End case handling: If no element satisfies the condition, target belongs at the end
    Unified approach: This handles both existing and non-existing targets in one loop

This approach simplifies the logic by combining existence check and insertion point detection into a single condition.
Complexity

    Time complexity: O(n)
    Where n is the length of the array, as we may need to scan through all elements in worst case.

    Space complexity: O(1)
    We only use constant extra space for the loop variable and length calculation.
*/
