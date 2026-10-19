
func diameterOfBinaryTree(root *TreeNode) int {
	if root == nil {
		return 0
	}

	maxi := 0

	var dfs func(node *TreeNode) int

	dfs = func(node *TreeNode) int {
		if node == nil {
			return -1
		}

		left := 1 + dfs(node.Left)
		right := 1 + dfs(node.Right)

		sum := left + right
		maxi = max(sum, maxi)

		if left > right {
			return left
		}

		return right

	}

	dfs(root)

	return maxi

}