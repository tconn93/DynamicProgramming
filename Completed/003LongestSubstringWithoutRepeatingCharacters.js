/*
Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = new Array(128).fill(false);
    let l =0, r=0, maxLen =0;

    while(r<s.length){
        if(!arr[s.charCodeAt(r)]){
            arr[s.charCodeAt(r)] = true;
            maxLen = Math.max(maxLen, r-l+1);
            r++
        }else {
            arr[s.charCodeAt(l)] = false;
            l++
        }
    }
    return maxLen;  
};