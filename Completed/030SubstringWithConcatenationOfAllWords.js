/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

    For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.

Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

Constraints:

    1 <= s.length <= 104
    1 <= words.length <= 5000
    1 <= words[i].length <= 30
    s and words[i] consist of lowercase English letters.

 
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

    const wordLen = words[0].length;
    const numWords = words.length;
    const totalLen = wordLen * numWords;
    const n = s.length;
    const res = [];

    if (n < totalLen) return [];

    const wordCount = new Map();
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    // we loop over wordLen offsets
    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset, count = 0;
        const seen = new Map();

        for (let right = offset; right + wordLen <= n; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                // we shrink window if word is overused
                while (seen.get(word) > wordCount.get(word)) {
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // Valid window
                if (count === numWords) {
                    res.push(left);
                    const firstWord = s.slice(left, left + wordLen);
                    seen.set(firstWord, seen.get(firstWord) - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return res;
};


/*
Intuition

...to detect concatenated substrings made from all words (with no reordering of characters), we observe:

    Every valid match consists of numWords words.
    Each word has fixed wordLen.
    Instead of testing every index, we focus on word boundaries using wordLen-aligned offsets.
    We sweep the string using multiple sliding windows, one for each possible starting offset within a word boundary.

Approach

 Techniques Used

✅ Sliding window based on wordLen
✅ Map to track word frequencies (wordCount and seen)
✅ Multiple offset scan to detect valid concatenation boundaries
✅ Greedy left-shift when word overused

Algorithm Logic

1️⃣ Precompute:
wordLen, numWords, and totalLen
Frequency map wordCount
2️⃣ For each offset in 0...wordLen - 1:
Initialize left and right pointers, and seen map
3️⃣ Slide the window in word-sized steps:
Extract word from s at right
If word is in wordCount:
Increment seen count
If seen count exceeds allowed, shrink window from left
If window size matches numWords, record left as valid index
Slide left ahead and update seen accordingly
If word isn't valid:
Reset window
Complexity

    Time complexity:

O(n × wordLen) → Each offset processes ~n/wordLen steps

    Space complexity:

O(#uniqueWords) → For word maps wordCount and seen
*/