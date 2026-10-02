class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let r = grid.length;
        let c = grid[0].length;
        let res = 0;

        console.log(r, c);

        function bt(i, j) {
            if (i < 0 || i > r - 1 || j < 0 || j > c - 1 || grid[i][j] === "0") return;

            grid[i][j] = "0";

            bt(i + 1, j);
            bt(i - 1, j);
            bt(i, j + 1);
            bt(i, j - 1);
        }

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == "1") {
                    res++;
                    bt(i, j);
                }
            }
        }

        console.log(res);
        return res;
    }
}
