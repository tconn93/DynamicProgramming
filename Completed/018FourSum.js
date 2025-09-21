/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 

Constraints:

    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    const results = [];
    const n = nums.length;
    if (n < 4) return results;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip dupl.

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip dupl.

            let left = j + 1;
            let right = n - 1;
            let sumAB = nums[i] + nums[j];

            while (left < right) {
                const sum = sumAB + nums[left] + nums[right];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip dupl.
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return results;
};

/*
Intuition

...to find all unique quadruplets [a, b, c, d] such that their sum equals the target, brute-force would require checking all combinations—an O(n⁴)! But we can do better. So, by:

    Sorting the array
    Fixing two numbers via nested loops
    Scanning the remaining with two pointers,
    ...we can reduce time complexity and skip duplicates easily—unlocking speed and clarity in one go.

Approach

Techniques Used

✅ Sort the array to simplify duplicate handling
✅ Nested iteration for the first two numbers
✅ Two-pointer sweep for the remaining two
✅ Greedy skip over repeated elements

 Algorithm Logic 

1️⃣ Sort nums ascendingly
2️⃣ Loop with index i from 0 to n - 4   
• Skip if nums[i] == nums[i - 1] to avoid duplicates
3️⃣ Loop with index j from i + 1 to n - 3   
• Skip if nums[j] == nums[j - 1] (again, deduping)
4️⃣ Initialize left = j + 1, right = n - 1
5️⃣ While left < right:
Calculate total sum = nums[i] + nums[j] + nums[left] + nums[right]
If sum == target: push to results & skip duplicates
If sum < target: increment left
If sum > target: decrement right
6️⃣ Return results
Complexity

    Time complexity:

O(n³)  • Three nested loops in the worst case  
• Sorting adds O(n log n) but doesn't dominate

    Space complexity:

O(1) (not including results)  
• No auxiliary structures needed beyond indices
*/