
func evalRPN(tokens []string) int {
	stack := []int{}

	for i := 0; i < len(tokens); i++ {
		if (tokens[i]) != "+" && (tokens[i]) != "-" && (tokens[i]) != "*" && (tokens[i]) != "/" {
			num, _ := strconv.Atoi(tokens[i])
			stack = append(stack, num)
		} else {
			switch tokens[i] {
			case "+":
				numAfterSign := stack[len(stack)-1]
				num := stack[len(stack)-2]

				sum := num + numAfterSign

				stack = stack[:len(stack)-2]
				stack = append(stack, sum)
			case "-":
				numAfterSign := stack[len(stack)-1]
				num := stack[len(stack)-2]

				sum := num - numAfterSign

				stack = stack[:len(stack)-2]
				stack = append(stack, sum)

			case "*":
				numAfterSign := stack[len(stack)-1]
				num := stack[len(stack)-2]

				product := num * numAfterSign

				stack = stack[:len(stack)-2]
				stack = append(stack, product)
			case "/":
				numAfterSign := stack[len(stack)-1]
				num := stack[len(stack)-2]

				quo := num / numAfterSign

				stack = stack[:len(stack)-2]
				stack = append(stack, quo)
			}
		}
	}

	return stack[0]

}