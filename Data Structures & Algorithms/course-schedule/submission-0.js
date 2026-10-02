class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph = new Map();

        for (let [u, v] of prerequisites) {
            if (!graph.has(u)) graph.set(u, []);
            graph.get(u).push(v);
        }

        let visited = new Set();
        let visiting = new Set();

        function dfs(node) {
            if (visiting.has(node)) return false;
            if (visited.has(node)) return true;

            visiting.add(node);

            let nei = graph.get(node) || [];

            for (let n of nei) {
                if (!dfs(n)) return false;
            }
            visiting.delete(node);
            visited.add(node);

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
