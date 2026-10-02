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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let stack = [p];
        let stack2 = [q];

        while (stack.length && stack2.length) {
            let n1 = stack.pop();
            let n2 = stack2.pop();

            if (!n1 && !n2) continue;

            if (!n1 || !n2 || n1.val !== n2.val) return false;

            stack.push(n1.right, n1.left);
            stack2.push(n2.right, n2.left);
        }

        return stack.length === stack2.length;
    }
}
