
func isValidSudoku(board [][]byte) bool {
	rows := make([]map[byte]bool, 9)
	cols := make([]map[byte]bool, 9)
	boxes := make([]map[byte]bool, 9)

	for i := 0; i < 9; i++ {
		rows[i] = make(map[byte]bool)
		cols[i] = make(map[byte]bool)
		boxes[i] = make(map[byte]bool)

	}

	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			if board[r][c] == '.' {
				continue
			}

			if rows[r][board[r][c]] {
				return false
			}

			rows[r][board[r][c]] = true

			if cols[c][board[r][c]] {
				return false
			}

			cols[c][board[r][c]] = true

			cbox := (r/3)*3 + c/3

			if boxes[cbox][board[r][c]] {
				return false
			}

			boxes[cbox][board[r][c]] = true

		}
	}

	return true

}