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
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;

        function dfx(r) {
            if (r == null) return 0;
            let maxLeft = dfx(r.left);
            let maxRight = dfx(r.right);

            maxLeft = Math.max(maxLeft, 0);
            maxRight = Math.max(maxRight, 0);

            res = Math.max(res, maxLeft + maxRight + r.val);

            return r.val + Math.max(maxLeft, maxRight);
        }

        dfx(root);

        return res;
    }
}
