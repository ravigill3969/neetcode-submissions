class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        let map2 = new Map();

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1);
            } else {
                map.set(s[i], 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (map2.has(t[i])) {
                map2.set(t[i], map2.get(t[i]) + 1);
            } else {
                map2.set(t[i], 1);
            }
        }


        if (map.size !== map2.size) {
            console.log(false);
            return false;
        }

        for (let [key, value] of map) {
            if (!map2.has(key)) return false

            if (value !== map2.get(key)) {
                return false
            }
        }

        console.log(true)

        return true
    }
}
