

func permute(nums []int) [][]int {

	res := [][]int{}

	length := len(nums)

	mapp := make(map[int]bool)

	for i := range nums {
		mapp[nums[i]] = false
	}

	var bt func([]int)

	bt = func(arr []int) {

		if len(arr) == length {
			res = append(res, arr)
		}

		for i := range nums {
			if mapp[nums[i]] {
				continue
			}

			arr = append(arr, nums[i])
			mapp[nums[i]] = true

			bt(arr)

			mapp[nums[i]] = false
			arr = arr[0 : len(arr)-1]
		}
	}

	bt([]int{})

	return res
}
