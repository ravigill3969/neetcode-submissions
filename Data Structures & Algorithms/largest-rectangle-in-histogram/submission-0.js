class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max_area = 0;

        for (let i = 0; i <= heights.length; i++) {
            let h = 0;

            if (i != heights.length) {
                h = heights[i];
            }

            while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
                let ele = heights[stack.pop()];

                let area = 0;

                if (stack.length === 0) {
                    area = ele * i;
                } else {
                    area = ele * (i - stack[stack.length - 1] - 1);
                }

                max_area = Math.max(area, max_area);
            }

            stack.push(i);
        }
        console.log(max_area)
        return max_area;
    }
}
