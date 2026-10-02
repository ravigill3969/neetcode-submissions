class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (n == 1) return 1
        let graph = new Map();

        for (const [u, v] of edges) {
            if (!graph.has(u)) graph.set(u, []);
            if (!graph.has(v)) graph.set(v, []);
            graph.get(u).push(v);
            graph.get(v).push(u);
        }

        let visited = new Set();
        let count = 0;

        function dfs(node) {
            if (visited.has(node)) return;

            visited.add(node);

            let neighbours = graph.get(node) || [];

            for (let n of neighbours) {
                dfs(n);
            }

            return;
        }


        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                dfs(i);
            }
        }

        console.log(count);
        return count;
    }
}
