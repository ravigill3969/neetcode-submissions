
func largestRectangleArea(heights []int) int {
	arrLen := len(heights)
	minOnLeft := make([]int, arrLen)

	minOnRight := make([]int, arrLen)

	stack := []int{}

	for i := 0; i < len(heights); i++ {

		for len(stack) > 0 && heights[i] < heights[stack[len(stack)-1]] {
			stack = stack[:len(stack)-1]
		}

		if len(stack) > 0 {
			minOnLeft[i] = stack[len(stack)-1]
		} else {
			minOnLeft[i] = -1
		}

		stack = append(stack, i)

	}

	stack = []int{}

	for i := len(heights) - 1; i >= 0; i-- {

		for len(stack) > 0 && heights[i] <= heights[stack[len(stack)-1]] {
			stack = stack[:len(stack)-1]
		}

		if len(stack) > 0 {
			minOnRight[i] = stack[len(stack)-1]
		} else {
			minOnRight[i] = len(heights)
		}

		stack = append(stack, i)

	}

	var maxArea int

	for i := 0; i < len(heights); i++ {
		width := minOnRight[i] - minOnLeft[i] - 1
		area := width * heights[i]

		maxArea = max(maxArea, area)
	}

	return maxArea

}
