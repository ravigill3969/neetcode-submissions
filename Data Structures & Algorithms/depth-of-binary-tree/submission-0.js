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
    maxDepth(root) {
        if (!root) return 0;

        let stack = [[root, 1]];
        let max = 0;

        while (stack.length > 0) {
            let [node, n] = stack.pop();

            max = Math.max(n, max);

            if (node.left) stack.push([node.left, n + 1]);
            if (node.right) stack.push([node.right, n + 1]);
        }

        return max;
    }
}
