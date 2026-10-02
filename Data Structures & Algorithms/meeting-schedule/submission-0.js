/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        let i = 0;

        while (i < intervals.length - 1) {
            if (intervals[i].end > intervals[i + 1].start) {
                return false;
            }
            i++
        }

        return true;
    }
}
