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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return head;

        let dummy = new ListNode(0, null);
        let res = dummy;

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let tailNode = slow.next;
        slow.next = null;

        let prev = null;
        let curr = tailNode;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        let toogle = true;

        while (prev && head) {
            if (toogle) {
                toogle = false;
                dummy.next = head;
                head = head.next;
            } else {
                toogle = true;
                dummy.next = prev;
                prev = prev.next;
            }

            dummy = dummy.next;
        }

        dummy.next = head ? head : prev;
        return res.next;
    }
}