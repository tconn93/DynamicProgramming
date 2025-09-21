/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

    countAndSay(1) = "1"
    countAndSay(n) is the run-length encoding of countAndSay(n - 1).

Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical 
characters (repeated 2 or more times) with the concatenation of the character and the number marking the count
 of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23",
  replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.

 

Example 1:

Input: n = 4

Output: "1211"

Explanation:

countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"

Example 2:

Input: n = 1

Output: "1"

Explanation:

This is the base case.

 

Constraints:

    1 <= n <= 30

 
Follow up: Could you solve it iteratively?*/

var countAndSay = function(n) {
    let res = "1";
    for (let i = 1; i < n; i++) {
        let temp = "", count = 1;
        for (let j = 1; j < res.length; j++) {
            if (res[j] === res[j - 1]) {
                count++;
            } else {
                temp += count + res[j - 1];
                count = 1;
            }
        }
        temp += count + res[res.length - 1];
        res = temp;
    }
    return res;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));
console.log(countAndSay(8));
console.log(countAndSay(9));
console.log(countAndSay(10));

/*
 Intuition:

We build the sequence one step at a time by describing the previous term., just like how the Survey Corps builds a formation — line by line, calculating what's in front based on what they just saw.
No recursion. Just logic, and pure Eren Yeager "keep moving forward" energy.
🧠 Step-by-Step Plan:

    Start with res = "1"
    Loop n-1 times
    For each char group, count how many times it repeats
    Add count + char to new string
    Set res = new_string
*/
