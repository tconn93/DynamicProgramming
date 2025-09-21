/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

Return the integer as the final result.

 

Example 1:

Input: s = "42"

Output: 42

Explanation:

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^

Example 2:

Input: s = " -042"

Output: -42

Explanation:

Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^

Example 3:

Input: s = "1337c0d3"

Output: 1337

Explanation:

Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^

Example 4:

Input: s = "0-1"

Output: 0

Explanation:

Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^

Example 5:

Input: s = "words and 987"

Output: 0

Explanation:

Reading stops at the first non-digit character 'w'.

 

Constraints:

    0 <= s.length <= 200
    s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

*/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (!s) return 0;
    
    // Constants for 32-bit signed integer range
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    
    let i = 0;
    const n = s.length;
    
    // Step 1: Skip leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }
    
    // Check if we've reached the end
    if (i === n) return 0;
    
    // Step 2: Check for sign
    let sign = 1;
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }
    
    // Step 3: Read digits and convert
    let res = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        res = res * 10 + digit;
        
        if (sign * res <= INT_MIN) {
            return INT_MIN;
        }
        if (sign * res >= INT_MAX) {
            return INT_MAX;
        }
        
        i++;
    }
    
    // Step 4: Apply sign and return
    return res * sign;    
};

/*
Step by Step Breakdown
Step 1: Skip Leading Whitespace

while i < n and s[i] == ' ':
    i += 1

Logic:

    Ignore all leading whitespace characters (spaces)
    Advance the index i to the first non-whitespace character
    Time Complexity: O(k) where k is the number of leading whitespace characters

Step 2: Handle Signs

sign = 1
if s[i] == '+':
    i += 1
elif s[i] == '-':
    sign = -1
    i += 1

Logic:

    Default to positive (sign = 1)
    If + or - is found, set the sign and advance the index
    Only the first sign is valid ("+-2" is invalid)

Key Points:

    If no sign is present, proceed to the next step
    Only advance the index when a sign is found

Step 3: Read and Convert Digits

res = 0
while i < n and s[i].isdigit():
    digit = int(s[i])
    res = res * 10 + digit
    
    if sign * res <= INT_MIN:
        return INT_MIN
    if sign * res >= INT_MAX:
        return INT_MAX
    
    i += 1

Logic:

    Continue reading digits and build the integer
    Use res = res * 10 + digit to multiply by 10 for the next digit place and add the new digit
    Check for overflow after each digit processing

Number Construction Example:

For "1234":
res = 0
'1': res = 0 * 10 + 1 = 1
'2': res = 1 * 10 + 2 = 12
'3': res = 12 * 10 + 3 = 123
'4': res = 123 * 10 + 4 = 1234

Step 4: Apply Sign and Return Result

return res * sign

Logic:

    Apply the sign to the final result
    Overflow checks are already completed at this point

Overflow Handling Details

The core of this algorithm is efficient overflow detection.
Basic Approach

if sign * res <= INT_MIN:
    return INT_MIN
if sign * res >= INT_MAX:
    return INT_MAX

Why This Method Works Well:

    Real-time Detection: Check for overflow while processing each digit
    Simple Conditions: No complex pre-calculations needed
    Early Termination: Return immediately when overflow is detected

Concrete Examples

Positive Number Overflow:

"2147483648" (INT_MAX + 1)
When res = 2147483648:
sign * res = 1 * 2147483648 = 2147483648 >= INT_MAX
→ Return INT_MAX (2147483647)

Negative Number Overflow:

"-2147483649" (INT_MIN - 1)
When res = 2147483649:
sign * res = -1 * 2147483649 = -2147483649 <= INT_MIN
→ Return INT_MIN (-2147483648)

Edge Case Handling
1. Empty String or Whitespace Only

if not s:
    return 0

if i == n:  # Only whitespace
    return 0

2. Invalid Format

# Stop processing when non-digit character is encountered
while i < n and s[i].isdigit():
    # Process digits

Examples:

    "words and 987" → 0 (non-digit at start)
    "4193 with words" → 4193 (stop at non-digit)

3. Sign Only

"+" → 0
"-" → 0
*/
