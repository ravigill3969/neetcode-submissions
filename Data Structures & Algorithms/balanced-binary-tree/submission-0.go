
func isBalanced(root *TreeNode) bool {
	res := true
	var dfs func(node *TreeNode) int

	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		left := 1 + dfs(node.Left)
		right := 1 + dfs(node.Right)

		diff := left - right

		if diff < 0 {
			diff = -diff
		}

		if diff > 1 {
			res = false
			return 0
		}

		if left > right {
			return left
		}

		return right
	}

	dfs(root)

	return res

}