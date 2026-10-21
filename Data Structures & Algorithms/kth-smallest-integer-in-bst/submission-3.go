
func kthSmallest(root *TreeNode, k int) int {
	count := 0


	var dfs func(*TreeNode, int) (bool, int)

	dfs = func(root *TreeNode , k int) (bool, int) {

		if root == nil {
			return false, -1
		}

		found, result := dfs(root.Left , k)

		if found{
			return found,result
		}
		// que = append(que, root.Val)
		count++

		if count == k {
			return true, root.Val
		}
		found, result = dfs(root.Right, k)

		return found, result
	}

	_, res := dfs(root, k)

	return res
}
