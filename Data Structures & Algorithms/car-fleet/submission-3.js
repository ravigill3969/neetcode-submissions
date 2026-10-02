class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let time = [];

        let speedPostion = [];

        for (let i = 0; i < position.length; i++) {
            speedPostion.push([position[i], speed[i]]);
        }

        speedPostion.sort((a, b) => b[0] - a[0]);

        while (speedPostion.length > 0) {
            let [pos, s] = speedPostion.shift();

            let t = (target - pos) / s;
            time.push(t);
        }

        let last = 0;
        let count = 0;

        for (let i = 0; i < time.length; i++) {
            if (last < time[i]) {
                count++;
                last = time[i];
            }
        }

        console.log(count);
        return count;
    }
}
