class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let r = board.length;
        let c = board[0].length;

        function bt(i, j, pointer) {
            if (i < 0 || i >= r || j < 0 || j >= c) {
                return false;
            }

            if (board[i][j] !== word[pointer]) return false;

            if (pointer == word.length - 1) return true;

            let temp = board[i][j];
            board[i][j] = "#";

            let found =
                bt(i + 1, j, pointer + 1) ||
                bt(i - 1, j, pointer + 1) ||
                bt(i, j + 1, pointer + 1) ||
                bt(i, j - 1, pointer + 1);

            board[i][j] = temp;

            return found;
        }

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (board[i][j] === word[0] && bt(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
