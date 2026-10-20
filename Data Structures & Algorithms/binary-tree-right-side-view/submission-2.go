
func rightSideView(root *TreeNode) []int {

	if root == nil{
		return []int{}
	}

	res := []int{root.Val}


	outerQueue := []*TreeNode{root}

	for len(outerQueue) > 0 {
		innerQueue := []*TreeNode{}

		for i := 0; i < len(outerQueue); i++ {

			curNode := outerQueue[i]

			if curNode.Left != nil {
				innerQueue = append(innerQueue, curNode.Left)
			}

			if curNode.Right != nil {
				innerQueue = append(innerQueue, curNode.Right)
			}
		}

		if len(innerQueue) > 0 {
			res = append(res, innerQueue[len(innerQueue)-1].Val)
		}

		outerQueue = innerQueue
	}

	return res
}
