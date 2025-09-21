/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let res = new ListNode();



    function dpf(lis1,lis2,head){
        if(lis1!==null&&lis2!==null){
            if(lis1.val<lis2.val){
            let x = new ListNode(lis1.val,null);
            head.next = x;
            dpf(lis1.next,lis2,x);
            }else{
            let x = new ListNode(lis2.val,null);
            head.next = x;
            dpf(lis1,lis2.next,x);
            }
        }else if (lis1!==null){
            let x = new ListNode(lis1.val,null);
            head.next = x;
            dpf(lis1.next,null,x);
        }else if(lis2!==null){
            let x = new ListNode(lis2.val,null);
            head.next = x;
            dpf(null,lis2.next,x);
        }
    }

    if(list1!==null && list2!==null){
        if(list1.val<list2.val){
            res.val=list1.val;
            dpf(list1.next,list2,res);
        }else {
            res.val=list2.val;
            dpf(list1,list2.next,res);
        }
    } else if(list1!==null){
        res.val = list1.val;
        dpf(list1.next,null,res);
    } else if(list2!==null){
        res.val = list2.val;
        dpf(null,list2.next,res);
    }else return null;



    return res;
    
};