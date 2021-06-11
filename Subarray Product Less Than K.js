/* Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let res = 0,
        left = 0,
        right = 0,
        product = 1;
    while (right < nums.length) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        res += right - left + 1;
        right++;
    }
    return res;
};
