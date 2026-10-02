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
        let res = [];
        let queue = [root];

        while (queue.length > 0) {
            let length = queue.length;
            let arr = [];
            for (let i = 0; i < length; i++) {
                let node = queue.shift();

                if (node) {
                    arr.push(node.val);
                }

                if (node && node.left) {
                    queue.push(node.left);
                }
                if (node && node.right) {
                    queue.push(node.right);
                }
            }
            if (arr.length > 0) {
                res.push(arr);
            }
        }

        console.log(res);
        return res
    }
}
