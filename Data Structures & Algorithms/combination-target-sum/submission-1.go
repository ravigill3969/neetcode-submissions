
func combinationSum(nums []int, target int) [][]int {
	res := [][]int{}

	var backtrack func(start int, current []int, sum int)

	backtrack = func(start int, current []int, sum int) {
		if sum > target {
			return
		}

		if sum == target {
			res = append(res, append([]int{}, current...))
			return
		}

		for i := start; i < len(nums); i++ {
			sum = sum + nums[i]

			current = append(current, nums[i])

			backtrack(i, current , sum)

			sum = sum - nums[i]
			current = current[:len(current) - 1]

		}

	}

	backtrack(0, []int{}, 0)

	return res
}
