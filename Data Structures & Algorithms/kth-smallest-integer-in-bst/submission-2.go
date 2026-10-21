/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */


func kthSmallest(root *TreeNode, k int) int {

	que := []int{}

	var dfs func(*TreeNode, int) int

	dfs = func(root *TreeNode, i int) int {

		if root == nil {
			return 1
		}

		dfs(root.Left, i)
		que = append(que, root.Val)
		dfs(root.Right, i)

		if len(que) == k {
			return 0
		}

		return 0
	}

	dfs(root, 0)

	return que[k - 1]
}
