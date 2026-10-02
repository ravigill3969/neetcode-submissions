
func twoSum(numbers []int, target int) []int {
	i := 0
	j := len(numbers) - 1

	res := []int{}

	for i < j {
		sum := numbers[i] + numbers[j]

		if sum > target {
			j--
		}

		if sum < target {
			i++
		}

		if sum == target {
			return []int{i + 1, j + 1}
		}
	}

	return res
}