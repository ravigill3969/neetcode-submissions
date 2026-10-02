
func groupAnagrams(strs []string) [][]string {

	res := [][]string{}

	hashmap := make(map[string][]string)

	for _, e := range strs {
		chars := []byte(e)

			sort.Slice(chars, func(i, j int) bool {
			return chars[i] < chars[j]
		})
		key := string(chars)

		hashmap[key] = append(hashmap[key], e)
	}

	for _, v := range hashmap {
		res = append(res, v)
	}

	return res
}
