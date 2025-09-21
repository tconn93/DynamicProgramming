/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.


*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;    
};


/*
Step by step algorithm

    Initialization: Initialize a dummy node and a result pointer to the dummy node. Also, set total and carry variables to 0.

        dummy = ListNode()
        res = dummy
        total = carry = 0

    Traversing Lists: Traverse through both linked lists (l1 and l2) until either of them or the carry has a value.

        while l1 or l2 or carry:

    Calculating Sum: At each iteration, calculate the total sum of corresponding digits from l1, l2, and the carry.

                        total = carry
                        if l1:
                            total += l1.val
                            l1 = l1.next
                        if l2:
                            total += l2.val
                            l2 = l2.next

    Extracting Digit and Carry: Extract the digit by taking the modulo 10 of the total sum and update the carry for the next iteration by dividing the total sum by 10.

                        num = total % 10
                        carry = total // 10

    Creating New Node: Create a new ListNode with the extracted digit and attach it to the result linked list.

                        dummy.next = ListNode(num)
                        dummy = dummy.next

    Return Result: Finally, return the next node of the dummy node, which contains the head of the resultant linked list.

        return res.next

This algorithm effectively adds two numbers represented as linked lists, considering carryovers at each step.
Complexity

    Time complexity: O(n)
    n is number of nodes in longer list l1 or l2.

    Space complexity:O(n) or O(1)
    If we count new list we create, that is O(n). If we don't count, that is O(1)
*/