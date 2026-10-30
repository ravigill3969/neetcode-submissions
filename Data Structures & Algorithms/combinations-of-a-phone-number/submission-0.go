
func letterCombinations(digits string) []string {

	if len(digits) == 0 {
		return []string{}
	}

	phone := map[byte]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	res := []string{}

	var bt func(int, int, []string)

	// i is for going over digits and j will then loop over map[i]
	// and when we reach len(s) == len(digits) then we add it to res

	bt = func(i, j int, s []string) {
		if len(s) == len(digits) {
			res = append(res, strings.Join(s, ""))
			return
		}

		for i := i; i < len(digits); i++ {
			digit := (digits[i])

			word := phone[digit]

			for j := 0; j < len(word); j++ {
				bt(i+1, j, append(s, string(word[j])))
			}
		}

	}

	bt(0, 0, []string{})


	return res
}