
func searchMatrix(matrix [][]int, target int) bool {

	var rowIndex int

	i, ii := 0, len(matrix)-1

	left, right := 0, len(matrix[0])-1

	for i <= ii {
		mid := (i + ii) / 2

		mRow := matrix[mid]

		if mRow[left] <= target && mRow[right] >= target {
			rowIndex = mid
			break
		} else if mRow[left] > target {
			ii = mid - 1
		} else {
			i = mid + 1
		}

	}

	rowToSearch := matrix[rowIndex]

	left = 0
	right = len(rowToSearch) - 1

	for left <= right {
		mi := left + right
		mid := mi / 2

		if rowToSearch[mid] == target {
			return true
		} else if rowToSearch[mid] > target {
			right = mid - 1
		}else{
			left = mid + 1
		}
	}

	return false
}