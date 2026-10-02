class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set());
        let box = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === ".") continue;

                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (
                    rows[i].has(board[i][j]) ||
                    cols[j].has(board[i][j]) ||
                    box[boxIndex].has(board[i][j])
                ) {
                    return false;
                }

                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                box[boxIndex].add(board[i][j]);
            }
        }

        return true
    }
}
