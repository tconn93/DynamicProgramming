/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

 

Constraints:

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const n = nums.length;
let left = 0, right = n - 1;
let start = -1, end = -1;

if (n === 0) return [-1, -1];
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            let x = mid, y = mid;
            while(nums[x]===target){
                start = x;
                x--;
            }

            while(nums[y]===target){
                end = y;
                y++;
            }
            return [start, end];
            
        }else if(nums[mid] < target){
                left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return [start,end];
};