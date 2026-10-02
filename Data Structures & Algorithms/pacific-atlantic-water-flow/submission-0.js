class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const pac = new Set();
        const atl = new Set();

        console.log(rows);
        console.log(cols);

        function dfs(r, c, visit, prevHeight) {
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols ||
                heights[r][c] < prevHeight ||
                visit.has(`${r}-${c}`)
            ) {
                return;
            }

            visit.add(`${r}-${c}`);

            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pac, heights[0][c]);
        }

        // Bottom row (right to left)
        for (let c = cols - 1; c >= 0; c--) {
            dfs(rows - 1, c, atl, heights[rows - 1][c]);
        }

        // Left column (top to bottom)
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pac, heights[r][0]);
        }

        // Right column (bottom to top)
        for (let r = rows - 1; r >= 0; r--) {
            dfs(r, cols - 1, atl, heights[r][cols - 1]);
        }

        const res = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r}-${c}`;
                if (pac.has(key) && atl.has(key)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
