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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;

        let stack = [root];

        while (stack.length > 0) {
            let node = stack.pop();

            if (node.val == subRoot.val && this.c(node, subRoot)) {
                console.log(true);
                return true;
            }

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        console.log(false);

        return false;
    }

    c(root, root2) {
        let stack = [root];
        let stack2 = [root2];

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
