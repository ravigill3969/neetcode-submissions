class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Array(board.length).fill().map(() => new Set())
        let colSet = new Array(board.length).fill().map(() => new Set())
        let boxSet = new Array(board.length).fill().map(() => new Set())

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {

                if (board[i][j] === ".") continue

                let num = board[i][j]

                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rowSet[i].has(num) || colSet[j].has(num) || boxSet[boxIndex].has(num)) {

                    console.log(false)
                    return false
                }

                rowSet[i].add(num)
                colSet[j].add(num)
                boxSet[boxIndex].add(num)


            }

        }
        console.log(true)
        return true

    }
}
