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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let slow = head;
        let fast = head;

        while (n > 0 && fast) {
            fast = fast.next;
            n--;
        }

        let dummy = new ListNode(0, null);
        let res = dummy;
        dummy.next = head;

        while (fast) {
            dummy = dummy.next;
            slow = slow.next;
            fast = fast.next;
        }

        dummy.next = slow.next;

        return res.next;
    }
}
