class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let t = [];

        for (let i = 0; i < position.length; i++) {
            console.log(i);
            t.push([position[i], speed[i]]);
        }

        t.sort((a, b) => b[0] - a[0]);

        let stack = [];

        for (let [p, s] of t) {
            let ttf = (target - p) / s;

            stack.push(ttf);

            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) {
                stack.pop();
            }
        }

        console.log(stack.length);
        return stack.length;
    }
}
