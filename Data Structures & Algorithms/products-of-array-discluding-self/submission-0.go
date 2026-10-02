
func productExceptSelf(nums []int) []int {
	lenngth := len(nums)

	lrprefix := make([]int, lenngth)

	lrprefix[0] = 1

	for i := 1; i < lenngth; i++ {
		lrprefix[i] = lrprefix[i-1] * nums[i-1]
	}

	rlprefix := make([]int, lenngth)

	rlprefix[lenngth-1] = 1

	for i := lenngth - 2; i >= 0; i-- {
		rlprefix[i] = rlprefix[i+1] * nums[i+1]
	}

	
	res := make([]int, lenngth)

	for i := 0; i < lenngth; i++ {
		res[i] = lrprefix[i] * rlprefix[i]
	}

	return res
}
