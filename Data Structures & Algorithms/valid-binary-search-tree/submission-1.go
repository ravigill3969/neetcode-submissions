/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isValidBST(root *TreeNode) bool {
    var dfs func(*TreeNode , int, int)bool

	dfs = func(node *TreeNode, maxAllowed, minAllowed int)bool{
		if node == nil{
			return true
		}

		if node.Val >= maxAllowed || node.Val <= minAllowed{
			return false
		}

		return dfs(node.Right, maxAllowed , node.Val) && dfs(node.Left, node.Val ,minAllowed) 
	}

	return dfs(root, math.MaxInt, math.MinInt)
}
