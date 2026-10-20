
func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	res := [][]int{{root.Val}}

	outerQueue := []*TreeNode{root}

	for len(outerQueue) > 0 {
		innerQueue := []*TreeNode{}

		r := []int{}
		for i := 0; i < len(outerQueue); i++ {
			curNode := outerQueue[i]

			if curNode.Left != nil {
				innerQueue = append(innerQueue, curNode.Left)
				r = append(r, curNode.Left.Val)
			}

			if curNode.Right != nil {
				innerQueue = append(innerQueue, curNode.Right)
				r = append(r, curNode.Right.Val)

			}
		}

		outerQueue = innerQueue

		if len(r) > 0 {

			res = append(res, r)
		}
	}

	return res
}
