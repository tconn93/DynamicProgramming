/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const len1 = nums1.length;
    const len2 = nums2.length;
    let left = 0, right = len1;

    while (left <= right) {
        const part1 = Math.floor((left + right) / 2);
        const part2 = Math.floor((len1 + len2 + 1) / 2) - part1;

        const maxLeft1 = part1 === 0 ? -Infinity : nums1[part1 - 1];
        const minRight1 = part1 === len1 ? Infinity : nums1[part1];
        const maxLeft2 = part2 === 0 ? -Infinity : nums2[part2 - 1];
        const minRight2 = part2 === len2 ? Infinity : nums2[part2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((len1 + len2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = part1 - 1;
        } else {
            left = part1 + 1;
        }
    } 
};