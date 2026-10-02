class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let s of strs) {
            const sorted = s.split("").sort().join("");

            if (!map.has(sorted)) {
                map.set(sorted, []);
            }

            map.get(sorted).push(s);

            console.log(map);
        }
        let res = [];
        for (let [key, values] of map) {
            res.push(values);
        }
        return res;
    }
}
