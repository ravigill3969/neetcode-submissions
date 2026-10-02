class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0
        if (s.length === 1) return 1

        let max = 0

        let set = new Set()
        let l = 0
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l])
                l++
            }

            if (!set.has(s[r])) {
                set.add(s[r])
            }



            max = Math.max(r - l + 1, max)
        }

        console.log(max)

        return max
    }
}
