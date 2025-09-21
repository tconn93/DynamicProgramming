/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

 

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 1000
    It's guaranteed that you can reach nums[n - 1].

*/
var jump = function(nums) {
    let near = 0, far = 0, jumps = 0;

    while (far < nums.length - 1) {
        let farthest = 0;
        for (let i = near; i <= far; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        near = far + 1;
        far = farthest;
        jumps++;
    }

    return jumps;    
};

/*
Step by Step Algorithm

    Initialization:

    near = far = jumps = 0

        near: This variable represents the start of the current range of indices we are considering for jumps.
        far: This variable represents the end of the current range of indices we are considering for jumps.
        jumps: This variable keeps track of the number of jumps made.

    While Loop:

    while far < len(nums) - 1:

        The loop continues until the far index reaches or exceeds the last index of the array (len(nums) - 1).

    Initialization of Farthest:

    farthest = 0

        farthest: This variable will store the farthest index we can reach from the current range of indices (near to far).

    For Loop:

    for i in range(near, far + 1):
        farthest = max(farthest, i + nums[i])

        This loop iterates through the current range of indices from near to far.
        For each index i, it calculates i + nums[i] which is the farthest index we can reach by jumping from index i.
        It updates farthest to be the maximum of its current value and i + nums[i].

    Update Near and Far:

    near = far + 1
    far = farthest
    jumps += 1

        near: Update the start of the next range to be one index after the current far.
        far: Update the end of the next range to be farthest calculated in the for loop.
        jumps: Increment the number of jumps made by 1.

    Return Statement:

    return jumps

        After exiting the while loop, the function returns the total number of jumps made to reach the last index.
*/

