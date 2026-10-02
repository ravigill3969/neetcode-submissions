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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(null);
        let curr = dummy;

        let carry = 0;
        while (l1 || l2 || carry) {
            let sum = carry;

            if (l1) {
                sum += l1.val;
                l1 = l1.next;
            }

            if (l2) {
                sum += l2.val;
                l2 = l2.next;
            }

            if (sum > 9) {
                carry = 1;
            } else {
                carry = 0;
            }

            curr.next = new ListNode(sum % 10);
            curr = curr.next;
        }

        console.log(dummy.next);
        return dummy.next;
    }
}
