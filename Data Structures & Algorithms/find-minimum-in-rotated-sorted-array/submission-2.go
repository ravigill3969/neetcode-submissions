
func findMin(nums []int) int {
	left := 0
	right := len(nums) - 1

	mini := math.MaxInt

	for left <= right {
		mid := (right + left) / 2

		if nums[mid] > nums[len(nums)-1] {
			mini = min(nums[mid], mini)
			left = mid + 1
		} else {
			mini = min(nums[mid], mini)

			right = mid - 1

		}

	}

	return mini
}
