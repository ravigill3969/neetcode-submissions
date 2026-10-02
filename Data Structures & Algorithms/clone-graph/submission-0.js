/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node;
        if (!node.neighbors) return node;

        let queue = [node];
        let visited = new Map();

        visited.set(node, new Node(node.val));

        while (queue.length > 0) {
            let node = queue.shift();

            for (const neighbour of node.neighbors) {
                if (!visited.has(neighbour)) {
                    visited.set(neighbour, new Node(neighbour.val));
                    queue.push(neighbour);
                }

                visited.get(node).neighbors.push(visited.get(neighbour));
            }
        }

        return visited.get(node);
    }
}
