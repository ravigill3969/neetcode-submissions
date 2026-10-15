/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{}
	res := dummy
	isCarry := false
	for l1 != nil || l2 != nil {

		sum := 0

		if isCarry {
			sum = sum + 1
			fmt.Println(isCarry)
			isCarry = false
		}

		if l1 == nil {
			sum = sum + l2.Val

		} else if l2 == nil {
			sum = sum + l1.Val
		} else {
			sum = l1.Val + l2.Val + sum
		}

		if sum > 9 {
			sum = sum % 10

			isCarry = true
		}

		newNode := &ListNode{
			Val: sum,
		}

		dummy.Next = newNode
		dummy = dummy.Next

	if l1 != nil {
    	l1 = l1.Next
	}

	if l2 != nil {
    	l2 = l2.Next
	}	

	}

	if isCarry{
		dummy.Next = &ListNode{
			Val: 1,
		}
	}

	return res.Next
}
