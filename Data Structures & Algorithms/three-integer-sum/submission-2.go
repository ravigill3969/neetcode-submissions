
func threeSum(nums []int) [][]int {
	res := [][]int{}

	sort.Ints(nums)

	for i := 0; i < len(nums)-2; i++ {
		if i > 0 && nums[i-1] == nums[i] {
			continue
		}

		j := i + 1
		k := len(nums) - 1

		for j < k {
			sum := nums[i] + nums[j] + nums[k]

			if sum == 0 {
				res = append(res, []int{nums[i], nums[j], nums[k]})

				j++
				k--

				for j < k && nums[j] == nums[j-1] {
					j++
				}

				for j < k && nums[k] == nums[k+1] {
					k--
				}
			} else if sum > 0 {
				k--
			} else {
				j++
			}
		}
	}

	return res
}