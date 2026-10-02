
func maxArea(heights []int) int {
	var maxarea int
	i := 0
	j := len(heights) -1

	for i < j {
		minheight := min(heights[i], heights[j])
		width := j - i

		maxarea = max(maxarea, minheight*width)

		if heights[i] <= heights[j] {
			i++
		} else {
			j--
		}

	}

	return maxarea
}