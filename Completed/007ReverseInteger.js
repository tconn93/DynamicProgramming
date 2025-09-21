/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

 

Constraints:

    -231 <= x <= 231 - 1

*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {


let res = 0;
if(x < 0){
    res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
}else {
    res = parseInt(String(x).split('').reverse().join(''));
}

if(res > Math.pow(2,31) -1 || res < -Math.pow(2,31)) return 0;

return res;
    
};

/*
Step by step algorithm

    Initialize the result variable res:

    res = 0

        We start by initializing the variable res to store the reversed integer.

    Check if the input number x is negative:

    if x < 0:

        We check if the given integer x is negative.

    Reverse the digits of the integer:

    res = int(str(x)[1:][::-1]) * -1

        If x is negative, we convert it to a string, remove the negative sign (str(x)[1:]), reverse the string ([::-1]), convert it back to an integer, and then multiply by -1 to keep the sign negative.

    Handle positive integers:

    else:
        res = int(str(x)[::-1])

        If x is positive, we simply convert it to a string, reverse the string, and then convert it back to an integer.

    Check for overflow:

    if res > 2 ** 31 - 1 or res < -2 ** 31:
        return 0

        We check if the reversed integer res is within the range of a 32-bit signed integer. If it exceeds this range, we return 0 to indicate overflow.

    Return the reversed integer:

    return res

        Finally, we return the reversed integer.

Overall, the code efficiently reverses the digits of the given integer while handling negative numbers and checking for overflow. It demonstrates a concise approach to solve the problem.
*/
