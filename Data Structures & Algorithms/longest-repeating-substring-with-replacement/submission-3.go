
func characterReplacement(s string, k int) int {
	var res int

	freqArr := [26]int{}

	maxFreq := 0

	j := 0
	for i := 0; i < len(s); i++ {
		freqArr[s[i]-'A']++

		maxFreq = max(maxFreq, freqArr[s[i]-'A'])

		for i-j+1-maxFreq > k {
			freqArr[s[j] - 'A']--
			j++
		}

		res = max(res , i - j + 1)
	}

	return res
}