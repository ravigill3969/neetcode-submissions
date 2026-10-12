
func VerifySpeed(piles []int, h int, speed int) bool {
	count := 0

	for _, p := range piles {
		quo := (float64(p) / float64(speed))

		count = count + int(math.Ceil(quo))
	}

	if count <= h {
		return true
	}

	return false
}

func minEatingSpeed(piles []int, h int) int {
	mini := math.MaxInt

	maxi := 0

	for _, i := range piles {
		maxi = max(i, maxi)
	}

	left := 1
	right := maxi
	for left <= right {
		mid := (right + left) / 2

		if VerifySpeed(piles, h, mid) {
			mini = min(mini, mid)
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return mini
}
