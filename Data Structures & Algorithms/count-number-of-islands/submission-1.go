
func numIslands(grid [][]byte) int {
	res := 0

	var bt func(int, int)

	bt = func(i, j int) {
		if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) || grid[i][j] != '1' {
			return
		}

		grid[i][j] = '#'

		bt(i-1, j)
		bt(i+1, j)
		bt(i, j+1)
		bt(i, j-1)

	}

	for i := range grid {
		for j := range grid[0] {
			if grid[i][j] == '1' {
				res++
				bt(i, j)
			}
		}
	}

	return res
}