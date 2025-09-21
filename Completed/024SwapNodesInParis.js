/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:

Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

 

Constraints:

    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100

 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy, cur = head;

    while (cur && cur.next) {
        let npn = cur.next.next;
        let second = cur.next;

        second.next = cur;
        cur.next = npn;
        prev.next = second;

        prev = cur;
        cur = npn;
    }

    return dummy.next;    
};

/*
Step by Step Algorithm
Step 1: Initialize a Dummy Node

dummy = ListNode(0, head)
prev, cur = dummy, head

    Explanation:
        A dummy node dummy is created with a value of 0, and its next pointer is set to head. This dummy node helps in handling edge cases, such as when the list starts with the first node to be swapped.
        Two pointers, prev and cur, are initialized. prev is set to dummy, and cur is set to head, the starting node of the list.

Step 2: Traverse and Swap Nodes in Pairs

while cur and cur.next:
    npn = cur.next.next
    second = cur.next

    Explanation:
        The loop continues as long as cur (the current node) and cur.next (the next node) are not None.
        npn (next pair's node) is set to the node after the pair that is currently being processed (cur.next.next).
        second is set to cur.next, which is the second node of the current pair.

Step 3: Perform the Swap

second.next = cur
cur.next = npn
prev.next = second

    Explanation:
        The second.next is updated to point to cur, effectively reversing the pair.
        cur.next is updated to point to npn, which connects the swapped pair to the rest of the list.
        prev.next is updated to point to second, ensuring the previous node points to the newly swapped pair.

Step 4: Move to the Next Pair

prev = cur
cur = npn

    Explanation:
        prev is moved forward to cur, which was the second node in the original pair but is now the first node after swapping.
        cur is moved forward to npn, the next node to be processed.

Step 5: Return the Modified List

return dummy.next

    Explanation:
        After all pairs have been processed, the function returns dummy.next, which points to the new head of the modified list. The dummy node itself is not part of the final list but was essential for handling the swaps smoothly.
*/
