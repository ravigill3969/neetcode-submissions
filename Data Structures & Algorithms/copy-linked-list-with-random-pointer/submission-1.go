
func copyRandomList(head *Node) *Node {
	current := head
	dummy := &Node{}
	tail := dummy

	oldToNewMap := make(map[*Node]*Node)

	for current != nil {
		newNode := &Node{
			Val: current.Val,
		}

		oldToNewMap[current] = newNode

		tail.Next = newNode
		tail = tail.Next

		current = current.Next
	}

	newListHead := dummy.Next
	current = head

	for newListHead != nil {
		random := current.Random
		val := oldToNewMap[random]

		newListHead.Random = val

		newListHead = newListHead.Next
		current = current.Next
	}

	return dummy.Next
}