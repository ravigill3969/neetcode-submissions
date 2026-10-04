
func maxSlidingWindow(nums []int, k int) []int {
	var res []int

	var queue []int

	for i := 0; i < k; i++ {
		for len(queue) > 0 && nums[i] >= nums[queue[len(queue)-1]] {
			queue = queue[:len(queue)-1]
		}

		queue = append(queue, i)
	}

	res = append(res, nums[queue[0]])

	left := 0

	for right := k; right < len(nums); right++ {

		if len(queue) > 0 && queue[0] <= left {
			queue = queue[1:]
		}

		for len(queue) > 0 && nums[right] >= nums[queue[len(queue)-1]] {
			queue = queue[:len(queue)-1]
		}
		queue = append(queue, right)

		res = append(res, nums[queue[0]])

		left++
	}

	return res
}