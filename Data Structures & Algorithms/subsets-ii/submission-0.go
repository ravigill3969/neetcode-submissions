
func subsetsWithDup(nums []int) [][]int {
	res := [][]int{}

	sort.Ints(nums)

	var bt func([]int, int)

	bt = func(arr []int, idx int) {

		res = append(res, append([]int{}, arr...))
		if idx == len(nums) {
			return
		}

		for i := idx; i < len(nums); i++ {
			if i > idx && nums[i] == nums[i-1] {
				continue
			}

			arr = append(arr, nums[i])

			bt(arr, i+1)

			arr = arr[:len(arr) - 1]
		}

	}

	bt([]int{}, 0)

	return res
}