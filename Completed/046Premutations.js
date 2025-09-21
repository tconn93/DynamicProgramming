/*
Given an array nums of distinct integers, return all the possible

. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

 

Constraints:

    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums.slice()];
    }
    
    var res = [];

    for (var i = 0; i < nums.length; i++) {
        var n = nums.shift();
        var perms = permute(nums.slice());

        for (var p of perms) {
            p.push(n);
        }
        
        res.push(...perms);
        nums.push(n);
    }
    
    return res;  
};


/*
Approach

This is based on Python solution. Other might be different a bit.

    The function permute takes a list of integers nums as input and aims to generate all possible permutations of the elements in the input list.

    The base case is checked: if the length of the nums list is 1, then it means there's only one element left to permute, and at this point,
     a list containing that single element is returned as a permutation.

    If the nums list has more than one element, the algorithm proceeds with permutation generation.

    Initialize an empty list res to store the permutations.

    Iterate over each element in the nums list (using _ as a placeholder for the loop variable). In each iteration, pop the first element n from the nums list.

    Recursively call the permute function on the remaining elements in nums after removing the first element. This generates all possible permutations of the remaining elements.

    For each permutation p generated in the recursive call, append the previously removed element n to it.

    Extend the res list with the permutations generated in the recursive calls, each with the element n appended.

    After the loop completes, add the removed element n back to the end of the nums list, restoring the original state for the next iteration.

    Finally, return the list res containing all the generated permutations.

In summary, this code uses a recursive approach to generate all possible permutations of the input list nums. It removes one element at a time, 
generates permutations for the remaining elements, appends the removed element to those permutations, and collects all permutations in the res list.
 The recursion continues until only one element is left in the list, at which point a permutation containing that single element is returned.
Complexity

    Time complexity: O(n * n!)

        Recursive Calls: The permute function is called recursively, and each time it generates permutations for a smaller list by removing one element. In the worst case, the recursion depth is equal to the length of the input list nums, which is n.

        Permutation Generation: For each index, we are generating permutations for the remaining elements and appending the removed element at the end. This involves recursive calls and list manipulations. In general time complexity of permutation should be O(n!)

    Space complexity: O(n)

        Recursion Depth: The depth of recursion goes up to the number of elements in the input list. So, the maximum recursion depth is O(n).

        Additional Memory: The additional memory usage includes the res list, the n variable, and the space used in each recursive call.

        Considering these factors, the space complexity is O(n)

        http://localhost:8889/lab?token=956620eb0276e9c3010375dd210b8514e9dd901585b1f718

        956620eb0276e9c3010375dd210b8514e9dd901585b1f718
*/
