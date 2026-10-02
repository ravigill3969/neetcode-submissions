class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        let map = new Map();

        for (let word of strs) {
            let sortedWord = word.split("").sort().join();

            if (!map.has(sortedWord)) {
                map.set(sortedWord, []);
            }

            map.get(sortedWord).push(word);
        }

        for (let [k, v] of map) {
            res.push(v);
        }

        return res
    }
}
