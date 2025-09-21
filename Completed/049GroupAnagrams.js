/*
Given an array of strings strs, group the

together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

    */
   var groupAnagrams = function(strs) {
    let ans = {};

    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(s);
    }

    return Object.values(ans);    
};


/*
Step by Step Algorithm
1. Initialize a Dictionary to Store Grouped Anagrams

ans = defaultdict(list)

    Explanation:
        A defaultdict is created with list as the default factory. This means that if a key does not exist in the dictionary, it automatically creates an empty list for that key.
        This dictionary (ans) will be used to store lists of anagrams grouped by a common key.

2. Iterate Over Each String in the Input List

for s in strs:

    Explanation:
        A loop is initiated to iterate over each string (s) in the input list strs.
        The goal of this loop is to group each string with its anagrams.

3. Sort Each String to Create a Key

key = "".join(sorted(s))

    Explanation:
        The string s is sorted alphabetically using the sorted() function. Sorting rearranges the characters of the string in a defined order (lexicographical order).
        The sorted characters are then joined back together to form a new string (key).
        This sorted string (key) acts as a unique identifier for anagrams. For example, both "eat" and "tea" will produce the key "aet".

4. Group the String Under Its Anagram Key

ans[key].append(s)

    Explanation:
        The string s is appended to the list in the dictionary ans corresponding to its key (key).
        If the key does not already exist in the dictionary, defaultdict automatically creates it with an empty list, so no need to check if the key exists.
        This groups all anagrams together in the same list.

5. Return the Grouped Anagrams

return ans.values()

    Explanation:
        The method returns the values of the dictionary ans.
        Since the dictionary's values are lists of grouped anagrams, this effectively returns a list of lists, where each inner list contains strings that are anagrams of each other.
*/
