/*
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

 

Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1

*/
var firstMissingPositive = function(nums) {
    nums.sort((a, b) => a - b);

    let missing = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] === missing) {
        missing++;
        } else if (nums[i] > missing) {
        return missing;
        }
    }

    return missing; 
};


/*
Step by Step Algorithm
Step 1: Filter Out Non-Positive Numbers

nums = [n for n in nums if n > 0]

    Explanation: The algorithm starts by removing all non-positive numbers (n <= 0) from the list nums. Only positive numbers are relevant to finding the smallest missing positive integer, so this step simplifies the problem.
    Example: If the input is [3, 4, -1, 1], the resulting list after this step is [3, 4, 1].

Step 2: Sort the Remaining Positive Numbers

nums.sort()

    Explanation: The filtered list of positive numbers is sorted in ascending order. Sorting allows us to easily find the first missing positive integer by checking the sequence of numbers.
    Example: The sorted list for [3, 4, 1] will be [1, 3, 4].

Step 3: Initialize the Target Variable

target = 1

    Explanation: The variable target is initialized to 1, which is the smallest positive integer. The algorithm will check if 1 is present in the sorted list, then move on to 2, and so on.

Step 4: Iterate Through the Sorted List

for n in nums:
    if n == target:
        target += 1
    elif n > target:
        return target

    Explanation:
        Iteration: The algorithm iterates through each number n in the sorted list nums.
        Check if n matches target:
            If n equals target, it means the current smallest missing positive integer is found, so the algorithm increments target to check for the next integer.
            If n is greater than target, it indicates that target is missing in the sequence, so the algorithm returns target as the smallest missing positive integer.
    Example:
        In the sorted list [1, 3, 4], the algorithm starts with target = 1.
        n = 1: n matches target, so target is incremented to 2.
        n = 3: n is greater than target (2), so the algorithm returns 2 as the smallest missing positive integer.

Step 5: Return the Target as the Missing Positive Integer

return target

    Explanation: If the loop completes without finding a missing integer (i.e., if all integers from 1 up to the largest integer in the list are present), the algorithm returns target as the missing positive integer. This will be the next integer after the largest number in the list.
    Example: If the input is [1, 2, 3], after processing, target would be 4, which would be returned as the missing positive integer.

Conclusion

This algorithm efficiently finds the smallest missing positive integer by first filtering out unnecessary elements, sorting the relevant ones, and then checking for the smallest missing integer in a sequential manner. This approach ensures that the solution is both clear and optimal for the given problem.
*/
