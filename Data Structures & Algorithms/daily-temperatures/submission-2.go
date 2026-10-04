
func dailyTemperatures(temperatures []int) []int {
	var stack []int

	res := []int{}

	for range temperatures {
		res = append(res, 0)
	}

	for i := 0; i < len(temperatures); i++ {
		curTemp := temperatures[i]
		for len(stack) > 0 && curTemp > temperatures[stack[len(stack)-1]] {

			pop := stack[len(stack)-1]
			stack = stack[:len(stack)-1] //just ignore

			res[pop] = i - pop

		}

		stack = append(stack, i)
	}

	return res
}