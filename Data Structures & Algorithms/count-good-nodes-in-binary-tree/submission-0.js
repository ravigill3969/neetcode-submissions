class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;

        let stack = [[root, root.val]];
        let res = 0;

        while (stack.length > 0) {
            let [node, maxSoFar] = stack.pop();

            if (node.val >= maxSoFar) {
                res++;
            }

            if (node.left) stack.push([node.left, Math.max(maxSoFar, node.val)]);
            if (node.right) stack.push([node.right, Math.max(maxSoFar, node.val)]);
        }

        return res;
    }
}
