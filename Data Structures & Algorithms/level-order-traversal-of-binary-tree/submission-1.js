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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        const queue = [root];

        while (queue.length > 0) {
            let length = queue.length;
            let n = [];

            while (length > 0) {
                let node = queue.shift();

                if (node) {

                    n.push(node.val);
                }

                if (node && node.left) {
                    queue.push(node.left);
                }

                if (node && node.right) {
                    queue.push(node.right);
                }

                length--;
            }

            if (n.length > 0) {


                res.push(n);
            }
        }
        return res;
    }
}
