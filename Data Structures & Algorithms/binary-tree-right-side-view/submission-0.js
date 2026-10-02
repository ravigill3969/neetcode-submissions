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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let res = [];

        let stack = [root];

        while (stack.length > 0) {
            let length = stack.length;
            res.push(stack[stack.length - 1].val);

            for (let i = 0; i < length; i++) {
                let node = stack.shift();

                if (node.left) stack.push(node.left);
                if (node.right) stack.push(node.right);
            }
        }

        console.log(res);
        return res
    }
}
