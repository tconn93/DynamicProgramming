/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 

Constraints:

    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

*/
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            const currentDiff = Math.abs(currentSum - target);

            if (currentDiff < minDiff) {
                minDiff = currentDiff;
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
};

/*
Approach

image.png

    Sort the input array to simplify pointer movements.
    Loop over the array with index i, fixing one number.
    Use two pointers left and right to try all combinations with nums[i].
    For every triplet, calculate the absolute difference from the target.
    If the current sum is closer, update the result.
    Move pointers inward depending on how current_sum compares to target.

Complexity

Time Complexity:

    ( O(n²) ) — outer loop + two-pointer scan

Space Complexity:

    ( O(1) ) — constant space
*/
