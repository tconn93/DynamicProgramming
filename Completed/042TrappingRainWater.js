/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

 

Constraints:

    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105

*/
var trap = function(height) {



const n = height.length;
    if (n === 0) return 0;

    const left = Array(n).fill(0);
    const right = Array(n).fill(0);

    let maxLeft = 0;
    for (let i = 0; i < n; i++) {
        maxLeft = Math.max(maxLeft, height[i]);
        left[i] = maxLeft;
    }

    let maxRight = 0;
    for (let i = n - 1; i >= 0; i--) {
        maxRight = Math.max(maxRight, height[i]);
        right[i] = maxRight;
    }

    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(left[i], right[i]) - height[i];
    }

    return water;

};