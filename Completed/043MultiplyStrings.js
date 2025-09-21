/*

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

 

Constraints:

    1 <= num1.length, num2.length <= 200
    num1 and num2 consist of digits only.
    Both num1 and num2 do not contain any leading zero, except the number 0 itself.


*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const n = num1.length, m = num2.length;
    const result = Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0 && result.length > 1) result.shift();
    return result.join('');
};

console.log(("2045"-"0")*10);

/*
Approach

image.png

    Initialize a result array of size n + m (max length after multiplying).
    Loop backwards through both strings and multiply each digit:
        Add the product to the appropriate position.
        Carry over the tens place.
    Finally, convert the result array to string and strip leading zeroes.
    If the string is empty, return "0" (edge case for multiplying with zero).

Complexity

Time Complexity:

    ( O(n * m) ) — where n and m are lengths of num1 and num2

Space Complexity:

    ( O(n + m) ) — result array storing the final digits
*/
