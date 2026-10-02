class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(i, j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== "O") return;

            board[i][j] = "T";

            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        } // 1. Top row (left to right)
        for (let c = 0; c < cols; c++) {
            if (board[0][c] === "O") dfs(0, c);
        }

        // 2. Bottom row (left to right)
        for (let c = 0; c < cols; c++) {
            if (board[rows - 1][c] === "O") dfs(rows - 1, c);
        }

        // 3. Left column (top to bottom)
        for (let r = 0; r < rows; r++) {
            if (board[r][0] === "O") dfs(r, 0);
        }

        // 4. Right column (top to bottom)
        for (let r = 0; r < rows; r++) {
            if (board[r][cols - 1] === "O") dfs(r, cols - 1);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] == "T") {
                    board[i][j] = "O";
                } else {
                    board[i][j] = "X";
                }
            }
        }
        console.log(board);

        return board;
    }
}