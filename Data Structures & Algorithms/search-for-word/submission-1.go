
func exist(board [][]byte, word string) bool {

	var bt func(int, int, int) bool

	bt = func(i, j, idx int) bool {

		if idx == len(word) {
			return true
		}
	
		if i < 0 || i >= len(board) || j < 0 || j >= len(board[0]) || board[i][j] != word[idx] {
			return false
		}

		if board[i][j] == '#' {
			return false
		}
		

		val := board[i][j]
		board[i][j] = '#'
		//go up
		up := bt(i-1, j, idx+1)

		down := bt(i+1, j, idx+1)

		right := bt(i, j+1, idx+1)

		left := bt(i, j-1, idx+1)

		board[i][j] = val

		return up || down || right || left

	}

	for i := range board {
		for j := range board[0] {
			if board[i][j] == word[0] {
				if bt(i, j, 0) {
					return true
				}

			}
		}
	}

	return false
}