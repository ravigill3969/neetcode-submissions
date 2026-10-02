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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return true;

        let stack = [[root, Infinity, -Infinity]];

        while (stack.length > 0) {
            let [node, max, min] = stack.pop();

            if (!node) continue;

            if (node.val >= max || node.val <= min) return false;

            stack.push([node.right, max, node.val]);
            stack.push([node.left, node.val, min]);

        }

        return true;
    }
}
