/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = null;
        let count = 0;

        function Recursion(r) {
            if (r == null || res != null) {
                return;
            }
            
            Recursion(r.left);

            count++;

            if (count === k) {
                res = r.val;
                return
            }
            Recursion(r.right);
        }

        Recursion(root)

        return res;
    }
}
