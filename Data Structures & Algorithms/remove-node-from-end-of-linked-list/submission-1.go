func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Next: head}
	current := head

	length := 0

	for current != nil {
		length++
		current = current.Next
	}

	nodeToRemove := length - n

	current = dummy

	for i := 0; i < nodeToRemove; i++ {
		current = current.Next
	}

	current.Next = current.Next.Next

	return dummy.Next
}