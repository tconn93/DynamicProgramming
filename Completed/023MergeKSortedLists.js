/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

 

Constraints:

    k == lists.length
    0 <= k <= 104
    0 <= lists[i].length <= 500
    -104 <= lists[i][j] <= 104
    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 104.

*/
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let prev = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }
    
    return lists[0];
}

/*
Intuition #1

The Divide and Conquer approach effectively reduces the problem size by repeatedly merging pairs of lists. By merging two lists at a time, we minimize the number of comparisons needed to combine all k lists into one. This method leverages the efficiency of merging two sorted lists, ensuring that each merge operation is optimized.

Note: We will be reusing the solution from LeetCode 21. Merge two sorted lists for merging pairs of lists.
Approach #1

We will use the Divide and Conquer strategy to merge the k sorted lists:

    Pairing and Merging:
        Step 1: Pair up the k lists and merge each pair using the two-list merge method.
        Step 2: After the first merge, we'll have approximately k/2 lists.
    Iterative Merging:
        Step 3: Repeat the pairing and merging process on the newly merged lists.
        Step 4: Continue this process until only one merged list remains, which is the final result.

This approach ensures that we efficiently reduce the number of lists in each iteration, leading to a logarithmic number of merge operations relative to the number of lists.
Complexity #1

    Time complexity: O(Nlogk)

    Space complexity: O(logk)
*/