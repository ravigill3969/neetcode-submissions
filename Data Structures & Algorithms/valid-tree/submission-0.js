class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        let graph = new Map();

        for (let [u, v] of edges) {
            if (!graph.has(u)) graph.set(u, []);
            if (!graph.has(v)) graph.set(v, []);

            graph.get(u).push(v);
            graph.get(v).push(u);
        }

        let visited = new Set();

        function dfs(parent, node) {
            if (visited.has(node)) return false;

            visited.add(node);

            let nei = graph.get(node) || [];

            for (let n of nei) {
                if (n === parent) continue;
                if (!dfs(node, n)) return false;
            }

            return true;
        }

        if (!dfs(-1, 0)) return false;

        return visited.size == n;
    }
}
