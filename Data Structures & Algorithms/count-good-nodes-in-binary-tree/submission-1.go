
func goodNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}
	res := 0

	var dfs func(*TreeNode, int)

	dfs = func(root *TreeNode, maxi int) {
		if root == nil {
			return
		}

		if root.Val >= maxi {
			res++
			maxi = root.Val
		}

		dfs(root.Right, maxi)
		dfs(root.Left, maxi)

	}

	dfs(root, root.Val)

	return res
}
