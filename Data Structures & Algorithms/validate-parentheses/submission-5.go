
func isValid(s string) bool {
	bmap := map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}
	stack := []string{}

	for i := 0; i < len(s); i++ {
		cur_str := string(s[i])

		if cur_str == "(" || cur_str == "{" || cur_str == "[" {
			stack = append(stack, cur_str)
		} else {

			if len(stack) == 0 {
				return false
			}

			str := bmap[cur_str]

			if str != stack[len(stack)-1] {
				return false
			}

			stack = stack[0 : len(stack)-1]
		}


	}

		return len(stack) == 0

}