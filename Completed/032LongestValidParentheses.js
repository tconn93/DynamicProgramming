/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses

.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:

Input: s = ""
Output: 0

 

Constraints:

    0 <= s.length <= 3 * 104
    s[i] is '(', or ')'.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
        let maxLen = 0;
    const stack = [-1]; // we initialize with base index

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // we push index of '('
        } else {
            stack.pop(); // we pop matching '('
            if (stack.length === 0) {
                stack.push(i); // we reset base index
            } else {
                maxLen = Math.max(maxLen, i - stack.at(-1));
            }
        }
    }

    return maxLen;
};
