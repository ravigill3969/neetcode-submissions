class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 1) return 0
        let c = 0

        let set = new Set()

        let left = 0

        for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
                set.delete(s[left])
                left++
            }

            set.add(s[i])
            c = Math.max(c, i - left + 1)
        }

        return c

    }
}
