/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        if (lists.length === 1) return lists[0];

        while (lists.length > 1) {
            let list1 = lists.pop();
            let list2 = lists.pop();
            let merged = this.mL(list1, list2);
            lists.push(merged);
        }

        return lists[0];
    }

    mL(list1, list2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 || list2;

    return dummy.next;
}
}
