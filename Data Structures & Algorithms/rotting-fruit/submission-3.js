class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const r = grid.length;
        const c = grid[0].length;
        let queue = [];
        let fresh = 0;

        // Step 1: Push all rotten oranges into the queue and count fresh ones
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                } else if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }

        let minutes = 0;

        // Step 2: Start BFS
        while (queue.length > 0 && fresh > 0) {
            let len = queue.length;

            for (let k = 0; k < len; k++) {
                let [i, j] = queue.shift();

                // DOWN
                if (i + 1 < r && grid[i + 1][j] === 1) {
                    grid[i + 1][j] = 2;
                    queue.push([i + 1, j]);
                    fresh--;
                }

                // UP
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    grid[i - 1][j] = 2;
                    queue.push([i - 1, j]);
                    fresh--;
                }

                // RIGHT
                if (j + 1 < c && grid[i][j + 1] === 1) {
                    grid[i][j + 1] = 2;
                    queue.push([i, j + 1]);
                    fresh--;
                }

                // LEFT
                if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    grid[i][j - 1] = 2;
                    queue.push([i, j - 1]);
                    fresh--;
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}