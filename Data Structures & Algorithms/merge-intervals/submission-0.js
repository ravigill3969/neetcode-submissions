class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return 0;
        let res = [];

        intervals.sort((a, b) => a[0] - b[0]);

        let i = 1;
        let push = intervals[0];

        while (i < intervals.length) {
            let [p1, p2] = push;
            let [i1, i2] = intervals[i];

            if (p2 >= i1) {
                push[0] = Math.min(p1, i1);
                push[1] = Math.max(p2, i2);
            } else {
                res.push(push);
                push = intervals[i];
            }

            i++;
        }
        res.push(push);

        return res;
    }
}
