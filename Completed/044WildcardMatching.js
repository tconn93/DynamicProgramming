/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

    '?' Matches any single character.
    '*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

 

Constraints:

    0 <= s.length, p.length <= 2000
    s contains only lowercase English letters.
    p contains only lowercase English letters, '?' or '*'.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};

/*
Intuition

This problem extends simple pattern matching by introducing ? (matches any one character) and * (matches any sequence of characters, including empty). 
A brute-force approach would be too slow, so we go with dynamic programming to store intermediate match results.
Approach

image.png

    Create a DP table where dp[i][j] is True if s[:i] matches p[:j].
    Initialize dp[0][0] = True (empty matches empty).
    Handle patterns starting with * which can match empty strings (dp[0][j] = dp[0][j - 1]).
    Iterate through each character of the string and pattern:
        If characters match or pattern has ?: take diagonal value.
        If pattern has *: value is dp[i][j-1] (skip *) or dp[i-1][j] (consume character).
    Return dp[m][n] at the end.

Complexity

Time Complexity:

    ( O(m * n) ) — where m = len(s) and n = len(p)

Space Complexity:

    ( O(m * n) ) — 2D DP table
*/
