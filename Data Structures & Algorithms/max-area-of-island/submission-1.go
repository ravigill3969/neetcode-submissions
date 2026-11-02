
func maxAreaOfIsland(grid [][]int) int {
	res := 0
	var dfs func(int, int) int

	dfs = func(i, j int) int {

		if i < 0 || j < 0 || i >= len(grid) || j >= len(grid[0]) || grid[i][j] != 1 {
			return 0
		}

		grid[i][j] = '#'

		count := 1

		count += dfs(i+1, j)
		count += dfs(i-1, j)
		count += dfs(i, j+1)
		count += dfs(i, j-1)

		return count
	}

	for i := range grid {
		for j := range grid[0] {
			if grid[i][j] == 1 {
				res = max(res, dfs(i, j))
			}
		}
	}

	return res
}