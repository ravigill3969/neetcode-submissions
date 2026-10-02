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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = "";

        function dfs(r) {
            if (r === null) {
                str = str + "null";
                return;
            }
            str = str + String(r.val) + ",";
            dfs(r.left);

            str = str + ",";
            dfs(r.right);
        }

        dfs(root);

        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let values = data.split(",");

        let index = 0;

        function buildTree() {
            if (values[index] === "null") {
                index++;
                return null;
            }

            let node = new TreeNode(Number(values[index]));
            index++;

            node.left = buildTree();
            node.right = buildTree();

            return node;
        }

        return buildTree();
    }
}
