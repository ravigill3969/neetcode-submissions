
type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var res string
	fmt.Println(strs)
	for i := 0; i < len(strs); i++ {
		len_str := len(strs[i])
		s := strconv.Itoa(len_str) + "#" + strs[i]

		res = res + s
	}

	return res

}
func (s *Solution) Decode(encoded string) []string {
	var res []string

	i := 0

	for i < len(encoded) {
		j := i

		for j < len(encoded) && string(encoded[j]) != "#" {
			j++
		}

		num, _ := strconv.Atoi(encoded[i:j])

		i = j + 1

		str := string(encoded[i : i+num])

		res = append(res, str)

		i = i + num
	}

	return res
}
