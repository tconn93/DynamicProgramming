/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:

Input: s = "A", numRows = 1
Output: "A"

 

Constraints:

    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000

*/
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    for (const char of s) {
        rows[idx].push(char);
        if (idx === 0) {
            d = 1;
        } else if (idx === numRows - 1) {
            d = -1;
        }
        idx += d;
    }

    for (let i = 0; i < numRows; i++) {
        rows[i] = rows[i].join('');
    }

    return rows.join('');    
};


/*
Step by Step Algorithm

    Check Special Cases:
        If numRows is 1 or greater than or equal to the length of the input string s, it means that the ZigZag pattern will be the same as the input string. In such cases, just return the input string s as it is.

    if numRows == 1 or numRows >= len(s):
        return s

    Initialization:
        Initialize idx to keep track of the current row index, starting from 0, and d as the direction of traversal (1 for downward, -1 for upward).
        Create a list of numRows empty lists to represent the rows of the ZigZag pattern.

    idx, d = 0, 1
    rows = [[] for row in range(numRows)]

    Traverse through the String:
        Iterate through each character char in the input string s.
        Append the current character to the row indicated by the idx.
        Update the direction d based on the current position (idx).
        Update the current row index idx according to the direction d.

    for char in s:
        rows[idx].append(char)
        if idx == 0:
            d = 1
        elif idx == numRows - 1:
            d = -1
        idx += d

    Join Rows:
        Iterate through each row in rows.
        Join the characters in each row to form strings.
        Update each row in rows with the joined string.

    for i in range(numRows):
        rows[i] = ''.join(rows[i])

    Join Rows into Result String:
        Join all the rows together to form the final ZigZag pattern.

    return ''.join(rows)
    */