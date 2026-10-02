class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let res = 0;
        let r = grid.length;
        let c = grid[0].length;

        function bt(i, j, count) {
            if (i < 0 || i >= r || j < 0 || j >= c || grid[i][j] === 0) {
                return count;
            }

            grid[i][j] = 0;
            count = count + 1;

            // Accumulate area from recursive calls
            count = bt(i + 1, j, count);
            count = bt(i - 1, j, count);
            count = bt(i, j + 1, count);
            count = bt(i, j - 1, count);

            return count;
        }

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 1) {
                    let area = bt(i, j, 0);
                    res = Math.max(area, res);
                }
            }
        }
        console.log(res);

        return res;
    }
}
