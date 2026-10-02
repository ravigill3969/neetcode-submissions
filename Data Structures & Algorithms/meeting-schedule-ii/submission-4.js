// class Interval {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//     }
// }

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = [];
        let end = [];


        for (let i = 0; i < intervals.length; i++) {
            start.push(intervals[i].start);
            end.push(intervals[i].end);
        }

        end.sort((a, b) => a - b);
        start.sort((a, b) => a - b);




        let count = 0;
        let res = 0;

        let i = 0;
        let j = 0;

        while (i < start.length && j < end.length) {
            if (start[i] < end[j]) {
                i++;
                count++;
            } else {
                j++;
                count--;
            }

            res = Math.max(res, count);
        }

        return res;
    }
}


