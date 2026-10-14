/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */


func reverseList(head *ListNode) *ListNode {
	var prev *ListNode

	for head != nil {
		next := head.Next
		head.Next = prev
		prev = head

		head = next
	}

	return prev
}

func reorderList(head *ListNode) {
	if head == nil || head.Next == nil {
		return
	}

	// original := head

	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	second := reverseList(slow.Next)
	slow.Next = nil

	first := head

	for second != nil {
		firstnext := first.Next
		secondnext := second.Next

		first.Next = second
		second.Next = firstnext

		second = secondnext
		first = firstnext
	}

}

