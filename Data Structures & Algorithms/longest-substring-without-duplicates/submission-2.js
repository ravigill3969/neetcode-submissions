class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let set = new Set();

        let max = 0;

        for (right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);
            max = Math.max(right - left + 1, max);
        }

        return max;
    }
}
