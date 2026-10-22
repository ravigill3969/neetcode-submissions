
func subsets(nums []int) [][]int {
	res := [][]int{}

	var bc func(int, []int)

	bc = func(idx int, arr []int) {
		res = append(res, append([]int{}, arr...))
		
		for i := idx; i < len(nums); i++ {
			arr = append(arr, nums[i])

			bc(i + 1 , arr)

			arr = arr[0 : len(arr) -1]
		}

	}

	bc(0 , []int{})

	return res
}
