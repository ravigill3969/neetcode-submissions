
func isSubtree(root *TreeNode, subRoot *TreeNode) bool {

	if root == nil || subRoot == nil {
		return false
	}

	var isSameTree func(p *TreeNode, q *TreeNode) bool

	isSameTree = func(p *TreeNode, q *TreeNode) bool {
		if p == nil && q == nil {
			return true
		}

		if p == nil || q == nil {
			return false
		}

		if p.Val != q.Val {
			return false
		}

		return isSameTree(p.Left, q.Left) &&
			isSameTree(p.Right, q.Right)
	}

	if root.Val == subRoot.Val {
		if isSameTree(root, subRoot) {
			isSubtree(root.Right, subRoot)
			isSubtree(root.Left, subRoot)
			return true
		}
	}

	left := isSubtree(root.Left, subRoot)
	right := isSubtree(root.Right, subRoot)

	return left || right
}