class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map
        let res = []

        for (let i = 0; i < strs.length; i++) {
            let s = strs[i].split('').sort().join()

            if (!map.has(s)) {
                map.set(s, [])
            }

            map.get(s).push(strs[i])

            console.log(map)
        }

        for (let [key, value] of map) {
            res.push(value)
        }

        return res

    }
}
