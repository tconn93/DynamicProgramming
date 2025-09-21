/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

 

Constraints:

    1 <= nums.length <= 5000
    -104 <= nums[i] <= 104
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -104 <= target <= 104

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[left]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;    
};


/*
Step by Step Algorithm

    Initialization

    left = 0
    right = len(nums) - 1

        Set the indices of the left and right boundaries of the array to left and right, respectively.

    while Loop

    while left <= right:

        Continue the loop as long as left is less than or equal to right. This means that there is still a search range to consider.

    Calculate the Midpoint

    mid = (left + right) // 2

        Calculate the midpoint mid of the current search range.

    Check the Target Value

    if nums[mid] == target:
        return mid

        If nums[mid] is equal to the target, return the index mid.

    Adjust the Search Range (If the Left Half is Sorted)

    elif nums[mid] >= nums[left]:
        if nums[left] <= target <= nums[mid]:
            right = mid - 1
        else:
            left = mid + 1

        If nums[mid] is greater than or equal to nums[left], the left half is sorted.
            If the target is between nums[left] and nums[mid], narrow the search range to the left half by setting right to mid - 1.
            Otherwise, narrow the search range to the right half by setting left to mid + 1.

    Adjust the Search Range (If the Right Half is Sorted)

    else:
        if nums[mid] <= target <= nums[right]:
            left = mid + 1
        else:
            right = mid - 1

        If nums[mid] is less than nums[left], the right half is sorted.
            If the target is between nums[mid] and nums[right], narrow the search range to the right half by setting left to mid + 1.
            Otherwise, narrow the search range to the left half by setting right to mid - 1.

    If the Target is Not Found

    return -1

        If the loop ends and the target is not found, return -1.
*/