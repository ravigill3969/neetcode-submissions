class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
      const set = new Set(nums);
      let longest = 0;
      let count = 0;

      for (let i = 0; i < nums.length; i++) {
          let c = nums[i];

          if (!set.has(c - 1)) {
              count = 1;
              while (set.has(c + 1)) {
                  count++;
                  c++;
              }

              longest = Math.max(longest, count);
          }
      }

      console.log(longest);
      return longest;
  }
}
