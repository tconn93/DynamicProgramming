/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.

*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n = strs.length;

    let result = "";
    if(n===0) return result;
    let minLen = 201;
    strs.forEach((s)=>{
     if(s.length < minLen)minLen = s.length;
        });

    for(let i =0; i<minLen ;i++){
        let str = strs[0];
        let char = str[i];
        let bool = true;

        strs.forEach((s)=>{
            if(s[i]!==char) bool = false;
        })

        if(!bool) break;
        else{
            result += char;
        }
    }
    return result;
};